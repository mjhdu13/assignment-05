let buttons = document.getElementsByClassName('completed');
for(let i = 0; i < buttons.length; i++ ){
  buttons[i].addEventListener('click', function(){
    alert('Board Updated Successfully')
  })
}