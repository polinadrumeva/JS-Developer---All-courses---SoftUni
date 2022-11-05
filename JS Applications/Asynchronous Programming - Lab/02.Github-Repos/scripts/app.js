function loadRepos() {
	let usernameElement = document.getElementById('username').value;
	fetch(`https://api.github.com/users/${usernameElement}/repos`)
	.then(handleResponse)
	.then(handleData)
	.catch(handleErrors);
}

function handleResponse(response){
	if(response.ok == false) {
		throw new Error(`Error: ${response.status} ${response.statusText}`);
	}

	return response.json();
}

function handleData(data) {
	const list = document.getElementById('repos');

	const items = data.map(repo =>  {
		const liElement = document.createElement('li');
		const aElement = document.createElement('a');
		aElement.href = repo.html_url;
		aElement.textContent = repo.full_name;
		liElement.appendChild(aElement);

		return liElement;
	});

	list.replaceChildren(...items);

}

function handleErrors(error) {
	const list = document.getElementById('repos');
	list.textContent = error.message;
}