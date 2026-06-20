console.log("I am a hacker");
console.log("I am a heckar");

setTimeout(() => {
    console.log("I am delayed");

}, 2000)

console.log("The end");

const fn = () => {
  console.log("Nothing");
  
}

const useCallback = (arg, fn) => {
  console.log(arg);
  fn()
}
// useCallback("Hello", fn);
function callback(name){
    console.log("Script loaded");
    console.log(name);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;

    sc.onload = () => {
        callback("harry");
    };

    document.head.append(sc);
}

loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
    callback
);