export const filteredPosts = (posts, filterText) => {
    return (posts.filter(post => (
        post.body.toLowerCase().includes(filterText.toLowerCase()) || (post.title.toLowerCase().includes(filterText.toLowerCase()))
    ))
    )
}