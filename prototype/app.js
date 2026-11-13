const show = (id) => document.getElementById(id)?.classList.remove('hidden');
document.querySelectorAll('[data-show]').forEach((button) => {
  button.addEventListener('click', () => {
    show(button.dataset.show);
    document.getElementById(button.dataset.show)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
document.querySelectorAll('[data-choice-group] button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-choice-group] button').forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
    document.querySelector('.next')?.classList.remove('hidden');
  });
});
