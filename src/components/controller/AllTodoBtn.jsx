import * as React from 'react';
import { Button_normal as Button } from '../style/Button_normal';
import { Link } from 'react-router-dom';

export function AllTodoBtn(props) {
  const [btnText, setbtnText] = React.useState(props.title);

  return (
    <Link to='/all' style={{ height: 0 }}>
      <Button>{btnText} </Button>
    </Link>
  );
}
