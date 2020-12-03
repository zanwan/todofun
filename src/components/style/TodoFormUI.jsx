import styled from 'styled-components';

export const TodoFormUI = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% / 2);
  min-width: 345px;
  height: 450px;
  background-color: #ffffff;
  border: 4px solid black;
  border-bottom-width: 0px;
  border-radius: 20px 20px 0 0;
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

export const TitleInputUI = styled.input`
  width: 85%;
  min-width: 275px;
  background-color: #ebebeb;
  font-size: 15px;
  padding: 12px;
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 24px;
`;

export const ContentInputUI = styled.textarea`
  width: 85%;
  min-width: 275px;
  background-color: #ebebeb;
  font-size: 15px;
  padding: 12px;
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 13px;
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
