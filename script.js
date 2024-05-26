let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let input = document.querySelector('input');
    let value = e.target.innerHTML;

    if (value == '=') {
      string = eval(string);
      input.value = string;
    } else if (value == 'C') {
      string = "";
      input.value = string;
    } else if (value == '%') {
      let lastNumber = string.match(/(\d+\.?\d*)$/); 
      if (lastNumber) {
        let number = parseFloat(lastNumber[0]);
        let percentage = number / 100;
        string = string.replace(/(\d+\.?\d*)$/, percentage);
        input.value = string;
      }
    } else {
      string += value;
      input.value = string;
    }
  });
});
