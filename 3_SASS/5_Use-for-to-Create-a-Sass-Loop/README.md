<div class="challenge-instructions sass"><div><section id="description">
<p>The <code>@for</code> directive adds styles in a loop, very similar to a <code>for</code> loop in JavaScript.</p>
<p><code>@for</code> is used in two ways: "start through end" or "start to end". The main difference is that the "start <strong>to</strong> end" <em>excludes</em> the end number as part of the count, and "start <strong>through</strong> end" <em>includes</em> the end number as part of the count.</p>
<p>Here's a start <strong>through</strong> end example:</p>
<pre class="language-scss"><code class="language-scss">@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
</code></pre>
<p>The <code>#{$i}</code> part is the syntax to combine a variable (<code>i</code>) with text to make a string. When the Sass file is converted to CSS, it looks like this:</p>
<pre class="language-scss"><code class="language-scss">.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
</code></pre>
<p>This is a powerful way to create a grid layout. Now you have twelve options for column widths available as CSS classes.</p>
</section></div><hr/><div><section id="instructions">
<p>Write a <code>@for</code> directive that takes a variable <code>$j</code> that goes from 1 <strong>to</strong> 6.</p>
<p>It should create 5 classes called <code>.text-1</code> to <code>.text-5</code> where each has a <code>font-size</code> set to 15px multiplied by the index.</p>
</section></div><hr/></div>