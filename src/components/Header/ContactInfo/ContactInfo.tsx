import { Card } from "react-bootstrap";
import type { InfoItemProps } from "../../../types";
import Icon from "@mui/material/Icon";
import './ContactInfo.scss'

export const ContactInfo = ({icon,label,info}:InfoItemProps) =>{
    return (
        <Card className="info-card">
            <div className="info-icon">
                {icon}
            </div>
            <Card.Body className="info-body">
        <Card.Title className="card-details card-label">{label}</Card.Title>
        <Card.Text className="card-details card-info">{info}
        </Card.Text>
      </Card.Body>
        </Card>
    )
}