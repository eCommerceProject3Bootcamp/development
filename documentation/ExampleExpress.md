# Creating new API Routes for use in our app =>

So, in examples of my front end React code, you may see something along the lines of:

    axios.get(http://localhost:3001/api/products/).then(...)

This is essentially just contacting Express at that location -- how did we set that up?

So the first step is we need to look in our `./routes` folder. Here we have a `./api` folder, and a `index.js`. Lets take a look at index.js first.

### `./routes/index.js`

```
const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

module.exports = router;
```

We see that `apiRoutes` is simply a variable that is getting something from the ./api folder -- then the router is using it under `/api`. This is where we get the `/api` portion of the `http://localhost/api/` string.

Inside of the folder ./api, we see there is another index.js. Lets take a look at that.

### `./routes/api/index.js`

```
const router = require('express').Router();
const uploadRoutes = require('./uploadRoutes.js');

// Matches with /api
router.use('/products', uploadRoutes);

module.exports = router;
```

Here we see that uploadRoutes is a javascript file, and that again, router is going to use it, under `/prouducts`. We are now looking at the api that will match `http://localhost:3001/api/products/`

In this file, we could assign other things to match as well. We could have something like `router.use('/users', userRoutes);`, which would match to `http://localhost:3001/api/users/`

### `./routes/api/uploadRoutes.js`

```
const router = require('express').Router();
const productsController = require('../../controllers/productsController');

// Matches with "/api/products"

router.route('/').get(productsController.findAll);
router.route('/pictures').get(productsController.pictures);
router.route('/upload').post(productsController.upload);
// router.route('/delete').delete();
// router.route('/update').put();

module.exports = router;
```

Here is where we define the actual "functionality" of these API paths. As you can see, this is the final portion of our API string.
`http://localhost:3001/api/products/upload`, has a POST listener, so if I try to `axios.post('http://localhost:3001/api/products/upload')`, I can expect it to actually DO something. What is that something? It is defined in another section of our code, in `controllers`. That part is generally going to be database stuff, Sequelize. I encourage you to look at that yourself, as we'd be opening a whole new can of worms with that. This is simply Express, so far.These functions can do anything you want, as long as they are in THIS format!

```
module.exports = {
    someFunction: function(req, res) {
        res.send("This is a string that is going to be sent when this API is called. Req / res are neccessary, because express will use them.");
    }
}
```
