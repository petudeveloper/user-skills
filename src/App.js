import { useState } from 'react';
import ProfilePage from './pages/ProfilePage';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  const [logStatus, setLogStatus] = useState(false);

  const updateStatus = () => {
    setLogStatus(true);
  };

  const logout = () => {
    setLogStatus(false);
  };

  return (
    <div className="App">
      <NavBar logStatus={logStatus} logout={logout} />
      {logStatus
        ? <ProfilePage updateStatus={updateStatus} />
        : <Login updateStatus={updateStatus} />}
    </div>
  );
}

export default App;
