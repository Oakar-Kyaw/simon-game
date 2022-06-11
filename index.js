buttonColor=["red", "blue", "green", "yellow" ];

gamePattern=[];
count=0;
function nextSequence(){
    randomnumber=Math.round(Math.random()*3);
    randomChosenColor=buttonColor[randomnumber];
    gamePattern.push(randomChosenColor);
    
}
function startover(){
    $('h1').text("Press a Key to Start");
    count=0;
}


$('div').click(function clickname(){
        

        nextSequence();
        $(this).animate({opacity: '0.5'},'fast').animate({opacity:'1'});
        if(gamePattern[0]===$(this).attr('class')){
             play($(this).attr('class'));
             gamePattern.splice(0,gamePattern.length);
             count++;
             if(count>1){
             $('h1').text("😃 YAY Level "+count);}
             else {
                $('h1').text("Level "+count);
             }
             
             

        }
        else {
           $('body').addClass('game-over');
           setTimeout( function (){ $('body').removeClass('game-over')},100)
            play("wrong");
            gamePattern.splice(0,gamePattern.length);
            $('h1').text("Sorry You Lose 😢");
            setTimeout(function (){
              startover();  
            },500)
            
            
           
            
        }
       
       
        }) 
    
function play(soundname){
    switch (soundname){
        case 'red':
            red=new Audio('sound/red.mp3');
            red.play();
            
            break;
        case 'blue':
            blue=new Audio('sound/blue.mp3');
            blue.play();
            
            break;
        case 'yellow':
            yellow=new Audio('sound/yellow.mp3');
            yellow.play();
            
            break;
        case 'green':
            green=new Audio('sound/green.mp3');
            green.play();
            
            break;
        default:
            wrong=new Audio('sound/wrong.mp3');
            wrong.play();
            
            break;
    }
    
}