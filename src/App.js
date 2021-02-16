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
	const [ items, setItems ] = useState(null);
	const [ search, setSearch ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const [ modal, setModal ] = useState(false);

	useEffect(() => {
		getItem();
	}, []);

	const showModalHandler = () => {
		setModal(true);
	};

	const hideModalHandler = () => {
		setModal(false);
	};

	const getItem = async () => {
		setLoading(true);
		try {
			const itemsArr = await axios.get('/items.json');
			const fetchedArr = [];
			for (let key in itemsArr.data) {
				fetchedArr.push({ ...itemsArr.data[key], id: key });
			}
			setItems(fetchedArr);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	const addItemHandler = async item => {
		setLoading(true);
		try {
			await axios.post('/items.json', item);
			getItem();
			setLoading(false);
			hideModalHandler();
		} catch (error) {
			setLoading(false);
		}
	};

	const deleteItemHandler = async id => {
		setLoading(true);
		try {
			await axios.delete(`/items/${id}.json`);
			getItem();
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error.message);
		}
	};

	const editItemHandler = async (item, id) => {
		setLoading(true);
		try {
			console.log(item);
			const data = await axios.put(`/items/${id}.json`, item);
			console.log(data);
			getItem();
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error.message);
		}
	};

	const searchItemHandler = e => {
		setSearch(e.target.value);
	};

	let table = <Spinner />;

	if (!loading && items) {
		let filteredItems = items.filter(item => {
			return item.itemName.toLowerCase().includes(search.toLowerCase());
		});

		if (filteredItems.length === 0) {
			table = <h1 style={{ textAlign: 'center' }}>No item in the database...</h1>;
		} else {
			table = <Table items={filteredItems} delete={deleteItemHandler} edit={editItemHandler} />;
		}
	}

	return (
		<div id='App'>
			<Header />
			<SearchBox search={search} searchItem={searchItemHandler} />
			<div className='uk-container uk-margin-top'>
				<CustomButton clicked={showModalHandler}>
					<span className='uk-margin-small-right' uk-icon='plus' />Add Item
				</CustomButton>
			</div>
			{table}
			<Modal removeModal={hideModalHandler} show={modal}>
				{loading ? <Spinner /> : <Form addItem={addItemHandler} />}
			</Modal>
		</div>
	);
}

export default App;
