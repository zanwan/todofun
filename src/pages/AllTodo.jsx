import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { WrapperFlip } from '../components/style/WrapperFlip';
import { motion } from 'framer-motion';
import { Button_normal as Button } from '../components/style/Button_normal';
import { Link } from 'react-router-dom';
import { AlltodoTitle, AllTodoTitle } from '../components/style/AllTodoTitle';
import { TodoItem } from '../components/style/TodoItem';
import { HorizontalLine } from '../components/style/HorizontalLine';
import { ViewTodoModal } from '../components/ViewTodoModal';
import { EditTodo } from '../components/EditTodoForm';
import { DeleteAllModal } from '../components/DeleteAllComfirmModal';
// DB
import { db } from '../db/indexedDB';

const animFlipBack = {
  hidden: {
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

export function AllTodo() {
  // state
  const [todos, setTodos] = useState([{ uuid: 0, title: '' }]);
  const [showEditTodo, setShowEditTodo] = useState(false);
  const [todo, setTodo] = useState({});
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);
  const [showViewTodoModal, setShowViewTodoModal] = useState(false);

  // 從 indexedDB 撈資料
  let todosData;
  async function getTodoData() {
    try {
      todosData = await db.todo.orderBy('id').reverse().toArray();
    } catch (error) {
      console.log(error);
    }
    return todosData;
  }

  // useEffect
  useEffect(() => {
    getTodoData().then((res) => {
      setTodos(res);
    });
  }, []);

  useEffect(() => {
    getTodoData().then((res) => {
      setTodos(res);
    });
  }, [todo]);

  async function queryTodoData(uuid) {
    let todoData;
    try {
      todoData = await db.todo.where({ uuid: uuid }).toArray();
    } catch (error) {
      console.log(error);
    }
    return todoData;
  }

  function handleShowEditTodoData(uuid) {
    queryTodoData(uuid).then((res) => {
      setTodo(res[0]);
      setShowEditTodo(true);
    });
  }

  function handleShowViewTodoData(uuid) {
    queryTodoData(uuid).then((res) => {
      setTodo(res[0]);
      setShowViewTodoModal(true);
    });
  }

  return (
    <WrapperFlip variants={animFlipBack} initial='hidden' animate='show' exit='exit'>
      <AlltodoTitle setShowDeleteAllModal={setShowDeleteAllModal} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.uuid}
          id={todo.uuid}
          title={todo.title}
          queryData={handleShowEditTodoData}
          showTodoData={handleShowViewTodoData}
        />
      ))}

      <HorizontalLine />
      <ViewTodoModal isVisible={showViewTodoModal} setShowViewTodoModal={setShowViewTodoModal} />

      <EditTodo
        isVisible={showEditTodo}
        setShowEditTodo={setShowEditTodo}
        data={todo}
        setTodo={setTodo}
      />
      <DeleteAllModal
        isVisible={showDeleteAllModal}
        setTodo={setTodo}
        setShowDeleteAllModal={setShowDeleteAllModal}
      />
    </WrapperFlip>
  );
}
