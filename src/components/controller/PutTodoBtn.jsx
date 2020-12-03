import * as React from 'react';
import { Button_normal as Button } from '../style/Button_normal';
import { db } from '../../db/indexedDB';

const style = {
  marginTop: '5px',
};

export function PutTodoBtn({ todoData, setTodo, setShowEditTodo }) {
  console.log('傳進來的修改資料', todoData);

  function handlePutTodo(e) {
    e.preventDefault();
    db.todo
      .update(todoData.id, {
        ...todoData,
        title: todoData.title,
        content: todoData.content,
      })
      .then(() => {
        setTodo({ title: todoData.title, content: todoData.content });
        setShowEditTodo(false);
      });
  }

  return (
    <Button style={style} onClick={handlePutTodo}>
      更新紙條
    </Button>
  );
}
