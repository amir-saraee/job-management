# Job Management Application

## Overview

This project is a job management application built with Next.js, featuring authentication and job listing functionalities. It uses JSON Server for mocking API endpoints and integrates with NextAuth for authentication.

## Features

- **Job Listings**: Display available job postings on the front page.

- **Job Details**: View details of a specific job on a separate page.

- **Authentication**: Users can log in to apply for jobs.

- **Apply Now**: Display appropriate dialogs based on user authentication status.

## Technologies Used

- **Next.js**: Framework for building the application.

- **Mantine**: Component library for UI elements.

- **NextAuth**: Authentication solution.

- **Axios**: For API requests.

- **JSON Server**: Mocking backend API.

- **TypeScript**: For type safety.

## Getting Started

Follow these steps to set up and run the application locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)

- [npm](https://www.npmjs.com/) (comes with Node.js)

### 1. Clone the Repository

```bash

git  clone  https://github.com/amir-saraee/job-management.git

```

### 2. Install Dependencies

```bash
npm install
or
yarn install
```

### 3. Set Up JSON Server

Create a file named `db.json` in the root directory with the following sample data:
**`db.json`**

```json
{ "jobs": [ { "id": 1, "company": "Company A", "title": "Software Engineer", "about": "Lorem ipsum dolor sit amet...", "address": "123 Elm St, Springfield, IL, 62701" }, { "id": 2, "company": "Company B", "title": "Product Manager", "about": "Lorem ipsum dolor sit amet...", "address": "456 Oak St, Springfield, IL, 62701" } // Add more job entries here ] }
```

### 4. Run JSON Server

```bash
npx json-server --watch db.json --port 3004
```
