const posts = JSON.parse(localStorage.getItem('posts')) || [];
const postsContainer = document.getElementById('posts');

posts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.className = 'post';
    postEl.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><span>By: ${post.username}</span>`;
    postsContainer.appendChild(postEl);
});
