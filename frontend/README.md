# Pharmaventory Frontend

Modern React + TypeScript frontend for Pharmaventory - A comprehensive pharmacy inventory management system.

## 🚀 Features

- **Modern UI/UX**: Clean, minimal design with green medical theme
- **Real-time Updates**: Socket.IO integration for live inventory updates
- **Role-Based Access**: Admin, Pharmacist, and Staff roles
- **Medicine Management**: Complete CRUD operations for medicines
- **Prescription Handling**: Create, validate, and dispense prescriptions
- **Reorder Management**: Track and manage reorder requests
- **Analytics Dashboard**: Visual analytics and demand trends
- **AI Chatbot**: Intelligent chatbot for medicine queries
- **Responsive Design**: Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Axios** for API calls
- **Socket.IO Client** for real-time updates
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **Lucide React** for icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-frontend-repo-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
# Backend API URL
# Production (default): https://pharmaventory-se.onrender.com/api
# Development: http://localhost:5000/api
VITE_API_URL=https://pharmaventory-se.onrender.com/api
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Layout.tsx          # Main layout with sidebar and navbar
│   │   ├── MedicineForm.tsx    # Medicine add/edit form
│   │   ├── PrescriptionForm.tsx # Prescription form
│   │   └── PrivateRoute.tsx    # Protected route wrapper
│   ├── contexts/       # React Context providers
│   │   ├── AuthContext.tsx      # Authentication context
│   │   └── SocketContext.tsx   # Socket.IO context
│   ├── pages/          # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Medicines.tsx
│   │   ├── Prescriptions.tsx
│   │   ├── Reorders.tsx
│   │   ├── Analytics.tsx
│   │   ├── Chatbot.tsx
│   │   ├── Login.tsx
│   │   └── Signup.tsx
│   ├── services/       # API services
│   │   └── api.ts      # Axios configuration and API methods
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Backend API URL (required)
VITE_API_URL=https://pharmaventory-se.onrender.com/api
```

### API Configuration

The frontend is configured to use the production backend by default:
- **Production API**: `https://pharmaventory-se.onrender.com/api`
- **Socket.IO**: Automatically connects to the base URL (without `/api`)

For local development, set `VITE_API_URL=http://localhost:5000/api` in your `.env` file.

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Custom Colors**: Green medical theme (primary colors)
- **Fonts**: 
  - Poppins (body text)
  - Dancing Script (logo/branding)
- **Responsive**: Mobile-first approach

## 🔐 Authentication

- JWT token-based authentication
- Tokens stored in localStorage
- Automatic token refresh on API calls
- Protected routes for authenticated users only

## 📡 Real-time Features

- Socket.IO integration for live updates
- Automatic reconnection on disconnect
- Inventory updates broadcasted in real-time

## 🚢 Deployment

### Vercel

1. Connect your repository to Vercel
2. **IMPORTANT**: Go to **Settings → Environment Variables**
3. Add environment variable:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://pharmaventory-se.onrender.com/api`
   - **Environment**: Production, Preview, Development (select all)
4. **Redeploy** your application after adding the environment variable
5. Build command: `npm run build` (auto-detected)
6. Output directory: `dist` (auto-detected)

**Important**: The `vercel.json` file is already configured to handle SPA routing (fixes 404 on reload). Make sure it's committed to your repository.

**Note**: If you don't set `VITE_API_URL`, it will default to production URL, but it's better to set it explicitly.

### Netlify

1. Connect your repository
2. Go to **Site settings → Environment variables**
3. Add: `VITE_API_URL` = `https://pharmaventory-se.onrender.com/api`
4. Build command: `npm run build`
5. Publish directory: `dist`

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Make sure to set the `VITE_API_URL` environment variable

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is part of the Pharmaventory system.

## 🔗 Backend Repository

Backend API is deployed at: https://pharmaventory-se.onrender.com

For backend code, see the separate backend repository.

## 📞 Support

For issues or questions, please open an issue in the repository.

