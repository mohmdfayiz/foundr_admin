import { toast } from "react-hot-toast";

// Validate Aritcle form
export async function validateArticle(values){
    const errors = titleVerify({},values);

    return errors;
}

export async function validateEvent(values){
    const errors = eventTitleVerify({},values) && eventDescriptionVerify({},values) && joinLinkVerify({},values) && mentorNameVerify({},values)

    return errors
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
    }else if(values.mentorName.length < 3){
        error.mentorName = toast.error("Invalid Mentor name..!")
    }
    return error
}

function joinLinkVerify(error={},values){
    if(!values.joinLink){
        error.joinLink = toast.error("Join link is required..!")
    }else if(values.joinLink.length < 10){
        error.joinLink = toast.error("Invalid Link ..!")
    }
    return error
}
