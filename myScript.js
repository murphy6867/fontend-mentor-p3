
function getDate() {
    // Get user input
    const _day = parseInt(document.getElementById("day").value);
    const _month = parseInt(document.getElementById("month").value);
    const _year = parseInt(document.getElementById("year").value);

    const _currentDate = new Date(); // Get the Current date.
    const _userBirthDate = new Date(_year, _month - 1, _day); // Create a Date object for the user's birthday

    // Calculate the difference in milliseconds between the current date and the user's birthday
    const _timeDiff = _currentDate.getTime() - _userBirthDate.getTime();

    // Calculate the total years, months, and days
    const years = Math.floor(_timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((_timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((_timeDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    // Out put of Date
    document.getElementById("ResultYear").textContent = years;
    document.getElementById("ResultMonth").textContent = months;
    document.getElementById("ResultDay").textContent = days;
}
