window.onload = function () {
  const scaleInput = document.getElementById("scale");
  const scalevalue = document.getElementById("value");
  const displacementScale = document.getElementById("displacement");
  const filterImage = document.getElementById("filterImage");
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");

  const productimg = document.getElementById("productimg");
  const imgsrc = document.getElementById("imgsrc");
  const setimgsrc = document.getElementById("setimgsrc");

  const previewcontainer = document.getElementById("previewcontainer");
  const appliedFilter = document.getElementById("appliedFilter");
  const svgWithAppliedFilter = document.getElementById("svgWithAppliedFilter");

  const INCH = 2.54;
  const DPI = 72;

  const positionAreaAvailableCentimeterAxisX = document.getElementById(
    "positionAreaAvailableCentimeterAxisX"
  );
  const positionAreaAvailableCentimeterAxisY = document.getElementById(
    "positionAreaAvailableCentimeterAxisY"
  );
  const widthAreaAvailableInCentimeter = document.getElementById(
    "widthAreaAvailableInCentimeter"
  );
  const heightAreaAvailableInCentimeter = document.getElementById(
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

    const width =
      (Number(areaWidth) / INCH_DPI / imgNaturalWidth) * previewSize.width;

    const height =
      (Number(areaHeight) / INCH_DPI / imgNaturalHeight) * previewSize.height;

    appliedFilter.setAttribute(
      "style",
      `left:${left.toFixed(2)}px;top:${top.toFixed(2)}px;width:${width.toFixed(
        2
      )}px;height:${height.toFixed(2)}px;`
    );

    svgWithAppliedFilter.setAttribute("style", "z-index:999999");
    svgWithAppliedFilter.setAttribute("width", width.toFixed(0));
    svgWithAppliedFilter.setAttribute("height", height.toFixed(0));

    filterImage.setAttribute("width", width);
    filterImage.setAttribute("height", height);
  }

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

  (function initialLoad() {
    positionAreaAvailableCentimeterAxisX.oninput = updateLogoPosition;
    positionAreaAvailableCentimeterAxisY.oninput = updateLogoPosition;
    widthAreaAvailableInCentimeter.oninput = updateLogoPosition;
    heightAreaAvailableInCentimeter.oninput = updateLogoPosition;
    scalevalue.innerHTML = scaleInput.value;
    displacementScale.scale.baseVal = scaleInput.value;
    filterImage.href = "filter.svg";
    updateLogoPosition();
  })();
};
