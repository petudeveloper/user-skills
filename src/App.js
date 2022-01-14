import { useState } from 'react';
import ProfilePage from './pages/ProfilePage';
import Login from './components/Login';

function App() {
  const [logStatus, setLogStatus] = useState(false);

  const updateStatus = () => {
    setLogStatus(true);
  };

  return (
    <div className="App">
      {logStatus ? <ProfilePage /> : <Login updateStatus={updateStatus} />}
    </div>
  );
}

export default App;
