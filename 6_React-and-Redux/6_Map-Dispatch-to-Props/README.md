<div class="challenge-instructions react-and-redux"><div><section id="description">
<p>The <code>mapDispatchToProps()</code> function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store. It's similar in structure to the <code>mapStateToProps()</code> function you wrote in the last challenge. It returns an object that maps dispatch actions to property names, which become component <code>props</code>. However, instead of returning a piece of <code>state</code>, each property returns a function that calls <code>dispatch</code> with an action creator and any relevant action data. You have access to this <code>dispatch</code> because it's passed in to <code>mapDispatchToProps()</code> as a parameter when you define the function, just like you passed <code>state</code> to <code>mapStateToProps()</code>. Behind the scenes, React Redux is using Redux's <code>store.dispatch()</code> to conduct these dispatches with <code>mapDispatchToProps()</code>. This is similar to how it uses <code>store.subscribe()</code> for components that are mapped to <code>state</code>.</p>
<p>For example, you have a <code>loginUser()</code> action creator that takes a <code>username</code> as an action payload. The object returned from <code>mapDispatchToProps()</code> for this action creator would look something like:</p>
<pre class="language-jsx"><code class="language-jsx">{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>The code editor provides an action creator called <code>addMessage()</code>. Write the function <code>mapDispatchToProps()</code> that takes <code>dispatch</code> as an argument, then returns an object. The object should have a property <code>submitNewMessage</code> set to the dispatch function, which takes a parameter for the new message to add when it dispatches <code>addMessage()</code>.</p>
</section></div><hr/></div>