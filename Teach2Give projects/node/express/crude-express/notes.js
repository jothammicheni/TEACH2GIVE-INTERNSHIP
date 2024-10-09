// Definition: These are dynamic parts of a URL path used to capture specific values that are part of the route itself. Route parameters are used to identify specific resources within the server.

// Syntax: Route parameters are part of the URL path and are typically defined by placing a colon (:) before the parameter name.

// Usage: Typically used to specify specific resources or objects like user profiles, articles, etc.

// Example: /user/:id, where :id is a route parameter. A URL might look like /user/123, where 123 is the value passed as the id.

// When to use: When you want to capture essential, hierarchical information about a resource, like an ID or category.
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; // Accessing route parameter
    res.send(`User ID: ${userId}`);
});
