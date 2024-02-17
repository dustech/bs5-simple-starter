function typeText(text, typingElement, typingDelay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, typingDelay * i);
  }
}

function runTypingEffect() {
  const text = "I am dustech.";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
