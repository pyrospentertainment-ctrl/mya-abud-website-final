const menuButton=document.querySelector('.menu-button');
const menuPanel=document.querySelector('.menu-panel');
const header=document.querySelector('.site-header');
const video=document.querySelector('.hero-video');
const sound=document.querySelector('.sound-toggle');
const cursor=document.querySelector('.cursor');

function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuPanel.classList.remove('open');menuPanel.setAttribute('aria-hidden','true');document.body.classList.remove('menu-open')}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuPanel.classList.toggle('open',!open);menuPanel.setAttribute('aria-hidden',String(open));document.body.classList.toggle('menu-open',!open)});
menuPanel.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30),{passive:true});

if(sound&&video){sound.addEventListener('click',()=>{video.muted=!video.muted;sound.setAttribute('aria-pressed',String(!video.muted));if(video.paused)video.play().catch(()=>{})})}

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -6%'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

if(window.matchMedia('(pointer:fine)').matches){window.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('active'));el.addEventListener('mouseleave',()=>cursor.classList.remove('active'))})}

document.getElementById('year').textContent=new Date().getFullYear();
