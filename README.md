This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Docker

### Development Environment

For development with hot reload and Compose Watch:

```bash
# Install Docker and Docker Compose if not already installed
# Linux: sudo apt-get install docker.io docker-compose
# macOS: Install via Homebrew: brew install --cask docker

# Start the development environment (hot reload enabled)
docker-compose up --build

# Run in detached mode (background)
docker-compose up --build -d

# Stop the development environment
docker-compose down
```

### Production Build

Build the production image:

```bash
docker build -t nextjs-sample:prod Dockerfile.prod
```

Run the production container:

```bash
docker run -p 3000:3000 --name nextjs-sample nextjs-sample:prod
```

### Docker Compose Services

- **nextjs-dev**: Development environment with hot reload and Compose Watch
- **nextjs-prod-standalone**: Production standalone build

### File Structure

```
.
├── Dockerfile.dev        # Development Dockerfile (hot reload)
├── Dockerfile.prod       # Production Dockerfile (standalone)
├── docker-compose.yml    # Docker Compose configuration
└── README.md             # This file
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
