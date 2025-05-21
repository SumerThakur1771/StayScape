# StayScape — A Modern Travel Listing Platform

StayScape is a full-stack travel accommodation platform that allows users to explore, list, and manage unique stays around the world — from cozy cabins and mountain chalets to iconic city lofts and private islands. Built using Node.js, Express.js, and MongoDB, the project follows the MVC architecture and features a responsive UI powered by EJS templates and Bootstrap. It includes advanced integrations like Mapbox for geolocation and Cloudinary for media storage, making it suitable for real-world deployment.

---

## Live Demo

Visit the deployed application: [StayScape on Render](https://stayscape-v7dj.onrender.com)
Click on explore text or icon to explore the site!
---

## Features

### Listings
- View listings in a card-based layout with category toggles
- Filter by types: Mountains, Iconic Cities, Boats, Domes, Farms, etc.
- Search listings by location (supports partial and case-insensitive matches)
- Each listing displays an image, location, price, title, and category tags

### Filter and Search
- Category-based filtering using FontAwesome icons
- Highlighted filters with toggles
- Navbar search bar for location-based queries

### Add & Edit Listings
- Add listings with:
  - Title, description, price, location, and category
  - Image uploads through Cloudinary
  - Geolocation using Mapbox with automatic marker placement
- Edit and delete existing listings with pre-filled forms

### Map Integration
- Interactive maps with Leaflet.js
- Markers on listings to reflect geolocation in real time

### Authentication
- User registration and login via Passport.js
- Secure session-based auth using MongoDB store
- Flash messages and UX-friendly redirections

---

## Tech Stack

### Frontend
- EJS Templating (MVC pattern)
- Bootstrap 5
- FontAwesome Icons
- Leaflet.js for Maps

### Backend
- Node.js with Express.js
- MongoDB Atlas and Mongoose
- Passport.js for Authentication
- connect-mongo for session storage

### Integrations
- Mapbox API for geolocation
- Cloudinary for image storage
- Render for deployment

---

## Security and Best Practices

- Secrets managed with `.env` variables
- Input validation and sanitization with Mongoose schemas
- Session management and bcrypt-based password hashing
- Sensitive files excluded using `.gitignore`

---

## Project Structure