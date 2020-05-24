import React from "react";
import styled from "styled-components";

export default function MainHeading() {
  return (
    <MainHeadingBox>
      <Statistics></Statistics>
    </MainHeadingBox>
  );
}

const MainHeadingBox = styled.View`
  padding: 0 25px;
`;

const Statistics = styled.View`
  font-size: 20px;
  color: white;
  font-weight: 700;
`;
