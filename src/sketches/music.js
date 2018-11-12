import p5 from "p5";

export default function sketch(p) {
  var xspacing = 16;    // Distance between each horizontal location
  var w;                // Width of entire wave
  var theta = 0.0;      // Start angle at 0
  var amplitude = 75.0; // Height of wave
  var period = 500.0;   // How many pixels before the wave repeats
  var dx;               // Value for incrementing x
  var yvalues;  // Using an array to store height values for the wave
  var rotation = 0;
  var mic;

  p.setup = function() {
    p.createCanvas(710, 400)
    w = p.width+16;
    dx = (p.TWO_PI / period) * xspacing;
    yvalues = new Array(p.floor(w/xspacing));

    mic = new p5.AudioIn();
    mic.start();
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180
    }
  }

  p.draw = function() {
    p.background(0);

    // Get the overall volume (between 0 and 1.0)
    var vol = mic.getLevel();
    p.fill(127);
    p.stroke(0);

    // Draw an ellipse with height based on volume
    var h = p.map(vol, 0, 1, p.height, 0);
    p.ellipse(p.width/2, h - 25, 50, 50);

    calcWave();
    renderWave();
  }

  function calcWave() {
    // Increment theta (try different values for 
    // 'angular velocity' here)
    theta += 0.02;
  
    // For every x value, calculate a y value with sine function
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
      if( mic.getLevel() < 0.04){
        yvalues[i] = 0;
      }
      else{
        yvalues[i] = p.sin(x)*amplitude;
        x+=dx;
      }
    }
  }
  
  function renderWave() {
    p.noStroke();
    p.fill(255);
    // A simple way to draw the wave with an ellipse at each location
    for (var x = 0; x < yvalues.length; x++) {
      p.ellipse(x*xspacing, p.height/2+yvalues[x], 16, 16);
    }
  }


}
