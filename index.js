// //grabbing JSON contents

// fetch('cars.json')
// .then(response => response.json())
// .then(data => {
//     // data is now a JavaScript object (or array)
//     // Proceed to work with the data
//     console.log(data);
// })
// .catch(error => console.error('Error fetching JSON:', error));

// function readCSV(file) {
//   const reader = new FileReader();
//   reader.onload = function(event) {
//     const csv = event.target.result;
//     const lines = csv.split('\n');
//     const data = [];
//     for (let i = 0; i < lines.length; i++) {
//       const line = lines[i].trim();
//       if (line) {
//         data.push(line.split(','));
//       }
//     }
//     console.log(data);
//   };
//   reader.onerror = function() {
//     console.error('Error reading the file');
//   };
//   reader.readAsText(file);
// }

const carData = {
  toyota: ['Corolla', 'Camry', 'Prius', 'Highlander'],
  ford: ['Focus', 'Mustang', 'Fiesta', 'Explorer'],
  chevrolet: ['Malibu', 'Camaro', 'Cruze', 'Tahoe'],
  honda: ['Civic', 'Accord', 'Pilot', 'CR-V'],
  bmw: ['3 Series', '5 Series', 'X5', 'X3']  // Adding BMW as an example
};

const inputElement = document.createElement('input');
inputElement.type = 'file';
inputElement.accept = '.csv';
inputElement.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    readCSV(file);
  }
});

document.body.appendChild(inputElement);

const quizData = [
    {
      question: "What is the make and model of today's car?",
      options: ["Toyota Camry", "Acura TSX", "Honda Civic", "Nissan Altima"],
      answer: "Honda Civic"
    },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
   
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Congrats!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();
