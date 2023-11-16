const axios = require('axios');
require('dotenv').config();

/**
 * Get public repositories 
 * @param {*} githubUser 
 * @returns 
 */
async function getPublicRepositories(githubUser){
    try{
        // Making a GET request to the GitHub API for public repositories of user githubUser
        const response = await axios.get(`https://api.github.com/users/${githubUser}/repos`);
        // Returning the data received from the API
        return response.data;
    }catch(error){
        // Logging any errors that occur during the API request
        console.error('Error:',error)
    }
    
}

/**
 * Get All repositories
 * @returns 
 */
async function getPrivateAndPublicRepositories(){
    try{
        // Making a GET request to the GitHub API for repositories of the authenticated user
        const response = await axios.get('https://api.github.com/user/repos',{
            headers:{
                // Using the Personal Access Token for authentication
                'Authorization':`token ${process.env.GITHUB_ACCESS_TOKEN}`
            }
        });
        // Transforming the data to include only the id, name, and privacy status of each repository
        return response.data.map(d=>{return {id:d.id,name:d.name,private:d.private}});
    }catch(error){
        // Logging any errors that occur during the API request
        console.error('Error:',error);
    }
}

// Self-invoking anonymous async function to execute the API requests
(async()=>{
    // Fetching and logging the public repositories
    console.log(await getPublicRepositories('adanzweig'));
    // Fetching and logging both private and public repositories
    console.log(await getPrivateAndPublicRepositories());
})();