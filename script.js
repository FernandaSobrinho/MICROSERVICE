const WHATSAPP = '5581999653976';

function toggleMenu(){
  const menu=document.querySelector('.menu'), btn=document.querySelector('.hamb');
  if(!menu)return;
  const open=menu.classList.toggle('mobile-open');
  if(btn)btn.setAttribute('aria-expanded',open?'true':'false');
}

document.addEventListener('click',e=>{
  const menu=document.querySelector('.menu'),btn=document.querySelector('.hamb');
  if(menu?.classList.contains('mobile-open')&&!menu.contains(e.target)&&!btn?.contains(e.target)){
    menu.classList.remove('mobile-open');btn?.setAttribute('aria-expanded','false');
  }
});
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.menu')?.classList.remove('mobile-open')));
document.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item')?.classList.toggle('open')));

function sendBudget(event){
  event.preventDefault();
  const value=id=>document.getElementById(id)?.value?.trim()||'';
  const message=`Olá, Hercilio! Gostaria de solicitar um orçamento.\n\nNome: ${value('nome')}\nEmpresa/Garagem: ${value('empresa')||'Não informado'}\nMeu WhatsApp: ${value('whatsapp')||'Não informado'}\nTipo de serviço: ${value('tipo')}\nLocal de atendimento: ${value('local')}\nEquipamento/veículo: ${value('modelo')}\nDefeito/necessidade: ${value('defeito')}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,'_blank');
}
function openWhatsApp(message='Olá, Hercilio! Gostaria de falar sobre um serviço de eletrônica.'){
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,'_blank');
}

function setupServiceModal(){
  const modal=document.getElementById('serviceModal');
  if(!modal)return;
  const title=modal.querySelector('#modalTitle'), text=modal.querySelector('#modalText'), quote=modal.querySelector('#modalQuote');
  const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')};
  document.querySelectorAll('.service-details').forEach(btn=>btn.addEventListener('click',()=>{
    const card=btn.closest('.catalog-card');
    if(!card)return;
    title.textContent=card.dataset.service||'Serviço';
    text.textContent=card.dataset.details||card.querySelector('p')?.textContent||'';
    const service=encodeURIComponent(card.dataset.service||'');
    quote.href=`orcamento.html?servico=${service}`;
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
  }));
  modal.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}
setupServiceModal();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
