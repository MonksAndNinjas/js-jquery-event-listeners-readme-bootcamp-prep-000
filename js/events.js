//define functions here
function getIt() {
 $('p').on('click', function(e) {
  alert("Hey!")
 })
}

function frameIt() {
  $('img').on('load', function(e) {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if(key.which == 71){
      alert('g was pressed')
    }
  })
}

$(document).ready(function(){
// call functions here
})
