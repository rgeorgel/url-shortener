## Rest API

### Create
#### POST /
create a new URL based on originalUrl

#### Request
```
{
  "originalUrl": "https://www.google.com/search?q=some+long+url+to+search+on+google"
}
```
#### Response
```
{
  "status": true,
  "data": {
    "shortURLId": "0b354e7c-3d7a-4a42-94ea-135e7d20cd7d",
    "code": "Aq13abq3",
    "originalUrl": "https://www.google.com/search?q=some+long+url+to+search+on+google",
    "url": "http://localhost:3030/"
  }
}
```

<br />

### Update
#### PUT /
update an existent URL based on `originalUrl`, `shortURLId` and `code`

#### Request
```
{
  "originalUrl": "https://www.google.com/search?q=some+long+url+to+search+on+google+2",
  "shortUrlId": "0b354e7c-3d7a-4a42-94ea-135e7d20cd7d",
  "code": "Aq13abq3"
}
```
#### Response
```
{
  "status": true,
  "data": {
    "shortURLId": "0b354e7c-3d7a-4a42-94ea-135e7d20cd7d",
    "code": "Aq13abq3",
    "originalUrl": "https://www.google.com/search?q=some+long+url+to+search+on+google+2",
    "url": "http://localhost:3030/"
  }
}
```

<br />

### Open URL
#### GET /{CODE}
Open the originalUrl based on code
#### Request
```
GET http://localhost:3030/Aq13abq3
```
#### Response
```
It render the originalUrl
```

<br />

### Health
#### GET /health
Get the health check of the application with the status of the `API`, `DB` and `application version`

#### Request
```
GET http://localhost:3030/health
```
#### Response
```
{
  status: true,
  data: {
    api: true,
    database: true,
    version: "1.0.0"
  }
}
```

