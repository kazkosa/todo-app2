# 📝 Next.js Todo App

This is a simple Todo app built with Next.js, Prisma, and PostgreSQL.  
It was created as a learning project covering full-stack development, and deployed on Vercel.

## 🔗 Demo

▶️ Live URL: [https://todo-app2-umber.vercel.app/](https://todo-app2-umber.vercel.app/)

(Note: This app is publicly accessible for learning purposes only and contains no sensitive information.  
Currently it is public, but may be made private in the future depending on circumstances.)


## 🛠️ Technologies Used

- **Next.js (App Router)**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Tailwind CSS**
- **Vercel (本番ホスティング)**

## 🚩 Main Features

- Create, delete, and toggle completion status of Todos (CRUD)
- API routes (`app/api/todos`) for data operations
- Type-safe DB access using Prisma
- Fully compatible with serverless environments like Vercel

## 🌱 Future Improvements

- Add user authentication (e.g., Auth.js, Clerk)
- Add tags, deadlines, and priority features
- Implement filtering and search functionality
- Improve UI (animations, dark mode support)

## 🧪 Development Setup

### 1. Clone this repository

```bash
$ git clone https://github.com/your-username/your-repo.git
$ cd your-repo
```

### 2. Install dependencies
```bash
$ yarn install
# or
$ npm install

```

### 3. Configure environment variables
Copy .env.sample to .env and set your DATABASE_URL accordingly.

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

```

### 4. Setup database with Prisma
```bash
$ npx prisma generate
$ npx prisma migrate dev --name init
```

### 5. Start the development server
```bash
$ yarn dev
# or
$ npm run dev
```

### 6. Access the app
http://localhost:3000 にアクセスして、Todoアプリが表示されるか確認してください



## ⚠️ Notes
- This repository does not include production database or authentication features.

- Minimal security measures are implemented; further improvements are needed for real-world use.

##  License
MIT License

