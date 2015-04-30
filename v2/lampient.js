function fullscreen(){
  lamp_element.height = screen.height
  lamp_element.width = screen.width
  lamp_element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
}

function init(){
  lamp_element = document.getElementById("lamp")
}
