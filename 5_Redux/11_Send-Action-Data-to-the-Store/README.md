<div class="challenge-instructions redux"><div><section id="description">
<p>By now you've learned how to dispatch actions to the Redux store, but so far these actions have not contained any information other than a <code>type</code>. You can also send specific data along with your actions. In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them. The Redux store often needs to know about this data.</p>
</section></div><hr/><div><section id="instructions">
<p>There's a basic <code>notesReducer()</code> and an <code>addNoteText()</code> action creator defined in the code editor. Finish the body of the <code>addNoteText()</code> function so that it returns an <code>action</code> object. The object should include a <code>type</code> property with a value of <code>ADD_NOTE</code>, and also a <code>text</code> property set to the <code>note</code> data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.</p>
<p>Next, finish writing the <code>switch</code> statement in the <code>notesReducer()</code>. You need to add a case that handles the <code>addNoteText()</code> actions. This case should be triggered whenever there is an action of type <code>ADD_NOTE</code> and it should return the <code>text</code> property on the incoming <code>action</code> as the new <code>state</code>.</p>
<p>The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. That's all it takes to send action-specific data to the store and use it when you update store <code>state</code>.</p>
</section></div><hr/></div>