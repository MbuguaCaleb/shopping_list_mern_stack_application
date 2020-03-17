**Javascript and Callbacks**

```
Everytime you execute a function in javascript...one of the greatest strengths is that you
may define a callback.

   newUser.save().then(user => {
          res.json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        });


This callback returns a success or failure based on the result of the first function.

It means you are expecting a promise (something)  from the results of the first function....



```

```
if (err) throw err;

Stops the executionof the code immediately we do find an error.


```

**JWT COMMANDS**

```
(a)npm i jsonwebtoken

(b)config file

Creating a config file is an alternative way of encrypting your sensitive information.
It works almost similarly to the .env

(c)jwt.sign() is asynchronous

Token can be decoded online in jwt.io or by usigning and you may see its three separate parts.

This is exactly the same process that happens during unsigning of the token.
```

```

From the token id sign you can therefore finf the details of the user once the token has been passed.

This is because of the ID which is the user payload that is normally embedded into the token

```
