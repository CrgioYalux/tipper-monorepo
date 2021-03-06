import { useState, useEffect } from 'react';
import { useView } from '../../providers/ViewProvider';
import './Tip.css';
import './Comment.css';

export const Tip = ({
  nickname,
  fullname,
  body,
  created,
  likes,
  dislikes,
  comments,
  tip_id,
  is_comment
}) => {
  const [interactionSelected, setInteractionSelected] = useState("");
  const { selectTip } = useView();
  const id = is_comment ? `tip_comment_${tip_id}` : tip_id;

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
        tip_id,
        is_comment
      });
    };
  };

  const handleCheck = (e) => {
    const interactionLike = document.getElementById(`Interaction_like_${id}`);
    const interactionDislike = document.getElementById(`Interaction_dislike_${id}`);
    const interactionComment = document.getElementById(`Interaction_comment_${id}`);
    
    e.target.parentNode.classList.add('Interaction--selected');
    if (e.target.id !== `Interaction_comment_${id}`) {
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
    if (interaction.id !== `Interaction_comment_${id}`) {
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
    <div className={`Tip ${is_comment ? "_is_comment" : "_is_not_comment"}`} onClick={handleClickOnTip}>  
      <div className="Tip__Client_info">
        <span className="Tip__Client_fullname">{fullname}</span>
        <b>???</b>
        <small className="Tip__Client_nickname">@{nickname}</small>
        <small className="Tip__Client_created">{created.toDateString()}</small>
      </div>
      <div className="Tip__Content">
        <p>{body}</p>
      </div>
      <form className="Tip__Interaction">
        <div className="Interaction_like" >
          <label htmlFor={`Interaction_like_${id}`} data-unclickable={true}>
            <input
              type="radio"
              name="Interaction_selected"
              value={`Interaction_like_${id}`}
              id={`Interaction_like_${id}`}
              onClick={handleSelection}
              onChange={handleCheck}
              data-unclickable={true}
            />
            <b data-unclickable={true}>???</b>
            <span data-unclickable={true}>{likes}</span>
          </label>
        </div>
        <div className="Interaction_dislike" >
          <label htmlFor={`Interaction_dislike_${id}`} data-unclickable={true}>
            <input
              type="radio"
              name="Interaction_selected"
              value={`Interaction_dislike_${id}`}
              id={`Interaction_dislike_${id}`}
              onClick={handleSelection}
              onChange={handleCheck}
              data-unclickable={true}
            />
            <b data-unclickable={true}>???</b>
            <span data-unclickable={true}>{dislikes}</span>
          </label>
        </div>
        <div className="Interaction_comment" >
          <label htmlFor={`Interaction_comment_${id}`} data-unclickable={true}>
            <input 
              type="radio"
              name="Interaction_comment"
              value={`Interaction_comment_${id}`}
              id={`Interaction_comment_${id}`}
              onClick={handleSelection}
              onChange={handleCheck}
              data-unclickable={true}
            />
            <span data-unclickable={true}>{comments}</span>
            <b data-unclickable={true}>?????????</b>
          </label>
        </div>
     </form>
    </div>
  );
};
