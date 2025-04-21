## **Tasks API – Documentation**

### **Base URL**  
```
http://localhost:3000
```

---

### **Available Routes**

#### **1. GET /tasks**  
Returns a list of all tasks. You can also use pagination.

- **Optional Query Params**:
  - `page` – Page number (default: 1)
  - `limit` – How many tasks to show per page (default: 5)

- **Example**:
  ```
  GET /tasks?page=1&limit=3
  ```

- **Response**:
  ```json
  [
    { "id": 1, "title": "Running", "description": "Complete 4KM running today" },
    { "id": 2, "title": "Assignment", "description": "Complete assignment today" }
  ]
  ```

---

#### **2. GET /tasks/:id**  
Get one task using its ID.

- **Example**:
  ```
  GET /tasks/1
  ```

- **Response**:
  ```json
  { "id": 1, "title": "Running", "description": "Complete 4KM running today" }
  ```

---

#### **3. POST /tasks**  
Create a new task.

- **Body** (JSON format):
  ```json
  {
    "title": "New Task",
    "description": "Description of task"
  }
  ```

- **Response**:
  ```json
  {
    "id": 4,
    "title": "New Task",
    "description": "Description of task"
  }
  ```

---

#### **4. PUT /tasks/:id**  
Update a task by its ID.

- **Body**:
  ```json
  {
    "title": "Updated Task",
    "description": "Updated task description"
  }
  ```

- **Response**:
  ```json
  {
    "id": 1,
    "title": "Updated Task",
    "description": "Updated task description"
  }
  ```

---

#### **5. DELETE /tasks/:id**  
Delete a task using its ID.

- **Response**:
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

---

### **Status Codes Used**
- `200` – Success  
- `201` – Created  
- `400` – Bad request (like missing fields)  
- `404` – Not found (invalid task ID)  

---

### **How to Run**
1. Make sure Node.js is installed  
2. Run this in terminal:
   ```bash
   npm install
   node index.js
   ```
3. Open browser or Postman at `http://localhost:3000`

---
