// DOM nodes
const cookieCount = document.getElementById("cookieCount");
const cookiesPS = document.getElementById("cookiesPS");
const cookieButton = document.getElementById("cookieButton");

let cookies = 0;
let cps = 1;
let cpc = 1;

//saves progress in local storage
function getCount() {
    cookies = localStorage.getItem("cookies")
    cookieCount.textContent = cookies;
}
getCount(); // this runs once the page loads (remember to defer in java call on HTML head)


//increases cookie count by cps
setInterval(function(){
    cookies += cps; 
    cookieCount.textContent = cookies;
    cookiesPS.textContent = cps + "cps";
    localStorage.setItem("cookieCount", cookieCount);
}, 1000);


//increases cookies by cps every click
function clickCookie() {
    cookies += cpc;
    cookieCount.textContent = cookies;
}
cookieButton.addEventListener("click", clickCookie);

//shop 1


//upgrade button that increases cookie increase per click


