import React from 'react';
import { motion } from 'framer-motion';
import { WrapperFlip } from '../components/style/WrapperFlip';
import { Jar } from '../components/JarIcon';
import { AddTodoBtn } from '../components/AddTodoBtn';
import { AllTodoBtn } from '../components/AllTodoBtn';
import { AddTodo } from '../components/AddTodoFrom';

export const Home = ({ pathState }) => {
  console.log('pathState===>', pathState);
  const [showAddTodoForm, setAddTodoForm] = React.useState(false);

  const handleShowAddTodo = () => {
    setAddTodoForm(true);
  };

  const animatePage = {
    idleFromIntro: {
      transition: {
        duration: 0,
      },
    },
    idle: {
      rotateY: -85,
    },
    show: {
      rotateY: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      rotateY: 85,
      transition: {
        duration: 0.2,
      },
    },
  };

  const motionJar = {
    idle: {
      transition: {
        duration: 0,
      },
    },
    show: {
      scale: 1.3,
      transition: {
        duration: 0.7,
      },
    },
    hover: {
      rotate: [0, -15, 15, -10, 10, -5, 5, 0],
    },
  };

  function handleGetTodo() {
    console.log('抽一個');
  }

  return (
    <WrapperFlip
      variants={animatePage}
      initial={pathState.fromIntro ? false : 'idle'}
      animate='show'
      exit='exit'
    >
      <motion.div
        variants={motionJar}
        initial={pathState.fromIntro ? 'idle' : false}
        animate='show'
        whileHover='hover'
        onClick={handleGetTodo}
        style={{ cursor: 'pointer' }}
      >
        <Jar />
      </motion.div>

      <div onClick={handleShowAddTodo}>
        <AddTodoBtn title='新增紙條' onClick={handleShowAddTodo} />
      </div>
      <AllTodoBtn title='查看所有' />
      <AddTodo isVisible={showAddTodoForm} setAddTodoForm={setAddTodoForm} />
    </WrapperFlip>
  );
};
