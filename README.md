## 🚀 Começando

Siga as instruções abaixo para rodar o projeto localmente em sua máquina.

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 14.x ou superior)
- npm (versão 6.x ou superior)

### 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/JorgeCasalini/Livro-react-maujor
````
2. Acesse a pasta do projeto:
```bash
cd editora-maujortec
```
3.Instale as dependências:

```bash
npm install
```
4.Inicie o servidor de desenvolvimento:

```bash
npm start
```
5.Abra o navegador e acesse:

```bash
http://localhost:3000
```
🛠️ Tecnologias Utilizadas
Este projeto foi desenvolvido com as seguintes tecnologias:

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[React Router](https://reactrouter.com/)**: Roteamento para aplicações React.
- **[Firebase](https://firebase.google.com/)**: Autenticação e persistência de dados.
- **[Jest](https://jestjs.io/)**: Framework para testes de unidade.
- **[Styled Components](https://styled-components.com/)**: Estilização de componentes.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para requisições à API.

🧩 Estrutura do Projeto
O projeto está organizado da seguinte forma:
```
editora-maujortec/
├── node_modules/ # Dependências do projeto instaladas via npm ou yarn
├── public/ # Arquivos estáticos (HTML, imagens, etc.)
│ ├── api/ # Arquivos de API simulados ou estáticos (JSON, etc.)
│ ├── imagens/ # Imagens utilizadas no projeto
│ ├── index.html # Página HTML principal
│ └── favicon.ico # Ícone do site
├── src/ # Código-fonte da aplicação
│ ├── components/ # Componentes reutilizáveis
│ │ ├── Catalogo.js # Componente do Catálogo
│ │ └── Design.js # Componente do Design
│ ├── App.js # Componente principal
│ ├── index.js # Ponto de entrada da aplicação
│ └── index.css # Estilos globais da aplicação
├── .gitignore # Arquivos e pastas ignorados pelo Git
├── package.json # Dependências e scripts do projeto
├── package-lock.json # Versões exatas das dependências instaladas
└── README.md # Documentação do projeto
```
🧪 Testes
Para rodar os testes de unidade, execute o seguinte comando:

```bash
npm test
```
Os testes foram desenvolvidos usando Jest e React Testing Library, seguindo as práticas de TDD (Test-Driven Development) apresentadas no livro.

🚀 Deploy

O projeto pode ser hospedado em plataformas como Netlify ou Vercel. Para gerar a versão de produção, execute:

```bash
npm run build
```
Em seguida, siga as instruções da plataforma escolhida para fazer o deploy.

🤝 Como Contribuir

Contribuições são bem-vindas! Siga os passos abaixo:

Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adiciona nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

# React Aprenda Praticando

Este projeto é um site estático desenvolvido com React para a **Editora MaujorTec**, baseado no livro **React: Aprenda Praticando**, de Maurício "Maujor" Samy Silva. O site foi criado para demonstrar a aplicação de conceitos como componentização, roteamento e organização de projetos em React.

---

## 🚀 Objetivo do Projeto

O **Site da Editora MaujorTec** é uma aplicação que simula o site de uma editora fictícia. Ele foi desenvolvido para praticar e consolidar os seguintes conceitos:

- **Componentes Reutilizáveis**: Criação de componentes como cabeçalho, rodapé e cards de livros.
- **Roteamento**: Utilização do **React Router** para navegação entre páginas.
- **Organização de Projetos**: Estruturação de pastas e arquivos para facilitar a manutenção e escalabilidade.
- **Conteúdo Estático**: Exibição de páginas como "Home", "Sobre" e "Contato".

---

## 🛠️ Funcionalidades

O site inclui as seguintes funcionalidades:

- **Página Inicial (Home)**: Apresentação da editora e destaques de livros.
- **Página Catálogo**: Livros separados por categorias.
- **Divisão por categorias**: Formulário para envio de mensagens (simulado).
- **Navegação Dinâmica**: Uso do React Router para alternar entre páginas sem recarregar a aplicação.
- **Componentes Reutilizáveis**: Cabeçalho e rodapé consistentes em todas as páginas.

---

📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

