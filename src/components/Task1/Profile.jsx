import stylesProfile from './Profile.module.css';
import Stats from './Stats';
import UserName from './UserName.jsx';

export default function Profile(props) {
  return (
    <div className={stylesProfile.profile}>
      <UserName
        name={props.name}
        tag={props.tag}
        location={props.location}
        image={props.image}
      />
      <Stats stats={props.stats} />
    </div>
  );
}
