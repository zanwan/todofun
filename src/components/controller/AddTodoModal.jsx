import React, { useState } from 'react';
import { SubmitNewTodoBtn } from './SubmitNewTodoBtn';
// UI Styled
import {
  TodoFormUI as AddTodoFormUI,
  TitleInputUI,
  ContentInputUI,
  backDropStyle,
} from '../style/TodoFormUI';
// Animation
import { motion, AnimatePresence } from 'framer-motion';
import { backdrop, animeForm } from '../../animation/jumpUpForm';

export const AddTodoModal = ({ isVisible, setAddTodoForm, handleRaffleTodo }) => {
  const [value, setValue] = useState({ title: '', content: '' });

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
      setAddTodoForm(false);
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
            <AddTodoFormUI>
              <TitleInputUI value={value.title} placeholder='標題' onChange={handleTitleValue} />
              <ContentInputUI
                value={value.content}
                onChange={handleContentValue}
                rows='5'
                placeholder='什麼有趣的事...'
              />
              <SubmitNewTodoBtn
                todoData={value}
                setValue={setValue}
                setAddTodoForm={setAddTodoForm}
                handleRaffleTodo={handleRaffleTodo}
              />
            </AddTodoFormUI>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
