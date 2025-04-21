import React from 'react';

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Image à gauche */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="/lemvo.png"
              alt="lemvo"
              className="img-fluid rounded-circle shadow"
              //style={{ maxWidth: '250px' }}
              //style={{ maxWidth: '180px' }}
              style={{ height: '150px', width: 'auto' }} 
            />
          </div>

          {/* Texte à droite */}
          <div className="col-md-8">
            <h2>À propos de Ndzalemvo</h2>
            <p>
            je suis passionné par la protection de l’environnement, la sécurité au travail et l’amélioration continue des systèmes de gestion. Basé à Dakar, j’allie rigueur scientifique et approche terrain pour offrir des solutions durables et efficaces.

Titulaire d’une Licence 3 en Chimie obtenue à l’Université Marien Ngouabi et d’un Master 2 en Qualité, Hygiène, Sécurité et Environnement (QHSE), je mets mes compétences au service des entreprises souhaitant renforcer leurs performances en matière de sécurité, qualité et responsabilité environnementale.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
