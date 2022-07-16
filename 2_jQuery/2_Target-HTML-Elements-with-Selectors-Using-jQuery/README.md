<div class="challenge-instructions jquery"><div><section id="description">
<p>Now we have a <code>document ready function</code>.</p>
<p>Now let's write our first jQuery statement. All jQuery functions start with a <code>$</code>, usually referred to as a dollar sign operator, or as bling.</p>
<p>jQuery often selects an HTML element with a <dfn>selector</dfn>, then does something to that element.</p>
<p>For example, let's make all of your <code>button</code> elements bounce. Just add this code inside your document ready function:</p>
<pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"animated bounce"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Note that we've already included both the jQuery library and the Animate.css library in the background so that you can use them in the editor. So you are using jQuery to apply the Animate.css <code>bounce</code> class to your <code>button</code> elements.</p>
</section></div><hr/></div>