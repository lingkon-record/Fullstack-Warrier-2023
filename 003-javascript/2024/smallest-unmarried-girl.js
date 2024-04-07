

const pakistaniGirls = [
  {
    name: "Aisha",
    age: 23,
    height: "5'4\"",
    hair: "Black",
    foods: ["Biryani", "Kebabs", "Samosas"],
    country: "Pakistan",
    dreams: ["Become a successful entrepreneur", "Travel the world"]
  },
  {
    name: "Sana",
    age: 25,
    height: "5'6\"",
    hair: "Brown",
    foods: ["Nihari", "Chapli Kebab", "Gol Gappay"],
    country: "Pakistan",
    dreams: ["Become a renowned artist", "Build an orphanage"]
  },
  {
    name: "Zara",
    age: 22,
    height: "5'3\"",
    hair: "Black",
    foods: ["Pulao", "Seekh Kebab", "Haleem"],
    country: "Pakistan",
    dreams: ["Become a doctor", "Help the underprivileged"]
  },
  {
    name: "Fatima",
    age: 24,
    height: "5'5\"",
    hair: "Brown",
    foods: ["Karhai", "Koftay", "Jalebi"],
    country: "Pakistan",
    dreams: ["Start her own fashion line", "Empower women through education"]
  },
  {
    name: "Keya",
    age: 21,
    height: "5'2\"",
    hair: "Black",
    foods: ["Siri Paye", "Chapli Kebab", "Gajar ka Halwa"],
    country: "Pakistan",
    dreams: ["Become a software engineer", "Develop innovative technology"]
  }
];

// Find the smallest unmarried girl
const smallestUnmarriedGirl = pakistaniGirls.reduce((prev, current) => {
    if (current.age < 30) {
        return prev.age < current.age ? prev : current;
    } else {
        return prev;
    }
});

// Output details of the smallest unmarried girl
console.log("Name:", smallestUnmarriedGirl.name);
console.log("Age:", smallestUnmarriedGirl.age);
console.log("Height:", smallestUnmarriedGirl.height);
console.log("Hair:", smallestUnmarriedGirl.hair);
console.log("Foods:", smallestUnmarriedGirl.foods.join(", "));
console.log("Country:", smallestUnmarriedGirl.country);
console.log("Dreams:", smallestUnmarriedGirl.dreams.join(", "));

// Create a beautiful story about her
const story = `${smallestUnmarriedGirl.name} is a petite young woman from ${smallestUnmarriedGirl.country} with ${smallestUnmarriedGirl.hair.toLowerCase()} hair and a radiant smile. Standing at ${smallestUnmarriedGirl.height}, she carries herself with grace and confidence. Her favorite foods, including ${smallestUnmarriedGirl.foods.join(", ")}, evoke memories of family gatherings and celebrations. Despite her tender age, ${smallestUnmarriedGirl.name} harbors ambitious dreams of ${smallestUnmarriedGirl.dreams.join(" and ")}, driven by a passion to make a difference in the world. As she mingles with the crowd at the party, her warmth and charm captivate those around her, leaving a lasting impression wherever she goes.`;

console.log(story);
