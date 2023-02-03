import { toast } from "react-hot-toast";

// Validate Aritcle form
export async function validateArticle(values){
    const errors = titleVerify({},values);

    return errors;
}



// Cover image
export function coverImageVerify(coverImage){
    if(!coverImage){
       return toast.error('Article should have a cover image..!');
    }
}

// Validate Title
function titleVerify(error={}, values){
    if(!values.title){
        error.title = toast.error('Article should have a title..!');
    }else if(values.title.length < 10){
        error.title = toast.error('Title is too short..!')
    }else if(values.title.length > 50){
        error.title = toast.error('Title is too long..!')
    }

    return error;
}

// Article content
export function contentVerify(content){
    if(!content){
        return toast.error('Article should have content..!');
    }else if(content.length < 100){
        return toast.error('Article is too short..!');
    }
}