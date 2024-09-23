import styled from "styled-components";

const StyledNavSection = styled.section`
  background-color: ${(props) => props.theme.color.complimentary};
  border-top: 1px solid #fff;
  padding: 1rem 1rem 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { StyledNavSection };
