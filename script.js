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

// копирование почты
const copyBtn = document.getElementById('copy-email');
const email = 'nnearss11@gmail.com';

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = 'почта скопирована ✓';
    setTimeout(() => { copyBtn.textContent = email; }, 2000);
  } catch {
    window.location.href = 'mailto:' + email;
  }
});

// форма-бриф: собирает письмо
const brief = document.getElementById('brief');

brief.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = brief.elements.name.value.trim();
  const task = brief.elements.task.value.trim();
  const subject = encodeURIComponent('Заявка с сайта от ' + name);
  const body = encodeURIComponent(task + '\n\n' + name);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});

// появление блоков при прокрутке
const revealEls = document.querySelectorAll(
  '.section-title, .card, .project, .contact .lead, .contact .project-links, .brief'
);

if ('IntersectionObserver' in window) {
  revealEls.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => observer.observe(el));
}