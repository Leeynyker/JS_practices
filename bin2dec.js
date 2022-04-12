const button = document.getElementById("btn");
const validate = document.getElementById("validate-info");

button.addEventListener("click", () => {
  let flag = true;
  let binary = document.getElementById("bin").value;
  if (binary == "") {
    validate.innerHTML = "Enter a binary number";
    flag = false;
  } else {
    binary.split("").map((character) => {
      if (character !== "0" && character !== "1") {
        validate.innerHTML = "Entered value isn't binary";
        flag = false;
      }
    });
  }
  if (flag) {
    let decimal = parseInt(binary, 2);
    validate.innerHTML = "";
    document.getElementById("dec").value = decimal;
  }
});
