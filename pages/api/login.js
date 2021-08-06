export default function handler(req, res) {
	const scopes = [
		'user-read-private',
		'user-read-email',
		'playlist-read-private'
	].join(' ');

	res.redirect('https://accounts.spotify.com/authorize'
		+ '?response_type=token'
		+ '&client_id=' + process.env.SPOTIFY_CLIENT_ID
		+ (scopes ? '&scope=' + encodeURIComponent(scopes) : '')
		+ '&redirect_uri=' + encodeURIComponent('http://localhost:3000/loginRedirect')
	);
}