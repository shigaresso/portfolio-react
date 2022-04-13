import { useState } from 'react';
import { CardGrid } from './components/CardGrid';
import { SearchCardBox } from './components/SearchCardBox';
import './App.scss';
import { firstSearchText } from './data';

function App() {
  // ポートフォリオのグリッドで表示するリポジトリのフィルター用変数
  const [filterText, setFilterText] = useState(firstSearchText)

  return (
    <div className="App">
 
      <div className='box'>

        <SearchCardBox setFilterText={setFilterText}/>

        <CardGrid filterText={filterText}/>

      </div>
    </div>
  );
}

export default App;