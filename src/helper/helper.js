import axios from "axios";
// Make API Requests

// PUBLISH ARTICLES
export async function publishArticle(article){
    try {
        const { data:{message}, status } = await axios.post( 'http://localhost:8000/api/admin/publishArticle', article );

        if(status === 201) return Promise.resolve(message)
        
    } catch (error) {
        return Promise.reject({error})
    }
}

// HOST EVENTS
export async function hostEvent(event){
    try{
        const {data:{message},status } = await axios.post( 'http://localhost:8000/api/admin/hostEvent',event );
        if(status === 201) return Promise.resolve(message);
    }catch(error){
        return Promise.reject({error})
    }
}