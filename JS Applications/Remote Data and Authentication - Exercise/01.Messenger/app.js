function attachEvents() {
    document.getElementById('submit').addEventListener('click', onPost);
    document.getElementById('refresh').addEventListener('click', reloadAll);

    async function onPost() {
        const name = document.getElementsByName('author').values[0];
        const content = document.getElementsByName('content').values[0];

        await postComment({name, content});
    }
}

async function getComments() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = response.json();

    return Object.values(data);
}

async function postComment(comment) {
    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });

    const data = await response.json();
    return data;

}

attachEvents();