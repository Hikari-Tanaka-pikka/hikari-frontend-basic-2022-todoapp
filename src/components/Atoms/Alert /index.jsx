import styled from "styled-components";

const Alert = ({ alertMessage, isActive }) => {
  return <AlertText isActive={isActive}>{alertMessage}</AlertText>;
};

export default Alert;

const AlertText = styled.div`
  color: ${(props) => (props.isActive ? "red" : "blue")};
`;
