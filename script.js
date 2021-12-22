const drawingSpace = document.querySelector(".drawing-space");

window.addEventListener("load", function() {
  for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
      let pixel = document.createElement("div");
      pixel.style.border = "1px solid black";
      drawingSpace.append(pixel);
    }
  }
});

const gridSize = document.querySelector(".grid-size");
gridSize.addEventListener("click", function() {
  while (drawingSpace.firstChild) {
    drawingSpace.firstChild.remove();
  }

  const size =  gridSize.children[1].value; // value = gridSize.querySelector("input").value;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      let pixel = document.createElement("div");
      pixel.style.border = "1px solid black";
      drawingSpace.append(pixel);
      drawingSpace.style.gridTemplateRows = "repeat(" + String(size) + ", auto)";
      drawingSpace.style.gridTemplateColumns = "repeat(" + String(size) + ", auto)";
    }
  }

  let text = gridSize.children[0];
  text.textContent = String(size) + " x " + String(size);

});


drawingSpace.addEventListener("mousedown", function() {
  let stop = false;
  for (let pixel of drawingSpace.children) {
    pixel.addEventListener("mouseup", function () {
      stop = true;
      const pen = document.querySelector(".pen");
      const penColor = pen.value;
      pixel.style.backgroundColor = penColor;
      pixel.style.border = "1px solid " + penColor;
    });
    pixel.addEventListener("mouseenter", function() {
      if (stop === false) {
        const pen = document.querySelector(".pen");
        const penColor = pen.value;
        pixel.style.backgroundColor = penColor;
        pixel.style.border = "1px solid " + penColor;
      }
    });
  }
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {
  for (let pixel of drawingSpace.children) {
    pixel.style.backgroundColor = "white";
    pixel.style.border = "1px solid black";
  }
});


