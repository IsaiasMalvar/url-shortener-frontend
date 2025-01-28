---
# URLess: A Modern URL Shortener with Analytics

URLess is a modern URL shortener application that not only simplifies long URLs into more manageable ones but also provides real-time analytics on the number of clicks each shortened URL receives. Built with cutting-edge technologies, it is 100% responsive, ensuring a seamless experience across all devices. The application also features secure authentication powered by JSON Web Tokens (JWT).
---

## Features

- **URL Shortening**: Easily transform long URLs into compact, user-friendly links.
- **Analytics Dashboard**: Get detailed insights into the number of clicks for each shortened URL.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Secure Authentication**: User accounts are secured with JWT-based authentication.
- **Real-Time Updates**: Uses React Query for fast and dynamic data fetching.
- **Interactive Visuals**: Displays analytics with beautiful charts powered by Chart.js.

---

## Backend Integration

This project is tied to a backend repository that handles all server-side logic, including URL shortening, analytics tracking, and authentication.  
You **must** download and set up the backend repository to fully utilize URLess.

### Backend Repository:

[URL Shortener Backend Repository](https://github.com/IsaiasMalvar/url-shortener-backend.git)

### Setting Up the Backend:

1. Clone the backend repository:

   ```bash
   git clone https://github.com/IsaiasMalvar/url-shortener-backend.git
   cd url-shortener-backend
   ```

2. Follow the instructions in the backend repository’s README to set up the server and database.

3. Once the backend is running, make sure to use its URL (e.g., `http://localhost:8080`) in your **URLess frontend** `.env` file (see the installation section below).

---

## Technologies Used

### Core Dependencies

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[React Router DOM](https://reactrouter.com/)**: Handles routing for seamless navigation.
- **[React Hook Form](https://react-hook-form.com/)**: Simplifies form handling and validation.
- **[Yup](https://github.com/jquense/yup)**: For schema-based form validation.
- **[@tanstack/react-query](https://tanstack.com/query/latest)**: Manages server-state with real-time updates.
- **[Chart.js](https://www.chartjs.org/)** & **[React Chart.js 2](https://react-chartjs-2.js.org/)**: For building stunning data visualizations.
- **[React Hot Toast](https://react-hot-toast.com/)**: Displays interactive and customizable toast notifications.
- **[Framer Motion](https://www.framer.com/motion/)**: Animates UI components for an enhanced user experience.

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid styling.
- **[Tailwind CSS Animation Delay](https://www.npmjs.com/package/tailwindcss-animation-delay)**: Adds delay utilities to enhance animation timing.

### Authentication

- **JWT**: Implements secure user authentication and authorization using JSON Web Tokens.

### Development Tools

- **[TypeScript](https://www.typescriptlang.org/)**: Ensures type safety and better developer experience.
- **[ESLint](https://eslint.org/)**: Maintains code quality and enforces best practices.
- **[Vite](https://vitejs.dev/)**: Lightning-fast build tool for modern front-end development.

---

## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/IsaiasMalvar/url-shortener-frontend.git
   cd url-shortener-frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory of the frontend project and define the following:

   ```env
   VITE_API_BASE_URL=http://localhost:8080  # Replace with your backend URL
   ```

4. **Run the Backend**:
   Follow the instructions in the [backend repository](https://github.com/IsaiasMalvar/url-shortener-backend.git) to start the server.

5. **Run the Frontend Development Server**:

   ```bash
   npm run dev
   ```

6. **Build for Production**:

   ```bash
   npm run build
   ```

7. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## Folder Structure

```
src/
├── components/         # Reusable React components
├── hooks/              # Custom hooks (e.g., API queries)
├── pages/              # Application pages (e.g., Dashboard, Login)
├── utils/              # Utility functions (e.g., Chart configuration, validation)
├── styles/             # Tailwind CSS configurations
├── App.tsx             # Root component
├── main.tsx            # Entry point for React
```

---

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production using TypeScript and Vite.
- `npm run lint`: Runs ESLint to ensure code quality.
- `npm run preview`: Serves the production build locally for preview.

---

## Key Features in Detail

### URL Analytics Dashboard

- View interactive bar charts powered by Chart.js.
- Track clicks for individual shortened URLs in real-time.

### Authentication

- Sign up, log in, and manage sessions securely with JWT.
- Protect routes with authentication guards.

### Responsive Design

- Built with Tailwind CSS, ensuring optimal usability on any screen size.

---

## Dependencies Breakdown

| **Dependency**                | **Purpose**                                                    |
| ----------------------------- | -------------------------------------------------------------- |
| `react`, `react-dom`          | Core libraries for building user interfaces.                   |
| `@tanstack/react-query`       | Simplifies server-state management and caching.                |
| `react-router-dom`            | Enables navigation and routing within the app.                 |
| `react-hook-form`             | Efficient form handling and integration.                       |
| `chart.js`, `react-chartjs-2` | For creating dynamic analytics dashboards.                     |
| `framer-motion`               | Adds smooth animations and transitions.                        |
| `yup`                         | Validates form inputs and ensures data integrity.              |
| `tailwindcss`                 | Provides utility-first styling for modern, responsive designs. |
| `eslint`, `typescript-eslint` | Maintains code quality and enforces TypeScript best practices. |
| `vite`                        | Build tool for a fast and optimized development workflow.      |

---

## Future Features

- Advanced analytics, such as geolocation and device breakdown.
- Customizable URL slugs.
- User account management (e.g., password resets, profile updates).
- Admin dashboard for monitoring usage.

---

Enjoy using **URLess** to simplify and analyze your URLs! 🚀
