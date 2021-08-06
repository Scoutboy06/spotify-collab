import { useEffect } from 'react';
import { useRouter } from 'next/router';

// import cookies from 'next-cookies';



export default function LoginRedirect() {

	const router = useRouter();


	const setAccessToken = () => {
		const hash = location.hash.slice(1).split('&');

		for(const param of hash) {
			const arr = param.split('=');

			if(arr[0] === 'access_token') {
				// Cookies.set('access_token', arr[1]);
				document.cookie = `access_token=${arr[1]}; path=/`;
				router.push('/');
				break;
			}

			else if(arr[0] === 'error') {
				router.push('/?error=' + arr[1]);
			}
		}

	}


	useEffect(() => {
		setAccessToken();
	});


	return null;
}
