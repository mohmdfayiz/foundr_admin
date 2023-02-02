import { toast } from "react-hot-toast";

// Validate Aritcle form
export async function validateArticle(values){
    const errors = titleVerify({},values);

    return errors;
}


// Validate Title
function titleVerify(error={}, values){
    if(!values.title){
        error.title = toast.error('Article should have a title..!');
    }else if(values.title.length < 10){
        error.title = toast.error('Title is too short..!')
    }else if(values.title.length > 40){
        error.title = toast.error('Title is too long..!')
    }

    return error;
}