## GraphQL
GraphQL address: `http://localhost:3030/api/graphql`

### Get by id
Return an object representing the shorted URL based on ID
#### Request
```sh
query {
  getShortUrlById(
    shortUrlId: "0b354e7c-3d7a-4a42-94ea-135e7d20cd7d"
  ){
    shortUrlId
    code
    originalUrl
    url
  }
}
```
#### Response
```sh
{
  "data": {
    "getShortUrlById": {
      "shortUrlId": "0b354e7c-3d7a-4a42-94ea-135e7d20cd7d",
      "code": "Aq13abq3",
      "originalUrl": "https://www.google.com/search?q=some+long+url+to+search+on+google",
      "url": "http://localhost:3030/"
    }
  }
}
```


### Get by code
Return an object representing the shorted URL based on Code
#### Request
```sh
query {
  getShortUrlByCode(
    code: "Aq13abq3"
  ){
    shortUrlId
    code
    originalUrl
    url
  }
}
```
#### Response
```sh
{
  "data": {
    "getShortUrlByCode": {
      "shortUrlId": "0b354e7c-3d7a-4a42-94ea-135e7d20cd7d",
      "code": "Aq13abq3",
      "originalUrl": "https://www.google.com/search?q=some+long+url+to+search+on+google",
      "url": "http://localhost:3030/",
    }
  }
}
```


### Create
#### Request
```sh
mutation{
  createShortUrl(
    originalUrl: "https://www.google.com/search?q=some+long+url+to+search+on+google"
  ){
    shortUrlId
    code
    originalUrl
    url
  }
}
```
#### Response
```sh
{
  "data": {
    "createShortUrl": {
      "shortUrlId": "0b354e7c-3d7a-4a42-94ea-135e7d20cd7d",
      "code": "Aq13abq3",
      "originalUrl": "https://www.google.com/search?q=some+long+url+to+search+on+google",
      "url": "http://localhost:3030/",
    }
  }
}
```


### Update
#### Request
```sh
mutation{
  updateShortUrl(
    shortUrlId: "0b354e7c-3d7a-4a42-94ea-135e7d20cd7d"
    code: "Aq13abq3"
    originalUrl: "https://www.google.com/search?q=some+long+url+to+search+on+google+3"
  ){
    shortUrlId
    code
    originalUrl
    url
  }
}
```
#### Response
```sh
{
  "data": {
    "updateShortUrl": {
      "shortUrlId": "cc0016df-3b00-4409-b112-d34b0ca368a1",
      "code": "WRKAhZPK",
      "originalUrl": "https://www.google.com/search?q=some+long+url+to+search+on+google+3",
      "url": "http://localhost:3030/",
    }
  }
}
```
