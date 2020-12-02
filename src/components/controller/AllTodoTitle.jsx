import React from 'react';
import HomeIcon from '../svg/HomeIcon';
import TrashIcon from '../svg/TrashIcon';
import { Link } from 'react-router-dom';
import { TodoTitle } from '../style/TodoTitleBlack';

export function AllTodoTitle({ setShowDeleteAllModal }) {
  function handleDeleteAll() {
    console.log('刪除所有');
    setShowDeleteAllModal(true);
  }

  return (
    <TodoTitle>
      <h1>罐罐內容</h1>
      <div>
        <Link
          to={{
            pathname: '/home',
            state: {
              from: 'AllTodo',
            },
          }}
          style={{ color: 'white' }}
        >
          <HomeIcon />
        </Link>
        <div onClick={handleDeleteAll}>
          <TrashIcon />
        </div>
      </div>
    </TodoTitle>
  );
}
