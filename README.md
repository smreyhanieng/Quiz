# Quiz

Project One:
http://localhost:4000/ => Store token data in mongodb!!

http://localhost:4000/graphql => Get token data with pairs
Query example:
{
  token(pair: "BTC/USDT") {
    timestamp
    open
    high
    low
    close
    volume
    createdAt
    updatedAt
  }
}

Project Two:
Restore the database that is in the "db" folder, then:
http://localhost:4000/analyst => Show analyst list
