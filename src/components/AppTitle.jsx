import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 65px;
  font-family: 'Yellowtail', serif;
  margin-top: 5px;

  & p {
    font-family: 'jf-openhuninn';
    font-size: 14px;
    line-height: 1.7;
    text-align: center;
    margin-top: 31px;
  }
`;

export function AppTitle() {
  return (
    <Title>
      <h1>todoFUN</h1>
      <p>
        有趣的點子、大膽的想法
        <br />
        通通丟進罐罐裡
        <br />
        有事沒事，隨機一抽
        <br />
        have fun todo it!
      </p>
    </Title>
  );
}
