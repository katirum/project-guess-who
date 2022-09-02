// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['happy person']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat', 'beard'],
    other: ['angry person'],
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat', 'beard'],
    other: ['smoker', 'angry person'],
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['happy person']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy person']
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['happy person']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'angry person']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy person']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat', 'beard'],
    other: ['smoker', 'angry person']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['happy person']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['happy person']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: ['angry person']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy person']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['happy person']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['happy person']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['beard'],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  // What else should happen when we start the game?
  numberOfGuesses = 5
  document.getElementById('guess-counter').innerHTML = `${numberOfGuesses}`
  charactersInPlay = CHARACTERS
  generateBoard() 
  setSecret()
  console.log(secret.name);
}



// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {

  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value
  console.log(secret)

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
// Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
const checkQuestion = () => {
  numberOfGuesses -= 1
  document.getElementById('guess-counter').innerHTML = `${numberOfGuesses}`
  
  const { category, value } = currentQuestion;

  let keep 

  
  if (numberOfGuesses === -1) {
    findOutButton.style.display = 'none'
    document.getElementById('guess-counter').innerHTML = `You cannot try to find out more. Please pick a person.`
  }
  else if (category === 'hair' || category === 'eyes') {
    if(value === secret[category]){
      keep = true
    } else {
      keep = false
    } 
  }
  else if (category === 'accessories' || category === 'other'){
      if(secret[category].includes(value)){
        keep = true
      } else {
        keep = false
      }
    }
    filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people that have ${value} hair`
      );
      
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`
      )
      
    }
  } 
  else if (category === 'eyes') {
    if(keep){
    alert(
      `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`
    );
    
  } else {
    alert(
      `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`
    );
    
  }
  }
   else if (category === 'accessories') {
    if(keep){
      alert(
        `Yes, the person has ${value}! Keep all people that have ${value}`
      );
       
    } else {
      alert(
        `No, the person does not have ${value}! Remove all the people that have ${value}`
      );
      
    }
  } 
  else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that is a ${value}`
      );
      
    } else {
      alert(
        `No, the person is not a ${value}! Remove all the people that is a ${value}`
      );   
    }
  }
  if (category === 'hair' || category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'accessories' || category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  generateBoard()
} 

// when clicking guess, the player first have to confirm that they want to make a guess.
// store the interaction from the player in a variable.
// remember the confirm() ?
// If the player wants to guess, invoke the checkMyGuess function.
const guess = (personToConfirm) => {
  const guessed = confirm(`Is ${personToConfirm} your choice?`)
  if(guessed){
    checkMyGuess(personToConfirm)
  } else {
    alert('...or maybe not!')
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if(personToCheck === secret.name){
    winOrLoseText.innerHTML = `Good job! It is ${personToCheck}!`
    winOrLose.style.display = 'block'
    board.style.display = 'none'
  }else {
    winOrLoseText.innerText = `Sorry, the correct person is ${secret.name}`
    winOrLose.style.display = 'block'
    board.style.display = 'none'
  }
  }

// Invokes the start function when website is loaded
start()

const playAgain = () => {
  document.getElementById('winOrLose').style.display = 'none'
  board.style.display = 'flex'
  start()
}

// All the event listeners
restartButton.addEventListener('click', () => {
  start()
  board.style.display = 'flex'
  board.style.flexDirection = 'row-reverse'
})
//playAgainButton.addEventListener('click', playAgain)
playAgainButton.addEventListener('click', () => {
  playAgain()
  findOutButton.style.display = 'block'
})
findOutButton.addEventListener('click', () => {
  selectQuestion()
  checkQuestion()
})


/* 
 restartButton.addEventListener('click', start) //Reloads the page

restartButton.addEventListener('click', () => {
  counter= 0
  document.querySelector("#result").innerHTML = counter //For every guess the counter ticks up
})


findOutButton.addEventListener('click', () => {
  selectQuestion()
  checkQuestion()
  counter++
  document.querySelector("#result").innerHTML = counter //For every guess the counter ticks up
})
*/