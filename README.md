# 🏈 NFL Public API

A RESTful API providing structured data for all NFL teams, conferences, and stadiums. Built with Node.js, Express, and MongoDB.

---

## 🚀 Base URL

```
http://localhost:3000/api/v1
```

---

## 📦 Endpoints

### 🏈 Get All Teams

```
GET /teams
```

#### Query Parameters (Optional)

| Parameter  | Description                    | Example           |
| ---------- | ------------------------------ | ----------------- |
| search     | Search by team name or city    | `?search=pack`    |
| city       | Filter by city                 | `?city=Green Bay` |
| division   | Filter by division             | `?division=North` |
| conference | Filter by conference (AFC/NFC) | `?conference=AFC` |
| sort       | Sort results                   | `?sort=name`      |
|            |                                | `?sort=-founded`  |

---

### 🔍 Examples

```
/teams?search=green
/teams?conference=AFC&division=North
/teams?sort=-founded
```

---

### 🏈 Get Team by ID

```
GET /teams/:id
```

#### Example

```
/teams/65f8c1e...
```

---

### 🏟 Get All Stadiums

```
GET /stadiums
```

---

## 📊 Response Example

```json
{
  "name": "Green Bay Packers",
  "city": "Green Bay",
  "founded": 1919,
  "championship": [1966, 1967, 2010],
  "division": "North",
  "stadium": {
    "name": "Lambeau Field",
    "city": "Green Bay"
  },
  "conference": {
    "name": "National Football Conference",
    "abbreviation": "NFC"
  }
}
```

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

## 📌 Features

* RESTful API design
* Filtering, searching, and sorting
* Relational data with MongoDB (populate)
* Clean and scalable architecture

---

## 📈 Future Improvements

* Pagination
* Authentication (admin routes)
* Swagger API documentation
* Deployment (Render)

---

## 👨‍💻 Author

Leo Crixi
