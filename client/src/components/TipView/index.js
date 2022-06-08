import { Tip } from '../Tip';
import { useState, useEffect } from 'react';
import './TipView.css';

const comment1 = {
  nickname: 'font_roboto',
  fullname: 'Mr. Robot',
  body: 'ratio',
  created: new Date(),
  likes: '1K',
  dislikes: 1,
  comments: 3,
  comment_id: 1
}

const comment2 = {
  nickname: 'tyrwellick',
  fullname: 'Tyrell Wellick',
  body: 'bonsoir Elliot',
  created: new Date(),
  likes: 2,
  dislikes: 1,
  comments: 0,
  comment_id: 2
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
  const [tipComments, setTipComments] = useState([comment1, comment2]);

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
          tipComments.map(({comment_id, ...comment}) => (
            <Tip
              is_comment={true}
              key={comment_id}
              tip_id={`comment_${comment_id}`}
              {...comment} />)
          ) 
        }
      </div>
    </div>
  )
}
