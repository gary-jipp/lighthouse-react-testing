const {getFriendCount, addFriend, removeFriend, getFriendNames} = require("helpers");

const data = [
  {name: "Betty White", uid: "1"},
  {name: "Freddy Mercury", uid: "2"},
  {name: "James Holden", uid: "3"},
  {name: "Tom Cruise", uid: "4"},
];

describe('Helper tests', () => {

  //---------------------------------------
  test("returns empty array if no friends", () => {
    const count = getFriendCount(null);
    expect(count).toBe(-1);
  });

  test("returns count of friends", () => {
    const count = getFriendCount(data);

    expect(count).toBe(4);
  });

  //---------------------------------------
  it("get correct friends names", () => {
    const names = getFriendNames(data);
    expect(names).toContain("Betty White");
    expect(names.length).toBe(4);
  });


  //---------------------------------------
  it("adds new friend", () => {
    const moreFriends = addFriend(data, "Nathan Brown", 5);
    expect(moreFriends.length).toBe(5);

    const nathan = {"name": "Nathan Brown", "uid": 5};
    // expect(moreFriends).toContain("Nathan Brown"); // Doesn't work!
    expect(moreFriends).toContainEqual(nathan); 
  });

  //---------------------------------------
  it("removes unwanted friend", () => {
    const tom = {name: "Tom Cruise", uid: "4"};
    expect(data).toContainEqual(tom);
    // expect(data).toContain(tom);  // Note this doesnt work

    const bestFriends = removeFriend(data, "4");
    expect(bestFriends.length).toBe(3);
    expect(bestFriends).not.toContainEqual(tom);
  });

  //---------- COVERAGE -------------------
  // Coverage - getFriendNames: null list
  test("getFriendNames returns empty if list is null", () => {
    const result = getFriendNames(null);
    expect(result.length).toBe(0);
  });

  // Coverage - getFriendNames: null list
  test("addFriend returns empty if list is null", () => {
    const result = addFriend(null, "tom");
    expect(result.length).toBe(0);
  });

  // Coverage - getFriendNames: null list
  test("removeFriend returns empty if list is null", () => {
    const result = removeFriend(null, 4);
    expect(result.length).toBe(0);
  });

});
