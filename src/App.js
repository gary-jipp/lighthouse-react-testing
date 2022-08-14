import {useState, useCallback, } from 'react';
import Header from 'components/Header';
import Input from 'components/Input';
import FriendList from 'components/FriendList';
import axios from 'axios';

import 'App.css';
import {addFriend, getFriendCount, removeFriend} from 'helpers/list';

export default function App() {
  const [data, setData] = useState([]);
  const newFriends = useCallback(() => {
    axios.get(`https://random-data-api.com/api/name/random_name?size=${5}`)
      .then(res => setData(res));
  }, []);


  const addItem = function(name) {
    if (!name) return;
    setData(addFriend(data, name));
  };

  const deleteItem = function(uid) {
    setData(removeFriend(data, uid));
  };


  const title = `My Friends: ${getFriendCount(data)}`;

  return (
    <div className="App">

      <Header text={title} />
      <Input onSave={addItem}></Input>

      <button type="button" onClick={newFriends}>Get New Friends</button>
      <input type="checkbox" />

      <FriendList items={data} deleteItem={deleteItem} />
    </div>
  );
};