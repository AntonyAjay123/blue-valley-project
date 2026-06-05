import { Button } from "react-bootstrap";
import './CustomButton.scss'

type ButtonProps = {
  text: string;
  action: () => void;
  style?:{}
};

export const CustomButton = ({text,action,style}:ButtonProps)=>{
    return <Button className="custom-button" onClick={action} style={style}>{text}</Button>
}