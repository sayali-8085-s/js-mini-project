let store = "";

let cay = (value) => {
    let a = document.querySelector('#screen');
    store = store + value;
    a.innerHTML = store;
};

let equa = () => {
    let a = document.querySelector('#screen');
    store = eval(store).toString();
    a.innerHTML = store;

    
        
};

let clearScreen = () => {
    let a = document.querySelector('#screen');
    a.innerHTML = "";
    store = "";
};
