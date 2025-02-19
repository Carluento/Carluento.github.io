// Fetch car makes from the API
async function fetchMakes() {
    try {
        const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json&page=2');
        const data = await response.json();
        
        // Populate the "make" dropdown
        const makeDropdown = document.getElementById("makeDropdown");
        data.Makes.forEach(make => {
            const option = document.createElement("option");
            option.value = make.make_id;
            option.textContent = make.make_display;
            makeDropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching makes:", error);
    }
}

// Fetch models based on the selected make
async function fetchModels(makeId) {
    try {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json${makeId}`);
        const data = await response.json();
        
        // Populate the "model" dropdown
        const modelDropdown = document.getElementById("modelDropdown");
        modelDropdown.innerHTML = '<option value="">--Select Model--</option>'; // Clear existing models
        
        data.Models.forEach(model => {
            const option = document.createElement("option");
            option.value = model.model_id;
            option.textContent = model.model_name;
            modelDropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching models:", error);
    }
}

// Function to fetch a random car of the day (called once on page load)
async function fetchCarOfTheDay() {
    try {
        // Fetch a random car from the API
        const response = await fetch('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getRandomCar');
        const data = await response.json();

        // Display the car of the day image
        const car = data.Car;
        correctMake = car.make;
        correctModel = car.model;
        correctImage = car.image;  // Assuming the API returns an image URL

        // Set the car image for the "Car of the Day"
        document.getElementById("car-image-display").src = correctImage;
    } catch (error) {
        console.error("Error fetching car of the day:", error);
    }
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
