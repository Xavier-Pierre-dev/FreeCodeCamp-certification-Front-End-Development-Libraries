<div class="challenge-instructions sass"><div><section id="description">
<p>One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.</p>
<p>In JavaScript, variables are defined using the <code>let</code> and <code>const</code> keywords. In Sass, variables start with a <code>$</code> followed by the variable name.</p>
<p>Here are a couple examples:</p>
<pre class="language-scss"><code class="language-scss">$main-fonts: Arial, sans-serif;
$headings-color: green;
</code></pre>
<p>And to use the variables:</p>
<pre class="language-scss"><code class="language-scss">h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
</code></pre>
<p>One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a variable <code>$text-color</code> and set it to <code>red</code>. Then change the value of the <code>color</code> property for the <code>.blog-post</code> and <code>h2</code> to the <code>$text-color</code> variable.</p>
</section></div><hr/></div>