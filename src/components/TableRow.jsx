import React from 'react';

export default props => (
  <tr>
    <td className='TableRow'>{props.itemName}</td>
    <td className='TableRow'>{props.storeName}</td>
    <td>&#8369;{props.buyingPrice}</td>
    <td>&#8369;{props.sellingPrice}</td>
    <td>{props.contactNumber}</td>
  </tr>
);
