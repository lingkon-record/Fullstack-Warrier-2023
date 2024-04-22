import { useState, useEffect  } from "react";


const Test = () => {
    const [studentResults, setStudentResults] = useState([
        { "name": "Ali", "cgpa": 3.8 },
  { "name": "Sara", "cgpa": 3.5 },
  { "name": "Ahmed", "cgpa": 3.9 },
  { "name": "Fatima", "cgpa": 3.7 },
  { "name": "Lingkon", "cgpa": 4.0 },
  { "name": "Ayesha", "cgpa": 4.0 },
  
        
      ]);
    
      // Function to sort students based on CGPA and assign positions
      const assignPositions = () => {
        // Clone the array to avoid mutating the state directly
        const resultsCopy = [...studentResults];
    
        // Sort students based on CGPA in descending order
        resultsCopy.sort((a, b) => b.cgpa - a.cgpa);
    
        // Assign positions to students
        resultsCopy.forEach((student, index) => {
          student.position = index + 1;
        });
    
        // Update the state with sorted and positioned students
        setStudentResults(resultsCopy);
      };
    
      // useEffect hook to call assignPositions when the component mounts
      useEffect(() => {
        assignPositions();
      }, []);
    
      return (
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Positions based on CGPA:</h1>
          <div className="grid grid-cols-2 gap-4">
            {studentResults.map(student => (
              <div key={student.name} className="bg-gray-200 p-4 rounded-lg">
                <p className="font-bold">Position {student.position}:</p>
                <p> {student.name}</p>
                <p>CGPA: {student.cgpa}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };


export default Test