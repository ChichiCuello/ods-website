import React, { useState, useEffect } from 'react';
import './frase.css'

const Frase = () => {
  const phrases = [
    { text: "Cambiamos de conducta o cambiamos de planeta", author: "Anónimo" },
    { text: "La injusticia, en cualquier parte, es una amenaza a la justicia en todas partes", author: "Martin Luther King" },
    { text: "Lo que importa verdaderamente en la vida no son los objetivos que nos marcamos, sino los caminos que seguimos para lograrlo", author: "Peter Bamm" },
    { text: "Un derecho no es algo que alguien te da, es algo que nadie te puede quitar", author: "Ramsey Clark" },
    { text: "La esperanza de un mundo seguro y habitable recae en gente inconformista y disciplinada que están dedicadas a la justicia, paz y hermandad", author: "Martin Luther King, Jr" },
    { text: "Por favor, usa tu libertad para promover la nuestra", author: "Aung San Suu Kyi" }
  ];
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  };
  const [phrase, setPhrase] = useState(getRandomPhrase);

  useEffect(() => {
    setPhrase(getRandomPhrase());
  }, []);
  return (
    <div className="main section basic-margin frase">
      <h4 className='frase'>{phrase.text}</h4>
      <p className='author'>{phrase.author}</p>
    </div>
  )
}

export default Frase;