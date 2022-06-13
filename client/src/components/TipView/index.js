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

const comment3 = {
  nickname: 'angymoss',
  fullname: 'Angela Moss',
  body: '!!!!!!!!!!!!!!',
  created: new Date(),
  likes: 2,
  dislikes: 1,
  comments: 0,
  comment_id: 3
}

const comment4 = {
  nickname: 'angymoss',
  fullname: 'Angela Moss',
  body: '???????????????????',
  created: new Date(),
  likes: 5,
  dislikes: 1,
  comments: 0,
  comment_id: 4
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
  const [tipComments, setTipComments] = useState([comment1, comment2, comment3, comment4]);

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

      <div className="Tip_Comments" style={{'--cant-comments': tipComments.length}}>
        {
          tipComments.map(({comment_id, ...comment}, index) => (
            <Tip
              is_comment={true}
              key={comment_id}
              tip_id={`comment_${comment_id}`}
              {...comment}
            />
            )
          ) 
        }
      </div>
    </div>
  )
}
