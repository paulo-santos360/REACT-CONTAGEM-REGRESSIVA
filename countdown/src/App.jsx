import Title from './assets/components/Title';
import Counter from './assets/components/Counter';

import NewYear from './assets/newyear.jpg';

import useCountdown from './hooks/useCountdown';

import './App.css';

function App() {

  const [day, hour, minute, segund] = useCountdown("Jan 1, 2023 00:00:00");

  
  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})`}}>
      <div className="container">
      <Title title="Contagem regressiva para o Evento" />
      <div className="countdown-container">
        <Counter title="Dias" number={day}/>
        <Counter title="Horas" number={hour}/>
        <Counter title="Minutos" number={minute}/>
        <Counter title="Segundos" number={1}/>
      </div>
      </div>
    </div>
  );
}

export default App;
