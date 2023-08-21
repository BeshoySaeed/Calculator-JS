let submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", () => {
  let firstInput = document.querySelector("#first-number").value;
  let secondInput = document.querySelector("#second-number").value;
  let operator = document.querySelector("#select").value;
  let para = document.querySelector("p");

  if (firstInput || secondInput) {
    para.innerText = `Your answer is ${eval(
      firstInput + operator + secondInput
    )}`;
  } else {
    para.innerText = `not valid number`;
  }
});
