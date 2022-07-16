<div class="challenge-instructions sass"><div><section id="description">
<p>The <code>@while</code> directive is an option with similar functionality to the JavaScript <code>while</code> loop. It creates CSS rules until a condition is met.</p>
<p>The <code>@for</code> challenge gave an example to create a simple grid system. This can also work with <code>@while</code>.</p>
<pre class="language-scss"><code class="language-scss">$x: 1;
@while $x &lt; 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
</code></pre>
<p>First, define a variable <code>$x</code> and set it to 1. Next, use the <code>@while</code> directive to create the grid system <em>while</em> <code>$x</code> is less than 13. After setting the CSS rule for <code>width</code>, <code>$x</code> is incremented by 1 to avoid an infinite loop.</p>
</section></div><hr/><div><section id="instructions">
<p>Use <code>@while</code> to create a series of classes with different <code>font-sizes</code>.</p>
<p>There should be 5 different classes from <code>text-1</code> to <code>text-5</code>. Then set <code>font-size</code> to <code>15px</code> multiplied by the current index number. Make sure to avoid an infinite loop!</p>
</section></div><hr/></div>