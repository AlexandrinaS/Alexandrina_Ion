import './App.css';
import WelcomePage from './components/WelcomePage';
import InvitationPart from "./components/InvitationPart";
import Location from "./components/Location";
import Countdown from './components/Timer';

const App = () => {
    return (<div className="App" style={{ fontFamily: 'Cormorant Garamond' }}>
        <WelcomePage />

        < Location />
        <Countdown targetDate="2026-05-10T16:00:00" />

    </div>
    );
}

export default App;