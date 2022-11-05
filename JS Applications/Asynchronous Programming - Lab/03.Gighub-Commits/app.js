async function loadCommits() {
    const username = document.getElementById('username').value;
    const repoName = document.getElementById('repo').value;
    const list = document.getElementById('commits');

    try{
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/commits`);
	    if(response.ok == false) {
		    throw new Error(`Error: ${response.status} (Not Found))`);
	    }

        let data = await response.json();
        for (let repo of data) {
            let item = document.createElement('li');
            item.textContent = `${repo.commit.author.name}: ${repo.commit.message}`;
            list.appendChild(item);
        }
    } catch {
        const list = document.getElementById('commits');
        list.textContent = error.message;
    }
}

