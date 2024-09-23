import styled from "styled-components";

const StyledReview = styled.div`
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 10px;
  padding: 0.5rem;
  margin: 1rem 0;
`;

export { StyledReview };
