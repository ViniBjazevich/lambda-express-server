# How to create a serverless express app:

## Important thing to know:
- Make sure you have your index.js file in the root of your projects directory. If this isn't here the Lambda function will throw an error.
- Make sure you don't use the base route in your express server. HTTP requests to this base route will not be sent to our proxy Lambda.

### Example:
#### Will not work
http://supercoolapigatewayurl.com/stageName

#### Will work
http://supercoolapigatewayurl.com/stageName/todos

## Create Lambda function and API Gateway
1) First create your lambda function. You can upload this code by selecting the content of directory and compressing it. Lambda allows you to take this zip file and upload it.
<img width="500" alt="image" src="https://user-images.githubusercontent.com/49013231/206956927-e444d463-4138-487f-bce5-d5b9117daeae.png">

2) Now you can create your API Gateway. I used the Rest API for this but I'm sure HTTP API would work as well.

3) You need to add a resource on your API Gateway on the root path. Be sure to check the boxes for configure as proxy resource and enable API Gateway CORS. Then you need to link this resource to the lambda function that we created earlier.
<img width="900" alt="image" src="https://user-images.githubusercontent.com/49013231/206956849-6aaa5844-17c9-4d69-9213-7408c259c2c7.png">
<img width="900" alt="image" src="https://user-images.githubusercontent.com/49013231/206956880-14b1ecd5-2052-4b8c-b2f3-3413ec2510b9.png">


4) Now that we finished creating all of our API Gateway changes we need to go and deploy the API so we can test it.
<img width="500" alt="image" src="https://user-images.githubusercontent.com/49013231/206956693-e1685897-72b4-42e5-a563-2959d418c4de.png">

