const check = document.getElementById('check-btn').addEventListener('click', checkNum);

function checkNum() {
  const input = document.getElementById ('user-input').value;
  const result = document.getElementById('results-div');
  result.textContent = '';

  if (!input) {
    alert("Please provide a phone number");
    return;
  }

  const validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;

  if (validPattern.test(input)) {
    result.textContent = `Valid US number: ${input}`;
  } else {
    result.textContent = `Invalid US number: ${input}`;
  }
}

const clear = document.getElementById('clear-btn').addEventListener('click', clearNum);

function clearNum() {
   document.getElementById('user-input').value = '';
  document.getElementById('results-div').textContent = '';
}
