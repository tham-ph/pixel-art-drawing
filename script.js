const drawingSpace = document.querySelector(".drawing-space");
window.addEventListener("load", function() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      pixel = document.createElement("div");
      pixel.style.backgroundColor = "white";
      pixel.style.border = "1px solid black"
      drawingSpace.append(pixel);
    }
  }
});
