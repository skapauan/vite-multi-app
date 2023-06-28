import { FC, useState } from 'react';

export const generateApp = (appName: string, items: string[]) => {
  const App: FC = () => {
    const [current, setCurrent] = useState(0);
    const showAnother = () => setCurrent((current + 1) % items.length);

    return (
      <main className="container">
        <nav aria-label="breadcrumb">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>{appName}</li>
          </ul>
        </nav>
        <h1>{appName}</h1>
        <article>
          <h2 style={{ textAlign: 'center', marginBottom: 0 }}>{items[current]}</h2>
        </article>
        <button onClick={showAnother}>Show another!</button>
      </main>
    );
  };

  return App;
};
