const root = document.querySelector(":root");
const checkboxFull = document.querySelector("input[name=theme]");
const checkboxMobile = document.querySelector("input[name=theme_mobile]");

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style);


const whiteColors = {
    whiteColor: getStyle(root, "--white-color"),
    firstColor: getStyle(root, "--first-color"),
    secondColor: getStyle(root, "--second-color"),
    semiWhiteColor: getStyle(root, "--semi-whitecolor")
};

const darkColors = {
    whiteColor: getStyle(root, "--second-color"),
    firstColor: getStyle(root, "--first-color"),
    secondColor: getStyle(root, "--white-color"),
    semiWhiteColor: getStyle(root, "--semi-darkcolor")
};

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) =>{
    Object.keys(colors).map(key =>
        root.style.setProperty(transformKey(key), colors[key])
    );
};


checkboxFull.addEventListener("change", ({target}) =>{
    target.checked ? changeColors(darkColors) : changeColors(whiteColors);
});
checkboxMobile.addEventListener("change", ({target}) =>{
    target.checked ? changeColors(darkColors) : changeColors(whiteColors);
});