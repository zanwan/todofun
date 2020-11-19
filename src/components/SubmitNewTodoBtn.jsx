import * as React from 'react';
import { Button_normal as Button } from '../components/style/Button_normal';
import { db } from '../db/indexedDB';
import { uuid } from '../utils/uuid.js';

const style = {
  marginTop: '51px',
};

export function SubmitNewTodoBtn({ todoData }) {
  console.log('傳進來的資料', todoData);

  function handleAddtodo(e) {
    e.preventDefault();
    console.log('handleAddTodo');
    db.todo.add({
      uuid: uuid(),
      title: todoData.title,
      content: todoData.content,
      done: false,
    });
  }

  return (
    <Button style={style} onClick={handleAddtodo}>
      放進罐罐
    </Button>
  );
}
