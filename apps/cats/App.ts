import '@picocss/pico/css/pico.min.css';

import { generateApp } from '../../src/generate-app';

const App = generateApp('Cats App', [
  'Scottish Fold',
  'Russian Blue',
  'Norwegian Forest',
  'Egyptian Mau',
  'Maine Coon',
  'Cornish Rex',
  'British Longhair',
]);

export default App;
