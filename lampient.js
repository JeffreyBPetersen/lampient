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
  light.main()
  setTimeout(function(){tick()}, 1000/max_fps)
}

function set_light(light_option){
  light_option.init()
  light = light_option
}

// light options

var off = {
  main: function(){
    set_color(0,0,0)
  }
}

var aidan_alarm = {
  //dedicated to my roommate Aidan, who suggested this effect
  init: function(){},
  main: function(){
    var ticks_per_cycle = 4
    Math.floor(ticks % ticks_per_cycle) < ticks_per_cycle / 2 ? set_color(255,255,0) : set_color(255,0,0)
  }
}

var blue_triangle_wave = {
  init: function(){},
  main: function(){
    var t = time % 2
    var x = t % 2 > t % 1 ? t - (t % 1) * 2 : t
    set_color(0,0,Math.floor(255 * x))
    console.log(x)
  }
}

var candle = {
  init: function(){
    this.dist = 64
    this.base = 255 - this.dist
    this.diff = 0
  },
  main: function(){
    var level = this.base + this.diff
    this.diff += Math.floor(Math.random()*3/2)
    this.diff = this.diff % this.dist
    set_color(level,level,level)
  }
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