
1. What problem does the context API help solve?
Manage data that will be used by many different components

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions send data from our app to the redux store, they are the only source of information for the store. Reducers specify how the state of the app changes in response to the actions that are sent to the store, and the store brings it all home, its a centralized state holder, it is known as a single source of truth because because you only have one in an app to hold all the state needed, it allows acces to state, it allows state to be updated, it registers listeners and unregisters them. Basically its the one source for the app to go back to and get what it needs. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  App state is most likely a global state that is needed by multiple components, Component state is a local state that only that particular component and its children can use but no one else unless it is exported and passed in as props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
its a middleware that looks at every action that passes through and if its a function it calls that function, it makes actions a function instead of just being an object 

5. What is your favorite state management system you've learned and this sprint? Please explain why!
Context Api I really like because it is simple, however Redux I think will be able to handle a lot more complex things and keep your code reusable since you have custom hooks and a centralized source of state that you can always pull from 