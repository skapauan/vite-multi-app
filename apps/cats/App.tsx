import '@picocss/pico/css/pico.min.css';

import { FC } from 'react';

import { AppTemplate } from '../../src/AppTemplate';

const App: FC = () => (
  <AppTemplate
    appName="Cats App"
    items={[
      'Scottish Fold',
      'Russian Blue',
      'Norwegian Forest',
      'Egyptian Mau',
      'Maine Coon',
      'Cornish Rex',
      'British Longhair',
    ]}
  />
);

export default App;
