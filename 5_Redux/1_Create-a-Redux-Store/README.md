<div class="challenge-instructions redux"><div><section id="description">
<p>Redux is a state management framework that can be used with a number of different web technologies, including React.</p>
<p>In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux <code>store</code>. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.</p>
<p>This also means that any time any piece of your app wants to update state, it <strong>must</strong> do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.</p>
</section></div><hr/><div><section id="instructions">
<p>The Redux <code>store</code> is an object which holds and manages application <code>state</code>. There is a method called <code>createStore()</code> on the Redux object, which you use to create the Redux <code>store</code>. This method takes a <code>reducer</code> function as a required argument. The <code>reducer</code> function is covered in a later challenge, and is already defined for you in the code editor. It simply takes <code>state</code> as an argument and returns <code>state</code>.</p>
<p>Declare a <code>store</code> variable and assign it to the <code>createStore()</code> method, passing in the <code>reducer</code> as an argument.</p>
<p><strong>Note:</strong> The code in the editor uses ES6 default argument syntax to initialize this state to hold a value of <code>5</code>. If you're not familiar with default arguments, you can refer to the <a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions">ES6 section in the Curriculum</a> which covers this topic.</p>
</section></div><hr/></div>