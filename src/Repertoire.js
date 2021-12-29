import React, { useState } from 'react';
import "./Repertoire.css"

const Repertoire = () => {

  const [repertoire, toggleRepertoire] = useState(false)

  return (
    <div id="repertoire">
      <button onClick={() => toggleRepertoire(!repertoire)}>Click here for my repertoire</button>
      <div id="repertoire-list" className={`block ${repertoire ? "visible" : "hidden"}`}>
        <h2>Repertoire</h2>
        <ul>
          <li><span className="song">Ave Maria</span><span className="composer">Schubert</span></li>
          <li><span className="song">Canon in D</span><span className="composer">Pachelbel</span></li>
          <li><span className="song">Air On the G String</span><span className="composer"> Bach</span></li>
          <li><span className="song">Jesu, Joy of Man’s Desiring</span><span className="composer">Bach</span></li>
          <li><span className="song">Prelude from Cello Suite BWV 1007</span><span className="composer">Bach</span></li>
          <li><span className="song">Sound of Bells</span><span className="composer">Jose Guimaraes</span></li>
          <li><span className="song">Gymnopedie No. 1</span><span className="composer">Erik Satie</span></li>
          <li><span className="song">Recuerdos del Alhambra</span><span className="composer">Francisco Tárrega</span></li>
          <li><span className="song">Divagando</span><span className="composer">Domingo Semenzato</span></li>
          <li><span className="song">Romance</span><span className="composer">Anonymous</span></li>
          <li><span className="song">El Noi de la Mare (Catalan Melody)</span><span className="composer">Traditional</span></li>
          <li><span className="song">Canarios</span><span className="composer">Gaspar Sanz</span></li>
          <li><span className="song">Maria Luisa: Mazurka</span><span className="composer">Julio Sagreras</span></li>
          <li><span className="song">Estudio 6 Op. 35, No. 17</span><span className="composer">Fernando Sor</span></li>
          <li><span className="song">Estudio Op. 60, No. 3</span><span className="composer">Mateo Carcassi</span></li>
          <li><span className="song">Julia Florida - Barcarola</span><span className="composer">Augustín Barrios Mangoré</span></li>
          <li><span className="song">Lágrima</span><span className="composer">Francisco Tárrega</span></li>
          <li><span className="song">Adelita</span><span className="composer">Francisco Tárrega</span></li>
          <hr />
          <li><span className="song">Perfect</span><span className="composer">Ed Sheeran</span></li>
          <li><span className="song">In My Life</span><span className="composer">The Beatles</span></li>
          <li><span className="song">Stand by Me</span><span className="composer"></span><span className="composer">Ben E. King</span></li>
          <li><span className="song">Can’t Help Falling in Love</span><span className="composer">Elvis Presley</span></li>
          <li><span className="song">Cavatina</span><span className="composer">Stanley Myers</span></li>
          <li><span className="song">Here Comes the Sun</span><span className="composer">The Beatles</span></li>
          <li><span className="song">All of Me</span><span className="composer">John Stephens and Toby Gad</span></li>

          <li id="and-more">Plus renaissance, baroque, and folk tunes</li>
        </ul>
      </div>
    </div>
  );
};

export default Repertoire;