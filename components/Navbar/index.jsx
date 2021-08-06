import Link from 'next/link';

import { isLoggedIn } from '@/functions/spotify-api.js';

import styles from './Navbar.module.css';


export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}></div>

			<div>
				<Link href="/">
					<a className={styles.navitem}>Home</a>
				</Link>

				<Link href="/playlists">
					<a className={styles.navitem}>Playlists</a>
				</Link>

				<Link href="/create">
					<a className={styles.navitem}>Create</a>
				</Link>

				{ isLoggedIn() ? (
					<Link href="/api/logout">
						<a className={styles.navitem}>Log out</a>
					</Link>
				) : (
					<Link href="/api/login">
						<a className={styles.navitem}>Log in</a>
					</Link>
				)}

			</div>
		</nav>
	)	
}
