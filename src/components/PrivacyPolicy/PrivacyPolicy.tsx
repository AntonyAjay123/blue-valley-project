import { Container } from 'react-bootstrap'
import PrivacyImage from '../../assets/privacy-policy.jpg'
import { PageBanner } from '../PageBanner/PageBanner'
import './PrivacyPolicy.scss'
export const PrivacyPolicy = ()=>{
    return(<>
    <div>
    <PageBanner title="Privacy Policy" image={PrivacyImage} currentPage="Privacy Policy"/>
    {/* <ProjectSection/> */}
    </div>
    <Container className='privacy-content'>
        <div className="privacy-policy-container">

  <b className="policy-main-title">
    <h3 className="projects-header">Akshya Properties Privacy Policy</h3>
    <hr className='line-1'/>
    <hr className='line-2'/>
    <hr className='line-3'/>
  </b>

  <p className="policy-text">
    Akshaya Properties LLP has created this privacy statement in order to
    demonstrate our firm commitment to privacy. It covers the manner in which
    Akshaya Properties collects, uses, and maintains information collected from
    users of its website.
  </p>

  <p className="policy-text">
    We are committed to ensuring that your privacy is protected. Should we ask
    you to provide certain information by which you can be identified when using
    this website, then you can be assured that it will only be used in
    accordance with this privacy statement. We may change this policy from time
    to time by updating this page. You should check this page from time to time
    to ensure that you are happy with any changes.
  </p>

  <b className="policy-section-title">
    What Type of Information Does Akshaya Properties Collect?
  </b>

  <p className="policy-text">
    Akshaya Properties may collect the following information:
  </p>

  <ul className="policy-list">
    <li>Name and Organization Information</li>
    <li>Contact information, including an email address</li>
    <li>Mobile phone number</li>
    <li>Other information relevant to customer surveys and/or offers</li>
  </ul>

  <b className="policy-section-title">
    What Does Akshaya Properties Do With The Information?
  </b>

  <p className="policy-text">
    Akshaya Properties gathers this information to understand your needs and
    provide you with a better service, and in particular for the following
    reasons:
  </p>

  <p className="policy-text">
    Akshaya Properties may use the information to administer, improve, and
    develop products and services. In particular, Akshaya Properties may use the
    information to contact you for your views on services and to notify you
    occasionally about important changes or developments to the website or
    services.
  </p>

  <p className="policy-text">
    Akshaya Properties may periodically send promotional emails about new
    products, special offers, or other information which you may find
    interesting using the email address you have provided.
  </p>

  <p className="policy-text">
    From time to time, Akshaya Properties may also use your information to
    contact you for market research purposes. Akshaya Properties may contact you
    by email, phone, or mail. Akshaya Properties may use the information to
    customize the website according to your interests.
  </p>

  <b className="policy-section-title">
    Security
  </b>

  <p className="policy-text">
    Akshaya Properties is committed to ensuring that your information is secure.
    In order to prevent unauthorized access or disclosure, Akshaya Properties
    has put in place suitable physical, electronic, and managerial procedures to
    safeguard and secure the information that is collected online.
  </p>

  <b className="policy-section-title">
    How Does Akshaya Properties Use Cookies?
  </b>

  <p className="policy-text">
    A cookie is a small file that asks permission to be placed on your
    computer's hard drive. Once you agree, the file is added, and the cookie
    helps analyze web traffic or lets you know when you visit a particular site.
  </p>

  <p className="policy-text">
    Cookies allow web applications to respond to you as an individual. The web
    application can tailor its operations to your needs, likes, and dislikes by
    gathering and remembering information about your preferences.
  </p>

  <p className="policy-text">
    Overall, cookies help Akshaya Properties provide you with a better website
    by enabling Akshaya Properties to monitor which pages you find useful and
    which you do not.
  </p>

  <p className="policy-text">
    You can choose to accept or decline cookies. Most web browsers
    automatically accept cookies, but you can usually modify your browser
    settings to decline cookies if you prefer. This may prevent you from taking
    full advantage of the website.
  </p>

  <b className="policy-section-title">
    Accessing and Updating Information
  </b>

  <p className="policy-text">
    You are entitled to see the information held about you and may ask Akshaya
    Properties to make any necessary changes to ensure that it is accurate and
    kept up to date.
  </p>

  <p className="policy-text">
    You may request details of personal information which Akshaya Properties
    holds about you under the Data Protection Act.
  </p>

</div>
    </Container>
    </>)
}