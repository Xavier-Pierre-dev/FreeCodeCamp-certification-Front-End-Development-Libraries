<div class="challenge-instructions jquery"><div><section id="description">
<p>Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.</p>
<p>jQuery has a function called <code>.html()</code> that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.</p>
<p>Here's how you would rewrite and emphasize the text of our heading:</p>
<pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"h3"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">"&lt;em&gt;jQuery Playground&lt;/em&gt;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>jQuery also has a similar function called <code>.text()</code> that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.</p>
<p>Change the button with id <code>target4</code> by emphasizing its text.</p>
<p><a href="https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element">View our news article for &lt;em&gt;</a> to learn the difference between <code>&lt;i&gt;</code> and <code>&lt;em&gt;</code> and their uses.</p>
<p>Note that while the <code>&lt;i&gt;</code> tag has traditionally been used to emphasize text, it has since been adopted for use as a tag for icons. The <code>&lt;em&gt;</code> tag is now widely accepted as the tag for emphasis. Either will work for this challenge.</p>
</section></div><hr/></div>