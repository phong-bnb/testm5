import './App.css';
import { Route, Routes } from 'react-router-dom';
import List from './component/List';
import Detail from './component/Detail';
function App() {
  return (
    <Routes>
        <Route path={"/list"} element={<List />} />
        <Route path={"/detail/:id"} element={<Detail />} />
      </Routes>
  );
}

export default App;
