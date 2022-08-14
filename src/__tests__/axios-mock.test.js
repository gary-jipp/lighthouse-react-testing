const {getNewFriends} = require("helpers/fetch");
const axios = require('axios');
jest.mock('axios');

const data = [
  {name: "Betty White", uid: "1"},
  {name: "Freddy Mercury", uid: "2"},
  {name: "James Holden", uid: "3"},
  {name: "Tom Cruise", uid: "4"},
];

// This is an  result "res".  Contains .data
const axiosRes = {data};

describe('Helper Async tests', () => {

  // getNewFriends (async/await)
  test("getNewFriends mock returns the same 4 friends", async () => {

    // console.log(axios);
    axios.get.mockResolvedValueOnce(axiosRes);

    const friends = await getNewFriends(4);  // returns res
    expect(friends.length).toBe(4);

    const tom = {name: "Tom Cruise", uid: "4"};
    expect(friends).toContainEqual(tom);

    expect(axios.get).toHaveBeenCalled(); // axios.get() was called
  });


});
