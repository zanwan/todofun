import React, { useState } from 'react';
import styled from 'styled-components';

const CounterUI = styled.div`
  position: absolute;
  top: 40%;
  bottom: 0;
  left: 0;
  right: 0;
  width: 70%;
  margin: auto;

  & h1 {
    margin: auto;
    height: 30px;
    width: 30px;
    font-size: 2rem;
    font-weight: bold;
    background: #81b29a;
    border-radius: 50px;
    line-height: 30px;
    text-align: center;
  }
`;

export function Counter({ count }) {
  return (
    <CounterUI>
      <h1>{count}</h1>
    </CounterUI>
  );
}
