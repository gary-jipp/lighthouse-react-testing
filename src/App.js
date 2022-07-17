import {useState, useCallback, } from 'react';
import Header from 'components/Header';
import Input from 'components/Input';
import FriendList from 'components/FriendList';
import {addFriend, getNewFriends, removeFriend} from 'helpers';
import 'App.css';

export default function App() {
  const [data, setData] = useState([]);
  const newFriends = useCallback(() => {
    getNewFriends(5).then(res => setData(res));
  }, []);


  const addItem = function(name) {
    if (!name) return;
    setData(addFriend(data, name));
  };

  const deleteItem = function(uid) {
    setData(removeFriend(data, uid));
  };


  return (
    <div className="App">

      <Header text="My Friends" />
      <Input onSave={addItem}></Input>

      <button type="button" onClick={newFriends}>Get New Friends</button>

      <FriendList items={data} deleteItem={deleteItem} />
    </div>
  );
};