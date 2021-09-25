let posts = []
let names= []

function addPost() {
    let text = document.getElementById('massage').value;
    let name = document.getElementById('name').value
    posts.push(text);
    names.push(name);
    let myposts = document.getElementById('myposts');
    myposts.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        myposts.innerHTML += `<div class="post">
        <b>${names[i]}:</b> <br>
    ${posts[i]}
</div> `;
    }
    
    document.getElementById('massage').value='';
}
