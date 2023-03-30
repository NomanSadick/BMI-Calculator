const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

function calculateBMI() {
  const weight = Number(document.getElementById("weightInput").value);
  const height = Number(document.getElementById("heightInput").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.innerHTML = "Please enter valid values for weight and height";
    return;
  }

  const bmi = weight / (height * height);
  const description = getBMIDescription(bmi);
  resultDiv.innerHTML = `Your BMI is <span>${bmi.toFixed(2)}</span><br><p class="${description.toLowerCase()}">${description}</p>`;
}

function getBMIDescription(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

calculateBtn.addEventListener("click", calculateBMI);