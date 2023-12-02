const https = require('https');

const dataUrl = "https://8ixct1d30f.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/data_r";

https.get(dataUrl, (response) => {
  let data = "";

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    const jsonData = JSON.parse(data);
    const valueHolder = document.getElementById("valueHolder");
    valueHolder.innerHTML = jsonData;
    console.log("Retrieved data:");
    console.log(JSON.stringify(jsonData, null, 4));
  });
}).on('error', (error) => {
  console.log("Error retrieving data:", error.message);
});

// Write command

let valvev;
let switchv;

document.getElementById("submit").onclick = function(){
  valvev = document.getElementById("textv").value;
  switchv = document.getElementById("texts").value;

    console.log(switchv);

    
const writeCommand = () => {
  const https = require('https');

  const url = "https://8ixct1d30f.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/command_w";

  // Get the values from user input or any other source
  const valve1 = "111";
  const switchValue1 = "2222";

  // Create the data object with the updated values
  const data = {
    valve: valvev,
    switch: switchv
  };

  const jsonData = JSON.stringify(data);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': jsonData.length
    }
  };

  const request = https.request(url, options, (response) => {
    let responseBody = '';

    response.on('data', (chunk) => {
      responseBody += chunk;
    });

    response.on('end', () => {
      console.log("Response:", responseBody);
    });
  });

  request.on('error', (error) => {
    console.error("Error:", error.message);
  });

  request.write(jsonData);
  request.end();
};

// Call the writeCommand function to send the command
writeCommand();
}

