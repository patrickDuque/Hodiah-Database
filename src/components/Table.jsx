import React from 'react';
import TableRow from './TableRow';

export default props => {
	const tableItems = props.items.map(item => {
		return (
			<TableRow
				key={item.id}
				itemName={item.itemName}
				storeName={item.storeName}
				sellingPrice={item.sellingPrice}
				buyingPrice={item.buyingPrice}
				contactNumber={item.contactNumber}
				id={item.id}
				deleteItem={props.delete}
			/>
		);
	});

	return (
		<div id='Table' className='uk-container uk-margin-top uk-padding-remove'>
			<table className='uk-table uk-table-small uk-table-striped'>
				<thead>
					<tr>
						<th>Item Name</th>
						<th>Store Name</th>
						<th>Buying Price</th>
						<th>Selling Price</th>
						<th>Contact Number</th>
					</tr>
				</thead>
				<tbody>{tableItems}</tbody>
			</table>
		</div>
	);
};
