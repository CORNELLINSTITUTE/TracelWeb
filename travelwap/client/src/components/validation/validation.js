export function isEmpty(value){
    if (value.length === 0)
        return true;
    else
        return false;
}

export function hasMinLength(value, minLength){
    if (value.length < minLength)
        return false;
    else
        return true;
}

export function isValidEmail(value){
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value))
        return true;
    else
        return false;
}