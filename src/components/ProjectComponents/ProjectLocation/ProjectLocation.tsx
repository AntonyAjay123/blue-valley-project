import { Container, Modal } from "react-bootstrap"
import type { RootState } from "../../../store/store"
import { useSelector } from "react-redux"
import { useState } from "react"
type props = {
    image:any
}
export const ProjectLocation = ({image}:props)=>{
    const curProject = useSelector((state:RootState)=>state.page.curProject)
    const [showModal, setShowModal] = useState(false);
    return (<Container className="project-section-container">
        <h1 className="project-section-title">
            Location
        </h1>
        <div className="project-about-text">
        <p>
            
        </p>
        </div>
       {curProject=='northtown'?<>
          <img
            className="project-location"
            src={image}
            alt="Location Map"
            onClick={() => setShowModal(true)}
          />

          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            centered
            size="xl"
            className="layout-modal"
          >
            <Modal.Body>
              <img
                className="layout-full-image"
                src={image}
                alt="Location Map"
              />
            </Modal.Body>
          </Modal>
        </> :
       <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.2730122726643!2d77.67486486711302!3d13.27087206512285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e230b0dd7319%3A0x1e7d503f7b902b4d!2s7MCG%2BCW%2C%20Anighatta%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2suk!4v1779980791313!5m2!1sen!2suk"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
        </div>}
    </Container>)
}