import { CssBaseline } from '@material-ui/core';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
     <Header/>
     {/* App Body */}
     <div className="app_body">
          <Sidebar/> 
          <Feed/>
     </div>
  
    
     {/* Widgets */}
  
    </div>
  );
}

export default App;
