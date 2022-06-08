import { Tip } from '../Tip';
import { useState, useEffect } from 'react';
import './TipView.css';

const tip3 = {
  nickname: 'pabl01',
  fullname: 'Pablo Pablinsky',
  body: 'aa aaa aaaaaaaaaa aaa aaaa aaaaaaa a aaaaaaa aaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  created: new Date(),
  likes: 99,
  dislikes: 5,
  comments: 3,
  tip_id: 2,
  comment_id: 1
}

const tip1 = {
  nickname: 'pabl01',
  fullname: 'Pablo Pablinsky',
  body: 'aa aaa aaaaaaaaaa aaa aaaa aaaaaaa a aaaaaaa aaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  created: new Date(),
  likes: 99,
  dislikes: 5,
  comments: 3,
  tip_id: 2,
  comment_id: 5
}

export const TipView = ({
    nickname,
    fullname,
    body,
    created,
    likes,
    dislikes,
    comments,
    tip_id
}) => {
  const [tipComments, setTipComments] = useState([tip3, tip1]);

  useEffect(() => {
    // get Tip comments with .tip_id

  }, []);
  
  return (
    <div className="TipView">
      <Tip
        nickname={nickname}
        fullname={fullname}
        body={body}
        created={created}
        likes={likes}
        dislikes={dislikes}
        comments={comments}
        tip_id={tip_id}
      />

      <div className="Tip_Comments">
        {
          tipComments.map(({comment_id, ...comment}) => <Tip is_comment={true} key={comment_id} comment_id={comment_id} {...comment} />)
        }
      </div>
    </div>
  )
}
