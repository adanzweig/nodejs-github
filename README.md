# GitHub Repositories Fetcher

## Description
This Node.js application fetches and displays both public and private GitHub repositories. It uses the GitHub API to fetch public repositories for a specified user and private repositories for the authenticated user.

## Installation
1. Ensure you have Node.js installed on your system. If not, download and install it from [Node.js website](https://nodejs.org/).
2. Clone this repository or download the source code.
3. Navigate to the project directory and run the following command to install dependencies:
   ```bash
   npm install
   ```

## Configuration
Create a `.env` file in the project root and add your GitHub Personal Access Token:
```
GITHUB_ACCESS_TOKEN=your_access_token_here
```
Replace `your_access_token_here` with your actual GitHub personal access token.

## Usage
Run the application using the following command:
```bash
node index.js
```
This will output the list of public repositories for the specified user and private repositories for the authenticated user.

## Notes
- The script `index.js` fetches public repositories for the user `adanzweig`. You can modify this to fetch repositories for any other user by changing the username in the `getPublicRepositories` function.
- Ensure you do not share your personal access token publicly. Store it securely and use environment variables as shown in this application.