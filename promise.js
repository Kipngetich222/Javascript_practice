const posts = [
    {title: 'post one', body: 'This is post one'},
    {title: 'post two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index)=> {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post); 

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error something went wrong');
            }
        }, 2000);
    });

};

// createPost({title: 'post three', body: 'this is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// async await
// async function init() {
//     await createPost({title: 'post three', body: 'this is post three'})
//     getPosts();
// }

// init();

//async await with fetch

async function fetchUsets() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
    
    const container = document.createElement('div');

    data.forEach((user)=>{
        userDiv = document.createElement('div');

        userDiv.innerHTML = `
        <h2>${user.name}</h2>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company: ${user.company.name}</p>
        `;

        container.appendChild(userDiv);
    });

    document.body.appendChild(container);
}

fetchUsets();


//Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, 'Goodbye');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// Promise.all([promise1,promise2, promise3, promise4])
// .then(values => console.log(values));


