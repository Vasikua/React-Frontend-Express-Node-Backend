import express from 'express';
import cors from 'cors';
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};
const app = express();
const PORT = 5000;
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({
        blogPosts: [
            {
                title: "Understanding JavaScript Closures",
                content: "A closure allows a function to access variables from an outer scope even after that scope has returned."
            },
            {
                title: "Why TypeScript Improves Developer Productivity",
                content: "TypeScript adds static typing, making refactoring safer and catching errors early during development."
            },
            {
                title: "React Hooks: A Beginner’s Guide",
                content: "Hooks such as useState and useEffect let stateful logic be reused without writing class components."
            },
            {
                title: "Node.js Event Loop Explained",
                content: "The event loop handles asynchronous operations, enabling Node.js to perform non-blocking I/O."
            },
            {
                title: "How to Structure a REST API in Express",
                content: "Organize routes, controllers, and services to keep your backend scalable and maintainable."
            },
            {
                title: "CSS Flexbox vs Grid",
                content: "Flexbox is perfect for one-dimensional layouts, while Grid is designed for two-dimensional layouts."
            },
            {
                title: "Handling Forms in React",
                content: "Controlled components give React full control over form data, enabling validation and real-time updates."
            },
            {
                title: "LocalStorage vs SessionStorage",
                content: "LocalStorage persists data indefinitely, while SessionStorage only lasts for the browser session."
            },
            {
                title: "Understanding JWT Authentication",
                content: "JWT tokens are signed pieces of JSON used to securely transmit user data between client and server."
            },
            {
                title: "Using Fetch API for HTTP Requests",
                content: "The Fetch API provides a modern interface for sending network requests using promises."
            }
        ]
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});