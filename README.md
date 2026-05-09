# 🎬 Movie Ticket Booking System

A Full Stack Movie Ticket Booking System developed using:

- HTML
- CSS
- JavaScript
- MySQL

This project allows users to book movie tickets online, select seats, view available movies, and manage bookings through a simple and responsive interface.

---

# 📌 Features

✅ User-friendly Interface  
✅ Movie Listing Page  
✅ Seat Selection System  
✅ Ticket Booking  
✅ Booking Confirmation  
✅ MySQL Database Integration  
✅ Responsive Design  
✅ Dynamic Data Handling using JavaScript  

---

# 🛠 Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend / Database
- MySQL

---

# 📂 Project Structure

```text
movie-booking-system/
│
├── index.html
├── movies.html
├── booking.html
├── confirmation.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│
└── database/
    └── movie_booking.sql
```

---

# 💻 Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/movie-booking-system.git
```

---

## 2️⃣ Open Project Folder

```bash
cd movie-booking-system
```

---

# 🗄 Database Setup

Open MySQL or phpMyAdmin and run the following SQL commands:

```sql
CREATE DATABASE movie_booking;

USE movie_booking;

CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    movie_name VARCHAR(100),
    seat_number VARCHAR(20),
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# ▶ Running the Project

1. Start XAMPP/WAMP MySQL Server  
2. Import SQL database  
3. Open `index.html` in browser  

---

# 🎟 Booking Workflow

1. User selects a movie  
2. User chooses seats  
3. Booking details are stored in MySQL  
4. Confirmation page is displayed  

---

# 📸 Screenshots

## Home Page

```markdown
Add screenshot here
```

## Seat Selection

```markdown
Add screenshot here
```

## Booking Confirmation

```markdown
Add screenshot here
```

---

# 🚀 Future Enhancements

- Online Payment Gateway
- User Login & Signup
- Admin Dashboard
- QR Code Ticket Generation
- Email Confirmation
- Real-time Seat Availability
- Movie Trailer Integration
- Dark Mode

---

# 📚 Learning Outcomes

Through this project, you can learn:

- Frontend Development
- DOM Manipulation
- Database Connectivity
- CRUD Operations
- Responsive Web Design
- Project Structuring

---

# 👨‍💻 Author

Rohith S  
Computer Science Engineering Student

---

# 📄 License

This project is developed for educational purposes only.