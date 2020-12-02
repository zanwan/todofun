import React, { useEffect, useState } from 'react';
import { db } from '../db/indexedDB';
// Component
import { Wrapper } from '../components/style/Wrapper';
import { Jar } from '../components/svg/JarIcon';
import { AddTodoBtn } from '../components/controller/AddTodoBtn';
import { AllTodoBtn } from '../components/controller/AllTodoBtn';
import { AddTodoModal } from '../components/controller/AddTodoModal';
import { ViewTodoModal } from '../components/controller/ViewTodoModal';
// Animation
import { motion } from 'framer-motion';
import { wrapperDetectRoute, jarDetectRoute, flipPage, jarMotion } from '../animation/homeMotion';

export const Home = ({ pathState }) => {
  const [raffleTodo, setRaffleTodo] = useState([]);
  // Modal toggle
  const [showAddTodoForm, setAddTodoForm] = useState(false);
  const [showViewTodoModal, setShowViewTodoModal] = useState(false);
  // 隨機抽 todo
  const [todo, setTodo] = useState({});

  useEffect(() => {
    handleRaffleTodo();
  }, []);

  function handleRaffleTodo() {
    db.todo
      .filter((todo) => todo.done === false)
      .toArray()
      .then((data) => {
        console.log(data.length);
        setRaffleTodo(data);
      });
  }

  function handleShowViewTodo() {
    if (raffleTodo.length === 0) {
      setTodo({ uuid: '', title: '沒有更多紙條了', content: ':(', done: false, isEmpty: true });
      setShowViewTodoModal(true);
      return;
    }
    const random = Math.abs(Math.ceil(Math.random() * raffleTodo.length - 1));
    setTodo(raffleTodo[random]);
    setShowViewTodoModal(true);
  }

  const handleShowAddTodo = () => {
    setAddTodoForm(true);
  };

  return (
    <Wrapper variants={flipPage} initial={wrapperDetectRoute(pathState)} animate='show' exit='exit'>
      <motion.div
        variants={jarMotion}
        initial={jarDetectRoute(pathState)}
        animate='show'
        whileHover='hover'
        onClick={handleShowViewTodo}
        style={{ cursor: 'pointer' }}
      >
        <Jar />
      </motion.div>

      <div onClick={handleShowAddTodo}>
        <AddTodoBtn title='新增紙條' />
      </div>
      <AllTodoBtn title='查看所有' />
      <AddTodoModal
        isVisible={showAddTodoForm}
        setAddTodoForm={setAddTodoForm}
        handleRaffleTodo={handleRaffleTodo}
      />
      <ViewTodoModal
        isVisible={showViewTodoModal}
        data={todo}
        setTodo={setTodo}
        setShowViewTodoModal={setShowViewTodoModal}
        handleRaffleTodo={handleRaffleTodo}
      />
    </Wrapper>
  );
};
