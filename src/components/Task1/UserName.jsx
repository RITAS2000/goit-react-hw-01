import styleUserName from './UserName.module.css';

export default function UserName(props) {
  return (
    <div className={styleUserName.itemsContainer}>
      <img
        className={styleUserName.imgStyle}
        src={props.image}
        alt="User avatar"
        width="180"
      />
      <h2 className={styleUserName.title}>{props.name}</h2>
      <p className={styleUserName.text}>@{props.tag}</p>
      <p>{props.location}</p>
    </div>
  );
}
