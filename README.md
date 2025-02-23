# E-Commerce Monorepo

This monorepo contains two applications: a Next.js-based product catalog and a React-based shopping basket, demonstrating a micro-frontend architecture.

## Project Structure

```plaintext
monorepo/
├── products-nextjs/   # Next.js product catalog
├── basket-react/      # React + Vite shopping basket
└── docker-compose.yml # Docker Compose configuration
```

## Technologies

- **Frontend**: React, Next.js, Ant Design
- **Language**: TypeScript
- **State Management**: RTK Query
- **API**: Fake Store API
- **Architecture**: Webpack 5 Module Federation


## Applications

### products-nextjs

A Next.js e-commerce storefront that fetches products from the Fake Store API and provides API endpoints for cart and orders.

**Features**:

- Product catalog
- Cart management
- Order processing
- API endpoints: `/api/cart` and `/api/orders`


### basket-react

A React + Vite application displaying the shopping basket and order history, fetching real-time data from products-nextjs.

**Features**:

- Real-time cart updates
- Order history display


## Setup and Running

### Using Docker

1. Ensure Docker and Docker Compose are installed.
2. Navigate to the monorepo root.
3. Run:

```shellscript
docker-compose up --build
```


4. Access:

1. products-nextjs: [http://localhost:3000](http://localhost:3000)
2. basket-react: [http://localhost:3002](http://localhost:3002)





To stop: `docker-compose down`

### Individual Projects

#### products-nextjs

1. Navigate to `products-nextjs/`
2. Install dependencies: `npm install`
3. Create `.env.local`:

```plaintext
API_AUTH_KEY=qwerty123
```


4. Run: `npm run dev`
5. Access: [http://localhost:3000](http://localhost:3000)


#### basket-react

1. Navigate to `basket-react/`
2. Install dependencies: `npm install`
3. Create `.env`:

```plaintext
VITE_API_URL=http://localhost:3000/api
VITE_API_KEY=qwerty123
```


4. Run: `npm run dev`
5. Access: [http://localhost:3001](http://localhost:3001) (or as specified by Vite)


## Environment Variables

- products-nextjs:

- `API_AUTH_KEY`: API authentication key



- basket-react:

- `VITE_API_URL`: URL of products-nextjs API
- `VITE_API_KEY`: API authentication key


## nginx.conf (basket-react)

Used in Docker setup to:

- Serve on port 80
- Handle client-side routing
- Configure caching for static assets


## Notes

- Ensure all environment variables are set before running.
- For local development, adjust `VITE_API_URL` in basket-react if needed.
- Docker setup uses internal networking for inter-service communication.
