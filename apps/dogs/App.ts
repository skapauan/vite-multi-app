import '@picocss/pico/css/pico.min.css';

import { generateApp } from '../../src/generate-app';

const App = generateApp('Dogs App', [
  'Akita',
  'Bulldog',
  'Corgi',
  'Dalmatian',
  'Eurasier',
]);

export default App;
