import './Tip.css';

export const Tip = ({
  nickname,
  firstname,
  lastname,
  body,
  created,
  likes,
  dislikes,
  comments 
}) => {
  return (
    <div className="Tip">
      <div className="Tip__Client_info">
        <span>{firstname + ' ' + lastname}</span> <small>@{nickname}</small>
      </div>
      <div className="Tip__Content">
        <p>{body}</p>
      </div>
        {/*
      <div className="Tip__Interaction">
        <span className="Interaction_like">{likes}</span>
        <span className="Interaction_dislike">{dislikes}</span>
        <span className="Interaction_comment">{comments}!</span>
      </div>
        */}
      <div className="Tip__Created">
        <small>{created.toDateString()}</small>
      </div>
    </div>
  )
}
