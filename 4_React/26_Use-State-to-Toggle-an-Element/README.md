<div class="challenge-instructions react"><div><section id="description">
<p>Sometimes you might need to know the previous state when updating the state. However, state updates may be asynchronous - this means React may batch multiple <code>setState()</code> calls into a single update. This means you can't rely on the previous value of <code>this.state</code> or <code>this.props</code> when calculating the next value. So, you should not use code like this:</p>
<pre class="language-jsx"><code class="language-jsx">this.setState({
  counter: this.state.counter + this.props.increment
});
</code></pre>
<p>Instead, you should pass <code>setState</code> a function that allows you to access state and props. Using a function with <code>setState</code> guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:</p>
<pre class="language-jsx"><code class="language-jsx">this.setState((state, props) =&gt; ({
  counter: state.counter + props.increment
}));
</code></pre>
<p>You can also use a form without <code>props</code> if you need only the <code>state</code>:</p>
<pre class="language-jsx"><code class="language-jsx">this.setState(state =&gt; ({
  counter: state.counter + 1
}));
</code></pre>
<p>Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.</p>
</section></div><hr/><div><section id="instructions">
<p><code>MyComponent</code> has a <code>visibility</code> property which is initialized to <code>false</code>. The render method returns one view if the value of <code>visibility</code> is true, and a different view if it is false.</p>
<p>Currently, there is no way of updating the <code>visibility</code> property in the component's <code>state</code>. The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called <code>toggleVisibility()</code>. Pass a function to <code>setState</code> to define this method so that the <code>state</code> of <code>visibility</code> toggles to the opposite value when the method is called. If <code>visibility</code> is <code>false</code>, the method sets it to <code>true</code>, and vice versa.</p>
<p>Finally, click the button to see the conditional rendering of the component based on its <code>state</code>.</p>
<p><strong>Hint:</strong> Don't forget to bind the <code>this</code> keyword to the method in the <code>constructor</code>!</p>
</section></div><hr/></div><div class="challenge-instructions react"><div><section id="description">
<p>Sometimes you might need to know the previous state when updating the state. However, state updates may be asynchronous - this means React may batch multiple <code>setState()</code> calls into a single update. This means you can't rely on the previous value of <code>this.state</code> or <code>this.props</code> when calculating the next value. So, you should not use code like this:</p>
<pre class="language-jsx"><code class="language-jsx">this.setState({
  counter: this.state.counter + this.props.increment
});
</code></pre>
<p>Instead, you should pass <code>setState</code> a function that allows you to access state and props. Using a function with <code>setState</code> guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:</p>
<pre class="language-jsx"><code class="language-jsx">this.setState((state, props) =&gt; ({
  counter: state.counter + props.increment
}));
</code></pre>
<p>You can also use a form without <code>props</code> if you need only the <code>state</code>:</p>
<pre class="language-jsx"><code class="language-jsx">this.setState(state =&gt; ({
  counter: state.counter + 1
}));
</code></pre>
<p>Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.</p>
</section></div><hr/><div><section id="instructions">
<p><code>MyComponent</code> has a <code>visibility</code> property which is initialized to <code>false</code>. The render method returns one view if the value of <code>visibility</code> is true, and a different view if it is false.</p>
<p>Currently, there is no way of updating the <code>visibility</code> property in the component's <code>state</code>. The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called <code>toggleVisibility()</code>. Pass a function to <code>setState</code> to define this method so that the <code>state</code> of <code>visibility</code> toggles to the opposite value when the method is called. If <code>visibility</code> is <code>false</code>, the method sets it to <code>true</code>, and vice versa.</p>
<p>Finally, click the button to see the conditional rendering of the component based on its <code>state</code>.</p>
<p><strong>Hint:</strong> Don't forget to bind the <code>this</code> keyword to the method in the <code>constructor</code>!</p>
</section></div><hr/></div>