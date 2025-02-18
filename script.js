// Initialize global variables for correct car make and model
let correctMake;
let correctModel;
let correctImage;
let attempts = 0;

// Function to preload images
function preloadImages(carData) {
    carData.forEach(car => {
        car.models.forEach(model => {
            const img = new Image();
            img.src = model.image;
        });
    });
}

// Fetch car makes from the API
async function fetchMakes() {
    try {
        const response = await fetch('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes');
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
        const response = await fetch(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=${makeId}`);
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

// Event listener for the "make" dropdown change
const makeDropdown = document.getElementById("makeDropdown");
makeDropdown.addEventListener("change", function() {
    const selectedMakeId = this.value;
    if (selectedMakeId) {
        fetchModels(selectedMakeId);
    } else {
        document.getElementById("modelDropdown").innerHTML = '<option value="">--Select Model--</option>'; // Clear models
    }
});

// Function to check the user's answer and display incorrect guesses
function checkAnswer() {
    const selectedMake = makeDropdown.value;
    const selectedModel = document.getElementById("modelDropdown").value;
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
    localStorage.removeItem("gameOver");
    localStorage.removeItem("revealedCar");
    attempts = 0;
    document.getElementById("feedback").innerHTML = ""; // Clear previous feedback
}

// Initialize the page with makes and models
window.onload = function() {
    fetchMakes(); // Fetch car makes on page load
    getRandomCar(); // Fetch random car for the day (as before)
};
