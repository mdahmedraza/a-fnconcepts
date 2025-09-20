import React from 'react';
import classes from './InternationalBtn.module.css';

const internationalBtn = ({title, style}) => {
  return (
    <button style={style} className={classes.international_btn}>{title}</button>
  )
}

export default internationalBtn;
