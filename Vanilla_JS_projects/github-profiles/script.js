const APIURL = 'https://api.github.com/users/';

const getUser = async (user) => {
	const resp = await fetch(APIURL + user);
	const respData = await resp.json();

	console.log(respData);
};

getUser('Juminhark');
