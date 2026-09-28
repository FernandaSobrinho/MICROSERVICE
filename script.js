const WHATSAPP = '5581988515073';

function toggleMenu() {
  const menu = document.querySelector('.menu');
  const button = document.querySelector('.hamb');

  if (!menu) {
    return;
  }

  const isOpen = menu.classList.toggle('mobile-open');

  if (button) {
    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
}

document.addEventListener('click', (event) => {
  const menu = document.querySelector('.menu');
  const button = document.querySelector('.hamb');

  if (
    menu &&
    menu.classList.contains('mobile-open') &&
    !menu.contains(event.target) &&
    !button?.contains(event.target)
  ) {
    menu.classList.remove('mobile-open');
    button?.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.menu')?.classList.remove('mobile-open');
  });
});

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');

    if (item) {
      item.classList.toggle('open');
    }
  });
});

function sendBudget(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const getValue = (id) =>
    document.getElementById(id)?.value?.trim() || '';

  const nome = getValue('nome');
  const empresa = getValue('empresa');
  const whatsapp = getValue('whatsapp');
  const tipo = getValue('tipo');
  const local = getValue('local');
  const modelo = getValue('modelo');
  const defeito = getValue('defeito');

  const message = `Olá, Hercilio! Gostaria de solicitar um orçamento.

Nome: ${nome}
Empresa/Garagem: ${empresa || 'Não informado'}
Meu WhatsApp: ${whatsapp || 'Não informado'}
Tipo de serviço: ${tipo}
Local de atendimento: ${local}
Equipamento/veículo: ${modelo}
Defeito/necessidade: ${defeito}`;

  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}

function openWhatsApp(
  message = 'Olá, Hercilio! Gostaria de falar sobre um serviço de eletrônica.'
) {
  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}
