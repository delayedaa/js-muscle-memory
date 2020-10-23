let exercises = [
  {
    exercise: 'running',
    bodyType: 'calves',
    bodyPart: 'legs'
  },
  {
    exercise: 'pushups',
    bodyType: 'biceps',
    bodyPart: 'arms'
  },
  {
    exercise: 'situps',
    bodyType: 'abs',
    bodyPart: 'stomach'
  }
];

let container = document.querySelector('.container');

function addExercisesToContainer(array) {
  for (let i = 0; i < array.length; i++) {
    let exercise = array[i].exercise;
    let newElement = document.createElement('p');
    newElement.textContent = exercise;
    container.appendChild(newElement);
  }
}

function addBodyTypeToContainer(array) {
  for (let i = 0; i < array.length; i++) {
    let exercise = array[i].bodyType;
    let newElement = document.createElement('p');
    newElement.textContent = exercise;
    container.appendChild(newElement);
  }
}

function addBodyPartToContainer(array) {
  array.forEach(function(exercise) {
    let newElement = document.createElement('p');
    newElement.textContent = exercise.bodyPart;
    container.appendChild(newElement);
  })
}

addExercisesToContainer(exercises);
addBodyTypeToContainer(exercises);
addBodyPartToContainer(exercises)


// Iterate through the array.
// Set each element to a variable.
// Create a new element.
// Access "exercise" key to get value.
// Add the value text to the element.
// Append the new element to the container.