import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { hideToast } from "../../store/toastSlice";
import './ToastMessage.scss'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const ToastMessage = ()=>{
     const dispatch = useDispatch();
  const toast = useSelector((state: RootState) => state.toast);
    return (
    <ToastContainer position="top-end" className="p-3" style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 99999,      
      }}>
      <Toast
        show={toast.show}
        bg={toast.variant}
        autohide
        delay={3000}
        onClose={() => dispatch(hideToast())}
      >
        <Toast.Body className="text-white">
          <InfoOutlinedIcon/> <span>{toast.message}</span>
        </Toast.Body>
      </Toast>
    </ToastContainer>)
}