<div class="challenge-instructions sass"><div><section id="description">
<p>Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.</p>
<p>Normally, each element is targeted on a different line to style it, like so:</p>
<pre class="language-scss"><code class="language-scss">nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
</code></pre>
<p>For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:</p>
<pre class="language-scss"><code class="language-scss">nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}

</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Use the nesting technique shown above to re-organize the CSS rules for both children of <code>.blog-post</code> element. For testing purposes, the <code>h1</code> should come before the <code>p</code> element.</p>
</section></div><hr/></div>