import React from 'react';

export default props => {
  return (
    <div id='SearchBox' className='uk-margin uk-align-center'>
      <label className='uk-form-label' htmlFor='searchBox'>
        Search Item
      </label>
      <div className='uk-form-controls uk-margin-bottom'>
        <input onChange={props.searchItem} value={props.search} className='uk-input' id='searchBox' type='text' />
      </div>
    </div>
  );
};
