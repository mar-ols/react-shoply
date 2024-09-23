import styled from "styled-components";

const StyledSearch = styled.input`
  color: ${(props) => props.theme.color.primary};
  width: 100%;
  margin: auto;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export { StyledSearch };
