// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (persists to localStorage)
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.setAttribute('data-theme', saved);
toggle.textContent = document.documentElement.getAttribute('data-theme') === 'light' ? '🌙' : '☀️';

toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'light' ? '🌙' : '☀️';
});
