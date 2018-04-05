//define functions here
function getIt() {
 $('p').on('click', function(e) {
  alert("Hey!")
 })
}

function frameIt() {
  $('img').on('load', function(e) {
    $('.tasty').append('img')
  })
}

$(document).ready(function(){
// call functions here
})
