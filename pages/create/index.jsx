import { useState, useEffect } from 'react';

import Head from 'next/head';

import Navbar from '@/components/Navbar';
import SongListItem from '@/components/SongListItem';

import styles from './create.module.css';

import { isLoggedIn, searchGeneral } from '@/functions/spotify-api.js';




export default function Create() {
	const [ searchInputValue, setSearchInputValue ] = useState('');
	const [ items, setItems ] = useState();

	const [ lastTyped, setLastTyped ] = useState(0);



	const inputTextHandler = e => {
		setSearchInputValue(e.target.value);

		console.log(performance.now(), lastTyped);

		if(searchInputValue.length > 0) {
			searchGeneral(searchInputValue, res => {
				console.log(res);
				setItems(res);
			});
		}

		setLastTyped(performance.now());
	}





	return <>
		<Head>
			<title>Create a playlist</title>
		</Head>

		<Navbar />

		<main className="main">
			
			<input
				type="text"
				value={searchInputValue}
				placeholder="Artists, songs or playlists"
				onChange={inputTextHandler}
				className={styles.search}
			/>

		
			<section className={styles.section}>
				{ items &&
					<div className={styles.itemsContainer}>
						<h3>Tracks</h3>

						<div className={styles.itemContainer}>
							{ items.tracks.items.map((item, index) => (
								<SongListItem
									key={index}
									type="track"
									data={item}
								/>
							))}
						</div>
					</div>
				}
			</section>
		</main>
	</>
}
