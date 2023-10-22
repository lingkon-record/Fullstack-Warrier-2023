// Animal data
const animals = {
  dog: {
    nature: 'Loyal and friendly',
    features: 'Four legs, wagging tail',
    commonDiseases: 'Fleas, ticks, hip dysplasia',
    food: 'Dog food, meat, and vegetables',
  },
  cat: {
    nature: 'Independent and curious',
    features: 'Sharp claws, retractable',
    commonDiseases: 'Feline upper respiratory infections, kidney disease',
    food: 'Cat food, fish, and small prey',
  },
  horse: {
    nature: 'Majestic and strong',
    features: 'Hooves, long mane and tail',
    commonDiseases: 'Colic, laminitis',
    food: 'Hay, grass, and grains',
  },
};

// Function to get information about an animal
function getAnimalInfo(animal) {
  const info = animals[animal.toLowerCase()];
  if (info) {
    return info;
  }
  return 'Animal not found in the database.';
}

// Example usage:
const animalName = 'Dog'; // Replace with the animal name you want to learn about
const animalInfo = getAnimalInfo(animalName);

if (typeof animalInfo === 'object') {
  console.log(`Nature: ${animalInfo.nature}`);
  console.log(`Features: ${animalInfo.features}`);
  console.log(`Common Diseases: ${animalInfo.commonDiseases}`);
  console.log(`Food: ${animalInfo.food}`);
} else {
  console.log(animalInfo);
}
