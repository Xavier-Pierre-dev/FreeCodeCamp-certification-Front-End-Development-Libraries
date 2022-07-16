<div class="challenge-instructions sass"><div><section id="description">
<p>In Sass, a <dfn>mixin</dfn> is a group of CSS declarations that can be reused throughout the style sheet.</p>
<p>Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes. Consider <code>box-shadow</code>:</p>
<pre class="language-scss"><code class="language-scss">div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
</code></pre>
<p>It's a lot of typing to re-write this rule for all the elements that have a <code>box-shadow</code>, or to change each value to test different effects. Mixins are like functions for CSS. Here is how to write one:</p>
<pre class="language-scss"><code class="language-scss">@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
</code></pre>
<p>The definition starts with <code>@mixin</code> followed by a custom name. The parameters (the <code>$x</code>, <code>$y</code>, <code>$blur</code>, and <code>$c</code> in the example above) are optional. Now any time a <code>box-shadow</code> rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the <code>@include</code> directive:</p>
<pre class="language-scss"><code class="language-scss">div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Write a mixin for <code>border-radius</code> and give it a <code>$radius</code> parameter. It should use all the vendor prefixes from the example. Then use the <code>border-radius</code> mixin to give the <code>#awesome</code> element a border radius of <code>15px</code>.</p>
</section></div><hr/></div>