import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Header from './components/Header';
import CustomButton from './components/UI/CustomButton';
import Modal from './components/UI/Modal';
import Form from './components/Form';
import Spinner from './components/UI/Spinner';
import SearchBox from './components/UI/SearchBox';
import axios from './axios';

import './scss/App.scss';

function App() {
  const [
    items,
    setItems
  ] = useState(null);

  const [
    search,
    setSearch
  ] = useState('');

  const [
    loading,
    setLoading
  ] = useState(false);

  const [
    modal,
    setModal
  ] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('/items.json').then(data => {
      const fetchedArr = [];
      for (let key in data.data) {
        fetchedArr.push({ ...data.data[key], id: key });
      }
      setItems(fetchedArr);
      setLoading(false);
    });
  }, []);

  const showModalHandler = () => {
    setModal(true);
  };

  const hideModalHandler = () => {
    setModal(false);
  };

  const addItemHandler = item => {
    setLoading(true);
    axios.post('/items.json', item).then(res => {
      setLoading(false);
      axios.get('/items.json').then(data => {
        const fetchedArr = [];
        for (let key in data.data) {
          fetchedArr.push({ ...data.data[key], id: key });
        }
        setItems(fetchedArr);
      });
      hideModalHandler();
    });
  };

  const searchItemHandler = e => {
    setSearch(e.target.value);
  };

  let table = <Spinner />;

  if (!loading && items) {
    let filteredItems = items.filter(item => {
      return item.itemName.toLowerCase().includes(search.toLowerCase());
    });
    table = <Table items={filteredItems} />;
  }

  return (
    <div id='App'>
      <Header />
      <SearchBox search={search} searchItem={searchItemHandler} />
      {table}
      <Modal removeModal={hideModalHandler} show={modal}>
        {loading ? <Spinner /> : <Form addItem={addItemHandler} />}
      </Modal>
      <div className='uk-container uk-margin-top'>
        <CustomButton clicked={showModalHandler}>
          <span className='uk-margin-small-right' uk-icon='plus' />Add Item
        </CustomButton>
      </div>
    </div>
  );
}

export default App;
