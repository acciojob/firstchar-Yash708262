function firstChar(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      return text[i];
    }
  }
  return '';
}

// ✅ Do not remove or comment this line — Cypress uses it
const text = prompt("Enter text:");

alert(firstChar(text));
