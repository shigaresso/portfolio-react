import './App.scss';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <div className='box'>

        <div className='grid'>
          <Card title="ニコニコ風コメントアプリ SCSS 導入版" text="ニコニコ風にコメントを流します" gitHubLink='https://github.com/shigaresso' />
          <Card title="ニコニコ風コメントアプリ" text="ニコニコ風にコメントを流します" />
          <Card title="ニコニコ風コメントアプリ" text="ニコニコ風にコメントを流します" />
          <Card title="ニコニコ風コメントアプリ" text="ニコニコ風にコメントを流します" />
        </div>

      </div>
    </div>
  );
}

export default App;