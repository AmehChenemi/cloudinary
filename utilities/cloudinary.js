const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
    cloudName:process.env.cloud_name,
    apiKey: process.env.api_key,
    apiSecret:process.env.api_secret

});