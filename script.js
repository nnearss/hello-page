// приветствие по времени суток
const hour = new Date().getHours();
let greeting;
if (hour < 6) greeting = 'доброй ночи';
else if (hour < 12) greeting = 'доброе утро';
else if (hour < 18) greeting = 'добрый день';
else greeting = 'добрый вечер';
document.getElementById('greeting').textContent = greeting;

// переключатель темы
const toggle = document.getElementById('theme-toggle');

function updateIcon() {
  toggle.textContent = document.body.classList.contains('light') ? '☾' : '☀';
}

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
}
updateIcon();

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const theme = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  updateIcon();
});