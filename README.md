# ENGIMIND – Site Institucional

Este projeto é o site institucional da **ENGIMIND**, uma empresa de consultoria especializada em mobilidade, transportes e infraestruturas. Desenvolvido com **Next.js (App Router)** e **Tailwind CSS**, o site apresenta um design moderno, responsivo e profissional.

## 🚀 Tecnologias

*   **Next.js**: Framework React para produção (App Router).
*   **Tailwind CSS**: Framework de utilitários CSS para estilização rápida e consistente.
*   **TypeScript**: Para tipagem estática e código mais seguro.

## 🛠️ Instalação e Execução

Para correr o projeto localmente, siga estes passos:

1.  **Instalar dependências**:
    ```bash
    npm install
    ```

2.  **Iniciar o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

3.  **Aceder ao site**:
    Abra [http://localhost:3000](http://localhost:3000) no seu browser.

## 📂 Estrutura do Projeto

*   **`app/`**: Contém as rotas, páginas e layouts do projeto (App Router).
    *   `page.tsx`: Homepage.
    *   `layout.tsx`: Layout principal (inclui Navbar e Footer).
    *   `globals.css`: Estilos globais e configuração do Tailwind.
    *   Subpastas (`servicos`, `projetos`, `noticias`, `contactos`): Páginas internas.
*   **`components/`**: Componentes Reutilizáveis.
    *   `Navbar.tsx`: Barra de navegação responsiva.
    *   `Footer.tsx`: Rodapé do site.
*   **`public/images/`**: Imagens estáticas e assets do projeto.

## ☁️ Deploy

Este projeto está otimizado para ser alojado na [Vercel](https://vercel.com), a plataforma dos criadores do Next.js.

Para fazer deploy, basta conectar o repositório Git à Vercel e as configurações de build serão detetadas automaticamente.
