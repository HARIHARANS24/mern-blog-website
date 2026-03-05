# 📝 MERN Blog Website

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🚀 Features

- User authentication and authorization 
- Create, read, update, and delete blog posts 
- Responsive design
- Rich text editor for blog posts 
- Comment system   
- User profiles 
- Search functionality   
   
## 🛠️ Tech Stack  

- **Frontend**: React.js, Material-UI, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## 📁 Project Structure

```
Directory structure:
└── hariharans24-mern-blog-website/
    ├── README.md
    ├── LICENSE
    ├── blog-backend/
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── server.js
    │   ├── models/
    │   │   ├── Category.js
    │   │   └── Post.js
    │   └── routes/
    │       ├── categories.js
    │       └── posts.js
    └── blog-frontend/
        ├── README.md
        ├── package-lock.json
        ├── package.json
        ├── public/
        │   ├── index.html
        │   ├── manifest.json
        │   └── robots.txt
        └── src/
            ├── App.css
            ├── App.js
            ├── App.test.js
            ├── index.css
            ├── index.js
            ├── reportWebVitals.js
            ├── setupTests.js
            ├── components/
            │   ├── Footer.js
            │   ├── Header.js
            │   └── Post.js
            └── pages/
                ├── About.js
                ├── CategoryPosts.js
                ├── Contact.js
                ├── Home.js
                ├── PostDetail.js
                ├── PostList.js
                ├── Privacy.js
                └── Terms.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/HARIHARANS24/mern-blog-website.git
cd mern-blog-website
```

2. Install backend dependencies
```bash
cd blog-backend
npm install
```

3. Install frontend dependencies
```bash
cd ../blog-frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Start the backend server
```bash
cd blog-backend
npm start
```

6. Start the frontend development server
```bash
cd blog-frontend
npm start
```

## 🔧 Environment Variables

### Backend (.env)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Backend server port (default: 5000)

### Frontend (.env)
- `REACT_APP_API_URL`: Backend API URL

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 👥 Authors

- **HARIHARANS24** - *Initial work* - [GitHub Profile](https://github.com/HARIHARANS24)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the MERN stack community for their excellent documentation and support 
