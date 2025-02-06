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


### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body must be a JSON object with the following properties:
- `email`: A string that must be a valid email address (required)
- `password`: A string with at least 4 characters (required)

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
 **Description**: User successfully logged in.
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

- **401 Unauthorized**
  - **Description**: Invalid email or password.
  - **Body**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

#### Status Codes
- `200 OK`: The user was successfully logged in.
- `400 Bad Request`: There was a validation error or missing required fields.
- `401 Unauthorized`: Invalid email or password.

### GET /users/profile

#### Description
This endpoint is used to get the profile of the logged-in user.

#### Request Headers
- `Authorization`: Bearer token (required)

#### Example Request
```
GET /users/profile
Authorization: Bearer jwt_token_here
```

#### Responses

- **200 OK**
  - **Description**: User profile retrieved successfully.
  - **Body**:
   ```json
    {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**
  - **Description**: Unauthorized access.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```#### Status Codes
- `200 OK`: The user profile was successfully retrieved.
- `401 Unauthorized`: Unauthorized access.

### GET /users/logout

#### Description
This endpoint is used to log out the logged-in user.

#### Request Headers
- `Authorization`: Bearer token (required)

#### Example Request
```
GET /users/logout
Authorization: Bearer jwt_token_here
```

#### Responses

- **200 OK**
  - **Description**: User successfully logged out.
  - **Body**:
   ```json
    {
      "message": "Logged out successfully"
    }
    ```

- **401 Unauthorized**
  - **Description**: Unauthorized access.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Status Codes
- `200 OK`: The user was successfully logged out.
- `401 Unauthorized`: Unauthorized access.

### POST /captains/register

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body must be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (required)
- `email`: A string that must be a valid email address (required)
- `password`: A string with at least 4 characters (required)
- `vehicle`: An object containing:
  - `color`: A string with at least 3 characters (required)
  - `plate`: A string with at least 3 characters (required)
  - `capacity`: A number (required)
  - `vehicleType`: A string that must be one of ['car', 'motorcycle', 'auto'] (required)

#### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses
- **201 Created**
  - **Description**: Captain successfully registered.
  - **Body**:
    ```json
    {
      "token": "jwt_token_here",
      "captain": {
        "_id": "captain_id_here",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "XYZ123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
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
- `201 Created`: The captain was successfully registered.
- `400 Bad Request`: There was a validation error or missing required fields.


### POST /captains/register

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body must be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (required)
- `email`: A string that must be a valid email address (required)
- `password`: A string with at least 6 characters (required)
- `vehicle`: An object containing:
  - `color`: A string with at least 3 characters (required)
  - `plate`: A string with at least 3 characters (required)
  - `capacity`: A number (required)
  - `vehicleType`: A string that must be one of ['car', 'motorcycle', 'auto'] (required)

#### Example Request
```json
{
  "fullname": {
      "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses

- **201 Created**
  - **Description**: Captain successfully registered.
  - **Body**:
    ```json
    {
      "token": "jwt_token_here",
        "captain": {
        "_id": "captain_id_here",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "XYZ123",
          "capacity": 4,
          "vehicleType": "car"
        }
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
- `201 Created`: The captain was successfully registered.
- `400 Bad Request`: There was a validation error or missing required fields.

### POST /captains/login

#### Description
This endpoint is used to log in an existing captain.

#### Request Body
The request body must be a JSON object with the following properties:
- `email`: A string that must be a valid email address (required)
- `password`: A string with at least 6 characters (required)

#### Example Request
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
  - **Description**: Captain successfully logged in.
  - **Body**:
    ```json
    {
      "token": "jwt_token_here",
      "captain": {
        "_id": "captain_id_here",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
           "email": "jane.doe@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "XYZ123",
          "capacity": 4,
          "vehicleType": "car"
        }
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
      
- **401 Unauthorized**
  - **Description**: Invalid email or password.
  - **Body**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

#### Status Codes
- `200 OK`: The captain was successfully logged in.
- `400 Bad Request`: There was a validation error or missing required fields.
- `401 Unauthorized`: Invalid email or password.

### GET /captains/profile

#### Description
This endpoint is used to get the profile of the logged-in captain.

#### Request Headers
- `Authorization`: Bearer token (required)

#### Example Request
```
GET /captains/profile
Authorization: Bearer jwt_token_here
```

#### Responses

- **200 OK**
  - **Description**: Captain profile retrieved successfully.
  - **Body**:
    ```json
    {
      "captain": {
        "_id": "captain_id_here",
          "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "XYZ123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Unauthorized access.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```
    #### Status Codes
- `200 OK`: The captain profile was successfully retrieved.
- `401 Unauthorized`: Unauthorized access.

### GET /captains/logout

#### Description
This endpoint is used to log out the logged-in captain.

#### Request Headers
- `Authorization`: Bearer token (required)

#### Example Request
```
GET /captains/logout
Authorization: Bearer jwt_token_here
```

#### Responses

- **200 OK**
  - **Description**: Captain successfully logged out.
   - **Body**:
    ```json
    {
      "message": "Logout successfully"
    }
    ```

- **401 Unauthorized**
  - **Description**: Unauthorized access.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Status Codes
- `200 OK`: The captain was successfully logged out.
- `401 Unauthorized`: Unauthorized access.