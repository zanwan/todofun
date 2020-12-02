import React from 'react';
import EyeIcon from '../svg/EyeIcon';
import EditIcon from '../svg/EditIcon';
import { TodoTitle } from '../style/TodoTitleGray';

export function TodoDoneItem({ id, title, queryData, showTodoData }) {
  // State

  function handleEdit() {
    console.log('編輯 todo');
    queryData(id);
  }

  function handleDetail() {
    console.log('查看 todo');
    showTodoData(id);
  }

  return (
    <TodoTitle>
      <h1>{title}</h1>
      <div>
        <div onClick={handleDetail}>
          <EyeIcon />
        </div>

        <div onClick={handleEdit}>
          <EditIcon />
        </div>
      </div>
    </TodoTitle>
  );
}
