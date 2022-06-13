import { Tip } from '../Tip';
import { useState, useEffect } from 'react';
import './TipView.css';

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
  const [tipComments, setTipComments] = useState([]);
  
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
