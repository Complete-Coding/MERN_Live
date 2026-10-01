const quotes = [
  "Success is the sum of small efforts repeated every day.",
  "Dream big, start small, and act now.",
  "Believe in yourself and all that you are.",
  "Every expert was once a beginner.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your future is created by what you do today.",
  "Hard work beats talent when talent doesn't work hard.",
  "The best way to learn is by doing.",
  "Mistakes are proof that you are trying.",
  "Stay patient and trust your journey.",
  "Small progress is still progress.",
  "Discipline is choosing what you want most over what you want now.",
  "Success starts with self-belief.",
  "Never stop learning because life never stops teaching.",
  "Push yourself because no one else will do it for you.",
  "Focus on progress, not perfection.",
  "Great things take time.",
  "Your only limit is your mind.",
  "Consistency creates results.",
  "The journey of a thousand miles begins with a single step."
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
    const random = Math.floor(Math.random()*20);
    quote.textContent = quotes[random];
})
