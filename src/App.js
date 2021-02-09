import Sidebar from './sidebar/sidebar'
import './App.css';

const App=()=> {
  return (
    <div className="App">
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
