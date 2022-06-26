export const submitAuthor = async (obj) => {
    const result = await fetch('/api/author',{
        method:'POST',
        body:obj
    })
    return result.json();
}