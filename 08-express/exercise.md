### Activity 1: Implement CRUD for Tasks

Build upon your existing knowledge of creating CRUD operations for the `User` model by applying the same principles to a new `Task` model.

1. **Task Controller**: Create a new file `task.controller.js` and implement functions for creating, retrieving, updating, and deleting tasks.

```javascript
// src/tasks/tasks.controller.js
import { Request, Response } from 'express';

const tasks = [];
// Implement and export createTask, getAllTasks, getTaskById, updateTask, and deleteTask functions
```

2. **Task Routes**: Create a new file `task.routes.js` and define routes for each of the task operations. Use the functions from your task controller.

```javascript
// src/tasks/task.routes.js
import { Router } from 'express';
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from '../tasks.controller.js';

const router = Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
```

3. **Integrate with the Application**: Import the task routes into your `app.js` and mount them.

```javascript
// src/app.js
import taskRoutes from './tasks/task.routes.js';

// ... other imports and middleware ...

app.use('/api/tasks', taskRoutes);

// ... rest of the file ...
```

4. **Manual Testing**: Test your task routes manually using Postman (or Yaak.app) or curl to ensure they work as expected.

### Activity 2: Add Validation and Error Handling Middleware

Enhance your application by ensuring the integrity of the data and handling errors gracefully.

1. **Input Validation Middleware**: Create a middleware function that validates the request body for creating or updating tasks and users. 

```javascript
// src/middleware/validateInput.js
import { Request, Response, NextFunction } from 'express';

export function validateUserInput(req, res, next) {
  // Check for required fields in req.body and validate them
  // If validation fails, send a 400 response with an error message
  // If validation succeeds, call next()
}
```

2. **Enhanced Error Handling Middleware**: Modify your error handling middleware to provide more detailed error messages, including which fields are missing or incorrectly formatted.

```javascript
// src/middleware/errorHandler.js
export function errorHandler(err, req, res, next) {
  // Log the error and respond with a user-friendly message
  // Customize the response based on the type of error
}
```

3. **Utilize Middleware**: Apply your validation middleware to the relevant routes in `user.routes.js` and `task.routes.js`.

```javascript
// src/routes/user.routes.js and src/routes/task.routes.js
import { validateTaskInput } from '../middleware/validateInput.js';

router.post('/', validateUserInput, createTask);
router.put('/:id', validateUserInput, updateTask);

// ... other route handlers ...
```

4. **Test Your Middleware**: Write tests for your validation and error handling middleware to ensure they behave as expected. You can use `supertest` to simulate requests and test the responses.

By completing these activities, you will have a more robust application that not only performs CRUD operations on multiple resources but also validates input data and handles errors effectively.