
let root = document.getElementById('root')

async function fetchPosts() {

    let response = await fetch("https://jsonplaceholder.typicode.com/posts");/*loads all posts at once*/
    
    
    let data = await response.json()
    console.log(data)

    
    for(let posts of data){

        let div = document.createElement('div')
        div.classList.add('post-item');
        
        div.innerHTML = 
            `<h2>${posts.title}</h2>
            <p>${posts.body }</p>`
        
        root.appendChild(div)

    }

}

fetchPosts()