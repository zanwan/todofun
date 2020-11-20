import React, { useState } from 'react';
import styled from 'styled-components';
import EyeIcon from '../svg/EyeIcon';
import EditIcon from '../svg/EditIcon';

const TodoTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 47px;
  min-height: 47px;
  margin: 5px 0px;
  padding: 0px 19px;
  color: black;
  background: white;
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

export function TodoItem({ id, title, queryData, showTodoData }) {
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
