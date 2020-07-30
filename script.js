var postManager = function () {

    var container = document.getElementById('content');

    const posts =  this.posts;
    
    // sort in this case is a destructive array helper(cpmpletely changes the posts array)
    posts.sort((a,b)=>{
        return a.userId-b.userId
    })
    
     //iterating over a sorted array

    const template = posts.map((post)=>{

        // outputting results in an html template
        return `<ul>
                    <li><b>${post.userId + ' ' + post.title}</b><br>
                      ${post.body}
                    </li>
                  </ul>`
        
        
    }).join('');
     
    // appending returned html template to the container div
    container.innerHTML= template;
    
    
};

postManager.prototype.posts = [
    {
        userId: 3,
        id: 1,
        title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 3,
        id: 2,
        title: "qui est esse",
        body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 2,
        id: 3,
        title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
        userId: 5,
        id: 5,
        title: "nesciunt quas odio",
        body:"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
];

new postManager();
