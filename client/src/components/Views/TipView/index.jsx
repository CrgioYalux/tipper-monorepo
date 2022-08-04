import { useState, useEffect } from 'react';
import { mock_comments } from '../../../mockdata/comments';
import { Tip } from '../../Tip';
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
  const [tipComments, setTipComments] = useState([...mock_comments]);
  const hasComments = tipComments.length !== 0;
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
        is_comment={false}
      />
      <div
        className={`Tip_Comments ${hasComments ? '--has-comments' : '--has-no-comments'}`} 
        style={{'--cant-comments': tipComments.length}}>
        {
          tipComments.map((comment) => (
            <Tip
              key={comment.tip_id}
              is_comment={true}
              {...comment}
            />
          )) 
        }
      </div>
    </div>
  )
}
