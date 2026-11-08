const combined=document.createElement('link');
combined.rel='stylesheet';
combined.href='/combined.css';
document.head.appendChild(combined);

const nav=document.querySelector('.nav-links');
const currentPath=window.location.pathname;
if(nav&&!nav.querySelector('a[href="/98andgreat/"]')){
  const link=document.createElement('a');
  link.href='/98andgreat/';
  link.textContent='98&Great';
  if(currentPath.startsWith('/98andgreat')) link.setAttribute('aria-current','page');
  const about=nav.querySelector('a[href="/about/"]');
  nav.insertBefore(link,about);
}

const logo=document.querySelector('.brand');
if(logo){
  logo.classList.add('identity-lockup');
  logo.innerHTML='COREY <span>LIGHTNER</span><small>Founder of 98&Great</small>';
}
