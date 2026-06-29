import {Resend} from "resend"



export default async function enquiry(req,res){
    try{
        const body = await new Promise((resolve)=>{
            let data = ""
            req.on("data",chunk=>(data+=chunk));
            req.on("end",()=>resolve(JSON.parse(data)))
        })
        const {name,email,mobile,message} = body;
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
            from:"enquiry@akshayaproperties.co",
            to: "akshayaproperties15@gmail.com",
            subject:"New Enquiry",
            html:`<p>${name}</p><p>${email}</p><p>${mobile}</p><p>${message}</p>`
        })
        return res.status(200).json({success:true})
    }
    catch(err){
        return res.status(500).json({ error: "Failed" });
    }
}