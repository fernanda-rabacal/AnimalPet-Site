import {Router} from './Routes';
import React, {Suspense} from 'react'


function App() {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
}

export default App;
