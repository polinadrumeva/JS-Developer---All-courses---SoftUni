function attachEvents() {
    document.getElementById('submit').addEventListener('click', onPost);
    document.getElementById('refresh').addEventListener('click', getComments);

    async function onPost() {
        const name = document.getElementsByName('author').values[0];
        const content = document.getElementsByName('content').values[0];

        await postComment({name, content});
    }
}

function reloadAll(data) {
    const textarea = document.getElementById('messages')
    const datas = Object.values(data).map(entry => `${entry.author}: ${entry.content}`).join('\n');
    textarea.textContent = datas;
}

async function getComments() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = response.json();

    reloadAll(data);
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