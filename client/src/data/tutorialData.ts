import type { TutorialSkill } from "@/types/tutorial";

export const tutorialData: TutorialSkill[] = [
  {
    id: 1,
    name: "Node.js",
    icon: "Server",
    color: "text-green-500",
    questions: [
      {
        id: 1,
        question: "What is Node.js?",
        answer:
          "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run outside the browser.",
        difficulty: "Easy",
        category: "Basics",
      },
      {
        id: 2,
        question: "Why use Node.js?",
        answer:
          "Node.js is fast, lightweight, event-driven, and ideal for building scalable backend applications.",
        difficulty: "Easy",
        category: "Basics",
      },
      {
        id: 3,
        question: "What is Event Loop?",
        answer:
          "The Event Loop allows Node.js to perform asynchronous operations without blocking the main thread.",
        difficulty: "Easy",
        category: "Async",
      },
      {
        id: 4,
        question: "What is npm?",
        answer:
          "npm (Node Package Manager) is used to install, update and manage project dependencies.",
        difficulty: "Easy",
        category: "Package Manager",
      },
      {
        id: 5,
        question: "Difference between require() and import?",
        answer:
          "require() is CommonJS syntax while import is ES Module syntax.",
        difficulty: "Medium",
        category: "Modules",
      },
      {
        id: 6,
        question: "What is middleware?",
        answer:
          "Middleware is a function that executes between request and response. It can validate users, log requests, or modify data.",
        difficulty: "Easy",
        category: "Express",
      },
      {
        id: 7,
        question: "What is Express.js?",
        answer:
          "Express.js is a lightweight web framework for Node.js used to build APIs and web applications.",
        difficulty: "Easy",
        category: "Express",
      },
      {
        id: 8,
        question: "What are streams?",
        answer:
          "Streams allow reading or writing data piece by piece instead of loading the entire file into memory.",
        difficulty: "Medium",
        category: "Streams",
      },
      {
        id: 9,
        question: "What is callback hell?",
        answer:
          "Nested callbacks that make code difficult to read and maintain are known as callback hell.",
        difficulty: "Medium",
        category: "Async",
      },
      {
        id: 10,
        question: "How do Promises solve callback hell?",
        answer:
          "Promises provide better chaining and error handling compared to nested callbacks.",
        difficulty: "Medium",
        category: "Async",
      },
      {
        id: 11,
        question: "What is async/await?",
        answer:
          "async/await simplifies asynchronous programming by making async code look synchronous.",
        difficulty: "Easy",
        category: "Async",
      },
      {
        id: 12,
        question: "What is REST API?",
        answer:
          "REST API is an architectural style where resources are accessed using HTTP methods like GET, POST, PUT and DELETE.",
        difficulty: "Easy",
        category: "API",
      },
      {
        id: 13,
        question: "How do you handle errors in Express?",
        answer:
          "Using try/catch blocks and custom error-handling middleware.",
        difficulty: "Medium",
        category: "Error Handling",
      },
      {
        id: 14,
        question: "What is JWT?",
        answer:
          "JWT (JSON Web Token) is used for secure authentication between client and server.",
        difficulty: "Medium",
        category: "Authentication",
      },
      {
        id: 15,
        question: "Difference between process.nextTick() and setImmediate()?",
        answer:
          "process.nextTick() executes before the next event loop iteration, while setImmediate() executes after I/O events.",
        difficulty: "Hard",
        category: "Event Loop",
      },
    ],
  },

  {
    id: 2,
    name: "React.js",
    icon: "Atom",
    color: "text-sky-500",
    questions: [
      {
        id: 1,
        question: "What is React?",
        answer:
          "React is a JavaScript library used to build reusable user interfaces using components.",
        difficulty: "Easy",
        category: "Basics",
      },
      {
        id: 2,
        question: "What is JSX?",
        answer:
          "JSX is JavaScript XML syntax that allows writing HTML inside JavaScript.",
        difficulty: "Easy",
        category: "Basics",
      },
      {
        id: 3,
        question: "What is Virtual DOM?",
        answer:
          "Virtual DOM is a lightweight copy of the real DOM that improves rendering performance.",
        difficulty: "Easy",
        category: "Rendering",
      },
      {
        id: 4,
        question: "Difference between State and Props?",
        answer:
          "Props are read-only values passed from parent components. State is managed inside a component and can change.",
        difficulty: "Easy",
        category: "Components",
      },
      {
        id: 5,
        question: "What is useState?",
        answer:
          "useState is a React Hook used to manage component state.",
        difficulty: "Easy",
        category: "Hooks",
      },
      {
        id: 6,
        question: "What is useEffect?",
        answer:
          "useEffect handles side effects like API calls, timers and event listeners.",
        difficulty: "Easy",
        category: "Hooks",
      },
      {
        id: 7,
        question: "What is React Router?",
        answer:
          "React Router enables navigation between different pages in React applications.",
        difficulty: "Easy",
        category: "Routing",
      },
      {
        id: 8,
        question: "Why are keys important?",
        answer:
          "Keys help React efficiently identify changed, added or removed list items.",
        difficulty: "Medium",
        category: "Lists",
      },
      {
        id: 9,
        question: "Controlled vs Uncontrolled Components?",
        answer:
          "Controlled components use React state. Uncontrolled components use DOM references.",
        difficulty: "Medium",
        category: "Forms",
      },
      {
        id: 10,
        question: "What is Context API?",
        answer:
          "Context API allows sharing data globally without prop drilling.",
        difficulty: "Medium",
        category: "State Management",
      },
      {
        id: 11,
        question: "Why use React Query?",
        answer:
          "React Query simplifies server state management, caching, and API synchronization.",
        difficulty: "Medium",
        category: "API",
      },
      {
        id: 12,
        question: "What is memo()?",
        answer:
          "React.memo prevents unnecessary re-rendering of components.",
        difficulty: "Medium",
        category: "Performance",
      },
      {
        id: 13,
        question: "Difference between useMemo and useCallback?",
        answer:
          "useMemo memoizes values, while useCallback memoizes functions.",
        difficulty: "Medium",
        category: "Performance",
      },
      {
        id: 14,
        question: "What are custom hooks?",
        answer:
          "Custom hooks allow reusing component logic across multiple components.",
        difficulty: "Medium",
        category: "Hooks",
      },
      {
        id: 15,
        question: "What is hydration?",
        answer:
          "Hydration attaches React to server-rendered HTML, making it interactive.",
        difficulty: "Hard",
        category: "SSR",
      },
    ],
  },

  {
    id: 3,
    name: "PostgreSQL",
    icon: "Database",
    color: "text-blue-500",
    questions: [
      {
        id: 1,
        question: "What is PostgreSQL?",
        answer:
          "PostgreSQL is a powerful open-source relational database management system.",
        difficulty: "Easy",
        category: "Basics",
      },
      {
        id: 2,
        question: "Difference between SQL and PostgreSQL?",
        answer:
          "SQL is a query language, whereas PostgreSQL is a database system that uses SQL.",
        difficulty: "Easy",
        category: "Basics",
      },
      {
        id: 3,
        question: "What is Primary Key?",
        answer:
          "A Primary Key uniquely identifies each row in a table.",
        difficulty: "Easy",
        category: "Constraints",
      },
      {
        id: 4,
        question: "What is Foreign Key?",
        answer:
          "A Foreign Key creates a relationship between two tables.",
        difficulty: "Easy",
        category: "Constraints",
      },
      {
        id: 5,
        question: "What is JOIN?",
        answer:
          "JOIN combines data from multiple tables based on related columns.",
        difficulty: "Easy",
        category: "Queries",
      },
      {
        id: 6,
        question: "Types of JOIN?",
        answer:
          "INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL OUTER JOIN.",
        difficulty: "Easy",
        category: "Queries",
      },
      {
        id: 7,
        question: "What is GROUP BY?",
        answer:
          "GROUP BY groups rows having the same values for aggregate functions.",
        difficulty: "Medium",
        category: "Queries",
      },
      {
        id: 8,
        question: "What is HAVING?",
        answer:
          "HAVING filters grouped records after GROUP BY.",
        difficulty: "Medium",
        category: "Queries",
      },
      {
        id: 9,
        question: "What are Indexes?",
        answer:
          "Indexes improve query performance by allowing faster data retrieval.",
        difficulty: "Medium",
        category: "Performance",
      },
      {
        id: 10,
        question: "What is Normalization?",
        answer:
          "Normalization reduces data redundancy and improves database design.",
        difficulty: "Medium",
        category: "Database Design",
      },
      {
        id: 11,
        question: "What is ACID?",
        answer:
          "ACID stands for Atomicity, Consistency, Isolation and Durability.",
        difficulty: "Medium",
        category: "Transactions",
      },
      {
        id: 12,
        question: "Difference between DELETE, TRUNCATE and DROP?",
        answer:
          "DELETE removes rows, TRUNCATE removes all rows quickly, DROP removes the entire table.",
        difficulty: "Medium",
        category: "DDL/DML",
      },
      {
        id: 13,
        question: "What is a View?",
        answer:
          "A View is a virtual table created using a SQL query.",
        difficulty: "Medium",
        category: "Views",
      },
      {
        id: 14,
        question: "What is a Transaction?",
        answer:
          "A transaction is a sequence of SQL operations executed as one unit of work.",
        difficulty: "Medium",
        category: "Transactions",
      },
      {
        id: 15,
        question: "What is JSONB in PostgreSQL?",
        answer:
          "JSONB stores JSON data in binary format with indexing support for faster querying.",
        difficulty: "Hard",
        category: "Advanced",
      },
    ],
  },
];