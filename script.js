const header = document.querySelector('.site-header');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 40) header.style.background = 'rgba(7,8,11,.94)';
  else header.style.background = 'rgba(7,8,11,.8)';
  lastY = y;
});

// Small reveal effect without any library.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity:0, transform:'translateY(22px)'},{opacity:1, transform:'translateY(0)'}],
        {duration:650, easing:'cubic-bezier(.2,.8,.2,1)', fill:'forwards'}
      );
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.08});

document.querySelectorAll('.player,.staff-card,.match-card,.club-art,.club-copy,.stats-band div').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});
