import { FC, ReactNode, useState } from 'react';

interface AppTemplateProps {
  appName: ReactNode;
  items: string[];
}

export const AppTemplate: FC<AppTemplateProps> = ({ appName, items }) => {
  const [current, setCurrent] = useState(0);
  const showAnother = () => setCurrent((current + 1) % items.length);

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>{appName}</li>
        </ul>
      </nav>
      <main>
        <h1>{appName}</h1>
        <article>
          <h2 style={{ textAlign: 'center', marginBottom: 0 }}>{items[current]}</h2>
        </article>
        <button onClick={showAnother}>Show another!</button>
      </main>
    </div>
  );
};
