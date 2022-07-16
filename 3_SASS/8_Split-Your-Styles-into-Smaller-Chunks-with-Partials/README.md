<div class="challenge-instructions sass"><div><section id="description">
<p><dfn>Partials</dfn> in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.</p>
<p>Names for partials start with the underscore (<code>_</code>) character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the <code>.scss</code> file extension. To bring the code in the partial into another Sass file, use the <code>@import</code> directive.</p>
<p>For example, if all your mixins are saved in a partial named "_mixins.scss", and they are needed in the "main.scss" file, this is how to use them in the main file:</p>
<pre class="language-scss"><code class="language-scss">@import 'mixins'
</code></pre>
<p>Note that the underscore and file extension are not needed in the <code>import</code> statement - Sass understands it is a partial. Once a partial is imported into a file, all variables, mixins, and other code are available to use.</p>
</section></div><hr/><div><section id="instructions">
<p>Write an <code>@import</code> statement to import a partial named <code>_variables.scss</code> into the main.scss file.</p>
</section></div><hr/></div>