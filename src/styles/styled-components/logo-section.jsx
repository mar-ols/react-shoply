import styled from "styled-components";

const StyledLogoSection = styled.section`
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 1rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export { StyledLogoSection };
