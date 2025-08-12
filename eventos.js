document.addEventListener('DOMContentLoaded', function() {
  const el_div = document.getElementById('el_div');
  if (el_div) {
    el_div.style.backgroundColor = 'green';
    el_div.style.padding = '5px';
    el_div.addEventListener('click', function() {
      alert('Hola! Soy el div');
    });
    const btn = el_div.querySelector('button');
    if (btn) {
      btn.addEventListener('click', function(event) {
        event.stopPropagation();
      });
    }
  }
});
