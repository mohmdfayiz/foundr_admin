import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

// GET ALL USERS
export async function getUsers(){
    try {
        const {data, status} = await axios.get( '/api/admin/getUsers' )
        return ({data,status})

    } catch (error) {
        return Promise.reject({error})
    }
}

// GET ALL EVENTS
export async function getEvents(){
    try {
        const {data,status} = await axios.get( '/api/admin/getEvents' )
        if(status === 200) return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({error})
    }
}

// GET ALL ARTICLES
export async function getArticles(){
    try {
        const {data,status} = await axios.get( '/api/admin/getArticles' )
        console.log(data);
        if(status === 200) return Promise.resolve(data)
    } catch (error) {
        return Promise.reject({error})
    }
}

// PUBLISH ARTICLES
export async function publishArticle(article){
    try {
        const { data:{message}, status } = await axios.post( '/api/admin/publishArticle', article );
        if(status === 201) return Promise.resolve(message)
    } catch (error) {
        return Promise.reject({error})
    }
}

// HOST EVENTS
export async function hostEvent(event){
    try{
        const {data:{message},status } = await axios.post( 'api/admin/hostEvent',event );
        if(status === 201) return Promise.resolve(message);
    }catch(error){
        return Promise.reject({error})
    }
}