<div class="challenge-instructions jquery"><div><section id="description">
<p>You see how we made all of your <code>button</code> elements bounce? We selected them with <code>$("button")</code>, then we added some CSS classes to them with <code>.addClass("animated bounce");</code>.</p>
<p>You just used jQuery's <code>.addClass()</code> function, which allows you to add classes to elements.</p>
<p>First, let's target your <code>div</code> elements with the class <code>well</code> by using the <code>$(".well")</code> selector.</p>
<p>Note that, just like with CSS declarations, you type a <code>.</code> before the class's name.</p>
<p>Then use jQuery's <code>.addClass()</code> function to add the classes <code>animated</code> and <code>shake</code>.</p>
<p>For example, you could make all the elements with the class <code>text-primary</code> shake by adding the following to your <code>document ready function</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".text-primary"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"animated shake"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/></div>