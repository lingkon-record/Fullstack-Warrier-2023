 import React from 'react';

const data = [
    { name: "John", wife: 1, child: 2, age: 35, salary: 80000 },
    { name: "Kamal", wife: 5, child: 1, age: 40, salary: 90000 },
    { name: "Bob", wife: 1, child: 3, age: 45, salary: 95000 },
    { name: "Emily", wife: 1, child: 2, age: 30, salary: 190000 },
    { name: "Rifat", wife: 1, child: 11, age: 50, salary: 120000 }
];

class App extends React.Component {
    showHighest(property) {
        let highestData = null;
        let highestValue = -Infinity;

        data.forEach(person => {
            if (person[property] > highestValue) {
                highestValue = person[property];
                highestData = person;
            }
        });

        return `Highest ${property}: ${highestData[property]}, Name: ${highestData.name}`;
    }

    render() {
        return (
            <div className="container mx-auto mt-10 text-center">
                <button onClick={() => alert(this.showHighest('wife'))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Highest Wife
                </button>
                <button onClick={() => alert(this.showHighest('child'))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                    Highest Child
                </button>
                <button onClick={() => alert(this.showHighest('age'))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                    Highest Age
                </button>
                <button onClick={() => alert(this.showHighest('salary'))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                    Highest Salary
                </button>
            </div>
        );
    }
}

export default App;
