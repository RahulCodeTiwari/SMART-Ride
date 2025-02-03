# SMART Ride Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body must be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A string that must be a valid email address (required)
- `password`: A string with at least 4 characters (required)

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **201 Created**
  - **Description**: User successfully registered.
  - **Body**:
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation error or missing required fields.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Error message here",
          "param": "field_name",
          "location": "body"
        }
      ]
    }
    ```

#### Status Codes
- `201 Created`: The user was successfully registered.
- `400 Bad Request`: There was a validation error or missing required fields.
