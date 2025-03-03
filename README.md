# SimplyBuy - Gadget Shop & Landing Page

## Overview
SimplyBuy is a simple gadget shop with Stripe payment integration. It includes a landing page and a full e-commerce platform where users can browse products, make purchases, and manage their orders.

## Live Links
- **Gadget Shop**: [SimplyBuy](https://simplybuy-beta.vercel.app/)
- **Landing Page**: [SimplyBuy Landing Page](https://courageous-valkyrie-251c1c.netlify.app/)

## Features
### Gadget Shop
- User authentication (Login/Signup)
- Product listing and details
- Wishlist for buyers
- Seller dashboard to manage products
- Secure payments using Stripe
- Private routes for buyers and sellers

### Landing Page
- Simple and responsive design
- Introduction to SimplyBuy
- Call-to-action for users

## Tech Stack
### Gadget Shop (Frontend)
- **Framework**: React 18
- **State Management**: React Hooks
- **Routing**: React Router 6
- **Styling**: Tailwind CSS, DaisyUI
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast
- **API Handling**: Axios
- **Icons**: React Icons
- **Loading Indicators**: React Spinners

### Gadget Shop (Backend)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Environment Management**: Dotenv
- **CORS Handling**: CORS
- **Payment Processing**: Stripe

### Landing Page
- **Framework**: React 19
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## Project Structure
```
├── client (Frontend)
│   ├── src
│   │   ├── components
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── utils
│   ├── public
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│
├── server (Backend)
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── index.js
│   ├── package.json
│
├── landing-page
│   ├── src
│   │   ├── components
│   │   ├── pages
│   ├── public
│   ├── package.json
│   ├── tailwind.config.js
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/simplybuy.git
   cd simplybuy
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the project:
   ```sh
   npm run dev
   ```
4. (If applicable) Set up the backend and Stripe API keys in an `.env` file.

## License
This project is open-source and available for personal and commercial use.

---

Happy coding! 🚀
