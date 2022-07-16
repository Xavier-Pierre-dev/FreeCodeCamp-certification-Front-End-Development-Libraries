<div class="challenge-instructions jquery"><div><section id="description">
<p>Every HTML element has a <code>parent</code> element from which it <code>inherits</code> properties.</p>
<p>For example, your <code>jQuery Playground</code> <code>h3</code> element has the parent element of <code>&lt;div class="container-fluid"&gt;</code>, which itself has the parent <code>body</code>.</p>
<p>jQuery has a function called <code>parent()</code> that allows you to access the parent of whichever element you've selected.</p>
<p>Here's an example of how you would use the <code>parent()</code> function if you wanted to give the parent element of the <code>left-well</code> element a background color of blue:</p>
<pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#left-well"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"background-color"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">)</span>
</code></pre>
<p>Give the parent of the <code>#target1</code> element a background-color of red.</p>
</section></div><hr/></div>