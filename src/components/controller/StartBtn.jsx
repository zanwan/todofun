import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button_normal as Button } from '../style/Button_normal';

const style = {
  marginTop: '51px',
};

export function StartBtn(props) {
  const [btnText, setbtnText] = React.useState(props.title);

  return (
    <Link to={{ pathname: '/home', state: { from: 'Intro' } }} style={{ height: 0 }}>
      <Button style={style}>{btnText} </Button>
    </Link>
  );
}
