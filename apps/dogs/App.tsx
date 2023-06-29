import '@picocss/pico/css/pico.min.css';

import { FC } from 'react';
import { AppTemplate } from '../../src/AppTemplate';

const App: FC = () => (
  <AppTemplate
    appName="Dogs App"
    items={['Akita', 'Bulldog', 'Corgi', 'Dalmatian', 'Eurasier']}
  />
);

export default App;
