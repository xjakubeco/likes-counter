let counter = 0; 


// if ($("#BTN1").clicked===true) 
    

function increase(){ 
counter++; 
$("#likes").text(counter); 
} 


// let minus=0; 
// function decrease(){
//     minus--;
//     $("#dislikes").text(minus);
// }

function decrease(){
    counter=counter-1;
    $("#likes").text(counter);
}



