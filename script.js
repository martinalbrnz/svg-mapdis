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

  scaleInput.oninput = function () {
    displacementScale.scale.baseVal = scaleInput.value;
    scalevalue.innerHTML = scaleInput.value;
  };

  image1.onclick = function () {
    filterImage.setAttribute("href", "filter.svg");
  };

  image2.onclick = function () {
    filterImage.setAttribute("href", "filter2.svg");
  };

  function calculateDegrade() {
    const MIN_VALUE = 128 - 64;
    const MAX_VALUE = 255 - 64;

    console.log(
      "uppercurve\n",
      new Array(11)
        .fill(1)
        .map((item, index) => {
          const valueH = Math.round(
            Math.cos((11 - index) * 0.1 * Math.PI) * 126 + 127
          ).toString(16);

          const value = Math.round(
            Math.sin(index * 0.1 * Math.PI) * MAX_VALUE + MIN_VALUE
          ).toString(16);

          return `<stop offset="${(index * 0.1).toFixed(2)}" stop-color="#${
            valueH.length === 1 ? "0" + valueH : valueH
          }${value.length === 1 ? "0" + value : value}7F" />`;
        })
        .join("\n")
    );
    console.log(
      "downcurve\n",
      new Array(11)
        .fill(1)
        .map((item, index) => {
          const valueH = Math.round(
            Math.cos((11 - index) * 0.1 * Math.PI) * 126 + 127
          ).toString(16);

          const value = Math.round(
            -Math.sin(index * 0.1 * Math.PI) * (MIN_VALUE - 1) + (MIN_VALUE - 1)
          ).toString(16);

          return `<stop offset="${(index * 0.1).toFixed(2)}" stop-color="#${
            valueH.length === 1 ? "0" + valueH : valueH
          }${value.length === 1 ? "0" + value : value}7F" />`;
        })
        .join("\n")
    );
  }

  calculateDegrade();
};
