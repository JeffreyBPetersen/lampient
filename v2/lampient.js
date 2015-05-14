function fill_color(color){
  lamp_context.fillStyle = color
  lamp_context.fillRect(0, 0, lamp_element.width, lamp_element.height)
}

function fullscreen(){
  lamp_element.height = screen.height
  lamp_element.width = screen.width
  lamp_element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
}

function handle_click(event){
  console.log(event)
}

function handle_keydown(event){
  console.log(event)
  if(event.shiftKey && event.keyCode == 51){
    console.log("#")
  }
}

// initialize with requestAnimationFrame(loop) to avoid undefined time
function loop(time){
  requestAnimationFrame(loop)
  console.log(time/1000)
}

function init(){
  // initialize canvas variables
  lamp_element = document.getElementById("lamp")
  lamp_context = lamp_element.getContext("2d")
  // initialize input listeners
  lamp_element.addEventListener("click", function(){handle_click(event)})
  lamp_element.addEventListener("keydown", function(){handle_keydown(event)})
  // begin main loop
  requestAnimationFrame(loop)
}
