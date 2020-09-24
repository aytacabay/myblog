/* -------------------------------------------------------------------------- */
/*                          Controllers - Middlewares                         */
/* -------------------------------------------------------------------------- */

// Blog request
const controllerBlogGetContentOne = require('./controllers/controller-blog-get-content-one')
const middlewareBlogGetContentOne = require('./middlewares/middleware-blog-get-content-one')

const controllerBlogGetContentThree = require('./controllers/controller-blog-get-content-three')
const middlewareBlogGetContentThree = require('./middlewares/middleware-blog-get-content-three')

const controllerBlogGetContentAll = require('./controllers/controller-blog-get-content-all')
const middlewareBlogGetContentAll = require('./middlewares/middleware-blog-get-content-all')

const controllerBlogSetContent = require('./controllers/controller-blog-set-content')
const middlewareBlogSetContent = require('./middlewares/middleware-blog-set-content')


/* -------------------------------------------------------------------------- */

// Comment Only Set request

const controllerCommentSetContent = require('./controllers/controller-comment-set-content')
const middlewareCommentSetContent = require('./middlewares/middleware-comment-set-content')

/* -------------------------------------------------------------------------- */

// Contact request

const controllerContactSetContent = require('./controllers/controller-contact-set-content')
const middlewareContactSetContent = require('./middlewares/middleware-contact-set-content')


/* -------------------------------------------------------------------------- */


// Error Handling
const controllerErrorGetContent = require('./controllers/controller-error-get-content')
const middlewareErrorGetContent = require('./middlewares/middleware-error-get-content')

const controllerErrorSetContent = require('./controllers/controller-error-set-content')
const middlewareErrorSetContent = require('./middlewares/middleware-error-set-content')

module.exports = {
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
}