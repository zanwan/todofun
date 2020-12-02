import styled from 'styled-components';

export const ModalUI = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: calc(100% / 2);
  min-width: 345px;
  height: 300px;
  background-color: #ffffff;
  border: 4px solid black;
  border-radius: 20px 20px 20px 20px;

  & h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ActionBtnGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & button {
    margin: 20px 5px 5px 0px;
  }
`;

export const backDropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.5)',
  zIndex: 1,
};
