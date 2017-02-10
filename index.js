(function() {
  // 'use strict';
var controls = document.getElementById('controls')
var stop = document.getElementById('stopButton')
var red = document.getElementById('stopLight')
var slow = document.getElementById('slowButton')
var orange = document.getElementById('slowLight')
var go = document.getElementById('goButton')
var green = document.getElementById('goLight')

controls.addEventListener('click', function(){
console.log('event target', event.target);

    if (event.target.id === 'stopButton'){
    red.classList.toggle('stop');
    console.log('red bulb on');
  }else if  (event.target.id === 'slowButton'){
    orange.classList.toggle('slow');
    console.log('orange bulb on');
  }else if (event.target.id === 'goButton'){
    green.classList.toggle('go');
    console.log('green bulb on');
}
})
  controls.addEventListener('mouseover',function(event){
  console.log ('Event target', event.target);
    if (event.target.id === 'stopButton'|| event.target.id === 'slowButton' || event.target.id === 'goButton'){
    console.log('Entered' + event.target.innerText + 'button');
  }
})
controls.addEventListener('mouseout',function(event){
console.log ('Event target', event.target);
  if (event.target.id === 'stopButton'|| event.target.id === 'slowButton' || event.target.id === 'goButton'){
  console.log('left' + event.target.innerText + 'button');
  }
})

})();
