<div class="challenge-instructions redux"><div><section id="description">
<p>A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. You can refactor the code you're working with to write the action types as <code>const</code> declarations.</p>
</section></div><hr/><div><section id="instructions">
<p>Declare <code>LOGIN</code> and <code>LOGOUT</code> as <code>const</code> values and assign them to the strings <code>'LOGIN'</code> and <code>'LOGOUT'</code>, respectively. Then, edit the <code>authReducer()</code> and the action creators to reference these constants instead of string values.</p>
<p><strong>Note:</strong> It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.</p>
</section></div><hr/></div>