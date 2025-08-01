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

---

### **Demo Login Credentials**

| Role     | Email                      |  Password     |
|----------|----------------------------|---------------|
| Admin    | `uzair@gmail.com`          | `130316`   |
| Engineer | `mohd.rafi854@gmail.com`   | `2April@1991` |

---

### ✨ **Key Features**
- Role-based login (Admin / Engineer)
- JWT token-based authentication
- Redirect to respective dashboards after login
- Client-side validation and error messages

---

**Lisitng Page**
- Display all the Products
- Product search by name
- Filter by categories
- Filter product by rating
- Sort product by price 
- Click wishlist icon and add item
- Click on Add to cart cart to add item

**Detail Page**
- View full information

**Wishlist Page**
- Show all wishlist items

**AddToCart Page**
- Show all add to cart items

## API Refrence

### **GET /leads**<br>
Display all leads<br>
Sample Response:<br>
```
[{_id, name, source, salesAgent, status, tags, timeToClose, priority}, ....]
```

### **GET /agents**<br>
Display all agentst<br>
Sample Response:<br>
```
[{_id, name, email}, ....]
```

### **GET /leads/:id/comments**<br>
View comment<br>
Sample Response:<br>
```
[{_id, lead, author, commentText}, ....]
```

### **GET /report/last-week**<br>
Display report last week<br>
Sample Response:<br>
```
[{_id, status}, ....]
```

### **GET /report/pipeline**<br>
Display all leads which has status closed<br>
Sample Response:<br>
```
[{_id, status}, ....]
```

### **POST /leads**<br>
Create new lead<br>
Sample Response:<br>
```
[{_id, name, source, status, tags, timeToClose, priority}, ....]
```

### **PATCH /leads/:id**<br>
Update leads by lead id<br>
Sample Response:<br>
```
[{_id, name, source, status, tags, timeToClose, priority}, ....]
```

### **DELETE /leads/:id**<br>
Delete leads by lead id<br>
Sample Response:<br>
```
[{_id}, ....]
```

### **POST /agents**<br>
Create new agent<br>
Sample Response:<br>
```
[{_id, name, email}, ....]
```
---

## Contact
For bug or feature requests, please reach out to mohd.rafi854@gmail.com
