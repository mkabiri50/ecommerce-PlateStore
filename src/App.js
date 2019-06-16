import React from 'react';
import ToolBar from './Components/NavBar/ToolBar/ToolBar';
import PlateHeader from './Components/PlateHeader/PlateHeader';
import Plates from './Components/Plates/Plates';

function App() {
  return (
    <div>
      <ToolBar />
      <PlateHeader />
      <Plates />
    </div>
  );
}

export default App;
