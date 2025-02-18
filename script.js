function setCarOfTheDay() {
    fetch("https://placeholder-api.com/getallmakes") // Placeholder for NHTSA API
        .then(response => response.json())
        .then(data => {
            const today = new Date();
            const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

            // Use the dayOfYear as an index to pick a make consistently
            const makeIndex = dayOfYear % data.Results.length;
            const selectedMake = data.Results[makeIndex];

            return fetch(`https://placeholder-api.com/getmodels/${selectedMake.Make_Name}`); // Placeholder for models API
        })
        .then(response => response.json())
        .then(data => {
            if (data.Results.length === 0) throw new Error("No models found for selected make");

            const today = new Date();
            const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
            
            // Use dayOfYear to consistently pick a model
            const modelIndex = dayOfYear % data.Results.length;
            const selectedModel = data.Results[modelIndex];

            // Display the car of the day
            document.getElementById("car-image-display").src = `https://source.unsplash.com/400x300/?${selectedModel.Model_Name},car`;
            document.getElementById("car-image-display").alt = `${selectedModel.Model_Name}`;

            // Store the correct answer
            correctMake = selectedModel.Make_Name;
            correctModel = selectedModel.Model_Name;
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
