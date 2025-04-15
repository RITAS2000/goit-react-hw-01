import Profile from './Task1/Profile.jsx';
import userData from './Task1/userData.json';
import FriendList from './Task2/FriendList.jsx';
import friendList from './Task2/friendList.json';
import TransactionHistory from './Task3/TransactionHistory';
import transactions from './Task3/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendList} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
