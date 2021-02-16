import React, { useState } from 'react';
import CustomButton from './UI/CustomButton';
import Modal from './UI/Modal';

export default props => {
	const [ show, setShow ] = useState(false);
	return (
		<tr>
			<td className='TableRow'>{props.itemName}</td>
			<td className='TableRow'>{props.storeName}</td>
			<td>&#8369;{props.buyingPrice}</td>
			<td>&#8369;{props.sellingPrice}</td>
			<td>{props.contactNumber}</td>
			<td>
				<CustomButton>EDIT</CustomButton>
			</td>
			<td>
				<CustomButton clicked={() => setShow(true)} danger>
					DELETE
				</CustomButton>
			</td>
			<Modal show={show} removeModal={() => setShow(false)}>
				<div className='uk-margin-top'>Are you sure you want to delete this item?</div>
				<div className='uk-flex uk-flex-right uk-margin-top'>
					<div className='uk-margin-right'>
						<CustomButton danger>No</CustomButton>
					</div>
					<div>
						<CustomButton clicked={() => setShow(false)} primary>
							Yes
						</CustomButton>
					</div>
				</div>
			</Modal>
		</tr>
	);
};
