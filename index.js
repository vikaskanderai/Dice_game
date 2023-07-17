function fun(){
    randomNumber1= Math.floor(Math.random()*6)+1;
    newPng1= "./images/dice"+randomNumber1+".png";
    document.querySelector("img.img1").setAttribute("src",newPng1);
    
    randomNumber2= Math.floor(Math.random()*6)+1;
    newPng2= "./images/dice"+randomNumber2+".png";
    document.querySelector("img.img2").setAttribute("src",newPng2);
    
    if(randomNumber1>randomNumber2){
        document.querySelector("h2").innerHTML="Player 1 Wins 🏆";
    }
    else {
        if(randomNumber1<randomNumber2){
            document.querySelector("h2").innerHTML="Player 2 Wins 🏆";
        }
        else{
            document.querySelector("h2").innerHTML="It's a Draw!!";
        }
    }
}