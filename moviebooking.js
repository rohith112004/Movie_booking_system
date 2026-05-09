const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',     
    password: 'Rohith@112004',
    database: 'movie_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});


app.post('/book', (req, res) => {
    const { movie_name, customer_name, seats } = req.body;
    const sql = 'INSERT INTO bookings (movie_name, customer_name, seats) VALUES (?, ?, ?)';
    
    db.query(sql, [movie_name, customer_name, seats], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database Error' });
        }
        res.status(200).json({ message: 'Booking Successful! ID: ' + result.insertId });
    });
});
// Add this route to your existing code
app.get('/bookings', (req, res) => {
    console.log("✅ /bookings route hit");   
    const sql = 'SELECT * FROM bookings ORDER BY booking_date DESC';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});
app.listen(3000, () => console.log('Server running on port 3000'));