/* -------------------------------------------------------------------------- */
/*                          Controllers - Middlewares                         */
/* -------------------------------------------------------------------------- */


// Comment Only Set request

const controlAdminCommentGetAll = require('./controllers/controller-admin-comment-get-all')
const middlewareAdminCommentGetAll = require('./middlewares/middleware-admin-comment-get-all')

const controlAdminCommentSetRuleChange = require('./controllers/controller-admin-comment-set-rule-change')
const middlewareAdminCommentSetRuleChange = require('./middlewares/middleware-admin-comment-set-rule-change')

/* -------------------------------------------------------------------------- */

// Contact request

const controllerContactGetContent = require('../admin-side/controllers/controller-contact-get-content')
const middlewareContactGetContent = require('../admin-side/middlewares/middleware-contact-get-content')

const controlAdminContactSetRuleChange = require('./controllers/controller-admin-contact-set-rule-change')
const middlewareAdminContactSetRuleChange = require('./middlewares/middleware-admin-contact-set-rule-change')

/* -------------------------------------------------------------------------- */

// Admin UserData
const controllerAdminUserDataSetRule = require('./controllers/controller-admin-userdata-set-rule-change')
const middlewareAdminUserDataSetRule = require('./middlewares/middleware-admin-userdata-set-rule-change')

const controllerAdminGetTodolist = require('./controllers/controller-admin-get-todolist')
const middlewareAdminGetTodoList = require('./middlewares/middleware-admin-get-todolist')


const controllerAdminSetTodolist = require('./controllers/controller-admin-set-todolist')
const middlewareAdminSetTodoList = require('./middlewares/middleware-admin-set-todolist')

const controllerAdminSetProjects = require('./controllers/controller-admin-set-projects')
const middlewareAdminSetProjects = require('./middlewares/middleware-admin-set-projects')

const controllerAdminGetProjects = require('./controllers/controller-admin-get-projects')
const middlewareAdminGetProjects = require('./middlewares/middleware-admin-get-projects')

/* -------------------------------------------------------------------------- */


// Error Handling
const controllerErrorGetContent = require('./controllers/controller-error-get-content')
const middlewareErrorGetContent = require('./middlewares/middleware-error-get-content')


module.exports = {
    controllerErrorGetContent,
    middlewareErrorGetContent,
    controlAdminCommentGetAll,
    middlewareAdminCommentGetAll,
    controlAdminCommentSetRuleChange,
    middlewareAdminCommentSetRuleChange,
    controllerContactGetContent,
    middlewareContactGetContent,
    controlAdminContactSetRuleChange,
    middlewareAdminContactSetRuleChange,
    controllerAdminUserDataSetRule,
    middlewareAdminUserDataSetRule,
    controllerAdminGetTodolist,
    middlewareAdminGetTodoList,
    controllerAdminSetTodolist,
    middlewareAdminSetTodoList,
    controllerAdminSetProjects,
    middlewareAdminSetProjects,
    controllerAdminGetProjects,
    middlewareAdminGetProjects
}