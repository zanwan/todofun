import * as React from 'react';
import { Button_normal as Button } from '../components/style/Button_normal';
import { db } from '../db/indexedDB';
import { uuid } from '../utils/uuid.js';

const style = {
  marginTop: '51px',
};

export function PutTodoBtn({ todoData, setTodo }) {
  console.log('傳進來的資料', todoData);

  function handlePutTodo(e) {
    e.preventDefault();
    db.todo
      .update(
        {
          uuid: todoData.uuid,
        },
        {
          title: todoData.title,
          content: todoData.content,
          done: false,
        },
      )
      .then(() => {
        setTodo({ title: todoData.title, content: todoData.content });
      });
  }

  return (
    <Button style={style} onClick={handlePutTodo}>
      更新紙條
    </Button>
  );
}
