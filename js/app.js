const generatedPassword = document.querySelector(".generated-password");
const rangeCounter = document.querySelector("#count-range");
const strengthStatus = document.querySelector(".strength-status");
const charactersCount = document.querySelector(".characters-count");
const useUppercase = document.querySelector("#use-uppercase");
const useLowercases = document.querySelector("#use-lowercases");
const useNumbers = document.querySelector("#use-numbers");
const useSymbols = document.querySelector("#use-symbols");
const generateButton = document.querySelector(".generate-button");
const toast = document.getElementById("toast");

const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const special_characters = "!@#$%^&*";
generatedPassword.innerHTML = "";
let currentRange = 10;
let finalPassword = "";
let finalloopEntry = "";
let strengthStatusCount = 0;

function genreatPassword() {
  if (
    useUppercase.checked ||
    useLowercases.checked ||
    useNumbers.checked ||
    useSymbols.checked
  ) {
    if (useUppercase.checked) finalloopEntry += uppercase_letters;
    if (useUppercase.checked) strengthStatusCount += 1;

    if (useLowercases.checked) finalloopEntry += lowercase_letters;
    if (useLowercases.checked) strengthStatusCount += 1;

    if (useNumbers.checked) finalloopEntry += digits;
    if (useNumbers.checked) strengthStatusCount += 1;

    if (useSymbols.checked) finalloopEntry += special_characters;
    if (useSymbols.checked) strengthStatusCount += 1;

    strengthStatus.classList.remove("very-bad", "bad", "good", "strong");

    switch (strengthStatusCount) {
      case 1:
        strengthStatus.classList.add("very-bad");
        break;
      case 2:
        strengthStatus.classList.add("bad");
        break;
      case 3:
        strengthStatus.classList.add("good");
        break;
      default:
        strengthStatus.classList.add("strong");
        break;
    }

    for (let i = 0; i < currentRange; i++) {
      const randomTxt = Math.floor(Math.random() * finalloopEntry.length);
      finalPassword += finalloopEntry[randomTxt];
    }
    generatedPassword.innerHTML = finalPassword;

    finalPassword = "";
    strengthStatusCount = 0;
  } else {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
}

generateButton.addEventListener("click", genreatPassword);
rangeCounter.addEventListener("change", function () {
  currentRange = rangeCounter.value;
  charactersCount.innerHTML = currentRange;
});
