function getDate() {
    // Get user input
    const _day = parseInt(document.getElementById("day").value);
    const _month = parseInt(document.getElementById("month").value);
    const _year = parseInt(document.getElementById("year").value);
  
    const _currentDate = new Date(); // Get the current date
    const _userBirthDate = new Date(_year, _month - 1, _day); // Create a Date object for the user's birthday
  
    // Calculate the difference in years, months, and days
    let years = _currentDate.getFullYear() - _userBirthDate.getFullYear();
    let months = _currentDate.getMonth() - _userBirthDate.getMonth();
    let days = _currentDate.getDate() - _userBirthDate.getDate();
  
    // Adjust for negative values or incomplete months
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const prevMonthDate = new Date(_currentDate.getFullYear(), _currentDate.getMonth() - 1, 0);
      days += prevMonthDate.getDate();
      months--;
    }
  
    // Output the age
    document.getElementById("ResultYear").textContent = years;
    document.getElementById("ResultMonth").textContent = months;
    document.getElementById("ResultDay").textContent = days;
  }
  