import axios from "axios";

// Make API Requests

// PUBLISH ARTICLES
export async function publishArticle(article){
    try {
        const { data:{message}, status } = await axios.post( '/publishArticle', article );

        if(status === 201) return Promise.resolve(message)
        
    } catch (error) {
        return Promise.reject({error})
    }
}