# beerDiary

# Live at: https://mybeerdiary.herokuapp.com

This web app will help you track all those different kinds of beers that you drink.  
We have a database of over 5,000 beers.  You can even add beers not in the database.  
Rate them, get all 50 states on our Google Map, and see your beer history.

If you want to run this repo on your own, you will need a couple of additional files.  You will need a googleOAuth2.json from Google oAuth2 credentials service in the routing file folder.  It should look like: 

```
{"web":
{"client_id":"xxx",
"project_id":"xxx",
"auth_uri":"xxx",
"token_uri":"xxx,
"auth_provider_x509_cert_url":"xxx",
"client_secret":"xxx",
"redirect_uris":["https://xxx/oauth2callback"],
"javascript_origins":["https://xxx"]}}
```

You also need a mySQL database.  The connection info is in a file called config.json and is in the config folder.  It should look like: 
```
{
    "host": "xxx",
    "port": 3306,
    "user": "xxx",
    "password": "xxx",
    "database": "xxx"
}
```

If you look in the code, you can also reference process.env variables to get the above connection/credentials.
