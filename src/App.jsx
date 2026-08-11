import './App.css'

function App() {
  return (
    <div className="pagina">

      <header className="encabezado">
        <h1>Paisajes de la Sierra Gorda</h1>
        <p>Descubre algunos de los paisajes naturales más hermosos de nuestra región.</p>
      </header>

      <main className="contenedor">

        <div className="tarjeta">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Paisaje natural"
          />
          <div className="contenido">
            <h2>Cuatro Palos</h2>
            <p>
              Un impresionante mirador rodeado de naturaleza y montañas,
              ideal para disfrutar de una gran vista de la Sierra Gorda.
            </p>
            <button>Ver paisaje</button>
          </div>
        </div>

        <div className="tarjeta">
          <img
            src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9"
            alt="Cascada"
          />
          <div className="contenido">
            <h2>Cascada El Chuveje</h2>
            <p>
              Una hermosa cascada rodeada de vegetación, ubicada entre
              los paisajes naturales de la Sierra Gorda.
            </p>
            <button>Ver paisaje</button>
          </div>
        </div>

        <div className="tarjeta">
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
            alt="Río"
          />
          <div className="contenido">
            <h2>Río Escanela</h2>
            <p>
              Un sitio natural con agua cristalina, vegetación y senderos
              perfectos para disfrutar de la naturaleza.
            </p>
            <button>Ver paisaje</button>
          </div>
        </div>

      </main>

      <footer className="pie">
        <p>Paisajes de la Sierra Gorda</p>
      </footer>

    </div>
  )
}

export default App