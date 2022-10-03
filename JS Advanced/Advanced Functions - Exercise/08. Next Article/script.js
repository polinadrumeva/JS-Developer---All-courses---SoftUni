function getArticleGenerator(articles) {
    let myArticle = JSON.parse(JSON.stringify(articles));
    let content = document.getElementById('content');
    return () => {
        if(!myArticle.length) {
            return;
        }
        let current = myArticle.shift();
        content.innerHTML += `<article>${current}</article>`;
    }
}
