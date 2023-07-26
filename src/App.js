import './App.css';
import { Route, Routes } from 'react-router-dom';
import List from './component/List';
import Detail from './component/Detail';
import Add from "./component/Add";
function App() {
  return (
    <Routes>
        <Route path={"/list"} element={<List />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        <Route path={"/add"} element={<Add />} />
      </Routes>
  );
}

export default App;
