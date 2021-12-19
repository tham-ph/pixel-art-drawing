const drawingSpace = document.querySelector(".drawing-space");
window.addEventListener("load", function() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      pixel = document.createElement("div");
      if ( (i + j) % 2 === 0) {
        pixel.style.backgroundColor = "white";
      } else {
        pixel.style.backgroundColor = "lightgrey";
      }
      drawingSpace.append(pixel);
    }
  }
});
