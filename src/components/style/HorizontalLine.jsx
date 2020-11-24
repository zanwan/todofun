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
    margin: 0px 0px;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
  }

  & h2:hover {
    border-radius: 5px;
    background: gray;
  }
`;

const Line = styled.div`
  width: calc(100% / 2.9);
  height: 2px;
  background: black;
  border-radius: 1px;
`;

export function HorizontalLine({ showDoneTodo, setShowDoneTodo }) {
  function handleToggleDoneTodo() {
    setShowDoneTodo(!showDoneTodo);
  }

  return (
    <Horizontal>
      <Line />
      {showDoneTodo && <h2 onClick={handleToggleDoneTodo}>隱藏已完成</h2>}
      {!showDoneTodo && <h2 onClick={handleToggleDoneTodo}>顯示已完成</h2>}
      <Line />
    </Horizontal>
  );
}
