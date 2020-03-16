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

```
