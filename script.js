const filters=document.getElementById('filters');const grid=document.getElementById('jobGrid');
document.getElementById('filterButton').addEventListener('click',()=>filters.classList.toggle('show'));
filters.addEventListener('click',e=>{if(!e.target.matches('.chip'))return;document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));e.target.classList.add('active');let f=e.target.dataset.filter;document.querySelectorAll('.job-card').forEach(c=>c.style.display=(f==='all'||c.dataset.type===f)?'flex':'none')});
const dialog=document.getElementById('applyDialog');document.querySelectorAll('[data-job]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('jobTitle').textContent=b.dataset.job;dialog.showModal()}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());
