const animals = [
    { name: 'herd', image: 'goat' },
    { name: 'gaggle', image: 'goose' },
    { name: 'gull', image: 'colony' },
    { name: 'parrot', image: 'pandemonium' }
  
];

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to start the game
function startGame() {
    // Clear previous message and images
    document.getElementById('message').innerHTML = '';
    document.getElementById('image-container').innerHTML = '';

    // Select a random animal
    const correctAnimal = animals[Math.floor(Math.random() * animals.length)];

    // Randomly select two other wrong animals
    const wrongAnimals = animals.filter(animal => animal !== correctAnimal);
    const randomWrongAnimals = shuffle(wrongAnimals).slice(0, 2);

    // Create a pool of images (1 correct + 2 wrong)
    const imageOptions = shuffle([correctAnimal, ...randomWrongAnimals]);

    // Update the question
    document.getElementById('question').innerText = `Which one is a ${correctAnimal.name}?`;

    // Display images
    imageOptions.forEach(animal => {
        const img = document.createElement('img');
        img.src = animal.image;
        img.alt = animal.name;
        img.addEventListener('click', () => checkAnswer(animal.name, correctAnimal.name));
        document.getElementById('image-container').appendChild(img);
    });
}

// Function to check the player's answer
function checkAnswer(selectedName, correctName) {
    const messageElement = document.getElementById('message');
    if (selectedName === correctName) {
        messageElement.innerText = 'Correct! Well done!';
    } else {
        messageElement.innerText = 'Oops! That\'s not correct.';
    }
}