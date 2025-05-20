# 📁 Estrutura de Pastas do Projeto

Este arquivo documenta a estrutura inicial de pastas do projeto e a função de cada diretório. O objetivo é manter a organização, escalabilidade e facilitar a colaboração no desenvolvimento.

---

## 🔧 Pastas Criadas

### `components/`
Contém todos os **componentes reutilizáveis da interface**, como botões, headers, formulários, etc.  
Cada componente pode ter sua própria subpasta com arquivos `.tsx`, `.scss` e testes, se necessário.

### `pages/`
Armazena os **arquivos de página associados às rotas** do projeto.  
Cada arquivo representa uma rota principal, como `/`, `/perfil`, `/livros/:id`, etc.  
Ideal para trabalhar em conjunto com o React Router.

### `assets/`
Diretório para **imagens, ícones, fontes e outros arquivos estáticos** utilizados no projeto.

### `styles/`
Contém os **estilos globais** do projeto, como variáveis, mixins, reset.css ou arquivos SCSS compartilhados entre os componentes.

### `hooks/`
Armazena **hooks customizados do React**, reutilizáveis entre diferentes componentes.  
Exemplos: `useAuth`, `useWindowSize`, `useLocalStorage`, etc.

### `utils/`
Contém **funções utilitárias puras**, que não dependem diretamente de componentes ou hooks.  
Exemplos: formatadores de data, máscaras, validadores, helpers de string, etc.

### `types/`
Diretório para **tipagens e interfaces globais**, especialmente útil em projetos com TypeScript.  
Centraliza definições que serão usadas por vários componentes ou funções.

---

## ✅ Considerações

- Essa estrutura pode evoluir conforme o projeto cresce.
- Mantenha cada pasta limpa e segmentada de acordo com sua responsabilidade.
- Crie subpastas quando necessário para melhor organização interna.

---

📌 Última atualização: `Sprint 1 — Estrutura Base`
