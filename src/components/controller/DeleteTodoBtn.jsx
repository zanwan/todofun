import * as React from 'react';
import { Button_normal as Button } from '../style/Button_normal';
import { db } from '../../db/indexedDB';

const style = {
  marginTop: '25px',
  background: 'red',
};

export function DeleteTodoBtn({ todoData, setTodo, setShowEditTodo }) {
  console.log('傳進來的資料', todoData);

  function handleDeleteTodo(e) {
    e.preventDefault();
    console.log('要刪除的uuid', todoData.uuid);
    db.todo.delete(todoData.id).then(() => {
      setShowEditTodo(false);
      setTodo({});
    });
  }

  return (
    <Button style={style} onClick={handleDeleteTodo}>
      刪除紙條
    </Button>
  );
}
