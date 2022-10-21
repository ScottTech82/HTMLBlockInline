


const plusFunction = () => {
    
    let fred = document.getElementById("x");
    fred.value++;
    inputStyle();
    }
const negFunction = () => {
    
    let fred = document.getElementById("x");
    fred.value--;
    inputStyle();

        }
const inputStyle = () => {
    fred.style.color = (nbr % 2 == 0) ? "red" : "black";
    fred.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal";
    fred.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";
}
/*
let nbr = 0;
const loaded = () => {
    display();
}

const display = () => {
    let inputCtrl = document.getElementById("x");
    inputCtrl.value = nbr;
    inputCtrl.style.textAlign = "center";
    //stage 2
    inputCtrl.style.color = (nbr % 2 == 0) ? "red" : "black";
    inputCtrl.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal";
    inputCtrl.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";

}

const increment = () => {
    nbr++;
    display();
}

const decrement = () => {
    nbr--;
    display();
}

*/

