alert (' Imformation: Switch off the lights when not in use!!!')

//here we call out the variable needed

var turnOn = document.getElementById('on');
var turnOff = document.getElementById('off');
var bulb = document.getElementById('bulb');
var gang = document.getElementById('toggle');

var flash = document.getElementById('alertMe');

var is_it_On = false;   //here is for condition that sets whereby the light is off or oN

//here we call out the function that will on the bulb
turnOn.onclick = function(){
    bulb.style.background = "gold";
    flash.style.display = "block";
    is_it_On = true;
}

// here let's turn  it off in a 1way gang
turnOff.onclick = function(){
    bulb.style.background = "#ccc";
    flash.style.display = "none";
    is_it_On = false
}

gang.onclick = function(){
    // if statement since is a way switch
    if(is_it_On == true){
        bulb.style.background = "#ccc";
        gang.style.innerHTML = "Turn Off";
        gang.style.background = "gold"; 
        flash.style.display = "none";

        is_it_On = false;
    }else{
        bulb.style.background = "gold";
        gang.innerHTML = "Turn ON";
        gang.style.background = "lightgray";
        flash.style.display = "block";

        is_it_On = true;
    }

}