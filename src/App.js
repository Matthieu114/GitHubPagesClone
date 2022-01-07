import logo from './logo.svg';
import './App.css';
import IntroSection from './IntroSection';
import VideoSection from './VideoSection';
import TutorialSection from './TutorialSection';

function App() {
  return (
    <div className='App box-border'>
      <IntroSection />
      <VideoSection />
      <TutorialSection />
    </div>
  );
}

export default App;
