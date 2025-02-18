 <script>
    // JavaScript array of car makes and models
   
  const carData = [
  {
    make: "Ferrari", 
    models: ["LaFerrari", "488 GTB", "F8 Tributo", "California T", "812 Superfast"]
  },
  {
    make: "Lamborghini", 
    models: ["Aventador", "Huracán", "Centenario", "Urus", "Egoista"]
  },
  {
    make: "Bugatti", 
    models: ["Veyron", "Chiron", "Divo", "La Voiture Noire", "EB110"]
  },
  {
    make: "McLaren", 
    models: ["P1", "720S", "570S", "Speedtail", "Sabre"]
  },
  {
    make: "Porsche", 
    models: ["911 Turbo S", "918 Spyder", "Cayman GT4", "Panamera Turbo", "Taycan"]
  },
  {
    make: "Koenigsegg", 
    models: ["Agera RS", "Jesko", "Regera", "One:1", "Gemera"]
  },
  {
    make: "Pagani", 
    models: ["Huayra", "Zonda", "Huayra Roadster", "Zonda R", "Huayra BC"]
  },
  {
    make: "Aston Martin", 
    models: ["Valkyrie", "DB11", "Vantage AMR", "One-77", "DBS Superleggera"]
  },
  {
    make: "Tesla", 
    models: ["Roadster", "Model S Plaid", "Model X", "Cybertruck", "Model 3"]
  },
  {
    make: "Alfa Romeo", 
    models: ["4C", "Giulia Quadrifoglio", "Stelvio Quadrifoglio", "8C Competizione", "GTV6"]
  },
  {
    make: "Lotus", 
    models: ["Exige", "Evora", "Elise", "Lotus 3-Eleven", "Esprit"]
  },
  {
    make: "Ferrari", 
    models: ["F40", "F50", "Enzo", "308 GTB", "512 TR"]
  },
  {
    make: "Jaguar", 
    models: ["F-Type SVR", "XE SV Project 8", "XJ220", "E-Type", "I-PACE"]
  },
  {
    make: "Rolls-Royce", 
    models: ["Phantom", "Wraith", "Cullinan", "Dawn", "Ghost"]
  },
  {
    make: "BMW", 
    models: ["i8", "M4 GTS", "M5", "Z8", "750i"]
  },
  {
    make: "Chevrolet", 
    models: ["Corvette ZR1", "Camaro ZL1", "Chevelle SS", "El Camino", "Silverado 1500"]
  },
  {
    make: "Toyota", 
    models: ["Supra A90", "Land Cruiser 70", "GT86", "Lexus LFA", "Celica GT-Four"]
  },
  {
    make: "Ford", 
    models: ["GT", "Shelby Mustang GT500", "Focus RS", "F-150 Raptor", "Bronco"]
  },
  {
    make: "Nissan", 
    models: ["GT-R Nismo", "370Z", "Skyline GT-R", "370Z Nismo", "Pathfinder"]
  },
  {
    make: "Maserati", 
    models: ["GranTurismo", "MC12", "Quattroporte", "Ghibli", "Levante"]
  },
  {
    make: "Honda", 
    models: ["NSX", "Civic Type R", "S2000", "CRX", "Prelude"]
  },
  {
    make: "Tucker", 
    models: ["Tucker 48"]
  },
  {
    make: "DeLorean", 
    models: ["DeLorean DMC-12"]
  },
  {
    make: "Lancia", 
    models: ["Stratos", "Delta Integrale", "Aurelia B20"]
  },
  {
    make: "Zagato", 
    models: ["Zagato Raptor", "Iso Grifo Zagato"]
  },
  {
    make: "Alpina", 
    models: ["B7", "D3 S", "B6"]
  },
  {
    make: "TVR", 
    models: ["Sagaris", "Tuscan", "Cerbera"]
  },
  {
    make: "Morgan", 
    models: ["Plus 8", "Aero 8", "3 Wheeler"]
  },
  {
    make: "Bristol", 
    models: ["Bristol 412", "Bristol Fighter"]
  },
  {
    make: "Aston Martin", 
    models: ["DBR1", "Lagonda", "V8 Vantage Volante"]
  },
  {
    make: "Fisker", 
    models: ["Fisker Karma"]
  },
  {
    make: "Lotus", 
    models: ["Lotus 340R", "Lotus Carlton"]
  },
  {
    make: "Maserati", 
    models: ["Maserati Bora", "Maserati Ghibli (1967)", "Maserati Merak"]
  },
  {
    make: "BMW", 
    models: ["BMW Z1", "BMW M1"]
  },
  {
    make: "Datsun", 
    models: ["Datsun 240Z", "Datsun 510"]
  },
  {
    make: "Subaru", 
    models: ["Subaru SVX", "Subaru 360"]
  },
  {
    make: "Peugeot", 
    models: ["Peugeot 504 Coupe", "Peugeot 205 Turbo 16"]
  },
  {
    make: "Renault", 
    models: ["Renault Alpine A110", "Renault 5 Turbo"]
  }
];

// Populate the "make" dropdown
const makeDropdown = document.getElementById("makeDropdown");

carData.forEach(car => {
  const option = document.createElement("option");
  option.value = car.make;
  option.textContent = car.make;
  makeDropdown.appendChild(option);
});

// Function to populate the "model" dropdown based on the selected car make
const modelDropdown = document.getElementById("modelDropdown");

makeDropdown.addEventListener("change", function() {
  const selectedMake = this.value;

  // Clear the current models in the dropdown
  modelDropdown.innerHTML = '<option value="">--Select Model--</option>';

  // Find the selected make in carData and populate the models
  const selectedCar = carData.find(car => car.make === selectedMake);

  if (selectedCar) {
    selectedCar.models.forEach(model => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelDropdown.appendChild(option);
    });
  }
});
