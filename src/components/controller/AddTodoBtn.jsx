import React, { useState } from 'react';
import { Button_normal as Button } from '../style/Button_normal';

const style = {
  marginTop: '51px',
};

export function AddTodoBtn({ title }) {
  const [btnText, setbtnText] = useState(title);

  return <Button style={style}>{btnText}</Button>;
}
