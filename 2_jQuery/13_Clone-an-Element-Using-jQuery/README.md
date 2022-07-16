<div class="challenge-instructions jquery"><div><section id="description">
<p>In addition to moving elements, you can also copy them from one place to another.</p>
<p>jQuery has a function called <code>clone()</code> that makes a copy of an element.</p>
<p>For example, if we wanted to copy <code>target2</code> from our <code>left-well</code> to our <code>right-well</code>, we would use:</p>
<pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#target2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendTo</span><span class="token punctuation">(</span><span class="token string">"#right-well"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Did you notice this involves sticking two jQuery functions together? This is called <dfn>function chaining</dfn> and it's a convenient way to get things done with jQuery.</p>
<p>Clone your <code>target5</code> element and append it to your <code>left-well</code>.</p>
</section></div><hr/></div>