document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const inputTemp = document.getElementById("inputTemp");
  const conversionType = document.getElementById("conversionType");
  const resultElement = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const inputValue = parseFloat(inputTemp.value);
    if (isNaN(inputValue)) {
      resultElement.textContent = "Please enter a valid number.";
      return;
    }

    const selectedConversion = conversionType.value;
    let convertedValue;

    switch (selectedConversion) {
      case "C2F":
        convertedValue = (inputValue * 9) / 5 + 32;
        break;
      case "F2C":
        convertedValue = ((inputValue - 32) * 5) / 9;
        break;
      case "C2K":
        convertedValue = inputValue + 273.15;
        break;
      default:
        resultElement.textContent = "Invalid conversion type.";
        return;
    }

    resultElement.textContent = `Converted value: ${convertedValue.toFixed(2)}`;
  });
});
