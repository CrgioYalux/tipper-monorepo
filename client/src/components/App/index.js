import './App.css';
import { Tip } from '../Tip';

const tip1 = {
  nickname: 'pabl01',
  fullname: 'Pablo Pablinsky',
  body: 'This is a test tip',
  created: new Date(),
  likes: 10,
  dislikes: 5,
  comments: 3,
  tip_id: 0
}

const tip2 = {
  nickname: 'xXk4r1m4rXxxXk4r1m4rXx1234',
  fullname: 'Karl Marx',
  body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  created: new Date(),
  likes: 99,
  dislikes: 5,
  comments: 3,
  tip_id: 1
}

const tip3 = {
  nickname: 'pabl01',
  fullname: 'Pablo Pablinsky',
  body: 'aa aaa aaaaaaaaaa aaa aaaa aaaaaaa a aaaaaaa aaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  created: new Date(),
  likes: 99,
  dislikes: 5,
  comments: 3,
  tip_id: 2
}

export const App = () => {
  return (
    <div className="App">
      <div className="Tips_container">
        <Tip {...tip1} />
        <Tip {...tip2} />
        <Tip {...tip3} />
      </div>
    </div>
  )
}
