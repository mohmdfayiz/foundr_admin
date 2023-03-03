import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

// GET ALL USERS
export async function getUsers() {
    try {
        const { data, status } = await axios.get('/api/admin/getUsers')
        return Promise.resolve({ data, status })

    } catch (error) {
        return Promise.reject({ error })
    }
}

// UPDATE USER STATUS
export async function updateUserStatus(userId) {
    try {
        const { status } = await axios.patch(`/api/admin/updateUserStatus?userId=${userId}`)
        return Promise.resolve({ status })
    } catch (error) {
        return Promise.reject({ error })
    }
}

// GET ALL EVENTS
export async function getEvents() {
    try {
        const { data, status } = await axios.get('/api/admin/getEvents')
        if (status === 200) return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({ error })
    }
}

// GET ALL ATTENDIES OF SELECTED EVENT
export async function getAttendees(eventId){
    try {
        const { data } = await axios.get(`/api/admin/getAttendies?eventId=${eventId}`)
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject({error})
    }
}

// GET ALL ARTICLES
export async function getArticles() {
    try {
        const { data, status } = await axios.get('/api/admin/getArticles')
        if (status === 200) return Promise.resolve(data)
    } catch (error) {
        return Promise.reject({ error })
    }
}

// GET SINGLE ARTICLE
export async function getSingleArticle(articleId) {
    try {
        const { data, status } = await axios.get(`/api/admin/getSingleArticle?articleId=${articleId}`)
        return Promise.resolve({data,status})
    } catch (error) {
        return Promise.reject({ error })
    }
}

// UPDATE VISIBILITY OF ARTICLE (HIDE/PUBLISH)
export async function updateArticleVisibility(articleId){
    try {
        const {status} = await axios.patch(`/api/admin/updateArticleVisibility?articleId=${articleId}`)
        return Promise.resolve({status})
    } catch (error) {
        return Promise.reject({error})
    }
}

// PUBLISH ARTICLES
export async function publishArticle(article) {
    try {
        const { data: { message }, status } = await axios.post('/api/admin/publishArticle', article);
        if (status === 201) return Promise.resolve(message)
    } catch (error) {
        return Promise.reject({ error })
    }
}

// HOST EVENTS
export async function hostEvent(event) {
    try {
        const { data: { message }, status } = await axios.post('api/admin/hostEvent', event);
        if (status === 201) return Promise.resolve(message);
    } catch (error) {
        return Promise.reject({ error })
    }
}