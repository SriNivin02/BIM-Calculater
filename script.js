document.getElementById('mybutton').addEventListener('click', function(event) {
    event.preventDefault();
    // Get values from the input fields
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');

    // Basic validation check
    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter valid values for both weight and height.</p>";
        return;
    }

    // Convert height from centimeters to meters
    const heightM = heightCm / 100;

    // Calculate BMI
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    // Determine the health category feedback
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display the result
    resultDiv.innerHTML = `<h3>Your BMI is: ${bmi}</h3><p>Category: <strong>${category}</strong></p>`;
});
