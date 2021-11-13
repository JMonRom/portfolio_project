import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";


function App() {
  // const particlesInit = (main) => {
  //   console.log(main);
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return (
    <>
    <Particles
    className="particles-canvas"
      // id="tsparticles"
      // init={particlesInit}
      // loaded={particlesLoaded}
      options={{
        particles: {
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: .5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 900,
            },
            value: 30,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 4,
              color: "#f9ab00"
            }
          },
  
        },
      }}
      />
    <Navbar />
    <Header />
    </>
  );
}

export default App;
