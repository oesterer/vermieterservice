const listings=window.listings;
const grid=document.querySelector('#listing-grid');
function render(filter='alle'){grid.innerHTML=listings.filter(x=>filter==='alle'||x.group===filter).map((x,i)=>`<a class="listing-card" href="./unterkunft.html?id=${x.id}" style="--delay:${i*.03}s"><div class="card-image"><img src="./assets/images/${x.image}" alt="${x.title}" loading="lazy"><span>${x.label}</span></div><div class="card-info"><div><h3>${x.title}</h3><p>Brienz · bis ${x.guests} Gäste</p></div><b aria-hidden="true">↗</b></div></a>`).join('')}
render();document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.filters .active').classList.remove('active');b.classList.add('active');render(b.dataset.filter)}));
const menu=document.querySelector('.menu');menu?.addEventListener('click',()=>document.querySelector('.nav nav').classList.toggle('open'));
