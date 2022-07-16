<div class="challenge-instructions react"><div><section id="description">
<p>The other way to define a React component is with the ES6 <code>class</code> syntax. In the following example, <code>Kitten</code> extends <code>React.Component</code>:</p>
<pre class="language-jsx"><code class="language-jsx">class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      &lt;h1&gt;Hi&lt;/h1&gt;
    );
  }
}
</code></pre>
<p>This creates an ES6 class <code>Kitten</code> which extends the <code>React.Component</code> class. So the <code>Kitten</code> class now has access to many useful React features, such as local state and lifecycle hooks. Don't worry if you aren't familiar with these terms yet, they will be covered in greater detail in later challenges. Also notice the <code>Kitten</code> class has a <code>constructor</code> defined within it that calls <code>super()</code>. It uses <code>super()</code> to call the constructor of the parent class, in this case <code>React.Component</code>. The constructor is a special method used during the initialization of objects that are created with the <code>class</code> keyword. It is best practice to call a component's <code>constructor</code> with <code>super</code>, and pass <code>props</code> to both. This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. Soon you will see other uses for the constructor as well as <code>props</code>.</p>
</section></div><hr/><div><section id="instructions">
<p><code>MyComponent</code> is defined in the code editor using class syntax. Finish writing the <code>render</code> method so it returns a <code>div</code> element that contains an <code>h1</code> with the text <code>Hello React!</code>.</p>
</section></div><hr/></div><div class="challenge-instructions react"><div><section id="description">
<p>The other way to define a React component is with the ES6 <code>class</code> syntax. In the following example, <code>Kitten</code> extends <code>React.Component</code>:</p>
<pre class="language-jsx"><code class="language-jsx">class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      &lt;h1&gt;Hi&lt;/h1&gt;
    );
  }
}
</code></pre>
<p>This creates an ES6 class <code>Kitten</code> which extends the <code>React.Component</code> class. So the <code>Kitten</code> class now has access to many useful React features, such as local state and lifecycle hooks. Don't worry if you aren't familiar with these terms yet, they will be covered in greater detail in later challenges. Also notice the <code>Kitten</code> class has a <code>constructor</code> defined within it that calls <code>super()</code>. It uses <code>super()</code> to call the constructor of the parent class, in this case <code>React.Component</code>. The constructor is a special method used during the initialization of objects that are created with the <code>class</code> keyword. It is best practice to call a component's <code>constructor</code> with <code>super</code>, and pass <code>props</code> to both. This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. Soon you will see other uses for the constructor as well as <code>props</code>.</p>
</section></div><hr/><div><section id="instructions">
<p><code>MyComponent</code> is defined in the code editor using class syntax. Finish writing the <code>render</code> method so it returns a <code>div</code> element that contains an <code>h1</code> with the text <code>Hello React!</code>.</p>
</section></div><hr/></div>