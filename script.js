const carData = [
    // Alfa Romeo
    {
        make: "Alfa Romeo",
        models: [
            { name: "Giulia", image: "https://example.com/alfaromeo_giulia.jpg" },
            { name: "Stelvio", image: "https://example.com/alfaromeo_stelvio.jpg" },
            { name: "4C", image: "https://example.com/alfaromeo_4c.jpg" },
            { name: "GTV6", image: "https://example.com/alfaromeo_gtv6.jpg" }
        ]
    },
    // Audi
    {
        make: "Audi",
        models: [
            { name: "A4", image: "https://example.com/audi_a4.jpg" },
            { name: "Q7", image: "https://example.com/audi_q7.jpg" },
            { name: "A3", image: "https://example.com/audi_a3.jpg" },
            { name: "Q5", image: "https://example.com/audi_q5.jpg" },
            { name: "A8", image: "https://example.com/audi_a8.jpg" },
            { name: "RS7", image: "https://example.com/audi_rs7.jpg" },
            { name: "R8", image: "https://example.com/audi_r8.jpg" }
        ]
    },
    // Subaru (new addition)
    {
        make: "Subaru",
        models: [
            { name: "Outback", image: "https://example.com/subaru_outback.jpg" },
            { name: "Impreza", image: "https://example.com/subaru_impreza.jpg" },
            { name: "Forester", image: "https://example.com/subaru_forester.jpg" },
            { name: "BRZ", image: "https://example.com/subaru_brz.jpg" },
            { name: "Crosstrek", image: "https://example.com/subaru_crosstrek.jpg" }
        ]
    },
    // Buick
    {
        make: "Buick",
        models: [
            { name: "Encore", image: "https://example.com/buick_encore.jpg" },
            { name: "Enclave", image: "https://example.com/buick_enclave.jpg" },
            { name: "LaCrosse", image: "https://example.com/buick_lacrosse.jpg" },
            { name: "Regal", image: "https://example.com/buick_regal.jpg" }
        ]
    },
    // Cadillac
    {
        make: "Cadillac",
        models: [
            { name: "CTS", image: "https://example.com/cadillac_cts.jpg" },
            { name: "Escalade", image: "https://example.com/cadillac_escalade.jpg" },
            { name: "ATS", image: "https://example.com/cadillac_ats.jpg" },
            { name: "XT5", image: "https://example.com/cadillac_xt5.jpg" }
        ]
    },
    // Chrysler
    {
        make: "Chrysler",
        models: [
            { name: "Pacifica", image: "https://example.com/chrysler_pacifica.jpg" },
            { name: "300", image: "https://example.com/chrysler_300.jpg" }
        ]
    },
    // Dodge
    {
        make: "Dodge",
        models: [
            { name: "Charger", image: "https://example.com/dodge_charger.jpg" },
            { name: "Challenger", image: "https://example.com/dodge_challenger.jpg" },
            { name: "Durango", image: "https://example.com/dodge_durango.jpg" }
        ]
    },
    // Ferrari
    {
        make: "Ferrari",
        models: [
            { name: "LaFerrari", image: "https://example.com/laferrari.jpg" },
            { name: "488 GTB", image: "https://example.com/488gtb.jpg" },
            { name: "F8 Tributo", image: "https://example.com/f8tributo.jpg" },
            { name: "Portofino", image: "https://example.com/portofino.jpg" },
            { name: "GTC4Lusso", image: "https://example.com/gtc4lusso.jpg" },
            { name: "California T", image: "https://example.com/californiat.jpg" }
        ]
    },
    // Genesis
    {
        make: "Genesis",
        models: [
            { name: "G70", image: "https://example.com/genesis_g70.jpg" },
            { name: "G80", image: "https://example.com/genesis_g80.jpg" },
            { name: "G90", image: "https://example.com/genesis_g90.jpg" }
        ]
    },
    // Infiniti
    {
        make: "Infiniti",
        models: [
            { name: "Q50", image: "https://example.com/infiniti_q50.jpg" },
            { name: "QX60", image: "https://example.com/infiniti_qx60.jpg" },
            { name: "QX80", image: "https://example.com/infiniti_qx80.jpg" },
            { name: "Q70", image: "https://example.com/infiniti_q70.jpg" },
            { name: "QX50", image: "https://example.com/infiniti_qx50.jpg" }
        ]
    },
    // Hyundai
    {
        make: "Hyundai",
        models: [
            { name: "Elantra", image: "https://example.com/hyundai_elantra.jpg" },
            { name: "Tucson", image: "https://example.com/hyundai_tucson.jpg" },
            { name: "Santa Fe", image: "https://example.com/hyundai_santafe.jpg" },
            { name: "Kona", image: "https://example.com/hyundai_kona.jpg" }
        ]
    },
    // Lexus
    {
        make: "Lexus",
        models: [
            { name: "RX", image: "https://example.com/lexus_rx.jpg" },
            { name: "ES", image: "https://example.com/lexus_es.jpg" },
            { name: "LS", image: "https://example.com/lexus_ls.jpg" },
            { name: "NX", image: "https://example.com/lexus_nx.jpg" },
            { name: "LC", image: "https://example.com/lexus_lc.jpg" },
            { name: "IS", image: "https://example.com/lexus_is.jpg" }
        ]
    },
    // Lincoln
    {
        make: "Lincoln",
        models: [
            { name: "Nautilus", image: "https://example.com/lincoln_nautilus.jpg" },
            { name: "Navigator", image: "https://example.com/lincoln_navigator.jpg" },
            { name: "Continental", image: "https://example.com/lincoln_continental.jpg" }
        ]
    },
    // Mitsubishi
    {
        make: "Mitsubishi",
        models: [
            { name: "Outlander", image: "https://example.com/mitsubishi_outlander.jpg" },
            { name: "Eclipse", image: "https://example.com/mitsubishi_eclipse.jpg" },
            { name: "Lancer", image: "https://example.com/mitsubishi_lancer.jpg" },
            { name: "Mirage", image: "https://example.com/mitsubishi_mirage.jpg" },
            { name: "Pajero", image: "https://example.com/mitsubishi_pajero.jpg" }
        ]
    },
    // Nissan
    {
        make: "Nissan",
        models: [
            { name: "GT-R", image: "https://example.com/nissan_gt-r.jpg" },
            { name: "370Z", image: "https://example.com/nissan_370z.jpg" },
            { name: "Altima", image: "https://example.com/nissan_altima.jpg" },
            { name: "Maxima", image: "https://example.com/nissan_maxima.jpg" },
            { name: "Leaf", image: "https://example.com/nissan_leaf.jpg" }
        ]
    },
    // Saab
    {
        make: "Saab",
        models: [
            { name: "9-3", image: "https://example.com/saab_9-3.jpg" },
            { name: "9-5", image: "https://example.com/saab_9-5.jpg" }
        ]
    },
    // Saleen
    {
        make: "Saleen",
        models: [
            { name: "S7", image: "https://example.com/saleen_s7.jpg" },
            { name: "Mustang", image: "https://example.com/saleen_mustang.jpg" }
        ]
    },
    // Spyker
    {
        make: "Spyker",
        models: [
            { name: "C8 Aileron", image: "https://example.com/spyker_c8aileron.jpg" },
            { name: "C8 Laviolette", image: "https://example.com/spyker_c8laviolette.jpg" }
        ]
    },
    // Studebaker
    {
        make: "Studebaker",
        models: [
            { name: "Avanti", image: "https://example.com/studebaker_avanti.jpg" },
            { name: "Commander", image: "https://example.com/studebaker_commander.jpg" }
        ]
    },
    // TVR
    {
        make: "TVR",
        models: [
            { name: "Tuscan", image: "https://example.com/tvr_tuscan.jpg" },
            { name: "Sagaris", image: "https://example.com/tvr_sagaris.jpg" }
        ]
    },
    // Volvo
    {
        make: "Volvo",
        models: [
            { name: "XC90", image: "https://example.com/volvo_xc90.jpg" },
            { name: "S60", image: "https://example.com/volvo_s60.jpg" },
            { name: "V90", image: "https://example.com/volvo_v90.jpg" }
        ]
    },
    // Yugo
    {
        make: "Yugo",
        models: [
            { name: "GV", image: "https://example.com/yugo_gv.jpg" },
            { name: "Cabriolé", image: "https://example.com/yugo_cabriole.jpg" }
        ]
    }
];

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

