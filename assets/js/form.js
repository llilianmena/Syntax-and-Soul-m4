document.getElementById('blog-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const error = document.getElementById('error');

    if (!username || !title || !content) {
        error.textContent = 'Please fill in all fields.';
        return;
    }
    const post = { username, title, content };
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    window.location.href = 'blog.html';
});
