import React from 'react';
import { Button_normal as Button } from '../style/Button_normal';
import { db } from '../../db/indexedDB';
import { ModalUI, ActionBtnGroup, backDropStyle } from '../style/ConfirmModalUI';
import { motion, AnimatePresence } from 'framer-motion';
import { backdrop, ConfirmAnimeForm } from '../../animation/Modal';

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
          <motion.div variants={ConfirmAnimeForm} initial='hidden' animate='visible' exit='hidden'>
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
