import styled from 'styled-components';

export const ModalUI = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: calc(100% / 4);
  min-width: 345px;

  & h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: calc(100% / 2);
  min-width: 345px;
`;

export const Content = styled.div`
  position: absolute;
  top: 45px;
  left: 0px;
  right: 0px;
  margin: auto;
  padding: 0px 40px;
  width: 100%;
  min-width: 345px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 2;

  & h1 {
    width: 100%;
    align-self: flex-start;
    border-bottom: 3px solid black;
  }

  & p {
    width: 100%;
    height: 200px;
    align-self: flex-start;
    line-height: normal;
    margin-top: 22px;
  }
`;

export const ActionBtnGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & button {
    margin: 0px 5px 5px 0px;
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
