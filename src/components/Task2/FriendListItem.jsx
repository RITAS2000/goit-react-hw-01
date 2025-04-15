import stylesListItem from './FriendListItem.module.css';

export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={stylesListItem.listItem} key={id}>
      <img
        className={stylesListItem.listImg}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={stylesListItem.listNameText}>{name}</p>
      <p
        className={
          isOnline ? stylesListItem.statusOnline : stylesListItem.statusOffline
        }
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}
