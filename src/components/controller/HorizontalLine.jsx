import React from 'react';

import { Horizontal, Line } from '../style/HorizontalUI';

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
