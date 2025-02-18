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
