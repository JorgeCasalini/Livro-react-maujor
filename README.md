# React Aprenda Praticando

Um projeto React desenvolvido com base no livro **React: Aprenda Praticando**, de Maurício "Maujor" Samy Silva. Este projeto tem como objetivo praticar e aplicar os conceitos aprendidos no livro, desde o básico do JavaScript para React até tópicos avançados como Hooks, Firebase e testes de unidade.

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
Acesse a pasta do projeto:
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

editora-maujortec/
├── public/              # Arquivos estáticos (HTML, imagens, etc.)
├── src/                 # Código-fonte da aplicação
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas da aplicação
│   ├── hooks/           # Hooks personalizados
│   ├── services/        # Serviços (API, Firebase, etc.)
│   ├── styles/          # Estilos globais e temas
│   ├── App.js           # Componente principal
│   └── index.js         # Ponto de entrada da aplicação
├── .gitignore           # Arquivos e pastas ignorados pelo Git
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação do projeto
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

📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
