 import React from 'react';

const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
const schools = ["School A", "School B", "School A", "School C", "School B"];
const results = [85, 92, 78, 88, 95];
const goodResultThreshold = 80;
const schoolList = ["School A", "School B", "School C"];

const getGoodResultsBySchool = (schoolName) => {
    let goodResults = [];

    for (let i = 0; i < names.length; i++) {
        if (schools[i] === schoolName && results[i] >= goodResultThreshold) {
            goodResults.push({
                name: names[i],
                school: schools[i],
                result: results[i]
            });
        }
    }

    goodResults.sort((a, b) => b.result - a.result);

    return goodResults;
};

const GoodResults = () => {
    return (
        <div className="p-4">
            {schoolList.map(school => (
                <div key={school} className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">Good results for {school}:</h2>
                    {getGoodResultsBySchool(school).length > 0 ? (
                        getGoodResultsBySchool(school).map(result => (
                            <div key={result.name} className="p-2 bg-gray-100 rounded-lg mb-1">
                                {result.name}: {result.result}
                            </div>
                        ))
                    ) : (
                        <p>No good results</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default GoodResults;
