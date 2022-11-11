function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', viewPosts);

}

async function loadPosts() {
    const selectOp = document.getElementById('posts');
    const url = `http://localhost:3030/jsonstore/blog/posts`;
    selectOp.innerHTML = '';
    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(post => {
        const option = document.createElement('option');
        option.value = post.id;
        option.textContent = post.title;
        selectOp.appendChild(option);
    })
}

async function viewPosts() {
    const postUrl = `http://localhost:3030/jsonstore/blog/posts`;
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;
    
    const selectOp = document.getElementById('posts').selectedOptions[0].value;
    const title = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postCommnets = document.getElementById('post-comments');
    postCommnets.innerHTML = '';
    
    const postResponce = await fetch(postUrl);
    const postData = await postResponce.json();

    const commentsResponce = await fetch(commentsUrl);
    const commentsData = await commentsResponce.json();

    const selectedPost = Object.values(postData).find(x => x.id == selectOp);
    title.textContent = selectedPost.title;
    postBody.textContent = selectedPost.body;

    const comments = Object.values(commentsData).filter(x => x.postId == selectOp);
    comments.forEach(x=> {
        const li = document.createElement('li');
        li.textContent = x.text;
        postCommnets.appendChild(li);
    });

}

attachEvents();