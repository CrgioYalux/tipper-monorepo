import './TipView.css';
import { useState } from 'react';
import { mock_comments } from '../../../mockdata/comments';
import { Tip } from '../../Tip';
import { TipList } from '../../TipList';

export const TipView = ({
  nickname,
  fullname,
  body,
  created,
  likes,
  dislikes,
  comments,
  tipID 
}) => {
  const [tipComments, setTipComments] = useState([...mock_comments]);

  return (
    <div className='TipView'>
      <div className='TipView_content'>
        <Tip
          nickname={nickname}
          fullname={fullname}
          body={body}
          created={created}
          likes={likes}
          dislikes={dislikes}
          comments={comments}
          tipID={tipID}
          isComment={false}
        />
        <TipList
          tips={tipComments}
          forComments={true}
          className="TipView_TipList__vars"
        />
      </div>
    </div>
  );
};