// Function to randomly select the car for the day (or retrieve from localStorage)
function getRandomCar() {
    resetGame(); // Reset game-over state when a new car is chosen
    const storedCar = JSON.parse(localStorage.getItem("dailyCar"));
    const storedDate = localStorage.getItem("dailyCarDate");
    const currentDate = new Date().toDateString();

    if (storedCar && storedDate === currentDate) {
        correctMake = storedCar.make;
        correctModel = storedCar.model;
        correctImage = storedCar.image;
    } else {
        const randomCar = carData[Math.floor(Math.random() * carData.length)];
        const randomModel = randomCar.models[Math.floor(Math.random() * randomCar.models.length)];
        
        correctMake = randomCar.make;
        correctModel = randomModel.name;
        correctImage = randomModel.image;
        
        localStorage.setItem("dailyCar", JSON.stringify({ make: correctMake, model: correctModel, image: correctImage }));
        localStorage.setItem("dailyCarDate", currentDate);
    }

    document.getElementById("car-image-display").src = correctImage;
}

// Populate the "make" dropdown
const makeDropdown = document.getElementById("makeDropdown");
carData.forEach(car => {
    const option = document.createElement("option");
    option.value = car.make;
    option.textContent = car.make;
    makeDropdown.appendChild(option);
});

// Function to populate the "model" dropdown based on the selected make
const modelDropdown = document.getElementById("modelDropdown");
makeDropdown.addEventListener("change", function () {
    const selectedMake = this.value;
    const selectedCar = carData.find(car => car.make === selectedMake);
    modelDropdown.innerHTML = '<option value="">--Select Model--</option>';
    if (selectedCar) {
        selectedCar.models.forEach(model => {
            const option = document.createElement("option");
            option.value = model.name;
            option.textContent = model.name;
            modelDropdown.appendChild(option);
        });
    }
});

