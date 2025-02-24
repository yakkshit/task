# E-Commerce Monorepo

This monorepo contains two micro-frontend applications: a Next.js-based product catalog and a React-based shopping basket, built using modern frameworks and adhering to SOLID principles and the 12-Factor methodology.

## Project Structure

```plaintext
monorepo/
├── products-nextjs/   # Next.js product catalog (Host Application)
├── basket-react/      # React + Vite shopping basket (Remote Application)
└── docker-compose.yml # Docker Compose configuration
```

## Technologies

- **Frameworks**: React, Next.js
- **UI Library**: Ant Design
- **Language**: TypeScript, JavaScript
- **State Management**: RTK Query
- **API**: Fake Store API
- **Micro Frontend Architecture**: Webpack 5 Module Federation
- **Containerization**: Docker
- **CI/CD**: GitHub Actions (Optional)

## Architectural Overview

### Host Application (products-nextjs)
- Developed using Next.js.
- Fetches product data from the Fake Store API.
- Provides API endpoints for cart and order management.
- Integrates the remote basket application via Module Federation.

**Features**:
- Product catalog listing.
- Shopping cart management.
- Order processing.
- API endpoints: `/api/cart`, `/api/orders`.

### Remote Application (basket-react)
- Developed using React and Vite.
- Fetches real-time cart data from the host application.
- Displays selected products received from the host application.

**Features**:
- Real-time shopping cart updates.
- Order history display.

## Setup and Running

### Using Docker

1. Ensure Docker and Docker Compose are installed.
2. Navigate to the monorepo root.
3. Run:

```shell
docker-compose up --build
```

4. Access the applications:
   - **products-nextjs**: [http://localhost:3000](http://localhost:3000)
   - **basket-react**: [http://localhost:3002](http://localhost:3002)

To stop the services, run: `docker-compose down`

### Running Individual Projects

#### products-nextjs (Host Application)

1. Navigate to `products-nextjs/`
2. Install dependencies:
   ```shell
   npm install
   ```
3. Create `.env.local` with:
   ```plaintext
   API_AUTH_KEY=qwerty123
   ```
4. Run the development server:
   ```shell
   npm run dev
   ```
5. Access at [http://localhost:3000](http://localhost:3000)

#### basket-react (Remote Application)

1. Navigate to `basket-react/`
2. Install dependencies:
   ```shell
   npm install
   ```
3. Create `.env` with:
   ```plaintext
   VITE_API_URL=http://localhost:3000/api
   VITE_API_KEY=qwerty123
   ```
4. Run the development server:
   ```shell
   npm run dev
   ```
5. Access at [http://localhost:3001](http://localhost:3001) (or as configured in Vite)

## Environment Variables

**products-nextjs**:
- `API_AUTH_KEY`: API authentication key

**basket-react**:
- `VITE_API_URL`: URL of products-nextjs API
- `VITE_API_KEY`: API authentication key

## Nginx Configuration (basket-react)

Used in Docker setup to:
- Serve content on port 80.
- Handle client-side routing.
- Optimize static asset caching.

## Development Principles

### SOLID Principles
- **Single Responsibility Principle**: Each component is responsible for a single functionality.
- **Open/Closed Principle**: Components are open for extension but closed for modification.
- **Liskov Substitution Principle**: Substitutable components without breaking functionality.
- **Interface Segregation Principle**: Components use only necessary interfaces.
- **Dependency Inversion Principle**: High-level modules do not depend on low-level modules.

### 12-Factor Application Methodology
- **Codebase**: Centralized monorepo for all applications.
- **Dependencies**: Defined in `package.json`.
- **Configuration**: Managed through environment variables.
- **Backing Services**: Decoupled API and state management.
- **Build & Run Separation**: Separate build and runtime processes.
- **Stateless Processes**: Stateless, containerized services.
- **Port Independence**: Separate ports for host and remote applications.
- **Concurrency**: Horizontally scalable architecture.
- **Disposability**: Efficient resource cleanup upon termination.
- **Dev/Prod Parity**: Consistent environments across development, testing, and production.
- **Logs**: Standardized logging format.
- **Admin Processes**: Dedicated debugging processes.

## Expected Outcome
- The host application lists products from the remote application.
- The basket remote displays selected products from the host application.
- RTK Query optimizes API requests.
- The micro frontend structure is fully functional.
- The project adheres to SOLID principles and the 12-Factor methodology.
- The UI follows the provided Figma design reference.

## Versioning & Deployment

- **Branching Strategy**:
  - Development branch: `test/v1.0.0`
  - Production branch: `prod/v1.0.0`
- **Project Duration**: Must be completed within 120 hours.
- **Commit Rules**:
  - Daily commits required.
  - Progress updates via email.
- **CI/CD Integration** (Optional):
  - Docker containerization.
  - GitHub Actions for automated deployment.

## Additional Notes
- Ensure all environment variables are correctly set before running.
- For local development, update `VITE_API_URL` in `basket-react` as necessary.
- The Docker setup uses internal networking for inter-service communication.
- Higher-Order Components (HOC) should be utilized for shared behavior management.