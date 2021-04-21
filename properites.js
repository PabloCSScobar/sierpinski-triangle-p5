let speed_slider = document.getElementById("speed");
let speed_output = document.getElementById("speed_label");
speed_output.innerHTML = speed_slider.value;
let speed = parseInt(speed_slider.value);

speed_slider.oninput = function() {
  speed_output.innerHTML = this.value;
  speed =  parseInt(this.value);
}

let iterations_slider = document.getElementById("iterations");
let iterations_output = document.getElementById("iterations_label");
let iterations = parseInt(iterations_slider.value);
iterations_output.innerHTML = iterations_slider.value;

iterations_slider.oninput = function() {
    iterations_output.innerHTML = this.value;
    iterations = parseInt(this.value);
}