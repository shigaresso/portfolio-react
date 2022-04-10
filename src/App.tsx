import './App.css';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      
      <div className='grid'>
        <Card title="ニコニコ風コメントアプリ" text="ニコニコ風にコメントを流します" />
        <Card title="ニコニコ風コメントアプリ" text="ニコニコ風にコメントを流します" />
        <Card title="ニコニコ風コメントアプリ" text="ニコニコ風にコメントを流します" />
        <Card title="ニコニコ風コメントアプリ" text="ニコニコ風にコメントを流します" />
      </div>

    </div>
  );
}

export default App;