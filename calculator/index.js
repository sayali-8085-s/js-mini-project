let store = "";

let cay = (value) => {
    let screen = document.querySelector('#screen');
    const operators = ['+', '-', '*', '/', '%'];

    
    const lastChar = store.slice(-1);
    if (operators.includes(lastChar) && operators.includes(value)) {
       
        store = store.slice(0, -1) + value;
    } else {
        store += value;
    }

    screen.innerHTML = store;
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

let delt = () => {
    let a = document.querySelector('#screen');
    store = store.slice(0,-1)
    a.innerHTML = store
}
