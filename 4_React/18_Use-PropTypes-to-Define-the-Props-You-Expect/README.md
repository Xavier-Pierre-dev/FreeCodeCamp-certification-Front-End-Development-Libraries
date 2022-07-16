<div class="challenge-instructions react"><div><section id="description">
<p>React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set <code>propTypes</code> on your component to require the data to be of type <code>array</code>. This will throw a useful warning when the data is of any other type.</p>
<p>It's considered a best practice to set <code>propTypes</code> when you know the type of a prop ahead of time. You can define a <code>propTypes</code> property for a component in the same way you defined <code>defaultProps</code>. Doing this will check that props of a given key are present with a given type. Here's an example to require the type <code>function</code> for a prop called <code>handleClick</code>:</p>
<pre class="language-js"><code class="language-js">MyComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span> handleClick<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired <span class="token punctuation">}</span>
</code></pre>
<p>In the example above, the <code>PropTypes.func</code> part checks that <code>handleClick</code> is a function. Adding <code>isRequired</code> tells React that <code>handleClick</code> is a required property for that component. You will see a warning if that prop isn't provided. Also notice that <code>func</code> represents <code>function</code>. Among the seven JavaScript primitive types, <code>function</code> and <code>boolean</code> (written as <code>bool</code>) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the <a href="https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type">documentation</a> for all of the options.</p>
<p><strong>Note:</strong> As of React v15.5.0, <code>PropTypes</code> is imported independently from React, like this: <code>import PropTypes from 'prop-types';</code></p>
</section></div><hr/><div><section id="instructions">
<p>Define <code>propTypes</code> for the <code>Items</code> component to require <code>quantity</code> as a prop and verify that it is of type <code>number</code>.</p>
</section></div><hr/></div><div class="challenge-instructions react"><div><section id="description">
<p>React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set <code>propTypes</code> on your component to require the data to be of type <code>array</code>. This will throw a useful warning when the data is of any other type.</p>
<p>It's considered a best practice to set <code>propTypes</code> when you know the type of a prop ahead of time. You can define a <code>propTypes</code> property for a component in the same way you defined <code>defaultProps</code>. Doing this will check that props of a given key are present with a given type. Here's an example to require the type <code>function</code> for a prop called <code>handleClick</code>:</p>
<pre class="language-js"><code class="language-js">MyComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span> handleClick<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired <span class="token punctuation">}</span>
</code></pre>
<p>In the example above, the <code>PropTypes.func</code> part checks that <code>handleClick</code> is a function. Adding <code>isRequired</code> tells React that <code>handleClick</code> is a required property for that component. You will see a warning if that prop isn't provided. Also notice that <code>func</code> represents <code>function</code>. Among the seven JavaScript primitive types, <code>function</code> and <code>boolean</code> (written as <code>bool</code>) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the <a href="https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type">documentation</a> for all of the options.</p>
<p><strong>Note:</strong> As of React v15.5.0, <code>PropTypes</code> is imported independently from React, like this: <code>import PropTypes from 'prop-types';</code></p>
</section></div><hr/><div><section id="instructions">
<p>Define <code>propTypes</code> for the <code>Items</code> component to require <code>quantity</code> as a prop and verify that it is of type <code>number</code>.</p>
</section></div><hr/></div>