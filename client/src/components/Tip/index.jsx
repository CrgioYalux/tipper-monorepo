import './Tip.css';
import './Comment.css';
import { useState } from 'react';
import { useClient } from '../../providers/ClientProvider';
import { ArrowUpIcon } from '../Icons/ArrowUpIcon';
import { ArrowDownIcon } from '../Icons/ArrowDownIcon';
import { EllipsisIcon } from '../Icons/EllipsisIcon';

export const Tip = ({
  nickname,
  fullname,
  body,
  created,
  likes,
  dislikes,
  comments,
  tipID,
  isComment,
  className = ''
}) => {
  const [interactionSelected, setInteractionSelected] = useState("");
  const { selectTip } = useClient();
  const ID = isComment ? `tip_comment_${tipID}` : tipID;

  const handleClickOnTip = (e) => {
    if (Boolean(e.target.dataset.unclickable) !== true) {
      selectTip({
        nickname,
        fullname,
        body,
        created,
        likes,
        dislikes,
        comments,
        tipID,
        isComment 
      });
    };
  };

  const handleCheck = (e) => {
    const interactionLike = document.getElementById(`Interaction_like_${ID}`);
    const interactionDislike = document.getElementById(`Interaction_dislike_${ID}`);
    const interactionComment = document.getElementById(`Interaction_comment_${ID}`);
    
    e.target.parentNode.classList.add('Interaction--selected');
    if (e.target.id !== `Interaction_comment_${ID}`) {
      if (interactionLike.checked) {
        interactionDislike.parentNode.classList.remove('Interaction--selected');
      };
      if (interactionDislike.checked) {
        interactionLike.parentNode.classList.remove('Interaction--selected');
      };
    };
  };

  const handleSelection = (e) => {
    const interaction = e.target;
    if (interaction.id !== `Interaction_comment_${ID}`) {
      if (interactionSelected === interaction.id) {
          interaction.checked = false;
          interaction.parentNode.classList.remove(`Interaction--selected`);
          setInteractionSelected("");
      }
      else {
        setInteractionSelected(e.target.id);
      };
    };
  };

  return (
    <div
      className={`Tip ${isComment ? "_is_comment" : "_is_not_comment"} ${className}`}
      onClick={handleClickOnTip}
    >
      <div className="Tip__Client_info">
        <span>{fullname}</span>
        <b>•</b>
        <a href={`/${nickname}`}>@{nickname}</a>
        <small>{created.toDateString()}</small>
      </div>
      <div className="Tip__Content">
        <p>{body}</p>
      </div>
      <form className="Tip__Interaction">
        <div className="Interaction_like">
          <label htmlFor={`Interaction_like_${ID}`} data-unclickable={true}>
            <input
              type="radio"
              name="Interaction_selected"
              value={`Interaction_like_${ID}`}
              id={`Interaction_like_${ID}`}
              onClick={handleSelection}
              onChange={handleCheck}
              data-unclickable={true}
            />
            <ArrowUpIcon 
              className="Interaction_like_icon"
              data_unclickable={true}
            />
            <span data-unclickable={true}>{likes}</span>
          </label>
        </div>
        <div className="Interaction_dislike">
          <label htmlFor={`Interaction_dislike_${ID}`} data-unclickable={true}>
            <input
              type="radio"
              name="Interaction_selected"
              value={`Interaction_dislike_${ID}`}
              id={`Interaction_dislike_${ID}`}
              onClick={handleSelection}
              onChange={handleCheck}
              data-unclickable={true}
            />
            <ArrowDownIcon
              className="Interaction_dislike_icon"
              data_unclickable={true}
            />
            <span data-unclickable={true}>{dislikes}</span>
          </label>
        </div>
        <div className="Interaction_comment" >
          <label htmlFor={`Interaction_comment_${ID}`} data-unclickable={true}>
            <input 
              type="radio"
              name="Interaction_comment"
              value={`Interaction_comment_${ID}`}
              id={`Interaction_comment_${ID}`}
              onClick={handleSelection}
              onChange={handleCheck}
              data-unclickable={true}
            />
            <EllipsisIcon
              className="Interaction_comment_icon"
              data_unclickable={true}
            />
            <span data-unclickable={true}>{comments}</span>
          </label>
        </div>
     </form>
    </div>
  );
};
