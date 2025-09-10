# Thought Sharing Application

A React-based web application for sharing and discussing thoughts, built with Firebase integration for authentication and data storage.

## Features

- **User Authentication**: Google Sign-In using Firebase Authentication
- **Thought Sharing**: Create and share your thoughts with the community
- **Real-time Updates**: See new thoughts appear in real-time
- **Interactive Engagement**: Like and comment on thoughts
- **User Profiles**: View thoughts by individual users
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS

## Technologies Used

- React 19.1.0 with Vite
- Firebase (Authentication & Firestore)
- Tailwind CSS with Material Tailwind components
- React Router DOM for navigation
- GSAP for animations
- React Icons for UI elements
- ESLint for code quality

## Project Structure

```
src/
├── Auth/              # Firebase configuration
├── Components/        # Reusable UI components
├── Hooks/             # Custom React hooks for data handling
├── Pages/             # Application pages and routing
├── App.css            # Global styles
└── App.jsx            # Main application component
```

## Installation & Usage

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure Firebase in `.env` with your credentials
4. Start the development server: `npm run dev`

## Contributing

Contributions are welcome! Please open an issue first to discuss what you would like to change.

## License

MIT License

## Credits

Built with React, Firebase, and Tailwind CSS