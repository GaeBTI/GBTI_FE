import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  font-family: HSYuji-Regular;
  font-size: 45px;
  line-height: 33px;
  /* identical to box height, or 73% */
  height: 50px;
  text-align: center;

  color: ${(theme) => theme.primary};
`;
function Header() {
  return <TitleWrapper>개강한 나는...!</TitleWrapper>;
}

export default Header;
