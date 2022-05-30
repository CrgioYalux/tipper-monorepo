import { useState, useEffect } from 'react';
import './Tip.css';

export const Tip = ({
  nickname,
  fullname,
  body,
  created,
  likes,
  dislikes,
  comments,
  tip_id
}) => {
  const [interactionSelected, setInteractionSelected] = useState("");

  const handleCheck = (e) => {
    const interactionLike = document.getElementById(`Interaction_like_${tip_id}`);
    const interactionDislike = document.getElementById(`Interaction_dislike_${tip_id}`);
    const interactionComment = document.getElementById(`Interaction_comment_${tip_id}`);
    
    e.target.parentNode.classList.add('Interaction--selected');
    if (e.target.id !== `Interaction_comment_${tip_id}`) {
      if (interactionLike.checked) {
        interactionDislike.parentNode.classList.remove('Interaction--selected');
      }
      if (interactionDislike.checked) {
        interactionLike.parentNode.classList.remove('Interaction--selected');
      }  
    }
  }

  const handleSelection = (e) => {
    const interaction = e.target;
    if (interaction.id !== `Interaction_comment_${tip_id}`) {
      if (interactionSelected === interaction.id) {
          interaction.checked = false;
          interaction.parentNode.classList.remove(`Interaction--selected`);
          setInteractionSelected("");
      }
      else {
        setInteractionSelected(e.target.id);
      }
    }
  }

  return (
    <div className="Tip"> 
      <div className="Tip__Client_info">
        <span className="Tip__Client_fullname">{fullname}</span>
        <b>•</b>
        <small className="Tip__Client_nickname">@{nickname}</small>
        <small className="Tip__Client_created">{created.toDateString()}</small>
      </div>
      <div className="Tip__Content">
        <p>{body}</p>
      </div>
      <form className="Tip__Interaction">
        <div className="Interaction_like">
          <label htmlFor={`Interaction_like_${tip_id}`}>
            <input
              type="radio"
              name="Interaction_selected"
              value={`Interaction_like_${tip_id}`}
              id={`Interaction_like_${tip_id}`}
              onClick={handleSelection}
              onChange={handleCheck}
            />
            <b>↑</b>
            <span>{likes}</span>
          </label>
        </div>
        <div className="Interaction_dislike">
          <label htmlFor={`Interaction_dislike_${tip_id}`}>
            <input
              type="radio"
              name="Interaction_selected"
              value={`Interaction_dislike_${tip_id}`}
              id={`Interaction_dislike_${tip_id}`}
              onClick={handleSelection}
              onChange={handleCheck}
            />
            <b>↓</b>
            <span>{dislikes}</span>
          </label>
        </div>
        <div className="Interaction_comment">
          <label htmlFor={`Interaction_comment_${tip_id}`}>
            <input 
              type="radio"
              name="Interaction_comment"
              value={`Interaction_comment_${tip_id}`}
              id={`Interaction_comment_${tip_id}`}
              onClick={handleSelection}
              onChange={handleCheck}
            />
            <span>{comments}</span>
            <b>•••</b>
          </label>
        </div>
     </form>
    </div>
  )
}
