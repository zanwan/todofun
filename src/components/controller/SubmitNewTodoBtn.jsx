import * as React from 'react';
import { Button_normal as Button } from '../style/Button_normal';
import { db } from '../../db/indexedDB';
import { uuid } from '../../utils/uuid.js';

const style = {
  marginTop: '51px',
};

export function SubmitNewTodoBtn({ todoData, setValue, setAddTodoForm, handleRaffleTodo }) {
  function handleAddtodo(e) {
    e.preventDefault();
    db.todo
      .add({
        uuid: uuid(),
        title: todoData.title,
        content: todoData.content,
        done: false,
      })
      .then(() => {
        setValue({ title: '', content: '' });
        if (handleRaffleTodo !== undefined) {
          handleRaffleTodo();
        }
        setAddTodoForm(false);
      });
  }

  return (
    <Button style={style} onClick={handleAddtodo}>
      放進罐罐
    </Button>
  );
}
