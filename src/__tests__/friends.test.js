const {getNewFriends} = require("helpers/list");

const data = [
  {name: "Betty White", uid: "1"},
  {name: "Freddy Mercury", uid: "2"},
  {name: "James Holden", uid: "3"},
  {name: "Tom Cruise", uid: "4"},
];

describe('Helper Async tests', () => {

  //---------- ASYNC ----------------------
  // Coverage - getNewFriends
  test("getNewFriends returns 4 new friends", () => {
    return getNewFriends(4)
      .then(friends => {
        expect(friends.length).toBe(4);
      });
  });

  // Coverage - getNewFriends (async/await)
  test("getNewFriends async/await returns 4 new friends", async () => {

    // const friends = getNewFriends(4);  // returns a promise

    const friends = await getNewFriends(4);  // returns res
    expect(friends.length).toBe(4);

    // We can't really test much else
    console.log(friends);
  });

});
