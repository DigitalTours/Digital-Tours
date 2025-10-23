import { useState } from 'react'
import { motion } from 'framer-motion'

const sampleVideos = [
  { title: 'Paisaje Montañoso', src: 'https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm' },
  { title: 'Playa Tropical', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { title: 'Ciudad Nocturna', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
  { title: 'Valle y Río', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.mp4' },
  { title: 'Colinas Doradas', src: 'https://www.w3schools.com/html/movie.mp4' },
  { title: 'Bosque desde el aire', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' }
]

export default function App(){
  const [screen, setScreen] = useState('start')

  if(screen === 'start'){
    return (
      <div className="start-screen">
        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="title">Digital-Tours</motion.h1>
        <button className="primary" onClick={() => setScreen('home')}>Entrar</button>
      </div>
    )
  }

  if(screen === 'home'){
    return (
      <div className="home">
        <nav className="nav">
          <button onClick={() => setScreen('lugares')}>Lugares</button>
          <button onClick={() => setScreen('videos')}>VideoDrones</button>
          <button onClick={() => setScreen('contact')}>Contactos</button>
        </nav>

        <main className="home-main">
          <h2>Explora el mundo desde las alturas</h2>
          <p>Galería de videos aéreos grabados con drones.</p>
          <div className="home-actions">
            <button className="primary" onClick={() => setScreen('videos')}>Ver Videos</button>
          </div>
        </main>
      </div>
    )
  }

  if(screen === 'videos' || screen === 'lugares'){
    return (
      <div className="videos-screen">
        <header className="videos-header">
          <button className="link" onClick={() => setScreen('home')}>← Volver</button>
          <h1>Paisajes Grabados con Drones</h1>
        </header>

        <section className="grid">
          {sampleVideos.map((v, i) => (
            <article className="card" key={i}>
              <div className="video-frame">
                <video controls playsInline preload="metadata">
                  <source src={v.src} type="video/mp4"/>
                  Tu navegador no soporta video.
                </video>
              </div>
              <div className="card-title">{v.title}</div>
            </article>
          ))}
        </section>
      </div>
    )
  }

  if(screen === 'contact'){
    return (
      <div className="contact-screen">
        <button className="link" onClick={() => setScreen('home')}>← Volver</button>
        <h2>Contáctanos</h2>
        <p>Correo: contacto@digital-tours.local</p>
        <p>Teléfono: +57 300 123 4567</p>
      </div>
    )
  }

  return null
}
