(function() {
  function coord(max, height, strokeWidth, value) {
    return parseFloat((height - (value * height / max) + strokeWidth).toFixed(2));
  }

  function removeChildren(svg) {
    svg.querySelectorAll("*").forEach(function(element) {
      svg.removeChild(element);
    });
  }

  function sparkline(svg, values) {
    removeChildren(svg);

    if (values.length <= 1) {
      return;
    }

    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var fill = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var strokeWidth = parseFloat(svg.attributes["stroke-width"].value);
    var width = parseFloat(svg.attributes.width.value);
    var fullHeight = parseFloat(svg.attributes.height.value)
    var height = fullHeight - (strokeWidth * 2);
    var max = Math.max.apply(Math, values);

    var offset = Math.round(width / (values.length - 1));
    var pathCoords = "M0 " + coord(max, height, strokeWidth, values[0]);
    var lastItemIndex = values.length - 1;

    values.forEach(function(value, index) {
      var lastItem = index === lastItemIndex;

      pathCoords += " L ";
      pathCoords += lastItem ? width : index * offset;
      pathCoords += " "
      pathCoords += coord(max, height, strokeWidth, value);
    });

    path.setAttribute("d", pathCoords);
    path.setAttribute("fill", "none");

    var fillCoords = pathCoords + " V " + fullHeight;
    fillCoords += " L 0 " + fullHeight + " Z";

    fill.setAttribute("d", fillCoords);
    fill.setAttribute("stroke", "none");

    svg.appendChild(path);
    svg.appendChild(fill);
  }

  if (typeof module !== "undefined" && module.exports) {
    // Node/CommonJS
    module.exports = sparkline;
  } else {
    // Browser globals
    window.sparkline = sparkline;
  }
}());
