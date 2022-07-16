<div class="challenge-instructions redux"><div><section id="description">
<p>So far these challenges have avoided discussing asynchronous actions, but they are an unavoidable part of web development. At some point you'll need to call asynchronous endpoints in your Redux app, so how do you handle these types of requests? Redux provides middleware designed specifically for this purpose, called Redux Thunk middleware. Here's a brief description how to use this with Redux.</p>
<p>To include Redux Thunk middleware, you pass it as an argument to <code>Redux.applyMiddleware()</code>. This statement is then provided as a second optional parameter to the <code>createStore()</code> function. Take a look at the code at the bottom of the editor to see this. Then, to create an asynchronous action, you return a function in the action creator that takes <code>dispatch</code> as an argument. Within this function, you can dispatch actions and perform asynchronous requests.</p>
<p>In this example, an asynchronous request is simulated with a <code>setTimeout()</code> call. It's common to dispatch an action before initiating any asynchronous behavior so that your application state knows that some data is being requested (this state could display a loading icon, for instance). Then, once you receive the data, you dispatch another action which carries the data as a payload along with information that the action is completed.</p>
<p>Remember that you're passing <code>dispatch</code> as a parameter to this special action creator. This is what you'll use to dispatch your actions, you simply pass the action directly to dispatch and the middleware takes care of the rest.</p>
</section></div><hr/><div><section id="instructions">
<p>Write both dispatches in the <code>handleAsync()</code> action creator. Dispatch <code>requestingData()</code> before the <code>setTimeout()</code> (the simulated API call). Then, after you receive the (pretend) data, dispatch the <code>receivedData()</code> action, passing in this data. Now you know how to handle asynchronous actions in Redux. Everything else continues to behave as before.</p>
</section></div><hr/></div>