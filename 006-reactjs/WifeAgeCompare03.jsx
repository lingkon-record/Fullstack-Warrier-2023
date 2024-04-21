import React, { useState } from "react";
import 'tailwindcss/tailwind.css';

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
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-xl">
                <p className="text-white text-lg mb-4">Your age: {myAge.years} years, {myAge.months} months, {myAge.days} days</p>
                <p className="text-white text-lg mb-4">Wife's age: {wifeAge.years} years, {wifeAge.months} months, {wifeAge.days} days</p>
                <p className="text-white text-lg mb-4">Age difference: {ageDifference.years} years, {ageDifference.months} months, {ageDifference.days} days</p>
                <p className="text-white text-lg mb-4">{older}</p>
                <p className="text-white text-lg">Marriage duration: {marriageDuration.years} years, {marriageDuration.months} months, {marriageDuration.days} days</p>
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
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Age and Marriage Duration Calculator</h1>
            <div className="flex flex-col items-center">
                <div className="w-full md:w-1/2 mb-4">
                    <label htmlFor="myDob" className="block mb-2 text-lg text-gray-800">Your Date of Birth:</label>
                    <input type="date" id="myDob" className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" value={myDob} onChange={(e) => setMyDob(e.target.value)} />
                </div>
                <div className="w-full md:w-1/2 mb-4">
                    <label htmlFor="wifeDob" className="block mb-2 text-lg text-gray-800">Wife's Date of Birth:</label>
                    <input type="date" id="wifeDob" className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" value={wifeDob} onChange={(e) => setWifeDob(e.target.value)} />
                </div>
                <div className="w-full md:w-1/2 mb-4">
                    <label htmlFor="marriageDate" className="block mb-2 text-lg text-gray-800">Marriage Date:</label>
                    <input type="date" id="marriageDate" className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" value={marriageDate} onChange={(e) => setMarriageDate(e.target.value)} />
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-12 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105" onClick={calculate}>Calculate</button>
            </div>
            <div className="mt-8">
                {result}
            </div>
        </div>
    );
}

export default Test;
