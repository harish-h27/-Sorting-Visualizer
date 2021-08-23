export function changeColors( first, second, color) {
    first.style.backgroundColor = color;
    second.style.backgroundColor = color;
}

export function changeTextAndColor(first, second, val1, val2, color) {
    first.style.backgroundColor = color;
    second.style.backgroundColor = color;
    // height
    first.style.height = `${val2}px`;
    second.style.height = `${val1}px`;;
    // values
    first.innerText  = val2;
    second.innerText = val1;
}
export function pause(sec) {
    return new Promise((res, req) => {
        setTimeout(() => {
            res('');
        }, sec)
    });    
}