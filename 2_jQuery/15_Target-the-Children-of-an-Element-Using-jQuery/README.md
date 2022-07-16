<div class="challenge-instructions jquery"><div><section id="description">
<p>When HTML elements are placed one level below another they are called <dfn>children</dfn> of that element. For example, the button elements in this challenge with the text <code>#target1</code>, <code>#target2</code>, and <code>#target3</code> are all children of the <code>&lt;div class="well" id="left-well"&gt;</code> element.</p>
<p>jQuery has a function called <code>children()</code> that allows you to access the children of whichever element you've selected.</p>
<p>Here's an example of how you would use the <code>children()</code> function to give the children of your <code>left-well</code> element the color <code>blue</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#left-well"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">)</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Give all the children of your <code>right-well</code> element the color orange.</p>
</section></div><hr/></div>