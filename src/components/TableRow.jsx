import React from 'react';

export default props => (
  <tr>
    <td>{props.itemName}</td>
    <td>{props.storeName}</td>
    <td>&#8369;{props.buyingPrice}</td>
    <td>&#8369;{props.sellingPrice}</td>
  </tr>
);
