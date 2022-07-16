<div class="challenge-instructions jquery"><div><section id="description">
<p>You can also target elements based on their positions using <code>:odd</code> or <code>:even</code> selectors.</p>
<p>Note that jQuery is zero-indexed which means the first element in a selection has a position of 0. This can be a little confusing as, counter-intuitively, <code>:odd</code> selects the second element (position 1), fourth element (position 3), and so on.</p>
<p>Here's how you would target all the odd elements with class <code>target</code> and give them classes:</p>
<pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".target:odd"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"animated shake"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Try selecting all the even <code>target</code> elements and giving them the classes of <code>animated</code> and <code>shake</code>. Remember that <strong>even</strong> refers to the position of elements with a zero-based system in mind.</p>
</section></div><hr/></div>