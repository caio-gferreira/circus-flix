![Logo do Markdown](src\img\Logo.png)

Caio Gabriel Ferreira
## Como Rodar (npm)

Para rodar o projeto, siga os seguintes passos:

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Clone o repositório do projeto para sua máquina local.
3. Execute o comando `npm install` para instalar as dependências do projeto.
4. Após a instalação das dependências, execute o comando `npm start` para iniciar o servidor de desenvolvimento.
5. O projeto estará disponível no navegador em `http://localhost:3000`.

## Informações Úteis

Este tópico fornece informações relevantes sobre a configuração do projeto e o funcionamento dos arquivos de dados mockados.

### mock_login.json

O arquivo `mock_login.json` contém credenciais de login mockadas para fins de desenvolvimento e teste. Essas credenciais são utilizadas para simular o processo de login na aplicação.

```json
{
    "email_mock": "testerson@email.com",
    "password_mock": "testerson"
}
```

### dados_iniciais.json

O arquivo `dados_iniciais.json` contém informações iniciais para configuração da aplicação, como o título e URL do vídeo da página inicial, bem como categorias e vídeos associados a elas. Esses dados são utilizados para preencher o conteúdo inicial da aplicação e podem ser modificados conforme necessário.
```json
{ 
    "homepage": {
      "title": "TITULO VIDEO",
      "url": "URL YOUTUBE"
    },
    "categories": [
      {
        "title": "TITULO CATEGORIA",
        "color": "#6BD1FF",
        "videos": [
          {
            "title": "TITULO VIDEO",
            "url": "URL YOUTUBE"
          }
        ]
      }
    ]
}
```
## Sobre o Projeto

O projeto consiste em um protótipo de uma plataforma de estudos para a área de Análise e Desenvolvimento de Sistemas (ADS). A plataforma tem como objetivo fornecer recursos e ferramentas para estudantes área aprimorarem seus conhecimentos e habilidades em programação, desenvolvimento de sistemas e tecnologias relacionadas.

### Funcionalidades Principais:

- **Login de Usuário**: Permitir que os usuários se autentiquem na plataforma para acessar conteúdos e recursos exclusivos.
- **Explorar Cursos**: Oferecer uma variedade de cursos e materiais de estudo relacionados a ADS, organizados por temas e níveis de dificuldade.
- **Recursos de Aprendizagem**: Disponibilizar recursos de aprendizagem, como vídeos, artigos, tutoriais e exercícios práticos.

### Tecnologias Utilizadas:

- **React.js**: Framework JavaScript para interfaces de usuário dinâmicas e responsivas.
- **React Router**: Biblioteca para gerenciamento de rotas em aplicações React.
- **Node.js e npm**: Ambiente de execução JavaScript no servidor e gerenciador de pacotes para instalação de dependências.
- **HTML e CSS**: Linguagens de marcação e estilização para estruturar e estilizar o conteúdo da aplicação.
- **Material-UI**: Biblioteca de componentes React com design inspirado no Material Design da Google, facilitando a criação de interfaces elegantes e consistentes.
- **Styled Components**: Biblioteca para criação de componentes estilizados com CSS-in-JS, permitindo o encapsulamento de estilos dentro dos próprios componentes React.

