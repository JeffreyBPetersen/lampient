// takes rgb values from 0 to 255
function set_color(r,g,b){
  document.body.style.backgroundColor = 
    "rgb(" + Math.floor(r) + "," + Math.floor(g) + "," + Math.floor(b) + ")"
}

// begins ticking
function tick(){
  ticks++
  time += 1/max_fps
  //console.log("ticks: " + ticks + ", time: " + time)
  light()
  setTimeout(function(){tick()}, 1000/max_fps)
}

// light options

function off(){
  set_color(0,0,0)
}

function blue_triangle_wave(){
  var t = time % 2
  x = t % 2 > t % 1 ? t - (t % 1) * 2 : t
  set_color(0,0,Math.floor(255 * x))
  console.log(x)
}

// initializes lampient
function init(){
  // welcome to the lampient codebase
  console.log("Welcome to Lampient")
  
  // initialize global variables
  max_fps = 60
  //  different time based variables
  ticks = 0 // ticks passed
  time = 0 // seconds passed at max_fps
  //  light off at start
  light = off
  
  // start ticking
  tick()
}