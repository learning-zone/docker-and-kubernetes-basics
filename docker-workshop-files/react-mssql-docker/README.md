# React SQL Server Docker Connectivity

## Run SQL Server on Docker

* [https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-powershell](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-powershell)

## Dockerizing React APP and deploy in Docker-Hub

```js
docker build -t sofyspace/react-mssql-docker:latest .        // Build docker image
docker run -p 3000:3000 sofyspace/react-mssql-docker         // Project will run on local and will map to docker conatiner port 
docker login                                                 // Docker Hub credential
docker push sofyspace/react-mssql-docker                     // Deploy in Docker Hub
```
