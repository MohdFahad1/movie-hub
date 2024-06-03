# Binge Browse

This is a movie/TV series searching web application built using React.js, Material UI, Redux, and Clerk for authentication. The application allows users to browse trending movies and TV series, search for specific titles, and save their favorites.

## Features

1. **Trending Page**: Lists all the trending movies and TV series.
2. **Movies Page**: Lists all the trending movies.
3. **TV Series Page**: Lists all the trending TV series.
4. **Search Page**: Allows users to search for movies and TV series.
5. **Favourite Page**: Users can save their favorite movies and TV series.
6. **Authentication**: User authentication using Clerk.

## Tech Stack

- **Frontend**: React.js, Material UI
- **State Management**: Redux
- **Authentication**: Clerk
- **API**: The Movie Database (TMDb) API

## Live Demo

You can view the live demo of the application [[here](https://movie-hub-eight-iota.vercel.app/)](#).

## Installation and Running the Project

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn
- Clerk account for authentication

### Steps to Run

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MohdFahad1/movie-hub.git
   cd movie-hub

2. **Install Dependencies**

   ```bash
   npm install
   #or
   yarn install

3. **Set Up Environment Variables**

   Create a .env file in the root directory and add the following environment variables:
   ```bash
   REACT_APP_CLERK_FRONTEND_API=your-clerk-frontend-api
   REACT_APP_TMDB_API_KEY=your-tmdb-api-key

4. **Run the Application**

   ```bash
    npm start
    # or
    yarn start

