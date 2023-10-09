const axios = require('axios');

exports.handler = async (event) => {
  const { keyword } = event.queryStringParameters;
  const apiEndpoint = 'https://wgpof7ajyf.execute-api.us-east-2.amazonaws.com/test';

  try {
    const response = await axios.get(`${apiEndpoint}?keyword=${keyword}`);

    const responseBody = {
      message: response.data,
    };

    const responseHeaders = {
      'Content-Type': 'application/json',
    };

    const statusCode = 200;

    const responseObj = {
      statusCode,
      headers: responseHeaders,
      body: JSON.stringify(responseBody),
    };

    return responseObj;
  } catch (error) {
    const errorMessage = 'Error making external API request';
    
    const responseObj = {
      statusCode: 500, 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: errorMessage }),
    };

    return responseObj;
  }
};