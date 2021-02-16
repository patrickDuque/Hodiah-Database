import React from 'react';

export default props => (
	<div id='CustomButton' className='uk-flex uk-flex-right uk-margin'>
		<button
			type={props.type && props.type}
			onClick={props.clicked}
			className={`uk-button uk-button-default uk-button-large ${props.danger && 'uk-button-danger'} ${props.primary &&
				'uk-button-primary'}`}>
			{props.children}
		</button>
	</div>
);
