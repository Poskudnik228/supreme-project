document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Спасибо! Ваша заявка отправлена.');
  this.reset();
});
