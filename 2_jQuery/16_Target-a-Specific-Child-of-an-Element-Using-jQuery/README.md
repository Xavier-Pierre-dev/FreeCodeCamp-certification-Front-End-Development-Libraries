<div class="challenge-instructions jquery"><div><section id="description">
<p>You've seen why id attributes are so convenient for targeting with jQuery selectors. But you won't always have such neat ids to work with.</p>
<p>Fortunately, jQuery has some other tricks for targeting the right elements.</p>
<p>jQuery uses CSS Selectors to target elements. The <code>target:nth-child(n)</code> CSS selector allows you to select all the nth elements with the target class or element type.</p>
<p>Here's how you would give the third element in each well the bounce class:</p>
<pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".target:nth-child(3)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"animated bounce"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Make the second child in each of your well elements bounce. You must select the elements' children with the <code>target</code> class.</p>
</section></div><hr/></div>