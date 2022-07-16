<div class="challenge-instructions sass"><div><section id="description">
<p>Sass has a feature called <code>extend</code> that makes it easy to borrow the CSS rules from one element and build upon them in another.</p>
<p>For example, the below block of CSS rules style a <code>.panel</code> class. It has a <code>background-color</code>, <code>height</code> and <code>border</code>.</p>
<pre class="language-scss"><code class="language-scss">.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
</code></pre>
<p>Now you want another panel called <code>.big-panel</code>. It has the same base properties as <code>.panel</code>, but also needs a <code>width</code> and <code>font-size</code>. It's possible to copy and paste the initial CSS rules from <code>.panel</code>, but the code becomes repetitive as you add more types of panels. The <code>extend</code> directive is a simple way to reuse the rules written for one element, then add more for another:</p>
<pre class="language-scss"><code class="language-scss">.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
</code></pre>
<p>The <code>.big-panel</code> will have the same properties as <code>.panel</code> in addition to the new styles.</p>
</section></div><hr/><div><section id="instructions">
<p>Make a class <code>.info-important</code> that extends <code>.info</code> and also has a <code>background-color</code> set to magenta.</p>
</section></div><hr/></div>