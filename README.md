[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
# Cyber Heroes

Cyber Heroes is a social responsibility project aimed at teaching internet safety and digital security to children. This project is built using Next.js and provides an interactive quiz to raise awareness.

Features

- Interactive quiz to teach internet safety.
- Light and dark theme support with toggle.
- SQLite database integration for managing quiz questions.
- Docker support for easy deployment.
- Ready for deployment on [Vercel](https://cyber-heroes.vercel.app/).


## Getting Started

### Local Development

Clone the repository:

```bash
git clone https://github.com/your-username/cyber-heroes.git
cd cyber-heroes
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to see the app.

SQLite Database Setup

Ensure the cyber-heroes.db file is in the public/db directory.

The API will automatically use this database for fetching quiz questions.

To test the API:

```bash
curl http://localhost:3000/api/questions
```

### Docker Deployment

This project includes Docker support for easy deployment.

Build the Docker image:

```bash
docker build -t cyber-heroes .
```

Run the container:

```bash
docker run -p 3000:3000 cyber-heroes
```

Open http://localhost:3000 in your browser.

Using Docker Compose

Alternatively, you can use Docker Compose:

```bash
docker-compose up --build
```
