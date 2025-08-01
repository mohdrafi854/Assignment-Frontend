# Engineering Resource Management System App


A full-stack web application to efficiently manage engineers, projects, and assignments with dashboards, role-based access, and capacity tracking. Built using the MERN stack and enhanced with AI tools like GitHub Copilot and ChatGPT.

---

## Demo Link

[Live Demo](https://assignment-frontend-tan-nine.vercel.app)

---

## Quick Start
```
git clone [https://github.com/mohdrafi854/Assignment-Frontend.git]
cd <your-repo>
npm install
npm run dev  # or `npm run start` / `yarn dev`
```

## Technologies
- React.JS
- React Router
- Axios
- Node.JS
- Express.JS
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing
---

## Dev Tools:
- GitHub Copilot
- ChatGPT (for Tailwind css, logic)

## Features
**Login Page**
- Display Login page
- A secure login page for both Admin and Engineer users with email/password authentication and role-based redirection.


**Demo Login Credentials**

| Role     | Email                      |  Password     |
|----------|----------------------------|---------------|
| Admin    | `uzair@gmail.com`          | `130316`   |
| Engineer | `mohd.rafi854@gmail.com`   | `2April@1991` |

**Key Features**
- Role-based login (Admin / Engineer)
- JWT token-based authentication
- Redirect to respective dashboards after login
- Client-side validation and error messages

**Admin Dashboard**
The Admin Dashboard provides a complete overview of engineering resources, project distribution, and capacity tracking. It also allows the admin to manage engineers, projects, and assignments efficiently.

**Sidebar Menu**
- Dashboard - Summary overview
- Engineers - List & Add engineers
- Projects - List & Add projects
- Assignments - Assign engineers to projects
- Logout - End admin session

**Manage Engineers**
- View all engineers
- Add new engineers
- Edit engineers

**Manage Projects**
- View all projects
- Add new projects
- Edit or delete existing projects

**Manage Assignments**
- Assign engineer to project with % allocation
- Track each engineer’s utilization

## API Refrence

### **GET api/engineers**<br>
Display all engineers<br>
Sample Response:<br>
```
[{_id, name, email, role, skills, capacity, currentUtilization, createdAt}, ....]
```

### **GET api/engineers/:id**<br>
Display all engineer<br>
Sample Response:<br>
```
[{name, email, role, skills, capacity, currentUtilization}, ....]
```

### **POST api/engineers**<br>
Create engineer<br>
Sample Response:<br>
```
[{name, email, role, skills, capacity, currentUtilization}, ....]
```

### **PUT api/engineers/:id**<br>
Update engineer detail by id<br>
Sample Response:<br>
```
[{name, email, role, skills, capacity, currentUtilization}, ....]
```

### **DELETE api/engineers/:id**<br>
Delete engineer by id<br>
Sample Response:<br>
```
[{_id,}, ....]
```

### **GET /api/projects**<br>
Display all project<br>
Sample Response:<br>
```
[{_id, name, client, description, technologies, startDate, endDate, status, createdAt}, ....]
```

### **POST /api/projects**<br>
Create Project<br>
Sample Response:<br>
```
[{_id, name, client, description, technologies, startDate, endDate, status, createdAt}, ....]
```

### **PUT /api/projects:id**<br>
Update project by id<br>
Sample Response:<br>
```
[name, client, description, technologies, startDate, endDate, status, createdAt}, ....]
```

### **DELETE /api/projects:id**<br>
Project delete by id<br>
Sample Response:<br>
```
[{_id}, ....]
```
---

## Contact
For bug or feature requests, please reach out to mohd.rafi854@gmail.com
