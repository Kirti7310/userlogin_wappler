# Wappler Auth Demo with Role-Based Access

This project demonstrates user authentication and role-based access control using **Wappler** with a **NodeJS backend**.

## 🗄️ Database Structure

### 1. `roles` Table

| Column Name | Type     | Description          |
|-------------|----------|----------------------|
| id          | INT (PK) | Role ID (Primary Key)|
| name        | VARCHAR  | Role name (e.g. 'admin', 'user') |

#### Sample Data
| id | name  |
|----|-------|
| 1  | admin |
| 2  | user  |

---

### 2. `users` Table

| Column Name | Type     | Description                            |
|-------------|----------|----------------------------------------|
| id          | INT (PK) | User ID (Primary Key)                  |
| email       | VARCHAR  | User email (used for login)           |
| password    | VARCHAR  | Hashed password                        |
| role_id     | INT (FK) | Foreign key to `roles.id`              |

#### Relationships
- `role_id` in `users` is a foreign key referencing `roles.id`

---

## 🔐 Role-Based Access Flow

- On login, user identity and role are stored in the session.
- `Security Restrict` is applied to backend APIs based on the user's `role_id`.
- Frontend pages check `role_id` to control access:
  - Example: `role_id == 1` for admin access.

---


