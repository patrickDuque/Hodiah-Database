import React, { useState } from 'react';
import CustomButton from './UI/CustomButton';
import Modal from './UI/Modal';
import Form from './Form';

export default props => {
	const { itemName, storeName, sellingPrice, buyingPrice, contactNumber, id } = props;
	const [ show, setShow ] = useState(false);
	const [ showEdit, setShowEdit ] = useState(false);

	const handleDeleteItem = () => {
		props.deleteItem(id);
		setShow(false);
	};

	return (
		<React.Fragment>
			<Modal show={show} removeModal={() => setShow(false)}>
				<h3 className='uk-margin-top'>Are you sure you want to delete this item?</h3>
				<div className='uk-flex uk-flex-right uk-margin-top'>
					<div className='uk-margin-right'>
						<CustomButton danger clicked={() => setShow(false)}>
							No
						</CustomButton>
					</div>
					<div>
						<CustomButton clicked={handleDeleteItem} primary>
							Yes
						</CustomButton>
					</div>
				</div>
			</Modal>
			<Modal show={showEdit} removeModal={() => setShowEdit(false)}>
				<Form
					editItem={props.editItem}
					itemName={itemName}
					storeName={storeName}
					sellingPrice={sellingPrice}
					buyingPrice={buyingPrice}
					id={id}
					contactNumber={contactNumber}
				/>
			</Modal>
			<tr className='TableRow'>
				<td>{itemName}</td>
				<td>{storeName}</td>
				<td>&#8369;{buyingPrice}</td>
				<td>&#8369;{sellingPrice}</td>
				<td>{contactNumber}</td>
				<td>
					<CustomButton clicked={() => setShowEdit(true)}>EDIT</CustomButton>
				</td>
				<td>
					<CustomButton clicked={() => setShow(true)} danger>
						DELETE
					</CustomButton>
				</td>
			</tr>
		</React.Fragment>
	);
};
