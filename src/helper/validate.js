import { toast } from "react-hot-toast";

// Validate Aritcle form
export async function validateArticle(values){
    const errors = titleVerify({},values);

    return errors;
}

export async function validateEvent(values){
    const errors = eventTitleVerify({},values) && eventDescriptionVerify({},values) && mentorNameVerify({},values)

    return errors
}



// Cover image
// export function coverImageVerify(coverImage){
//     if(!coverImage){
//        return toast.error('Article should have a cover image..!');
//     }
// }

// Article content
// export function contentVerify(content){
//     if(!content){
//         return toast.error('Article should have content..!');
//     }else if(content.length < 100){
//         return toast.error('Article is too short..!');
//     }
// }

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

function eventTitleVerify(error={},values){
    if(!values.title){
        error.title = toast.error("Event should have a title...!")
    }else if(values.title <10 ){
        error.title = toast.error('Title is too short..!')
    }else if(values.title.length > 40){
        error.title = toast.error('Title is too long..!')
    }

    return error;
}

function eventDescriptionVerify(error={},values){
    if(!values.description){
        error.description = toast.error("Event should need a description..!")
    }else if(values.description.length < 20){
        error.title = toast.error('Description is too short..!')
    }else if(values.description.length > 100){
        error.title = toast.error("Description is too long..!")
    }

    return error
}

function mentorNameVerify(error={},values){
    if(!values.mentorName){
        error.mentorName = toast.error("Mentor name is required..!")
    }if(values.mentorName.length < 3){
        error.mentorName = toast.error("Invalid Mentor name..!")
    }
    return error
}
