import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PutTodoBtn } from './PutTodoBtn';
import { DeleteTodoBtn } from './DeleteTodoBtn';
import { motion, AnimatePresence } from 'framer-motion';

const TodoFormUI = styled.form`
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
  height: 400px;
  background-color: #ffffff;
  border: 4px solid black;
  border-bottom-width: 0px;
  border-radius: 20px 20px 0 0;
`;

const ActionBtnGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & button {
    margin: 0px 10px;
  }
`;

const TitleInputUI = styled.input`
  width: 85%;
  min-width: 275px;
  background-color: #ebebeb;
  font-size: 15px;
  padding: 12px;
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 24px;
`;

const ContentInputUI = styled.textarea`
  width: 85%;
  min-width: 275px;
  background-color: #ebebeb;
  font-size: 15px;
  padding: 12px;
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 13px;
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
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  hidden: { opacity: 0 },
};

const animeForm = {
  visible: { opacity: 1, y: '110vh' },
  hidden: { opacity: 0, y: '180vh' },
};

export const EditTodo = ({ isVisible, setShowEditTodo, data, setTodo }) => {
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

  const handleTitleValue = (e) => {
    setValue((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleContentValue = (e) => {
    setValue((prevState) => ({
      ...prevState,
      content: e.target.value,
    }));
  };

  function handleCloseModel(e) {
    if (e.target.id === 'backdrop') {
      setShowEditTodo(false);
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
            <TodoFormUI>
              <TitleInputUI value={value.title} placeholder='標題' onChange={handleTitleValue} />
              <ContentInputUI
                value={value.content}
                onChange={handleContentValue}
                rows='5'
                placeholder='什麼有趣的事...'
              />
              <ActionBtnGroup>
                <DeleteTodoBtn
                  todoData={value}
                  setTodo={setTodo}
                  setShowEditTodo={setShowEditTodo}
                />
                <PutTodoBtn todoData={value} setTodo={setTodo} setShowEditTodo={setShowEditTodo} />
              </ActionBtnGroup>
            </TodoFormUI>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
