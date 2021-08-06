// import { useState } from 'react';

import Image from 'next/image';
// import Link from 'next/link';

import styles from './SongListItem.module.css';



export default function SongListItem({ data }) {



	return (
		<div className={styles.container}>

			<Image
				src={data.album.images[2].url}
				alt="Cover"
				className={styles.image}
				width={data.album.images[2].width}
				height={data.album.images[2].height}
			/>

			<div className={styles.meta}>
				<p>{ data.name }</p>
			
				{ data.artists.map((artist, index) => (
					<a
						href={artist.external_urls.spotify}
						key={artist.id}
						target="_blank"
						rel="noreferrer"
					>
						{ artist.name }
					</a>
				))}

			</div>

			<div className={styles.actionButtons}>
				<a
					href={data.external_urls.spotify}
					target="_blank"
					rel="noreferrer"
				>
					Open
				</a>
			</div>

		</div>
	)
}
