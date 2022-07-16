<div class="challenge-instructions react"><div><section id="description">
<p>Now we will look at how we can compose multiple React components together. Imagine you are building an app and have created three components: a <code>Navbar</code>, <code>Dashboard</code>, and <code>Footer</code>.</p>
<p>To compose these components together, you could create an <code>App</code> <em>parent</em> component which renders each of these three components as <em>children</em>. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the <code>render</code> method you could write:</p>
<pre class="language-jsx"><code class="language-jsx">return (
 &lt;App&gt;
  &lt;Navbar /&gt;
  &lt;Dashboard /&gt;
  &lt;Footer /&gt;
 &lt;/App&gt;
)
</code></pre>
<p>When React encounters a custom HTML tag that references another component (a component name wrapped in <code>&lt; /&gt;</code> like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the <code>App</code> component and the <code>Navbar</code>, <code>Dashboard</code>, and <code>Footer</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>In the code editor, there is a simple functional component called <code>ChildComponent</code> and a class component called <code>ParentComponent</code>. Compose the two together by rendering the <code>ChildComponent</code> within the <code>ParentComponent</code>. Make sure to close the <code>ChildComponent</code> tag with a forward slash.</p>
<p><strong>Note:</strong> <code>ChildComponent</code> is defined with an ES6 arrow function because this is a very common practice when using React. However, know that this is just a function. If you aren't familiar with the arrow function syntax, please refer to the JavaScript section.</p>
</section></div><hr/></div><div class="challenge-instructions react"><div><section id="description">
<p>Now we will look at how we can compose multiple React components together. Imagine you are building an app and have created three components: a <code>Navbar</code>, <code>Dashboard</code>, and <code>Footer</code>.</p>
<p>To compose these components together, you could create an <code>App</code> <em>parent</em> component which renders each of these three components as <em>children</em>. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the <code>render</code> method you could write:</p>
<pre class="language-jsx"><code class="language-jsx">return (
 &lt;App&gt;
  &lt;Navbar /&gt;
  &lt;Dashboard /&gt;
  &lt;Footer /&gt;
 &lt;/App&gt;
)
</code></pre>
<p>When React encounters a custom HTML tag that references another component (a component name wrapped in <code>&lt; /&gt;</code> like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the <code>App</code> component and the <code>Navbar</code>, <code>Dashboard</code>, and <code>Footer</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>In the code editor, there is a simple functional component called <code>ChildComponent</code> and a class component called <code>ParentComponent</code>. Compose the two together by rendering the <code>ChildComponent</code> within the <code>ParentComponent</code>. Make sure to close the <code>ChildComponent</code> tag with a forward slash.</p>
<p><strong>Note:</strong> <code>ChildComponent</code> is defined with an ES6 arrow function because this is a very common practice when using React. However, know that this is just a function. If you aren't familiar with the arrow function syntax, please refer to the JavaScript section.</p>
</section></div><hr/></div>