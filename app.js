const getNombreAsync = async (idPost) => {

try {
    const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    const post = await resPost.json()
   
    const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    const user = await resUser.json()
    console.log(user.name)
    
} catch (error) {
    console.log(error)
}
}
getNombreAsync(80)