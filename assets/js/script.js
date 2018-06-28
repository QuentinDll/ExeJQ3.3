var number = 50 ;
var click = 0 ;

$('#button').click(function(){
  var result = $('#entry').val();

  if(result == number){
    $('p').text('You Won, You try ' + click + ' time');

  }if (result < number){
    $('p').text('more')

  }if (result > number){
    $('p').text('less')
  }click++ ;
});
