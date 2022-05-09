# URL Shortener
In this service, the user is able to generate a short URL based on a long URL e.g.

**Long URL:** `https://www.google.com/search?q=some+long+url+to+search+on+google`
**Short URL:** `http://localhost:3030/Aq13abq3`

when the user access the short URL needs to be redirected to the original link

## Setup
### Local setup
pre-requirement: had yarn installed in the machine. recomend to install the [YVM](https://yvm.js.org/docs/overview "YVM")

- Create the file .env (based on te file .env.example)
- Run the command
`docker-compose up -d`
** The first execution maybe can take some time. When the container is initialized, the dependencies will be downloaded

### To check if the container is ready
`docker-compose ps`

### To check the container logs
`docker-compose logs -f --tail=50 url_shortener`

### To run tests
`yarn test`

## End-points
In this project you will be able to:
### GraphQL
`http://localhost:3030/api/graphql`
  - [Get by id](docs/graphQL.md#Get-by-id) (Get the shortURL by id)
  - [Get by code](docs/graphQL.md#Get-by-code) (Get the shortURL by short code)
  - [Create](docs/graphQL.md#Create) (Create a new shortURL)
  - [Update](docs/graphQL.md#Update) (Update an existent shortURL)

### Rest
`http://localhost:3030/swagger/`
  - [Create](docs/restAPI.md#Create) (Create a new shortURL)
  - [Update](docs/restAPI.md#Update) (Update an existent shortURL)
  - [Open URL](docs/restAPI.md#Open-URL) (Redirect the user to the original URL)
  - [Health](docs/restAPI.md#Health) (Get health check of the application)

