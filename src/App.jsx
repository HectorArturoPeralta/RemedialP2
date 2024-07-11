import React from 'react';
import IMCChart from '../src/componentes/IMCChart';
import TopCausesChart from '../src/componentes/TopCausesChart';
import ParityChart from '../src/componentes/ParityChart';
import VideoGameChart from '../src/componentes/VideoGameChart';
import BolsaComparativa from '../src/componentes/comparativaChart';

const App = () => {
  
  const parityData = [
    { date: '2023-01-01', value: 185 },
    { date: '2023-02-01', value: 190 },
    { date: '2023-03-01', value: 195 },
    { date: '2023-04-01', value: 200 },
    { date: '2023-05-01', value: 210 },
    { date: '2023-06-01', value: 215 },
    { date: '2023-07-01', value: 220 },
    { date: '2023-08-01', value: 225 },
    { date: '2023-09-01', value: 230 },
    { date: '2023-10-01', value: 235 },
  ];
  

  const videoGamesData = {
    labels: [
      'The Legend of Zelda: Tears of the Kingdom',
      'Hogwarts Legacy',
      'Starfield',
      'Final Fantasy XVI',
      'Spider-Man 2'
    ],
    datasets: [
      {
        label: 'Ventas en 2023 (Unidades)',
        data: [10000000, 8000000, 7500000, 7000000, 6500000], // Ventas en unidades
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
  

  const causesData = [
    { cause: 'Enfermedades Cardíacas', deaths: 697000 },
    { cause: 'Cáncer de Pulmón', deaths: 162000 },
    { cause: 'Accidentes de Tráfico', deaths: 41500 },
    { cause: 'Cáncer de Próstata', deaths: 34000 },
    { cause: 'Diabetes', deaths: 38000 },
    { cause: 'Enfermedad Respiratoria Crónica', deaths: 18000 },
    { cause: 'Accidentes Laborales', deaths: 5800 },
  ];
  
  const imcData = [
    { category: 'Bajo Peso', value: 8 },
    { category: 'Peso Normal', value: 47 },
    { category: 'Sobrepeso', value: 30 },
    { category: 'Obesidad', value: 15 },
  ];
  

  return (
    <div className="App">
      <h1>Gráficas de Paridad Peso/Dólar, Videojuegos Más Vendidos, Comparativa de bolsas de valores, Causas de muertes y Salud</h1>
      
      <div>
        <h2>Gráfica de Paridad Peso/Dólar</h2>
        <ParityChart data={parityData} />
      </div>

      <div>
        <h2>Videojuegos Más Vendidos en 2023</h2>
        <VideoGameChart data={videoGamesData} />
      </div>

      <div>
        <h2>Comparativa de la Bolsa de Valores</h2>
        <BolsaComparativa />
      </div>

      <div>
        <h2>Principales Causas de Muerte en Hombres</h2>
        <TopCausesChart data={causesData} />
      </div>

      <div>
        <h2>Gráfica de IMC Global</h2>
        <IMCChart data={imcData} />
      </div>
    </div>
  );
};

export default App;
