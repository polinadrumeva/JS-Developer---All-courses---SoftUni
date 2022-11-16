function attachEvents() {
    document.getElementById('submit').addEventListener('click', onPost);
    document.getElementById('refresh').addEventListener('click', getComments);

    function onPost() {
        const name = document.getElementsByName('author')[0];
        const content = document.getElementsByName('content')[0];

        const comment = {
            author: name.value, 
            content: content.value
        };
        name.value = "";
        content.value = "";
        postComment(comment);
    }
}

function reloadAll(data) {
    const textarea = document.getElementById('messages');
    const datas = Object.values(data).map(entry => `${entry.author}: ${entry.content}`).join('\n');
    textarea.textContent = datas;
}

async function getComments() {
    const response = await fetch("http://localhost:3030/jsonstore/messenger");
    const data = response.json();

    reloadAll(data);
}

async function postComment(comment) {
    const response = await fetch("http://localhost:3030/jsonstore/messenger", {
        method: "post", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    });

    getComments();

}

attachEvents();