let button = document.querySelector('.shake-animated');

function setBxSdw() {
    button.style.boxShadow = "0 0 15px #03afe8";  
}

function rmBxSdw() {
    button.style.boxShadow = "0 0 0";  
}

setInterval(setBxSdw, 1000);
setInterval(rmBxSdw, 2000);

function shwBtn() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.querySelector(".pulse-animated").style.display = "block";
    }
    // else {
    //     document.querySelector(".pulse-animated").style.display = "none";
    // }
}




      


