import React, { useState, useEffect } from 'react';
import { PaperGraphic } from '../svg/Paper';
import { Button_normal as Button } from '../style/Button_normal';
import { db } from '../../db/indexedDB';
// UI Styled
import {
  ModalUI,
  ContentWrapper,
  Content,
  ActionBtnGroup,
  backDropStyle,
} from '../style/ViewModalUI';
// Animation
import { motion, AnimatePresence } from 'framer-motion';
import { backdrop, animeForm } from '../../animation/Modal';

export function ViewTodoModal({
  isVisible,
  data,
  setTodo,
  setShowViewTodoModal,
  handleRaffleTodo,
}) {
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
    } else if (e.target.textContent === '放回罐罐' || e.target.textContent === '好的') {
      setShowViewTodoModal(false);
    }
  }

  function handleConfirmDone(e) {
    e.preventDefault();
    db.todo.update(value.id, { done: true }).then((updated) => {
      if (updated) {
        console.log('handleConfirmDone');
        setTodo((prevState) => ({
          ...prevState,
          done: true,
        }));
        setShowViewTodoModal(false);
        setTodo({});
        if (handleRaffleTodo !== undefined) {
          handleRaffleTodo();
        }
        console.log('設定已完成');
      } else {
        console.log('發生錯誤');
      }
    });
  }

  function handleUnDone(e) {
    e.preventDefault();
    db.todo.update(value.id, { done: false }).then((updated) => {
      if (updated) {
        console.log('handleUnDone');
        setTodo((prevState) => ({
          ...prevState,
          done: false,
        }));
        setShowViewTodoModal(false);
        if (handleRaffleTodo !== undefined) {
          handleRaffleTodo();
        }
        setTodo({});
      } else {
        console.log('沒有紙條或發生錯誤了:(');
      }
    });
  }

  function handleButtonGroup(value) {
    console.log(value);
    if (value.id === undefined) {
      return (
        <ActionBtnGroup>
          <Button onClick={handleCloseModel}>好的</Button>
        </ActionBtnGroup>
      );
    } else if (value.done) {
      return (
        <ActionBtnGroup>
          <Button onClick={handleUnDone}>放回罐罐</Button>
        </ActionBtnGroup>
      );
    } else if (!value.done) {
      return (
        <ActionBtnGroup>
          <Button onClick={handleConfirmDone} style={{ background: 'green' }}>
            確認完成
          </Button>
          <Button onClick={handleCloseModel}>放回罐罐</Button>
        </ActionBtnGroup>
      );
    }
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
                  {handleButtonGroup(value)}
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
