const buttons = document.querySelectorAll('.plan-btn');
const slider = document.querySelector('.toggle-slider');
const monthlyCard = document.getElementById('monthlyCard');
const annuallyCard = document.getElementById('annuallyCard');


function activate(plan) {
const isMonthly = plan === 'monthly';


buttons.forEach(b => b.classList.remove('active'));
document.querySelector(`.plan-btn[data-plan="${plan}"]`).classList.add('active');


slider.style.left = isMonthly ? '0%' : '50%';


if (isMonthly) {
monthlyCard.classList.add('active-card');
annuallyCard.classList.remove('active-card');
} else {
annuallyCard.classList.add('active-card');
monthlyCard.classList.remove('active-card');
}
}


buttons.forEach(btn => {
btn.addEventListener('click', () => activate(btn.dataset.plan));
});


monthlyCard.addEventListener('click', () => activate('monthly'));
annuallyCard.addEventListener('click', () => activate('annually'));




// tastimonials slider


// Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-left, .animate-right, .animate-up, .animate-fade')
  .forEach(el => observer.observe(el));
