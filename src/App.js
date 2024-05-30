import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>Портфолио</h1>
      <nav>
        <ul>
          <li><a href="#about">Про меня</a></li>
          <li><a href="#contact">Связь</a></li>
        </ul>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="App-section about-section">
      <h2>About Me</h2>
      <div className="about-content">
        {/* <img src="../public/photo.jpg" alt="Your Name" className="about-photo" /> */}
	<img src={require('./photo.jpg')} alt="Your Name" className="about-photo" />
        <div className="about-text">
          <p>Меня зовут Анастасия Гребнева. Я обучаюсь на третьем курсе Финансового университета на направлении "Прикладная информатика".
             Увлекаюсь анализом данных, статистикой, теорией вероятностей. </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="App-section">
      <h2>Контакт</h2>
      <p>Со мной можно связаться по адресу: <a href="mailto:215723@edu.fa.ru">215723@edu.fa.ru</a></p>
    </section>
  );
}

export default App;
