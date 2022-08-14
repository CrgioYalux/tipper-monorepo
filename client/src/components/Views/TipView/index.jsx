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
  tip_id
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
          tip_id={tip_id}
          is_comment={false}
        />
        <TipList
          tips={tipComments}
          for_comments={true}
          vars_class_name="TipView_TipList__vars"
        />
      </div>
    </div>
  );
};
