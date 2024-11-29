// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('predictionArea').style.display = 'block';
});

// Show Diabetes Prediction Form
function showDiabetesForm() {
    document.getElementById('diseaseForm').innerHTML = `
        <h3>Diabetes Prediction</h3>
        <label for="glucose">Glucose Level:</label>
        <input type="number" id="glucose" required>
        <label for="bmi">BMI:</label>
        <input type="number" id="bmi" required>
        <label for="age">Age:</label>
        <input type="number" id="age" required>
        <button onclick="predictDiabetes()">Predict Diabetes</button>
    `;
    document.getElementById('diseaseForm').style.display = 'block';
    document.getElementById('prevention').style.display = 'none';
}

// Show Heart Disease Prediction Form
function showHeartDiseaseForm() {
    document.getElementById('diseaseForm').innerHTML = `
        <h3>Heart Disease Prediction</h3>
        <label for="age">Age:</label>
        <input type="number" id="age" required>
        <label for="bloodPressure">Blood Pressure:</label>
        <input type="number" id="bloodPressure" required>
        <label for="cholesterol">Cholesterol Level:</label>
        <input type="number" id="cholesterol" required>
        <button onclick="predictHeartDisease()">Predict Heart Disease</button>
    `;
    document.getElementById('diseaseForm').style.display = 'block';
    document.getElementById('prevention').style.display = 'none';
}

// Predict Diabetes
function predictDiabetes() {
    const glucose = parseInt(document.getElementById('glucose').value);
    const bmi = parseFloat(document.getElementById('bmi').value);
    const age = parseInt(document.getElementById('age').value);

    // Validate inputs
    if (isNaN(glucose) || isNaN(bmi) || isNaN(age)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    // Simple prediction logic (placeholder)
    let riskLevel = glucose > 140 || age > 50 ? "High risk" : "Low risk";

    document.getElementById('prevention').innerHTML = `
        <h4>Diabetes Prediction Result:</h4>
        <p>Your diabetes risk prediction is: ${riskLevel}</p>
        <h4>Prevention Tips:</h4>
        <ul>
            <li>Maintain a healthy weight.</li>
            <li>Engage in regular physical activity.</li>
            <li>Eat a balanced diet low in sugar and refined carbs.</li>
            <li>Regularly monitor your blood sugar levels.</li>
        </ul>
    `;
    document.getElementById('prevention').style.display = 'block';
}

// Predict Heart Disease
function predictHeartDisease() {
    const age = parseInt(document.getElementById('age').value);
    const bloodPressure = parseInt(document.getElementById('bloodPressure').value);
    const cholesterol = parseInt(document.getElementById('cholesterol').value);

    // Validate inputs
    if (isNaN(age) || isNaN(bloodPressure) || isNaN(cholesterol)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    // Simple prediction logic (placeholder)
    let riskLevel = bloodPressure > 130 || cholesterol > 240 ? "High risk" : "Low risk";

    document.getElementById('prevention').innerHTML = `
        <h4>Heart Disease Prediction Result:</h4>
        <p>Your heart disease risk prediction is: ${riskLevel}</p>
        <h4>Prevention Tips:</h4>
        <ul>
            <li>Maintain a healthy diet rich in fruits and vegetables.</li>
            <li>Regular physical exercise.</li>
            <li>Avoid smoking and limit alcohol consumption.</li>
            <li>Keep blood pressure and cholesterol levels in check.</li>
        </ul>
    `;
    document.getElementById('prevention').style.display = 'block';
}
