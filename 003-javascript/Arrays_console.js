const people = [
    {
        name: "Limon",
        wifeName: "N/A",  // If not married yet, you can put "N/A"
        bornYear: 2001,
        nationality: "Bangladeshi"
    },
    {
        name: "John Doe",
        wifeName: "Jane Doe",
        bornYear: 1990,
        nationality: "American"
    },
    {
        name: "Ali Ahmed",
        wifeName: "Fatima Ahmed",
        bornYear: 1985,
        nationality: "Pakistani"
    }
];

// Display each person's details
people.forEach(person => {
    console.log(`Name: ${person.name}`);
    console.log(`Wife's Name: ${person.wifeName}`);
    console.log(`Born Year: ${person.bornYear}`);
    console.log(`Nationality: ${person.nationality}`);
    console.log('------------------');
});
