import '@picocss/pico/css/pico.min.css';

import { generateApp } from '../../src/generate-app';

const App = generateApp('Fish App', [
  'Goldfish',
  'Betta',
  'Platy',
  'Cory',
  'Tetra',
  'Danio',
]);

export default App;
