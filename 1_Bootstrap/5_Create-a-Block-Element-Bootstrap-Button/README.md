<div class="challenge-instructions bootstrap"><div><section id="description">
<p>Normally, your <code>button</code> elements with the <code>btn</code> and <code>btn-default</code> classes are only as wide as the text that they contain. For example:</p>
<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-default<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>This button would only be as wide as the word <code>Submit</code>.</p>
<p><button class="btn btn-default">Submit</button></p>
<p>By making them block elements with the additional class of <code>btn-block</code>, your button will stretch to fill your page's entire horizontal space and any elements following it will flow onto a "new line" below the block.</p>
<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-default btn-block<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>This button would take up 100% of the available width.</p>
<p><button class="btn btn-default btn-block">Submit</button></p>
<p>Note that these buttons still need the <code>btn</code> class.</p>
<p>Add Bootstrap's <code>btn-block</code> class to your Bootstrap button.</p>
</section></div><hr/></div>