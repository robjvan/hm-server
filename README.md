# Home Manager Server

## Features

- Uses NAFP stack - NestJS, Angular/Flutter, PostgreSQL
- Hosted on Coolify with automatic build/deployment
- Image storage buckets, authentication, notifications handled by AppWrite

## Developer Information

Built with NestJS v10.4.9, NodeJS 22.16.0, and npm 10.9.2

### Setting up your environment

Install VS Code with following extensions:

- Better comments
- ESLint
- gitignore
- Prettier
- Todo Tree

### Deploying to Coolify

Coolify should detect merges to `master` branch through webhooks and automatically build/push new releases.
