import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5">Mes Projets</h2>
        <div className="row">

          {/* Projet 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/projet1.png"
                className="card-img-top"
                alt="Projet 1"
              />
              <div className="card-body">
                <h5 className="card-title">Responsable RH</h5>
                <p className="card-text">
                 Responsable RH avec un contract CDD a stram
                </p>
              </div>
            </div>
          </div>

          {/* Projet 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/projet2.png"
                className="card-img-top"
                alt="Projet 2"
              />
              <div className="card-body">
                <h5 className="card-title">Téléconseiller</h5>
                <p className="card-text">
                  Téléconseiller avec un contrat de CDD a intelcia
                </p>
              </div>
            </div>
          </div>

          {/* Tu peux ajouter autant de projets que tu veux en copiant le bloc ci-dessus */}

        </div>
      </div>
    </section>
  );
}

export default Projects;
