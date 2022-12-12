# How to create a serverless express app:

## Create Lambda function and API Gateway
1) First create your lambda function. You can upload this code by selecting the content of directory and compressing it. Lambda allows you to take this zip file and upload it.

2) Now you can create your API Gateway. I used the Rest API for this but I'm sure HTTP API would work as well.

3) You need to add a resource on your API Gateway on the root path. Be sure to check the boxes for configure as proxy resource and enable API Gateway CORS. Then you need to link this resource to the lambda function that we created earlier.

4) Now that we finished creating all of our API Gateway changes we need to go and deploy the API so we can test it.