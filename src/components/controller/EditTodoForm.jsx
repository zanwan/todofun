import React, { useState, useEffect } from 'react';
import { PutTodoBtn } from './PutTodoBtn';
import { DeleteTodoBtn } from './DeleteTodoBtn';
// UI Styled
import {
  TodoFormUI,
  ActionBtnGroup,
  TitleInputUI,
  ContentInputUI,
  backDropStyle,
} from '../style/TodoFormUI';
// Animation
import { motion, AnimatePresence } from 'framer-motion';
import { backdrop, animeForm } from '../../animation/jumpUpForm';

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
