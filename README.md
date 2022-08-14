# Unit & Integration Testing

- [ ] Calling APIs can return unpredictable data
- [ ] Can Mock modules
- [ ] Several ways to do this:
- [ ] `__mocks__` directory is one way. Scheduler App uses this method
- [ ] `jest.mock()` is the newer, more common way now
- [ ] We can mock the underlying module (axios)
- [ ] mock & console log axios
- [ ] mocked module methods - lots to use.  We use a get() mock method
- [ ] important! result must match what module returns
- [ ] Ok to mock low level modules, but better to mock interfaces. eg: getNewFriends()
- [ ] Jest Mocking is a whole topic by itself.  Lots of options
- [ ] jest.mock()  vs jest.spyOn()  vs jest.fn()
