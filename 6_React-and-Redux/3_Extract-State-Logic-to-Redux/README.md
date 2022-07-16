<div class="challenge-instructions react-and-redux"><div><section id="description">
<p>Now that you finished the React component, you need to move the logic it's performing locally in its <code>state</code> into Redux. This is the first step to connect the simple React app to Redux. The only functionality your app has is to add new messages from the user to an unordered list. The example is simple in order to demonstrate how React and Redux work together.</p>
</section></div><hr/><div><section id="instructions">
<p>First, define an action type <code>ADD</code> and set it to a const <code>ADD</code>. Next, define an action creator <code>addMessage()</code> which creates the action to add a message. You'll need to pass a <code>message</code> to this action creator and include the message in the returned <code>action</code>.</p>
<p>Then create a reducer called <code>messageReducer()</code> that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.</p>
</section></div><hr/></div>