import React, { useState, useEffect } from 'react';

function YearSelector() {
  const [years, setYears] = useState([]);
  
  useEffect(() => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Set the range of years (e.g., 10 years in the past and 10 years in the future)
    const yearsRange = 10;
    const startYear = currentYear - yearsRange;
    const endYear = currentYear;

    // Generate an array of years within the range
    const yearOptions = [];
    for (let year = endYear; year >= startYear; year--) {
      yearOptions.push(year);
    }

    // Set the years array state with the generated options
    setYears(yearOptions);
  }, []);

  return (
    <div>
      <label htmlFor="year"></label>
      <select id="year" name="year">
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default YearSelector;