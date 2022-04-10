import './App.scss';
import { Card } from './components/Card';
import { data } from './data';

function App() {
  return (
    <div className="App">
      <div className='box'>

        <div className='grid'>
          <Card projectName={data[0].projectName} heading={data[0].heading} gitHubLink={data[0].gitHubLink} />
          <Card projectName={data[1].projectName} heading={data[1].heading} />
          <Card projectName="ニコニコ風コメントアプリ" heading="ニコニコ風にコメントを流します" />
          <Card projectName="ニコニコ風コメントアプリ" heading="ニコニコ風にコメントを流します" />
        </div>

      </div>
    </div>
  );
}

export default App;