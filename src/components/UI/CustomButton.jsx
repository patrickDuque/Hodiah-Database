import React from 'react';

export default props => (
  <div id='CustomButton' className='uk-flex uk-flex-right uk-margin'>
    <button
      type={props.type ? props.type : null}
      onClick={props.clicked}
      className='uk-button uk-button-default uk-button-large'>
      {props.children}
    </button>
  </div>
);
