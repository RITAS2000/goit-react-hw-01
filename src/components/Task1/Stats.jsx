import stylesStats from './Stats.module.css';

export default function Stats(props) {
  return (
    <ul className={stylesStats.itemsStyle}>
      <li className={stylesStats.itemStyle}>
        <p className={stylesStats.itemText}>Followers</p>{' '}
        <p className={stylesStats.itemNumber}>{props.stats.followers}</p>
      </li>
      <li className={stylesStats.itemStyle}>
        <p className={stylesStats.itemText}>Views</p>{' '}
        <p className={stylesStats.itemNumber}>{props.stats.views}</p>
      </li>
      <li className={stylesStats.itemStyle}>
        <p className={stylesStats.itemText}>Likes</p>{' '}
        <p className={stylesStats.itemNumber}>{props.stats.likes}</p>
      </li>
    </ul>
  );
}
