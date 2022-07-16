<div class="challenge-instructions react"><div><section id="description">
<p>Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action.</p>
<p>The best practice with React is to place API calls or any calls to your server in the lifecycle method <code>componentDidMount()</code>. This method is called after a component is mounted to the DOM. Any calls to <code>setState()</code> here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.</p>
</section></div><hr/><div><section id="instructions">
<p>There is a mock API call in <code>componentDidMount()</code>. It sets state after 2.5 seconds to simulate calling a server to retrieve data. This example requests the current total active users for a site. In the render method, render the value of <code>activeUsers</code> in the <code>h1</code> after the text <code>Active Users:</code>. Watch what happens in the preview, and feel free to change the timeout to see the different effects.</p>
</section></div><hr/></div><div class="challenge-instructions react"><div><section id="description">
<p>Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action.</p>
<p>The best practice with React is to place API calls or any calls to your server in the lifecycle method <code>componentDidMount()</code>. This method is called after a component is mounted to the DOM. Any calls to <code>setState()</code> here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.</p>
</section></div><hr/><div><section id="instructions">
<p>There is a mock API call in <code>componentDidMount()</code>. It sets state after 2.5 seconds to simulate calling a server to retrieve data. This example requests the current total active users for a site. In the render method, render the value of <code>activeUsers</code> in the <code>h1</code> after the text <code>Active Users:</code>. Watch what happens in the preview, and feel free to change the timeout to see the different effects.</p>
</section></div><hr/></div>