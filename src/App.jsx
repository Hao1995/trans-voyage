import TransVoyage from './assets/TransVoyage.svg'
import './App.css'
import trainStations from './config/trainStations';

function App() {
  const pickRandomStation = () => {
    const randomIndex = Math.floor(Math.random() * trainStations.length);
    const station = trainStations[randomIndex];
    document.getElementById("selected-station").textContent = station;
  };

  return (
    <>
      <div>
        <img src={TransVoyage} alt="TransVoyage" style={{ width: '400px', height: 'auto' }} />
      </div>
      <div className="card">
        <button onClick={pickRandomStation}>Pick a Random Station</button>
        <p id="selected-station"></p>
      </div>
    </>
  )
}

export default App