// Function to check the user's answer and display incorrect guesses
function checkAnswer() {
    const selectedMake = makeDropdown.value;
    const selectedModel = modelDropdown.value;
    const feedbackElement = document.getElementById("feedback");
    const guessList = document.getElementById("incorrect-guesses");

    if (!selectedMake || !selectedModel) {
        feedbackElement.innerHTML = "Please select both a make and a model!";
        return;
    }

    // Prevent guessing if the game has already ended
    if (localStorage.getItem("gameOver") === "true") {
        return;
    }

    attempts++;

    if (selectedMake === correctMake && selectedModel === correctModel) {
        feedbackElement.innerHTML = `<span style="color: green; transition: 0.5s;">Correct! Today's car is a ${correctMake} ${correctModel}.</span>`;
    } else {
        let feedbackText;
        if (selectedMake === correctMake) {
            feedbackText = `<span style="color: orange; transition: 0.5s;">You're close! The make is correct, but the model is wrong.</span>`;
        } else {
            feedbackText = `<span style="color: red; transition: 0.5s;">Incorrect! Try again.</span>`;
        }
        
        feedbackElement.innerHTML = feedbackText;

        // Append incorrect guess to the list
        const guessItem = document.createElement("p");
        guessItem.textContent = `${selectedMake} ${selectedModel}`;
        guessList.appendChild(guessItem);
    }

    // Automatically reveal the answer if 5 incorrect attempts are reached
    if (attempts >= 5) {
        revealAnswer();
        return;
    }
}

// Function to reveal the answer and show the end-game modal
function revealAnswer() {
    document.getElementById("revealed-car").textContent = `${correctMake} ${correctModel}`;
    document.getElementById("end-game-modal").classList.remove("hidden");
    document.getElementById("end-game-overlay").classList.remove("hidden");

    // Disable dropdowns and submit button
    document.getElementById("makeDropdown").disabled = true;
    document.getElementById("modelDropdown").disabled = true;
    document.getElementById("checkAnswerButton").disabled = true;

    // Store the game-over state in localStorage
    localStorage.setItem("gameOver", "true");
    localStorage.setItem("revealedCar", `${correctMake} ${correctModel}`);
}

// Function to check if the game is already over
function checkGameOver() {
    if (localStorage.getItem("gameOver") === "true") {
        revealAnswer();
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById("end-game-modal").classList.add("hidden");
    document.getElementById("end-game-overlay").classList.add("hidden");
}

// Function to reset the game when a new car of the day is selected
function resetGame() {
    localStorage.removeItem("gameOver");
    localStorage.removeItem("revealedCar");
    attempts = 0;
    document.getElementById("incorrect-guesses").innerHTML = ""; // Clear previous guesses
}

// Initialize the page with preloaded images and check game state
window.onload = function () {
    preloadImages(carData);
    getRandomCar();
    checkGameOver();
};
