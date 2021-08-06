import Cookies from 'js-cookie';



const getAccessToken = () => {
  return Cookies.get('access_token');
}




const searchGeneral = (query, callback) => {
  fetch('https://api.spotify.com/v1/search?'  + new URLSearchParams({
    q: query,
    type: 'track',
  }), {
    // limit: 20,
    // offset: 0,
    headers: {
      'Authorization': 'Bearer ' + getAccessToken(),
    },
  })
    .then(res => res.json())
    .then(callback);
}





const getTracksById = (trackIds, callback) => {
  fetch('https://api.spotify.com/v1/tracks?' + new URLSearchParams({
    ids: trackIds.join(',')
  }), {
    headers: {
      'Authorization': 'Bearer ' + getAccessToken(),
    },
  })
    .then(res => res.json())
    .then(callback);
}





const isLoggedIn = () => {
	return !!getAccessToken();
}




export {
	getAccessToken,
	searchGeneral,
	getTracksById,
	isLoggedIn,
}