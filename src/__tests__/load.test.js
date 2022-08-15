const {loadNewFriends} = require("helpers/load");

const data = [
  {name: "Betty White", uid: "1"},
  {name: "Freddy Mercury", uid: "2"},
  {name: "James Holden", uid: "3"},
  {name: "Tom Cruise", uid: "4"},
];

describe('Helper Async tests', () => {

  //---------- ASYNC ----------------------
  // Coverage - loadNewFriends
  test("loadNewFriends returns 4 new friends", () => {
    return loadNewFriends(4)
      .then(friends => {
        expect(friends.length).toBe(4);
      });
  });

  // Coverage - loadNewFriends (async/await)
  test("loadNewFriends async/await returns 4 new friends", async () => {

    // const friends = loadNewFriends(4);  // returns a promise

    const friends = await loadNewFriends(4);  // returns res
    expect(friends.length).toBe(4);

    // We can't really test much else
    // console.log(friends);
  });

});
