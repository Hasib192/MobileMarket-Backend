
# Project Title

The backend part of the MobileMarket e-commerce

## Important Links

Template(HTML, CSS): https://github.com/Hasib192/MobileMarket-Template

Frontend(ReactJS): https://github.com/Hasib192/MobileMarket-Frontend

Backend(expressJS, nodeJS): https://github.com/Hasib192/MobileMarket-Backend
## Run Locally

Clone the project

```bash
  git clone https://github.com/Hasib192/MobileMarket-Backend.git
```

Go to the project directory

```bash
  cd MobileMarket-Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
## API Reference

### User API

#### Register a New User

```http
  POST /api/v1/register
```

Creates a new user account.

#### User Login

```http
  POST /api/v1/login
```

Logs in a user and returns a token.

### Product API

#### Create a New Product

```http
  POST /api/v1/product/create
```

Creates a new product in the system.

#### Get All Products

```http
  GET /api/v1/product/list
```

Retrieves a list of all products.

---

### Cart API

#### Add an Item to the Cart

```http
  POST /api/v1/cart/add
```

Adds an item to the user's cart. Requires authentication.

#### Get All Cart Items

```http
  GET /api/v1/cart/list
```

Retrieves all items in the user's cart. Requires authentication.

#### Remove an Item from the Cart

```http
  GET /api/v1/cart/remove/${id}
```

Removes a specific item from the cart. Requires authentication.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the cart item to remove |

