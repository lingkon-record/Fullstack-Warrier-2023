// Sample array of employee objects
const employees = [
  { name: "Alice", department: "Engineering", experience: 5, rating: 4.5 },
  { name: "Bob", department: "Sales", experience: 8, rating: 3.8 },
  { name: "Charlie", department: "Marketing", experience: 3, rating: 4.0 },
  // Add more employee objects with different attributes
];

// Function to filter employees based on criteria
function filterEmployees(criteria) {
  return employees.filter((employee) => {
    // Example criteria: { department: "Engineering", minExperience: 5, minRating: 4.0 }
    const { department, minExperience, minRating } = criteria;

    return (
      (!department || employee.department === department) &&
      (!minExperience || employee.experience >= minExperience) &&
      (!minRating || employee.rating >= minRating)
    );
  });
}

// Example criteria to filter employees
const filterCriteria = { department: "Engineering", minExperience: 5, minRating: 4.0 };

// Filter and list employees based on the criteria
const filteredEmployees = filterEmployees(filterCriteria);
const seniorToJuniorNames = filteredEmployees.map((employee) => employee.name).reverse();

console.log(seniorToJuniorNames);
