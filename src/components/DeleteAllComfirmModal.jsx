import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { AlltodoTitle } from './style/AllTodoTitle';
import { Button_normal as Button } from './style/Button_normal';
import { db } from '../db/indexedDB';

const ModalUI = styled.div`
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

const ActionBtnGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & button {
    margin: 20px 5px 5px 0px;
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
    y: '25vh',
    transition: { type: 'spring', bounce: 0.5 },
  },
  hidden: { opacity: 0, scale: 0.5, y: '30vh' },
};

export const DeleteAllModal = ({ isVisible, setTodo, setShowDeleteAllModal }) => {
  function handleCloseModel(e) {
    if (e.target.id === 'backdrop') {
      setShowDeleteAllModal(false);
    } else if (e.target.textContent === '取消') {
      setShowDeleteAllModal(false);
    }
  }

  function handleDeleteAllTodos() {
    console.log('刪除所有 todo');
    db.todo.clear().then(() => {
      setTodo('clear');
      setShowDeleteAllModal(false);
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
              <h1>這會刪除所有紙條，確定嗎？</h1>
              <ActionBtnGroup>
                <Button onClick={handleCloseModel}>取消</Button>
                <Button onClick={handleDeleteAllTodos} style={{ background: 'red' }}>
                  全部刪除
                </Button>
              </ActionBtnGroup>
            </ModalUI>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
