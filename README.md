# Quiz

### Project One

* http://localhost:4000/ => Store token data in mongodb!!

* http://localhost:4000/graphql => Get token data

Query example:
```
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
  
  token(pair: "BNB/BTC") {
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
```

### Project Two
_Restore the database that is in the "db" folder:_
after => http://localhost:4000/analyst => Show analyst list

### Project Three
Unit test script in test folder (Packages: Mocha, Chai)

</br>

_Source code lint with ESLinter_
