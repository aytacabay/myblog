/* -------------------------------------------------------------------------- */
/*                                   Modules                                  */
/* -------------------------------------------------------------------------- */
const {
    controllerBlogGetContentOne,
    middlewareBlogGetContentOne,
    controllerBlogGetContentThree,
    middlewareBlogGetContentThree,
    controllerBlogGetContentAll,
    middlewareBlogGetContentAll,
    controllerBlogSetContent,
    middlewareBlogSetContent,
    controllerCommentSetContent,
    middlewareCommentSetContent,
    controllerContactSetContent,
    middlewareContactSetContent,
    controllerErrorGetContent,
    middlewareErrorGetContent,
    controllerErrorSetContent,
    middlewareErrorSetContent,
} = require("./router-modules");
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

// MongoDB Connect
const mongoSetting = require("./model/db-connect");
mongoSetting(app);

// Cors -- Removed
const cors = require("cors");
app.use(cors());

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ip Address
app.set("trust proxy", true);

// Helmet
let helmet = require('helmet')
app.use(helmet())

// Limeter
const RateLimit = require('express-rate-limit');
const limiter = new RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    delayMs: 0,
    message: "Too many accounts created from this IP, please try again after 15 minute"
});
app.use(limiter);

/* -------------------------------------------------------------------------- */
/*                              ROUTER GET SYSTEM                             */
/* -------------------------------------------------------------------------- */

app.get(
    "/blog-get-content-one/:tag/:seoheader",
    middlewareBlogGetContentOne,
    controllerBlogGetContentOne
);
app.get(
    "/blog-get-content-three",
    middlewareBlogGetContentThree,
    controllerBlogGetContentThree
);
app.get(
    "/blog-get-content-all",
    middlewareBlogGetContentAll,
    controllerBlogGetContentAll
);

app.get(
    "/captured-errors",
    middlewareErrorGetContent,
    controllerErrorGetContent
);

/* -------------------------------------------------------------------------- */
/*                              ROUTER POST SYSTEM                            */
/* -------------------------------------------------------------------------- */

// Post merhods icin body-parser kullan.

app.post(
    "/blog-set-content/",
    middlewareBlogSetContent,
    controllerBlogSetContent
);

app.post(
    "/comment-set-content/",
    middlewareCommentSetContent,
    controllerCommentSetContent
);

app.post(
    "/contact-set-content/",
    middlewareContactSetContent,
    controllerContactSetContent
);

app.post(
    "/captured-errors/",
    middlewareErrorSetContent,
    controllerErrorSetContent
);

/* -------------------------------------------------------------------------- */
/*                              ROUTER ALL SYSTEM                             */
/* -------------------------------------------------------------------------- */

// Bununla server side belirtilen url ler disinda istekte bulunan kisileri yakaliyorum.
app.all("/*", middlewareErrorSetContent, controllerErrorSetContent);

/* -------------------------------------------------------------------------- */
/*                             ExpressJS Listen Func                          */
/* -------------------------------------------------------------------------- */

app.listen(8558, (err) => null);

/* -------------------------------------------------------------------------- */
