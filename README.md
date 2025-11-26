# 🛍️ MarketHub- Ecommerce Project

A modern, full-stack e-commerce platform built with React and Node.js, featuring a ShopSphere is a full-stack e-commerce platform with:
Customer features: product browsing, shopping cart, checkout, user accounts
Admin features: product management (CRUD), order management, dashboard, image uploads via Cloudinary
Tech stack: React 19 + Vite (frontend), Node.js + Express + Sequelize + MySQL (backend)complete shopping experience with admin management capabilities.

## 📋 Project Description

**MarketHub** is a comprehensive e-commerce solution that provides a seamless shopping experience for customers and powerful management tools for administrators. The platform features a beautiful, responsive UI built with modern web technologies, secure authentication, shopping cart functionality, and a complete admin panel for product management.

### Key Features

#### 🛒 Customer Features
- **User Authentication**: Secure registration and login system with JWT tokens
- **Product Browsing**: Browse products with category and brand filtering
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Checkout Process**: Streamlined checkout experience
- **User Account**: Manage your profile and view order history
- **Responsive Design**: Beautiful UI that works on all devices

#### 👨‍💼 Admin Features
- **Dashboard**: Overview of store statistics and operations
- **Product Management**: Full CRUD operations for products
  - Add new products with images
  - Edit existing products
  - Delete products
  - Upload product images to Cloudinary
- **Order Management**: View and manage customer orders
- **Role-Based Access**: Secure admin panel with authentication

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Axios** - HTTP client
- **Sonner** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Sequelize** - SQL ORM
- **MySQL** - Relational database
- **JWT** - Authentication tokens
- **Bcryptjs** - Password hashing
- **Cloudinary** - Image storage and management
- **Multer** - File upload handling

## 📁 Project Structure

```
E-commerse-main/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── admin-view/ # Admin-specific components
│   │   │   ├── auth/       # Authentication components
│   │   │   ├── Shopping-view/ # Shopping components
│   │   │   └── ui/         # Base UI components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store and slices
│   │   ├── config/         # Configuration files
│   │   └── lib/            # Utility functions
│   └── package.json
│
└── server/                 # Backend Node.js application
    ├── config/             # Database and service configs
    ├── controllers/        # Request handlers
    ├── models/             # Sequelize models
    ├── routes/             # API routes
    └── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MySQL database
- npm or yarn package manager

### Environment Variables

Create a `.env` file in the `server` directory:

```env
# Database Configuration
MYSQL_DATABASE=your_database_name
MYSQL_USER=your_mysql_user
MYSQL_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_PORT=3306

# Server Configuration
PORT=5000

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd E-commerce-main/E-commerse-main
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up MySQL database**
   - Create a new MySQL database
   - Update the `.env` file with your database credentials
   - The application will automatically create tables on first run

5. **Start the development servers**

   **Terminal 1 - Backend Server:**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:5000`

   **Terminal 2 - Frontend Client:**
   ```bash
   cd client
   npm run dev
   ```
   Client will run on `http://localhost:5173`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/check-auth` - Check authentication status
- `POST /api/auth/logout` - Logout user

### Admin Products
- `GET /api/admin/products` - Get all products
- `POST /api/admin/products` - Create a new product
- `PUT /api/admin/products/:id` - Update a product
- `DELETE /api/admin/products/:id` - Delete a product
- `POST /api/admin/products/upload` - Upload product image

### Shop Products
- `GET /api/shop/products` - Get all products (public)
- `GET /api/shop/products/:id` - Get product details

### Cart
- `GET /api/shop/cart` - Get user's cart
- `POST /api/shop/cart` - Add item to cart
- `PUT /api/shop/cart/:id` - Update cart item
- `DELETE /api/shop/cart/:id` - Remove item from cart

## 🎯 Usage

### For Customers
1. Register a new account or login
2. Browse products on the home page
3. Use filters to find specific products
4. Add products to your cart
5. Proceed to checkout
6. Manage your account settings

### For Administrators
1. Login with an admin account
2. Access the admin dashboard
3. Manage products (add, edit, delete)
4. Upload product images
5. View and manage orders
6. Monitor store statistics

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Role-based access control
- Secure cookie handling
- CORS configuration
- Input validation

## 🎨 UI/UX Features

- Modern, clean design
- Responsive layout for all devices
- Smooth animations and transitions
- Toast notifications for user feedback
- Loading states and skeletons
- Accessible components with Radix UI

## 🚧 Future Enhancements

- [ ] Payment gateway integration
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] Multi-vendor support
- [ ] Analytics dashboard

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Your Name - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Radix UI for accessible components
- All open-source contributors

---

⭐ If you like this project, please give it a star on GitHub!

