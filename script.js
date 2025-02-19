document.addEventListener("DOMContentLoaded", function () {
    fetchCarMakes();
    setCarOfTheDay();
});

// Function to fetch car makes from the NHTSA API
function fetchCarMakes() {
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
        .then(response => response.json())
        .then(data => {
            const makeDropdown = document.getElementById("makeDropdown");
            data.Results.forEach(make => {
                let option = document.createElement("option");
                option.value = make.Make_Name;
                option.textContent = make.Make_Name;
                makeDropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error fetching makes:", error));
}

// Event listener for make selection
document.getElementById("makeDropdown").addEventListener("change", function () {
    const selectedMake = this.value;
    fetchCarModels(selectedMake);
});

// Function to fetch models based on selected make
function fetchCarModels(make) {
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`)
        .then(response => response.json())
        .then(data => {
            const modelDropdown = document.getElementById("modelDropdown");
            modelDropdown.innerHTML = '<option value="">--Select Model--</option>'; // Reset dropdown
            data.Results.forEach(model => {
                let option = document.createElement("option");
                option.value = model.Model_Name;
                option.textContent = model.Model_Name;
                modelDropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error fetching models:", error));
}

// Function to randomly select a car of the day and display it
function setCarOfTheDay() {
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
        .then(response => response.json())
        .then(data => {
            const randomMake = data.Results[Math.floor(Math.random() * data.Results.length)];
            return fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${randomMake.Make_Name}?format=json`);
        })
        .then(response => response.json())
        .then(data => {
            const randomModel = data.Results[Math.floor(Math.random() * data.Results.length)];
            document.getElementById("car-image-display").src = `https://source.unsplash.com/400x300/?${randomModel.Model_Name},car`;
            document.getElementById("car-image-display").alt = `${randomModel.Model_Name}`;
        })
        .catch(error => console.error("Error fetching car of the day:", error));
}

// Event listener for the "make" dropdown change
const makeDropdown = document.getElementById("makeDropdown");
makeDropdown.addEventListener("change", function() {
    const selectedMakeId = this.value;
    if (selectedMakeId) {
        fetchModels(selectedMakeId);  // Fetch models when make is selected
    } else {
        document.getElementById("modelDropdown").innerHTML = '<option value="">--Select Model--</option>'; // Clear models
    }
});

// Function to check the user's answer and display incorrect guesses
function checkAnswer() {
    const selectedMake = makeDropdown.value;
    const selectedModel = modelDropdown.value;
    const feedbackElement = document.getElementById("feedback");

    if (!selectedMake || !selectedModel) {
        feedbackElement.innerHTML = "Please select both a make and a model!";
        return;
    }

    attempts++;

    if (selectedMake === correctMake && selectedModel === correctModel) {
        feedbackElement.innerHTML = `<span style="color: green;">Correct! Today's car is a ${correctMake} ${correctModel}.</span>`;
    } else {
        let feedbackText;
        if (selectedMake === correctMake) {
            feedbackText = `<span style="color: orange;">You're close! The make is correct, but the model is wrong.</span>`;
        } else {
            feedbackText = `<span style="color: red;">Incorrect! Try again.</span>`;
        }
        
        feedbackElement.innerHTML = feedbackText;

        // Display the "Nice try!" message after 5 attempts
        if (attempts >= 5) {
            feedbackElement.innerHTML = "Nice try! Come back tomorrow for a new car!";
        }
    }

    // Automatically reveal the answer if 5 incorrect attempts are reached
    if (attempts >= 5) {
        feedbackElement.innerHTML = `The correct answer is: ${correctMake} ${correctModel}.`;
    }
}

// Function to reset the game when a new car of the day is selected
function resetGame() {
    attempts = 0;
    document.getElementById("feedback").innerHTML = ""; // Clear previous feedback
    document.getElementById("car-image-display").src = ""; // Clear the car image
}

// Initialize the page with makes, models, and car of the day
window.onload = function() {
    fetchMakes(); // Fetch car makes on page load
    fetchCarOfTheDay(); // Fetch and display the car of the day
};
