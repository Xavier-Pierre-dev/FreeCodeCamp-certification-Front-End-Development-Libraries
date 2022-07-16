<div class="challenge-instructions react"><div><section id="description">
<p>There are other complex concepts that add powerful capabilities to your React code. But you may be wondering about the more simple problem of how to style those JSX elements you create in React. You likely know that it won't be exactly the same as working with HTML because of <a href="/learn/front-end-libraries/react/define-an-html-class-in-jsx">the way you apply classes to JSX elements</a>.</p>
<p>If you import styles from a stylesheet, it isn't much different at all. You apply a class to your JSX element using the <code>className</code> attribute, and apply styles to the class in your stylesheet. Another option is to apply inline styles, which are very common in ReactJS development.</p>
<p>You apply inline styles to JSX elements similar to how you do it in HTML, but with a few JSX differences. Here's an example of an inline style in HTML:</p>
<pre class="language-jsx"><code class="language-jsx">&lt;div style="color: yellow; font-size: 16px"&gt;Mellow Yellow&lt;/div&gt;
</code></pre>
<p>JSX elements use the <code>style</code> attribute, but because of the way JSX is transpiled, you can't set the value to a <code>string</code>. Instead, you set it equal to a JavaScript <code>object</code>. Here's an example:</p>
<pre class="language-jsx"><code class="language-jsx">&lt;div style={{color: "yellow", fontSize: 16}}&gt;Mellow Yellow&lt;/div&gt;
</code></pre>
<p>Notice how we camelCase the <code>fontSize</code> property? This is because React will not accept kebab-case keys in the style object. React will apply the correct property name for us in the HTML.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a <code>style</code> attribute to the <code>div</code> in the code editor to give the text a color of red and font size of <code>72px</code>.</p>
<p>Note that you can optionally set the font size to be a number, omitting the units <code>px</code>, or write it as <code>72px</code>.</p>
</section></div><hr/></div><div class="challenge-instructions react"><div><section id="description">
<p>There are other complex concepts that add powerful capabilities to your React code. But you may be wondering about the more simple problem of how to style those JSX elements you create in React. You likely know that it won't be exactly the same as working with HTML because of <a href="/learn/front-end-libraries/react/define-an-html-class-in-jsx">the way you apply classes to JSX elements</a>.</p>
<p>If you import styles from a stylesheet, it isn't much different at all. You apply a class to your JSX element using the <code>className</code> attribute, and apply styles to the class in your stylesheet. Another option is to apply inline styles, which are very common in ReactJS development.</p>
<p>You apply inline styles to JSX elements similar to how you do it in HTML, but with a few JSX differences. Here's an example of an inline style in HTML:</p>
<pre class="language-jsx"><code class="language-jsx">&lt;div style="color: yellow; font-size: 16px"&gt;Mellow Yellow&lt;/div&gt;
</code></pre>
<p>JSX elements use the <code>style</code> attribute, but because of the way JSX is transpiled, you can't set the value to a <code>string</code>. Instead, you set it equal to a JavaScript <code>object</code>. Here's an example:</p>
<pre class="language-jsx"><code class="language-jsx">&lt;div style={{color: "yellow", fontSize: 16}}&gt;Mellow Yellow&lt;/div&gt;
</code></pre>
<p>Notice how we camelCase the <code>fontSize</code> property? This is because React will not accept kebab-case keys in the style object. React will apply the correct property name for us in the HTML.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a <code>style</code> attribute to the <code>div</code> in the code editor to give the text a color of red and font size of <code>72px</code>.</p>
<p>Note that you can optionally set the font size to be a number, omitting the units <code>px</code>, or write it as <code>72px</code>.</p>
</section></div><hr/></div>