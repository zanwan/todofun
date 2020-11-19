import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { WrapperFlip } from '../components/style/WrapperFlip';
import { motion } from 'framer-motion';
import { Button_normal as Button } from '../components/style/Button_normal';
import { Link } from 'react-router-dom';
import { AlltodoTitle, AllTodoTitle } from '../components/style/AllTodoTitle';
import { TodoItem } from '../components/style/TodoItem';
import { HorizontalLine } from '../components/style/HorizontalLine';
import { PaperGraphic } from '../components/style/Paper';
import { EditTodo } from '../components/EditTodoForm';
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
  // 從 indexedDB 撈資料
  let todosData;
  async function getTodoData() {
    try {
      todosData = await db.todo.orderBy('title').toArray();
    } catch (error) {
      console.log(error);
    }
    return todosData;
  }

  // useEffect
  useEffect(() => {
    getTodoData().then((res) => {
      setTodos(res);
      console.log(res);
    });
  }, []);

  useEffect(() => {
    getTodoData().then((res) => {
      setTodos(res);
      console.log(res);
    });
  }, [todo]);

  async function queryTodoData(id) {
    let todoData;
    try {
      todoData = await db.todo.where({ uuid: id }).toArray();
    } catch (error) {
      console.log(error);
    }
    return todoData;
  }

  function handleShowEditTodoData(id) {
    console.log('查該筆資料，id:', id);
    queryTodoData(id).then((res) => {
      console.log('撈取檔案', res);
      setTodo(res[0]);
      setShowEditTodo(true);
    });
  }

  return (
    <WrapperFlip variants={animFlipBack} initial='hidden' animate='show' exit='exit'>
      <AlltodoTitle />
      {todos.map((todo) => (
        <TodoItem
          key={todo.uuid}
          id={todo.uuid}
          title={todo.title}
          queryData={handleShowEditTodoData}
        />
      ))}

      <HorizontalLine />
      <EditTodo
        isVisible={showEditTodo}
        setShowEditTodo={setShowEditTodo}
        data={todo}
        setTodo={setTodo}
      />
    </WrapperFlip>
  );
}
