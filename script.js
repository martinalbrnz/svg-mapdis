window.onload = function () {
  var scaleInput = document.getElementById("scale");
  var scalevalue = document.getElementById("value");
  var displacementScale = document.getElementById("displacement");
  var filterImage = document.getElementById("filterImage");
  var image1 = document.getElementById("image1");
  var image2 = document.getElementById("image2");

  var productimg = document.getElementById("productimg");
  var imgsrc = document.getElementById("imgsrc");
  var setimgsrc = document.getElementById("setimgsrc");

  var previewcontainer = document.getElementById("previewcontainer");
  var appliedFilter = document.getElementById("appliedFilter");

  var INCH = 2.54;
  var DPI = 72;
  var widthImageCentimeter = document.getElementById("widthImageCentimeter");
  var heightImageCentimeter = document.getElementById("heightImageCentimeter");
  var positionAreaAvailableCentimeterAxisX = document.getElementById(
    "positionAreaAvailableCentimeterAxisX"
  );
  var positionAreaAvailableCentimeterAxisY = document.getElementById(
    "positionAreaAvailableCentimeterAxisY"
  );
  var widthAreaAvailableInCentimeter = document.getElementById(
    "widthAreaAvailableInCentimeter"
  );
  var heightAreaAvailableInCentimeter = document.getElementById(
    "heightAreaAvailableInCentimeter"
  );

  function updateLogoPosition() {
    const imgNaturalWidth = productimg.naturalWidth;
    const imgNaturalHeight = productimg.naturalHeight;
    const previewSize = previewcontainer.getBoundingClientRect();

    const offsetX = positionAreaAvailableCentimeterAxisX.value;
    const offsetY = positionAreaAvailableCentimeterAxisY.value;
    const areaWidth = widthAreaAvailableInCentimeter.value;
    const areaHeight = heightAreaAvailableInCentimeter.value;
    const INCH_DPI = INCH / DPI;

    const left = Math.round(
      (offsetX / INCH_DPI / imgNaturalWidth) * previewSize.width
    );

    const top = Math.round(
      (offsetY / INCH_DPI / imgNaturalHeight) * previewSize.height
    );

    console.log("top: ", top);

    const width =
      (Number(areaWidth) / INCH_DPI / imgNaturalWidth) * previewSize.width;

    const height =
      (areaHeight * previewSize.height) / heightImageCentimeter.value;

    appliedFilter.setAttribute(
      "style",
      `left:${left.toFixed(2)}px;top:${top.toFixed(2)}px;width:${width.toFixed(
        2
      )}px;height:${height.toFixed(2)}px;`
    );
  }

  widthImageCentimeter.oninput = updateLogoPosition;
  heightImageCentimeter.oninput = updateLogoPosition;
  positionAreaAvailableCentimeterAxisX.oninput = updateLogoPosition;
  positionAreaAvailableCentimeterAxisY.oninput = updateLogoPosition;
  widthAreaAvailableInCentimeter.oninput = updateLogoPosition;
  heightAreaAvailableInCentimeter.oninput = updateLogoPosition;

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

  setimgsrc.onclick = function () {
    productimg.setAttribute("src", imgsrc.value);
    imgsrc.value = "";
  };

  scalevalue.innerHTML = scaleInput.value;
  filterImage.href = "filter.svg";

  updateLogoPosition();
};
