import '@picocss/pico/css/pico.min.css';

import { FC } from 'react';

import { AppTemplate } from '../../src/AppTemplate';

const App: FC = () => (
  <AppTemplate
    appName="Fish App"
    items={['Goldfish', 'Betta', 'Platy', 'Cory', 'Tetra', 'Danio']}
  />
);

export default App;
