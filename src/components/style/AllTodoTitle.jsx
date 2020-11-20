import React from 'react';
import styled from 'styled-components';
import HomeIcon from '../svg/HomeIcon';
import TrashIcon from '../svg/TrashIcon';
import { Link } from 'react-router-dom';
const TodoTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 47px;
  min-height: 47px;
  padding: 0px 19px;
  color: white;
  background: black;
  border: 3px solid black;
  border-radius: 15px;

  & h1 {
    font-size: 16px;
  }

  & div {
    display: inline-block;
  }

  & div svg:first-child {
    margin-right: 8px;
  }

  & div svg:last-child {
    cursor: pointer;
  }
`;

export function AlltodoTitle({ setShowDeleteAllModal }) {
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
              fromAllTodo: true,
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
