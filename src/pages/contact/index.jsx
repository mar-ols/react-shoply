import { StyledH1 } from "../../styles/styled-components/h1";
import { ContactForm } from "../../components/contact";
import { StyledDiv } from "../../styles/styled-components/centered-div";
import ContactImg from "../../assets/images/getty-images-LjNxoCzepK8-unsplash.jpg";

function Contact() {
  return (
    <>
      <StyledH1>Contact</StyledH1>
      <StyledDiv className="centered">
        <p>
          Your feedback is import to us here at Shoply. If you have any inquires
          or complaints please get in touch with us in the form below, and we
          will get back to you as soon as we can.
        </p>
        <img src={ContactImg} alt="Woman with yellow jacket and a headset" />
      </StyledDiv>
      <ContactForm />
    </>
  );
}

export { Contact };
