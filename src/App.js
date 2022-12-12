import './App.scss';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <MovieList/>
    </div>
  );
}

export default App;
