# ✨ Star Wars Universe Explorer ✨

![Star Wars](https://img.shields.io/badge/Star%20Wars-FFE81F?style=for-the-badge&logo=star%20wars&logoColor=black)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NgRx](https://img.shields.io/badge/NgRx-BA2BD2?style=for-the-badge&logo=redux&logoColor=white)

> "Do. Or do not. There is no try." - Yoda

## 🚀 Welcome to the Galaxy Far, Far Away...

This interactive Angular application lets you explore the vast Star Wars universe using the SWAPI (Star Wars API). Journey through films, characters, and the rich lore of the franchise with a sleek, responsive interface.

## 🌟 Features

- **Film Catalog**: Browse all Star Wars movies in the saga
- **Detailed Film Information**: View directors, producers, release dates, and the iconic opening crawl
- **Character Explorer**: Discover detailed information about characters from the Star Wars universe
- **Responsive Design**: Experience the force on any device - mobile, tablet, or desktop
- **State Management**: Powered by NgRx for efficient data handling and minimal API requests

## 🛠️ Tech Stack

- **Angular 17**: Modern, powerful front-end framework
- **NgRx**: State management with Redux pattern
- **Material Design**: Sleek UI components
- **SWAPI**: The Star Wars API for all data
- **Responsive Design**: Mobile-friendly interface

## 🎬 Quick Start


# Install dependencies
npm install

# Start the application
npm start

# The force will be with you at: http://0.0.0.0:4200


## 📱 Application Structure

- **Film List**: Home page displaying all Star Wars films
- **Film Details**: View comprehensive information about each film
  - Title, director, producer, release date
  - Opening crawl
  - Characters who appear in the film
- **Character Details**: Explore detailed character information
  - Personal data (height, mass, birth year, etc.)
  - Films the character appears in

## 🧠 State Management

This application uses NgRx to efficiently manage state:
- Films are loaded only once
- Character data is cached to minimize API requests
- Loading indicators display during data fetching

## 🖌️ UI/UX

The application features a Star Wars-inspired dark theme with:
- Yellow accents reminiscent of the iconic Star Wars opening crawl
- Responsive cards and grids
- Smooth transitions between pages
- Loading spinners during data fetching

## 📝 Business Requirements

✅ Display a list of Star Wars movies on the home page  
✅ Navigate to film details when clicking a movie  
✅ Show film information including title, producer, director, release date, and opening crawl  
✅ Display characters for each film  
✅ Navigate to character details when clicking a character  
✅ Show character's personal data and film appearances  
✅ Navigate back to film details from character page  

## 🔗 Navigation Flow


Home (Film List)
    ↓ 
Film Details
    ↓
Character Details
    ↓
(Back to Film Details)


## 🧪 Development


# Run tests
npm test

# Build for production
npm run build


## 🌐 API Reference

This project utilizes the [SWAPI](https://swapi.dev/) (Star Wars API) for all data.


May the Force be with you! 🌠
