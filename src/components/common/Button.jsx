import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 100%;
`;
const StyledButton = styled.button`
    font-size: 25px;
	color: #ffffff;
    background-color: #FFD04D;
	border-radius: 5px;
	border: 0px;
	height: 56px;
	padding: 4px;
	margin: 4px 0px;
	cursor: pointer;
	width: 100%;
	outline: none;
	font-weight: 700;
	&:hover {
        background-color: #FFE293;
	}
}
`;
//background-color: ${(props) => props.theme.primaryColor80};
const Button = ({ to, onClick, children }) =>
  to ? (
    <StyledLink to={to}>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </StyledLink>
  ) : (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
export default Button;
