<div class="challenge-instructions react"><div><section id="description">
<p>The last challenge demonstrated how to pass information from a parent component to a child component as <code>props</code> or properties. This challenge looks at how arrays can be passed as <code>props</code>. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.</p>
<pre class="language-jsx"><code class="language-jsx">&lt;ParentComponent&gt;
  &lt;ChildComponent colors={["green", "blue", "red"]} /&gt;
&lt;/ParentComponent&gt;
</code></pre>
<p>The child component then has access to the array property <code>colors</code>. Array methods such as <code>join()</code> can be used when accessing the property. <code>const ChildComponent = (props) =&gt; &lt;p&gt;{props.colors.join(', ')}&lt;/p&gt;</code> This will join all <code>colors</code> array items into a comma separated string and produce: <code>&lt;p&gt;green, blue, red&lt;/p&gt;</code> Later, we will learn about other common methods to render arrays of data in React.</p>
</section></div><hr/><div><section id="instructions">
<p>There are <code>List</code> and <code>ToDo</code> components in the code editor. When rendering each <code>List</code> from the <code>ToDo</code> component, pass in a <code>tasks</code> property assigned to an array of to-do tasks, for example <code>["walk dog", "workout"]</code>. Then access this <code>tasks</code> array in the <code>List</code> component, showing its value within the <code>p</code> element. Use <code>join(", ")</code> to display the <code>props.tasks</code>array in the <code>p</code> element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.</p>
</section></div><hr/></div><div class="challenge-instructions react"><div><section id="description">
<p>The last challenge demonstrated how to pass information from a parent component to a child component as <code>props</code> or properties. This challenge looks at how arrays can be passed as <code>props</code>. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.</p>
<pre class="language-jsx"><code class="language-jsx">&lt;ParentComponent&gt;
  &lt;ChildComponent colors={["green", "blue", "red"]} /&gt;
&lt;/ParentComponent&gt;
</code></pre>
<p>The child component then has access to the array property <code>colors</code>. Array methods such as <code>join()</code> can be used when accessing the property. <code>const ChildComponent = (props) =&gt; &lt;p&gt;{props.colors.join(', ')}&lt;/p&gt;</code> This will join all <code>colors</code> array items into a comma separated string and produce: <code>&lt;p&gt;green, blue, red&lt;/p&gt;</code> Later, we will learn about other common methods to render arrays of data in React.</p>
</section></div><hr/><div><section id="instructions">
<p>There are <code>List</code> and <code>ToDo</code> components in the code editor. When rendering each <code>List</code> from the <code>ToDo</code> component, pass in a <code>tasks</code> property assigned to an array of to-do tasks, for example <code>["walk dog", "workout"]</code>. Then access this <code>tasks</code> array in the <code>List</code> component, showing its value within the <code>p</code> element. Use <code>join(", ")</code> to display the <code>props.tasks</code>array in the <code>p</code> element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.</p>
</section></div><hr/></div>