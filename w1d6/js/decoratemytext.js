/*
filename: decoratemytext.js
author: melaku tegegne
student id: 611082
description: solution for assignment6, give a set of even handlers on click
date: 27 April 2020

*/

// haldles onlick event

 
 function bdhandler(){
    var mline = document.getElementById("multiline"); 	
	var style = window.getComputedStyle(mline, null).getPropertyValue('font-size');	
	const parsed = 	parseInt(style,10);	
	mline.style.fontSize = (2*parsed).toString()+"px"   
};
 



 function timer(){
// Update font size every 500 ms
	let x = setInterval(function() {  
	var mline = document.getElementById("multiline"); 	
	var style = window.getComputedStyle(mline, null).getPropertyValue('font-size');	
	const parsed = 	parseInt(style,10);	
	mline.style.fontSize = (2+parsed).toString()+"px";
	  }, 500);
}
    
   
 function blinghandler(){
    document.getElementById("multiline").style.color="#90EE90";    
    
}
    
	

 function blinchangeghandler(){
    let cbox = document.getElementById("bling");
    if(cbox.checked ){
        let text=document.getElementById("multiline");
		text.style.fontWeight = 2*text.style.fontWeight;
        //text.style.fontWeight="bold";
        text.style.textDecoration="underline";
        
    }    
    else {       
        let text=document.getElementById("multiline");
        text.style.fontWeight="400";
        text.style.textDecoration="none";
    }
    
}
    



