document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    let currentInput = '';

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('clear')) {
          currentInput = '';
          display.value = '';
        } else if (button.classList.contains('equal')) {
          try {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
          } catch {
            display.value = 'Error';
            currentInput = '';
          }
        } else {
          currentInput += value;
          display.value = currentInput;
        }
      });
    });
  });
