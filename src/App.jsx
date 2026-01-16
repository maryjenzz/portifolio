import React from 'react';
import Cover from './components/Cover/Cover';
import Reveal from './components/Reveal/Reveal';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const profissionais = [
    {
      name: "Arena Máfia",
      description: "EM DESENVOLVIMENTO: Sistema de agendamento de quadras esportivas e cadastro de campeonatos.",
      image: "/arena.jpeg",
      link: "https://arenamafia.com.br"
    }
  ];

  const pessoais = [
    {
      name: "Tic Tac Toe",
      description: "Aplicação básica de Jogo da Velha.",
      image: "/tic-tac-toe.png",
      link: "https://maryjenzz.github.io/tic-tac-toe/"
    },
    {
      name: "Flag Game",
      description: "Jogo interativo onde o objetivo é adivinhar a qual país pertence a bandeira exibida.",
      image: "/flag-game.png",
      link: "https://maryjenzz.github.io/flag-game/"
    },
    {
      name: "To Do List",
      description: "Lista de tarefas, com o objetivo de simular uma aplicação completa.",
      image: "/todo-app.png",
      link: "https://maryjenzz.github.io/todo-app/"
    },
    {
      name: "Dark Mode",
      description: "Aplicação Web que demonstra a implementação de um sistema de alternância entre temas (claro e escuro).",
      image: "/dark-mode.png",
      link: "https://maryjenzz.github.io/dark-mode-react/"
    },
    {
      name: "Quotes App",
      description: "Projeto que consiste numa aplicação para visualizar citações inspiradoras alimentada por uma API REST personalizada e desenvolvida em Node.js.",
      image: "/quotes-app.png",
      link: "https://maryjenzz.github.io/quotes-app/"
    }
  ];

  const meusCertificados = [
    { name: "React + JavaScript", company: "IFSC", year: "2026" },
    { name: "Imersão IA", company: "Alura", year: "2025" },
    { name: "HTML, CSS e JavaScript", company: "Fundação Bradesco", year: "2025" },
    { name: "Imersão Mobile", company: "Alura", year: "2025" },
  ];

  return (
    <div className="main-container">
      <Cover />
      <div className="content-padding">
        <Reveal>
          <Home />
        </Reveal>
        <Reveal>
          <Projects title="Projetos Profissionais" data={profissionais} />
        </Reveal>
        <Reveal>
          <Projects title="Projetos Pessoais" data={pessoais} />
        </Reveal>
        <Reveal>
          <Certificates data={meusCertificados} />
        </Reveal>
        <Reveal>
          <Footer />
        </Reveal>
      </div>
    </div>
  );
}

export default App;