window.onload = function () {
  var scaleInput = document.getElementById("scale");
  var scalevalue = document.getElementById("value");
  var displacementScale = document.getElementById("displacement");
  var filterImage = document.getElementById("filterImage");
  var image1 = document.getElementById("image1");
  var image2 = document.getElementById("image2");
  var image3 = document.getElementById("image3");

  scalevalue.innerHTML = scaleInput.value;
  filterImage.href = "filter.svg";

  scaleInput.onchange = function () {
    console.log(scaleInput.value);
    displacementScale.scale.baseVal = scaleInput.value;
    scalevalue.innerHTML = scaleInput.value;
  };

  image1.onclick = function () {
    filterImage.setAttribute("href", "filter.svg");
    console.log(filterImage);
  };

  image2.onclick = function () {
    filterImage.setAttribute("href", "filter2.svg");
    console.log(filterImage);
  };

  image3.onclick = function () {
    filterImage.setAttribute("href", "filter3.svg");
    console.log(filterImage);
  };

  function calculateDegrade() {
    console.log(
      "uppercurve\n",
      new Array(11)
        .fill(1)
        .map((item, index) => {
          const value = Math.round(
            Math.sin(index * 0.1 * Math.PI) * 128 + 127
          ).toString(16);

          return `<stop offset="${index * 0.1}" stop-color="#7F${value}7F" />`;
        })
        .join("\n")
    );
    console.log(
      "downcurve\n",
      new Array(11)
        .fill(1)
        .map((item, index) => {
          const value = Math.round(
            -Math.sin(index * 0.1 * Math.PI) * 127 + 127
          ).toString(16);

          return `<stop offset="${index * 0.1}" stop-color="#7F${value}7F" />`;
        })
        .join("\n")
    );
  }
};
