import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperGraphic } from './style/Paper';
import { Button_normal as Button } from './style/Button_normal';
import { db } from '../db/indexedDB';

const ModalUI = styled.div`
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

const ContentWrapper = styled.div`
  position: relative;
  width: calc(100% / 2);
  min-width: 345px;
`;

const Content = styled.div`
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

const ActionBtnGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & button {
    margin: 0px 5px 5px 0px;
  }
`;

const backDropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.5)',
  zIndex: 1,
};

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const animeForm = {
  visible: {
    opacity: 1,
    scale: 1,
    y: '10vh',
    transition: { type: 'spring', bounce: 0.5 },
  },
  hidden: { opacity: 0, scale: 0.5, y: '25vh' },
};

export function ViewTodoModal({ isVisible, data, setTodo, setShowViewTodoModal }) {
  const [value, setValue] = useState({ uuid: '', title: '', content: '', done: '' });

  useEffect(() => {
    setValue((prevState) => ({
      ...prevState,
      id: data.id,
      uuid: data.uuid,
      title: data.title,
      content: data.content,
      done: data.done,
    }));
  }, [data.uuid]);

  function handleCloseModel(e) {
    if (e.target.id === 'backdrop') {
      setShowViewTodoModal(false);
    } else if (e.target.textContent === '放回罐罐') {
      setShowViewTodoModal(false);
    }
  }

  function handleConfirmDone(e) {
    e.preventDefault();
    db.todo.update(value.id, { done: true }).then((updated) => {
      if (updated) {
        console.log('更新完成');
        setTodo((prevState) => ({
          ...prevState,
          done: true,
        }));
        setShowViewTodoModal(false);
      } else {
        console.log('發生錯誤');
      }
    });
  }

  function handleUnDone(e) {
    e.preventDefault();
    db.todo.update(value.id, { done: false }).then((updated) => {
      if (updated) {
        console.log('更新完成');
        setTodo((prevState) => ({
          ...prevState,
          done: false,
        }));
        setShowViewTodoModal(false);
      } else {
        console.log('發生錯誤');
      }
    });
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id='backdrop'
          style={backDropStyle}
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
          onClick={handleCloseModel}
        >
          <motion.div variants={animeForm} initial='hidden' animate='visible' exit='hidden'>
            <ModalUI>
              <ContentWrapper>
                <Content>
                  <h1>{value.title}</h1>
                  <p>{value.content}</p>
                  <ActionBtnGroup>
                    {!value.done && (
                      <Button onClick={handleConfirmDone} style={{ background: 'green' }}>
                        確認完成
                      </Button>
                    )}
                    {!value.done && <Button onClick={handleCloseModel}>放回罐罐</Button>}
                    {value.done && <Button onClick={handleUnDone}>放回罐罐</Button>}
                  </ActionBtnGroup>
                </Content>
              </ContentWrapper>
              <PaperGraphic></PaperGraphic>
            </ModalUI>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
