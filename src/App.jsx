import './App.css'
import Hamburger from './components/Hamburger'

function App() {
  return (
    <>
      <nav>
        <div id="logo">ROBINSON</div>
        <div className="links">
          <a>EDUCATION</a>
          <a>SKILLS</a>
          <a>EXPERIENCE</a>
          <a>PROFILE</a>
          <a>PORTFOLIO</a>
          <a>CLIENTS</a>
          <a>CONTACT</a>
        </div>
        <Hamburger />
      </nav>
      <section className="hero">
        <p>HI <span>,</span> I AM ROBINSON<span>.</span></p>
        <p>COMPUTER SCIENCE STUDENT @ SAVEETHA</p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <button>
            DOWNLOAD RESUME
          </button>
        </a>
      </section>
      <script>
        hi = "How did I ended up here?";
      </script>
    </>
  )
}

export default App
