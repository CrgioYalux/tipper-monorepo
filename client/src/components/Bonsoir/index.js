import './Bonsoir.css';
import { useState, useEffect } from 'react';

const char = '|';

export const Bonsoir = () => {
  const [line, setLine] = useState(char);

  useEffect(() => {
    const timer = setInterval(() => {
      (line === char) && setLine(' ');
      (line === ' ') && setLine(char);
    }, 800);
    return () => timer && clearInterval(timer);
  }, [line]);

  return (
    <div className="Bonsoir">
      <h3>λ bonsoir elliot {line}</h3>
    </div>
  )
}

