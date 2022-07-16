<div class="challenge-instructions react"><div><section id="description">
<p>The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. With this foundation, it's time to look at another feature very common in React: <strong>props</strong>. In React, you can pass props, or properties, to child components. Say you have an <code>App</code> component which renders a child component called <code>Welcome</code> which is a stateless functional component. You can pass <code>Welcome</code> a <code>user</code> property by writing:</p>
<pre class="language-jsx"><code class="language-jsx">&lt;App&gt;
  &lt;Welcome user='Mark' /&gt;
&lt;/App&gt;
</code></pre>
<p>You use <strong>custom HTML attributes</strong> created by you and supported by React to be passed to the component. In this case, the created property <code>user</code> is passed to the component <code>Welcome</code>. Since <code>Welcome</code> is a stateless functional component, it has access to this value like so:</p>
<pre class="language-jsx"><code class="language-jsx">const Welcome = (props) =&gt; &lt;h1&gt;Hello, {props.user}!&lt;/h1&gt;
</code></pre>
<p>It is standard to call this value <code>props</code> and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.</p>
</section></div><hr/><div><section id="instructions">
<p>There are <code>Calendar</code> and <code>CurrentDate</code> components in the code editor. When rendering <code>CurrentDate</code> from the <code>Calendar</code> component, pass in a property of <code>date</code> assigned to the current date from JavaScript's <code>Date</code> object. Then access this <code>prop</code> in the <code>CurrentDate</code> component, showing its value within the <code>p</code> tags. Note that for <code>prop</code> values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance <code>date={Date()}</code>.</p>
</section></div><hr/></div><div class="challenge-instructions react"><div><section id="description">
<p>The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. With this foundation, it's time to look at another feature very common in React: <strong>props</strong>. In React, you can pass props, or properties, to child components. Say you have an <code>App</code> component which renders a child component called <code>Welcome</code> which is a stateless functional component. You can pass <code>Welcome</code> a <code>user</code> property by writing:</p>
<pre class="language-jsx"><code class="language-jsx">&lt;App&gt;
  &lt;Welcome user='Mark' /&gt;
&lt;/App&gt;
</code></pre>
<p>You use <strong>custom HTML attributes</strong> created by you and supported by React to be passed to the component. In this case, the created property <code>user</code> is passed to the component <code>Welcome</code>. Since <code>Welcome</code> is a stateless functional component, it has access to this value like so:</p>
<pre class="language-jsx"><code class="language-jsx">const Welcome = (props) =&gt; &lt;h1&gt;Hello, {props.user}!&lt;/h1&gt;
</code></pre>
<p>It is standard to call this value <code>props</code> and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.</p>
</section></div><hr/><div><section id="instructions">
<p>There are <code>Calendar</code> and <code>CurrentDate</code> components in the code editor. When rendering <code>CurrentDate</code> from the <code>Calendar</code> component, pass in a property of <code>date</code> assigned to the current date from JavaScript's <code>Date</code> object. Then access this <code>prop</code> in the <code>CurrentDate</code> component, showing its value within the <code>p</code> tags. Note that for <code>prop</code> values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance <code>date={Date()}</code>.</p>
</section></div><hr/></div>