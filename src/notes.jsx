/**
 * use() hook:
 * use() hook simplifies how we use promises, async code, and contexts in React.
 * 
 * 
 * Before Actions:
 * we used to utilize the onSubmit React event, which triggers the execution of the search method upon form submission. 
 * But it's important to note that currently, the search method runs solely on the client-side. 
 * We're limited to using React events for form submission, meaning the search cannot be executed on the server side.
 * 
 * Actions:
 * Actions will let you integrate actions with the HTML tag <form/>. 
 * In simpler terms, you'll be able to replace the onSubmit event with Actions. 
 * These actions are HTML form attributes.
 * Actions can be executed on the server side. In our JSX, with <form/>, we can drop the onSubmit event and use the action attribute. 
 * The value of the action attribute will be a method to submit the data either on the client or server side.
 * You can execute both synchronous and asynchronous operations with actions, streamlining data submission management and state updates. 
 * 
 * useFormStatus() hook:
 * It will give you status information about the last form submission (pending, data, method, action)
 * 
 * useFormState() hook:
 * It allows you to update state based on the result of a form submission.
 * 
 * useOptimistic() hook:
 * Lets you show a different state while an async action is underway.
 * This hook will help enhance the user experience and should result in faster responses. 
 * This will be useful for applications that need to interact with the server.
 * 
  */