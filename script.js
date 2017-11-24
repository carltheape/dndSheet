let str = "";
let dex = "";
let con = "";
let int = "";
let wis = "";
let cha = "";
let dice = "";


//Roll function

    function roll(elem) {
    dice = elem.value;
    document.getElementById("modal-text1").innerHTML = `Rolled a D${dice} and got: `;
    document.getElementById("modal-text2").innerHTML = Math.floor((Math.random() * dice) + 1);
    dice = "";
}

