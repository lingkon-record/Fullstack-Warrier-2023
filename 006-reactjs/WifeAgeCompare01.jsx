import React, { useState } from "react";


const Test = () => {
    const [myDob, setMyDob] = useState("");
    const [wifeDob, setWifeDob] = useState("");
    const [marriageDate, setMarriageDate] = useState("");
    const [result, setResult] = useState("");
  
    const calculate = () => {
      const myBirthDate = new Date(myDob);
      const wifeBirthDate = new Date(wifeDob);
      const marriageDateValue = new Date(marriageDate);
      const today = new Date();
  
      const myAge = calculateAge(myBirthDate, today);
      const wifeAge = calculateAge(wifeBirthDate, today);
  
      const ageDifference = calculateAgeDifference(myBirthDate, wifeBirthDate);
  
      const marriageDuration = calculateDuration(marriageDateValue, today);
  
      const older = determineOldest(myBirthDate, wifeBirthDate);
  
      setResult(
        <div>
          <p>Your age: {myAge.years} years, {myAge.months} months, {myAge.days} days</p>
          <p>Wife's age: {wifeAge.years} years, {wifeAge.months} months, {wifeAge.days} days</p>
          <p>Age difference: {ageDifference.years} years, {ageDifference.months} months, {ageDifference.days} days</p>
          <p>{older}</p>
          <p>Marriage duration: {marriageDuration.years} years, {marriageDuration.months} months, {marriageDuration.days} days</p>
        </div>
      );
    };
  
    const calculateAge = (birthDate, endDate) => {
      const years = endDate.getFullYear() - birthDate.getFullYear();
      const months = endDate.getMonth() - birthDate.getMonth();
      const days = endDate.getDate() - birthDate.getDate();
  
      return {
        years: years,
        months: months < 0 ? 12 + months : months,
        days: days < 0 ? new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate() + days : days
      };
    };
  
    const calculateAgeDifference = (date1, date2) => {
      let yearsDiff = Math.abs(date2.getFullYear() - date1.getFullYear());
      let monthsDiff = Math.abs(date2.getMonth() - date1.getMonth());
      let daysDiff = Math.abs(date2.getDate() - date1.getDate());
  
      return {
        years: yearsDiff,
        months: monthsDiff,
        days: daysDiff
      };
    };
  
    const calculateDuration = (startDate, endDate) => {
      let yearsDiff = Math.abs(endDate.getFullYear() - startDate.getFullYear());
      let monthsDiff = Math.abs(endDate.getMonth() - startDate.getMonth());
      let daysDiff = Math.abs(endDate.getDate() - startDate.getDate());
  
      return {
        years: yearsDiff,
        months: monthsDiff,
        days: daysDiff
      };
    };
  
    const determineOldest = (date1, date2) => {
      if (date1 > date2) {
        return "Wife are Senior";
      } else if (date1 < date2) {
        return "Your wife is Junior";
      } else {
        return "You and your wife are the same age.";
      }
    };
  
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Age and Marriage Duration Calculator</h1>
        <label htmlFor="myDob" className="block mb-2">Your Date of Birth:</label>
        <input type="date" id="myDob" className="mb-4" value={myDob} onChange={(e) => setMyDob(e.target.value)} />
        <label htmlFor="wifeDob" className="block mb-2">Wife's Date of Birth:</label>
        <input type="date" id="wifeDob" className="mb-4" value={wifeDob} onChange={(e) => setWifeDob(e.target.value)} />
        <label htmlFor="marriageDate" className="block mb-2">Marriage Date:</label>
        <input type="date" id="marriageDate" className="mb-4" value={marriageDate} onChange={(e) => setMarriageDate(e.target.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={calculate}>Calculate</button>
        <div id="result" className="mt-4">
          {result}
        </div>
      </div>
    );
}

export default Test
