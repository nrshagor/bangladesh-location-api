# Bangladesh Location API

This API provides location data for Bangladesh, including divisions, districts, and thanas (sub-districts). Users can retrieve data by querying the relevant endpoints.

## Endpoints

### Get All Divisions

- **URL:** `http://localhost:3000/divisions`
- **Method:** `GET`
- **Description:** Retrieve a list of all divisions in Bangladesh.
- **Response:**
  ```json
  [
      {
          "id": 1,
          "name_bn": "ঢাকা",
          "name_en": "Dhaka",
          "created_at": "2024-06-24T18:46:06.522Z",
          "updated_at": "2024-06-24T18:46:06.522Z"
      },
      ...
  ]
  ```

### Get Division by Name

- **URL:** `http://localhost:3000/divisions/{name}`
- **Method:** `GET`
- **Description:** Retrieve a division by its name in either Bengali or English.
- **Example:**
  - `http://localhost:3000/divisions/ঢাকা`
  - `http://localhost:3000/divisions/dhaka`
- **Response:**
  ```json
  {
    "id": 1,
    "name_bn": "ঢাকা",
    "name_en": "Dhaka",
    "created_at": "2024-06-24T18:46:06.522Z",
    "updated_at": "2024-06-24T18:46:06.522Z"
  }
  ```

### Get All Districts

- **URL:** `http://localhost:3000/districts`
- **Method:** `GET`
- **Description:** Retrieve a list of all districts in Bangladesh.
- **Response:**
  ```json
  [
      {
          "id": 1,
          "name_bn": "ঢাকা জেলা",
          "name_en": "Dhaka District",
          "division_id": 1,
          "created_at": "2024-06-24T18:46:06.522Z",
          "updated_at": "2024-06-24T18:46:06.522Z"
      },
      ...
  ]
  ```

### Get District by Name

- **URL:** `http://localhost:3000/districts/{name}`
- **Method:** `GET`
- **Description:** Retrieve a district by its name in either Bengali or English.
- **Example:**
  - `http://localhost:3000/districts/ঢাকা জেলা`
  - `http://localhost:3000/districts/dhaka-district`
- **Response:**
  ```json
  {
    "id": 1,
    "name_bn": "ঢাকা জেলা",
    "name_en": "Dhaka District",
    "division_id": 1,
    "created_at": "2024-06-24T18:46:06.522Z",
    "updated_at": "2024-06-24T18:46:06.522Z"
  }
  ```

### Get All Thanas

- **URL:** `http://localhost:3000/thana`
- **Method:** `GET`
- **Description:** Retrieve a list of all thanas in Bangladesh.
- **Response:**
  ```json
  [
      {
          "id": 1,
          "name_bn": "ঢাকা থানা",
          "name_en": "Dhaka Thana",
          "district_id": 1,
          "created_at": "2024-06-24T18:46:06.522Z",
          "updated_at": "2024-06-24T18:46:06.522Z"
      },
      ...
  ]
  ```

### Get Thana by Name

- **URL:** `http://localhost:3000/thana/{name}`
- **Method:** `GET`
- **Description:** Retrieve a thana by its name in either Bengali or English.
- **Example:**
  - `http://localhost:3000/thana/ঢাকা থানা`
  - `http://localhost:3000/thana/dhaka-thana`
- **Response:**
  ```json
  {
    "id": 1,
    "name_bn": "ঢাকা থানা",
    "name_en": "Dhaka Thana",
    "district_id": 1,
    "created_at": "2024-06-24T18:46:06.522Z",
    "updated_at": "2024-06-24T18:46:06.522Z"
  }
  ```

The API will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License.
