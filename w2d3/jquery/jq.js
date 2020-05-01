/** filename: jq.js
 *  author: melaku tegegne
 * description:
 * date: 30 April 2020
 */


$(function() {
    $('#Form1').submit(function( event) {
        // get all the inputs into an array.
        console.log("submitting");
        console.log($('#input1').val());
        console.log($('#input2').val());
        console.log($('#input3').val());  
        event.preventDefault();
    });

    $('#btnAddProduct').click(function(){
        // getting form values and concatinating them
        var values = $('#input1').val()+"<br>" + $('#input2').val()+ +"<br>"+ $('#input3').val()+"<br>"; 
        
        // writing values values to paragraph
        $('p').html(values);
    })



});



