console.log("Hello World")
const btn = document.getElementById('hello-btn')

btn.addEventListener('click', () => {
  window.alert('Hi!')
})

const enter = document.getElementById('enter');
enter.addEventListener('click', () => {
  var userName = document.getElementById("name").value;
  var nameT = `Hello ${userName}!`
document.getElementById("namePop").innerHTML = nameT;
})
