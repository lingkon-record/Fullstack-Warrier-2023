// Example : Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

// Extracting numerical values using regular expressions
const salaryPerMonth = parseFloat(text.match(/\b\d+\b/g)[0]);
const annualBonus = parseFloat(text.match(/\b\d+\b/g)[1]);
const onlineCoursesPerMonth = parseFloat(text.match(/\b\d+\b/g)[2]);

// Calculating total annual income
const totalAnnualIncome = (salaryPerMonth * 12) + annualBonus + (onlineCoursesPerMonth * 12);

console.log(`Total Annual Income: ${totalAnnualIncome} euro`);
