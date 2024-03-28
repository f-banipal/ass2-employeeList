import React, { useState } from 'react';
import List from './components/List';
import {data} from './helper/data'

function App() {
  const [startIndex, setStartIndex] = useState(0);

  const nextPage = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 5, data.length - 1));
  };

  const prevPage = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  return (
    <main>
      <section className="container">
        <h3>BANIPAL COMPANY</h3>
        <hr />
        <h5>({startIndex} - {startIndex + 5}) Employee List</h5>
        
        <List startIndex={startIndex} />
        <div className="btns">
          <button onClick={prevPage} disabled={startIndex === 0}>
            Prev
          </button>
          <button onClick={nextPage} disabled={startIndex + 5 >= data.length}>
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
