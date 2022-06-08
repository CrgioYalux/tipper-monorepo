import './App.css';
import { Tip } from '../Tip';
import { TipView } from '../TipView';

const tip1 = {
  nickname: 'elli0t4nd3rs0n',
  fullname: 'Elliot Anderson',
  body: 'mr robot finally gone',
  created: new Date(),
  likes: 10,
  dislikes: 1,
  comments: 2,
  tip_id: 1
}
export const App = () => {
  return (
    <div className="App">
      <div className="Tips_container">
      <TipView {...tip1}/>
      </div>
    </div>
  )
}
