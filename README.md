This API allows users to manage product information. It provides endpoints to add, delete, and retrieve product details.

Endpoints:
1. POST /product:
   - Description: Adds a new product to the database.
   - Parameters: 
     - productName: Name of the product (required).
     - productDescription: Description of the product (required).
     - productPrice: Price of the product (required).
   - Response:
     - If successful, returns the newly added product details.
     - If any required fields are missing, returns a 400 Bad Request error.

2. DELETE /product/:id:
   - Description: Deletes a product from the database based on its ID.
   - Parameters: 
     - id: ID of the product to be deleted (required).
   - Response:
     - If successful, returns a 204 No Content status code.
     - If the product with the specified ID is not found, returns a 404 Not Found error.

3. GET /products:
   - Description: Retrieves all products stored in the database.
   - Response:
     - Returns an array containing details of all products.
