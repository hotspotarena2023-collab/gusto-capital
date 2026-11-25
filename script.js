const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-modal]').forEach(button=>button.addEventListener('click',()=>{const modal=document.getElementById(button.dataset.modal);if(modal){modal.classList.add('open');modal.setAttribute('aria-hidden','false');}}));
document.querySelectorAll('.modal').forEach(modal=>{modal.querySelector('.modal-close')?.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');});modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}});});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal.open').forEach(m=>{m.classList.remove('open');m.setAttribute('aria-hidden','true');});});
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
const principal=document.getElementById('principal'),range=document.getElementById('principal-range'),rate=document.getElementById('rate'),years=document.getElementById('years');
function calculate(){if(!principal||!rate||!years)return;let p=Math.max(0,Number(principal.value)||0),r=Number(rate.value)/100,y=Number(years.value);let future=p*Math.pow(1+r,y);document.getElementById('future-value').textContent=money(future);document.getElementById('starting-value').textContent=money(p);document.getElementById('gain-value').textContent='+'+money(future-p);if(range)range.value=Math.min(250000,Math.max(1000,p));}
if(principal){principal.addEventListener('input',calculate);rate.addEventListener('change',calculate);years.addEventListener('change',calculate);range?.addEventListener('input',()=>{principal.value=range.value;calculate();});calculate();}
document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const status=form.querySelector('.form-status');if(status)status.textContent='Thank you. This demonstration form is not connected to a submission service yet.';}));
document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
