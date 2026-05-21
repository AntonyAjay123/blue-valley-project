import { Button } from "react-bootstrap";
import './CustomButton.scss'

type ButtonProps = {
  text: string;
  action: () => void;
};

export const CustomButton = ({text,action}:ButtonProps)=>{
    return <Button className="custom-button" onClick={action}>{text}</Button>
}