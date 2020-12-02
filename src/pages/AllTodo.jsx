import React, { useState, useEffect } from 'react';
import { db } from '../db/indexedDB';
// Controller
import { AllTodoTitle } from '../components/controller/AllTodoTitle';
import { HorizontalLine } from '../components/controller/HorizontalLine';
import { DeleteAllModal } from '../components/controller/DeleteAllComfirmModal';
import { TodoDoneItem } from '../components/controller/TodoDoneItem';
import { EditTodo } from '../components/controller/EditTodoForm';
import { ViewTodoModal } from '../components/controller/ViewTodoModal';

// UI Styled
import { WrapperFlip } from '../components/style/WrapperFlip';
import { TodoItem } from '../components/style/TodoItem';

// Animation
import { flipPage } from '../animation/homeMotion';

export function AllTodo() {
  // state
  const [todos, setTodos] = useState([{ uuid: 0 }]);
  const [showEditTodo, setShowEditTodo] = useState(false);
  const [todo, setTodo] = useState({});
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);
  const [showViewTodoModal, setShowViewTodoModal] = useState(false);
  const [doneTodos, setDoneTodos] = useState([{ uuid: 0 }]);
  const [showDoneTodo, setShowDoneTodo] = useState(true);
  // 從 indexedDB 撈資料

  async function getTodoData() {
    let todosData;
    try {
      todosData = await db.todo
        .orderBy('id')
        .filter((todo) => todo.done === false)
        .reverse()
        .toArray();
    } catch (error) {
      console.log(error);
    }
    return todosData;
  }

  async function getDoneTodoData() {
    let doneTodosData;
    try {
      doneTodosData = await db.todo
        .orderBy('id')
        .filter((todo) => todo.done === true)
        .reverse()
        .toArray();
    } catch (error) {
      console.log(error);
    }
    return doneTodosData;
  }

  // useEffect
  useEffect(() => {
    getTodoData().then((res) => {
      setTodos(res);
    });
    getDoneTodoData().then((res) => {
      setDoneTodos(res);
    });
  }, [showViewTodoModal]);

  useEffect(() => {
    getTodoData().then((res) => {
      setTodos(res);
    });
    getDoneTodoData().then((res) => {
      setDoneTodos(res);
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
    <WrapperFlip variants={flipPage} initial='hidden' animate='show' exit='exit'>
      <AllTodoTitle setShowDeleteAllModal={setShowDeleteAllModal} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.uuid}
          id={todo.uuid}
          title={todo.title}
          queryData={handleShowEditTodoData}
          showTodoData={handleShowViewTodoData}
        />
      ))}

      <HorizontalLine showDoneTodo={showDoneTodo} setShowDoneTodo={setShowDoneTodo} />
      {showDoneTodo &&
        doneTodos.map((doneTodo) => (
          <TodoDoneItem
            key={doneTodo.uuid}
            id={doneTodo.uuid}
            title={doneTodo.title}
            queryData={handleShowEditTodoData}
            showTodoData={handleShowViewTodoData}
          />
        ))}

      <ViewTodoModal
        isVisible={showViewTodoModal}
        data={todo}
        setTodo={setTodo}
        setShowViewTodoModal={setShowViewTodoModal}
      />

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
