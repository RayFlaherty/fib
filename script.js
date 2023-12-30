const btnGo = document.getElementById("go");

btnGo.onclick = myClickHandler;

function myClickHandler() {
  const intX = document.getElementById("x").value;
  console.log(intX);
  for (var i = intX + 1; i <= 20; i++) {
    console.log(i);
  }
}
