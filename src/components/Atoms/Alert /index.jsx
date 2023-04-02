import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ alertMessage, isActive }) => {
  return <AlertText isActive={isActive}>{alertMessage}</AlertText>;
};

const AlertText = styled.p`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  border-radius: 4px;
  padding: 10px 20px;
  width: 90%;
  ${TEXT.S}
  position: absolute;
  white-space: normal;
  word-wrap: normal;
  max-width: 400px;
  top: 40px;
  left: 5%;
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 280px;
    top: 80px;
    left: 33%;
  }
`;

export default Alert;
