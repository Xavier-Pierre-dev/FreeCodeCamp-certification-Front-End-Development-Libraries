<div class="challenge-instructions sass"><div><section id="description">
<p>The <code>@if</code> directive in Sass is useful to test for a specific case - it works just like the <code>if</code> statement in JavaScript.</p>
<pre class="language-scss"><code class="language-scss">@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
</code></pre>
<p>And just like in JavaScript, <code>@else if</code> and <code>@else</code> test for more conditions:</p>
<pre class="language-scss"><code class="language-scss">@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Create a mixin called <code>border-stroke</code> that takes a parameter <code>$val</code>. The mixin should check for the following conditions using <code>@if</code>, <code>@else if</code>, and <code>@else</code>:</p>
<pre class="language-scss"><code class="language-scss">light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
</code></pre>
<p>If <code>$val</code> is not <code>light</code>, <code>medium</code>, or <code>heavy</code>, the border should be set to <code>none</code>.</p>
</section></div><hr/></div>