import { StyledDiv } from "../../styles/styled-components/centered-div";
import { StyledH1 } from "../../styles/styled-components/h1";
import Checkmark from "../../assets/images/check-circle.png";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <StyledDiv>
      <StyledH1>Checkout successful</StyledH1>
      <p className="centered">
        We have received your order. A confirmation email with shipping details
        will be sent to you shortly.
      </p>
      <div className="centered">
        <div>
          <img src={Checkmark} alt="Checkmark icon" />
        </div>
        <Link to="/">Return to home page</Link>
      </div>
    </StyledDiv>
  );
}

export { Checkout };
