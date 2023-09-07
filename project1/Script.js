function convert(unit) {
    if (unit === 'celsius') {
      const celsiusInput = document.getElementById('celsius');
      const fahrenheitInput = document.getElementById('fahrenheit');
      const kelvinInput = document.getElementById('kelvin');
      const celsiusValue = parseFloat(celsiusInput.value);
  
      if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        const kelvinValue = celsiusValue + 273.15;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
      } else {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
      }
    } else if (unit === 'fahrenheit') {
      const fahrenheitInput = document.getElementById('fahrenheit');
      const celsiusInput = document.getElementById('celsius');
      const kelvinInput = document.getElementById('kelvin');
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
  
      if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
        const kelvinValue = (fahrenheitValue + 459.67) * 5 / 9;
        celsiusInput.value = celsiusValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
      } else {
        celsiusInput.value = '';
        kelvinInput.value = '';
      }
    } else if (unit === 'kelvin') {
      const kelvinInput = document.getElementById('kelvin');
      const celsiusInput = document.getElementById('celsius');
      const fahrenheitInput = document.getElementById('fahrenheit');
      const kelvinValue = parseFloat(kelvinInput.value);
  
      if (!isNaN(kelvinValue)) {
        const celsiusValue = kelvinValue - 273.15;
        const fahrenheitValue = kelvinValue * 9 / 5 - 459.67;
        celsiusInput.value = celsiusValue.toFixed(2);
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
      } else {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
      }
    }
  }
  