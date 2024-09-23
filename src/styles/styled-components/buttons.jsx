import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.color.info};
    color: #000;
  }
`;

export { StyledButton };
