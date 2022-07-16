<div class="challenge-instructions sass"><div><section id="description">
<p>The last challenge showed how the <code>@for</code> directive uses a starting and ending value to loop a certain number of times. Sass also offers the <code>@each</code> directive which loops over each item in a list or map. On each iteration, the variable gets assigned to the current value from the list or map.</p>
<pre class="language-scss"><code class="language-scss">@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
</code></pre>
<p>A map has slightly different syntax. Here's an example:</p>
<pre class="language-scss"><code class="language-scss">$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
</code></pre>
<p>Note that the <code>$key</code> variable is needed to reference the keys in the map. Otherwise, the compiled CSS would have <code>color1</code>, <code>color2</code>... in it. Both of the above code examples are converted into the following CSS:</p>
<pre class="language-scss"><code class="language-scss">.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Write an <code>@each</code> directive that goes through a list: <code>blue, black, red</code> and assigns each variable to a <code>.color-bg</code> class, where the <code>color</code> part changes for each item. Each class should set the <code>background-color</code> the respective color.</p>
</section></div><hr/></div>