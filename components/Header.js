import React from "react";
import NavButton from "./NavButton";
import NotificationsButton from "./NotificationsButton";
import styled from "styled-components/native";

export default function Header() {
  return (
    <HeaderBox>
      <NavButton />
      <NotificationsButton />
    </HeaderBox>
  );
}

const HeaderBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 25px 20px;
`;
