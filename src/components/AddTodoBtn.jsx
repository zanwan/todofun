import * as React from 'react';
import { Button_normal as Button } from '../components/style/Button_normal';

const style = {
  marginTop: '51px',
};

export function AddTodoBtn({ title }) {
  const [btnText, setbtnText] = React.useState(title);

  return <Button style={style}>{btnText} </Button>;
}
