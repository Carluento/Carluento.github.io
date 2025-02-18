 <script>
    // JavaScript array of car makes and models
    const carData = [
      { make: "Toyota", models: ["Corolla", "Camry", "Prius", "Highlander"] },
      { make: "Ford", models: ["Focus", "Mustang", "Fiesta", "Explorer"] },
      { make: "Chevrolet", models: ["Malibu", "Camaro", "Cruze", "Tahoe"] },
      { make: "Honda", models: ["Civic", "Accord", "Pilot", "CR-V"] }
    ];

    // Populate the make dropdown menu dynamically
    function populateMakes() {
      const makeDropdown = document.getElementById('make');
      carData.forEach(car => {
        const option = document.createElement('option');
        option.value = car.make.toLowerCase();
        option.textContent = car.make;
        makeDropdown.appendChild(option);
      });
    }

    // Update the model dropdown when a make is selected
    function updateModels() {
      const make = document.getElementById('make').value;
      const modelDropdown = document.getElementById('model');
      
      // Clear existing model options
      modelDropdown.innerHTML = '<option value="">--Select Model--</option>';
      
      if (make) {
        // Find the selected make and populate the models
        const selectedCar = carData.find(car => car.make.toLowerCase() === make);
        selectedCar.models.forEach(model => {
          const option = document.createElement('option');
          option.value = model.toLowerCase();
          option.textContent = model;
          modelDropdown.appendChild(option);
        });
      }
    }

    // Call populateMakes to initialize the make dropdown
    populateMakes();
  </script>
</body>
</html>
