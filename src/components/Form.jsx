import React, { useState } from 'react';
import CustomButton from './UI/CustomButton';

export default props => {
	const [ addItem, setAddItem ] = useState({
		itemName      : props.itemName ? props.itemName : '',
		storeName     : props.storeName ? props.storeName : '',
		sellingPrice  : props.sellingPrice ? props.sellingPrice : '',
		buyingPrice   : props.buyingPrice ? props.buyingPrice : '',
		contactNumber : props.contactNumber ? props.contactNumber : ''
	});

	const changeInputHandler = e => {
		setAddItem({ ...addItem, [e.target.id]: e.target.value });
	};

	const submitAddItemHandler = e => {
		e.preventDefault();
		props.addItem(addItem);
	};

	const submitEditItemHandler = e => {
		e.preventDefault();
		props.editItem(addItem, props.id);
	};

	return (
		<form
			onSubmit={props.addItem ? submitAddItemHandler : submitEditItemHandler}
			id='Form'
			className='uk-form-horizontal uk-margin-large uk-margin-top'>
			<div className='uk-margin'>
				<label className='uk-form-label' htmlFor='itemName'>
					Item Name
				</label>
				<div className='uk-form-controls'>
					<input
						onChange={changeInputHandler}
						value={addItem.itemName}
						className='uk-input'
						id='itemName'
						type='text'
					/>
				</div>
			</div>
			<div className='uk-margin'>
				<label className='uk-form-label' htmlFor='storeName'>
					Store Name
				</label>
				<div className='uk-form-controls'>
					<input
						onChange={changeInputHandler}
						value={addItem.storeName}
						className='uk-input'
						id='storeName'
						type='text'
					/>
				</div>
			</div>
			<div className='uk-margin'>
				<label className='uk-form-label' htmlFor='buyingPrice'>
					Buying Price
				</label>
				<div className='uk-form-controls'>
					<input
						onChange={changeInputHandler}
						value={addItem.buyingPrice}
						className='uk-input'
						id='buyingPrice'
						type='number'
						min='0'
						step='0.01'
					/>
				</div>
			</div>
			<div className='uk-margin'>
				<label className='uk-form-label' htmlFor='sellingPrice'>
					Selling Price
				</label>
				<div className='uk-form-controls'>
					<input
						onChange={changeInputHandler}
						value={addItem.sellingPrice}
						className='uk-input'
						id='sellingPrice'
						type='number'
						min='0'
						step='0.01'
					/>
				</div>
			</div>
			<div className='uk-margin'>
				<label className='uk-form-label' htmlFor='contactNumber'>
					Contact Number
				</label>
				<div className='uk-form-controls'>
					<input
						onChange={changeInputHandler}
						value={addItem.contactNumber}
						className='uk-input'
						id='contactNumber'
						type='number'
						min='0'
					/>
				</div>
			</div>
			<CustomButton type='submit'>Submit</CustomButton>
		</form>
	);
};
