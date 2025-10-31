// ===============
// Conteúdos SPA
// ===============
const pages = {
  home: `
    <section class="card">
      <h2>Sobre a ONG</h2>
      <p><strong>Missão:</strong> Promover ações solidárias e transformar vidas.</p>
      <p><strong>Visão:</strong> Ser referência em inclusão social e voluntariado.</p>
      <p><strong>Valores:</strong> Empatia, transparência, compromisso e amor ao próximo.</p>
    </section>
    <section class="card">
      <h3>Histórico e Conquistas</h3>
      <p>Desde 2010, realizamos mais de 200 projetos sociais, beneficiando milhares de famílias em situação de vulnerabilidade.</p>
    </section>
  `,
  projetos: `
    <h2>Projetos Sociais</h2>
    <div class="grid">
      <div class="card">Projeto Esperança — Apoio a famílias em situação de rua.</div>
      <div class="card">EducaMais — Aulas gratuitas para jovens e adultos.</div>
      <div class="card">Saúde em Foco — Campanhas de saúde comunitária.</div>
    </div>
  `,
  galeria: `
    <h2>Galeria de Fotos e Vídeos</h2>
    <div class="card"><img src="https://placehold.co/300x200" alt="Foto 1"></div>
    <div class="card"><img src="https://placehold.co/300x200" alt="Foto 2"></div>
  `,
  voluntariado: `
    <h2>Oportunidades de Voluntariado</h2>
    <p>Participe! Cadastre-se e ajude em nossos projetos.</p>
  `,
  doacoes: `
    <h2>Campanhas de Arrecadação</h2>
    <p>Contribua com qualquer valor e ajude nossas ações solidárias!</p>
    <button onclick="showModal('Doação realizada com sucesso! ❤️')">Fazer doação</button>
  `,
  blog: `
    <h2>Notícias e Atualizações</h2>
    <div class="card">10/10/2025 — Lançamos novo projeto de alfabetização comunitária.</div>
  `,
  cadastro: `
    <h2>Cadastro de Voluntário</h2>
    <form id="form-cadastro" onsubmit="validarFormulario(event)">
      <label>Nome Completo:</label>
      <input type="text" id="nome" required><br>
      <label>Email:</label>
      <input type="email" id="email" required><br>
      <label>CPF:</label>
      <input type="text" id="cpf" maxlength="14" oninput="mascaraCPF(this)" required><br>
      <label>Telefone:</label>
      <input type="text" id="telefone" maxlength="15" oninput="mascaraTelefone(this)" required><br>
      <label>Data de Nascimento:</label>
      <input type="date" id="nascimento" required><br>
      <label>CEP:</label>
      <input type="text" id="cep" maxlength="9" oninput="mascaraCEP(this)" required><br>
      <label>Endereço:</label>
      <input type="text" id="endereco" required><br>
      <label>Cidade:</label>
      <input type="text" id="cidade" required><br>
      <label>Estado:</label>
      <input type="text" id="estado" required><br>
      <button type="submit">Enviar</button>
    </form>
  `
};

// ===============
// SPA Navigation
// ===============
function loadPage(page) {
  const container = document.getElementById("spa-content");
  container.innerHTML = pages[page] || "<p>Página não encontrada.</p>";
}

document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = e.target.getAttribute("data-page");
    loadPage(page);
  });
});

// ===============
// Input Masks
// ===============
function mascaraCPF(i) {
  i.value = i.value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function mascaraTelefone(i) {
  i.value = i.value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
}

function mascaraCEP(i) {
  i.value = i.value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
}

// ===============
// Form Validation
// ===============
function validarFormulario(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const cpf = document.getElementById("cpf").value.trim();

  if (!nome || !email || cpf.length < 14) {
    showModal("Por favor, preencha todos os campos corretamente!");
    return;
  }
  showModal("Cadastro realizado com sucesso!");
  e.target.reset();
}

// ===============
// Modal Feedback
// ===============
function showModal(msg) {
  document.getElementById("modal-message").textContent = msg;
  document.getElementById("modal").classList.remove("hidden");
}
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// ===============
// Menu Hambúrguer
// ===============
document.querySelector(".hamburguer").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});

// Página inicial padrão
loadPage("home");

