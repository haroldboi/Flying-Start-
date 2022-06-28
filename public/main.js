console.log("Hello World")
const btn = document.getElementById('hello-btn')

btn.addEventListener('click', () => {
  window.alert('Hi!')
})

const switcher = document.getElementById("switch");
switcher.addEventListener('click', () => {
  let newImage =document.getElementById("imageNew").value;
  if (newImage !== ""){
    document.getElementById("image").src = newImage;
  } else {
    document.getElementById("imagePhrase").innerHTML = "Enter a valid URL to change the image";
    }
})

const enter = document.getElementById('enter');
enter.addEventListener('click', () => {
  var userName = document.getElementById("name").value;
  var nameT = `Hello ${userName}!`
document.getElementById("namePop").innerHTML = nameT;
})
