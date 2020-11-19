import React from 'react';
import styled from 'styled-components';

const Horizontal = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 12px 0px;

  & h2 {
    margin: 0px 5px;
    font-size: 16px;
  }
`;

const Line = styled.div`
  width: calc(100% / 2.8);
  height: 2px;
  background: black;
  border-radius: 1px;
`;

export function HorizontalLine() {
  return (
    <Horizontal>
      <Line />
      <h2>顯示已完成</h2>
      <Line />
    </Horizontal>
  );
}
