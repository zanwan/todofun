import styled from 'styled-components';

export const Horizontal = styled.div`
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

export const Line = styled.div`
  width: calc(100% / 2.9);
  height: 2px;
  background: black;
  border-radius: 1px;
`;
