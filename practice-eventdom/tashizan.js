let b = document.querySelector("button#calc");

b.addEventListener("click", function () {

let lt = document.querySelector("input#left").value;
let rt = document.querySelector("input#right").value;
let ln = parseInt(lt);
let rn = parseInt(rt);
let answer = ln + rn;

  document.querySelector("#answer").textContent = answer;

});