const https = require('https');

const url = "https://8ixct1d30f.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/data_r";

https.get(url, (response) => {
  let data = "";

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    const jsonData = JSON.parse(data);
    console.log("Retrieved data:");
    console.log(JSON.stringify(jsonData, null, 4));
  });
}).on('error', (error) => {
  console.log("Error retrieving data:", error.message);
});