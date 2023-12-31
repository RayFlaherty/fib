const btnGo = document.getElementById("go");

btnGo.onclick = myClickHandler;

function myClickHandler() {
  const intX = Number(document.getElementById("x").value);
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (var num = n1 + n2; num <= intX; num++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    document.write(num + ". " + nextTerm);
    document.write("</br>");
  }
}
