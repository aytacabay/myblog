const {
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
} = require("./router-modules");

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs')

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve('build')))
// Sisteme static path verdikten sonra otomatik olarak o path deki index.html response ediyor. 
// Bunu asmak icin index.html in ismini admin olarak degistirin. 

app.locals.token = {
    id: 'empty'
}

// MongoDB Connect
const mongoSetting = require("./model/db-connect");
mongoSetting(app);


// How to Make ? : Kullanici her get isteginde login page i response olarak alicak. Eger kullanici login page de login islemi yaparak ve dogru username ve password u girer ise server side da yani bu index page de hemen bir app.locals.token.id diye bir token olusturulur ve bu token client side in login page i ne giris isleminin response u olarak gonderilir ve client side da sessionstorage olarak yerlestirilir. Sonra client side dan get istegi yapilir ancak bu session a sakladigimiz token da bu get istegi ile gonderirilir ve server side da client dan gelen token ile bir match islemi yapilir islem eger true ise admin page response olarak dondurulur. Degil ise login page dondurulur. 

app.post('/login', (req, res) => {
    if (req.body.username === 'lostking' && req.body.password === '@golF90@') {
        app.locals.token.id = (Math.round((Math.random() * 1000) + 200)).toString();
        res.json({ status: true, token: app.locals.token.id })
    } else {
        res.json({ status: false })
    }
});

app.post('/exit', (req, res) => {
    app.locals.token = {
        id: 'empty'
    }
    res.json({ exit: 'EVET' })
});

app.get('/*/favicon.ico', (req, res) => {
    res.send('');
});


//
// ──────────────────────────────────────────────────────────
//   :::::: D E D E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────
//

app.get(
    "/contact-get-content",
    middlewareContactGetContent,
    controllerContactGetContent
);

app.get(
    "/admin-comment-get-all",
    middlewareAdminCommentGetAll,
    controlAdminCommentGetAll
);

app.get(
    "/admin-get-todolist",
    middlewareAdminGetTodoList,
    controllerAdminGetTodolist
);

app.get(
    "/admin-get-projects",
    middlewareAdminGetProjects,
    controllerAdminGetProjects
);

app.post(
    "/admin-comment-set-rule-change/",
    middlewareAdminCommentSetRuleChange,
    controlAdminCommentSetRuleChange
);

app.post(
    "/admin-set-todolist/",
    middlewareAdminSetTodoList,
    controllerAdminSetTodolist
);

app.post(
    "/admin-set-projects/",
    middlewareAdminSetProjects,
    controllerAdminSetProjects
);

app.post(
    "/admin-contact-set-rule-change/",
    middlewareAdminContactSetRuleChange,
    controlAdminContactSetRuleChange
);

app.post(
    "/admin-userdata-set-rule-change/",
    middlewareAdminUserDataSetRule,
    controllerAdminUserDataSetRule
);

app.get(
    "/captured-errors",
    middlewareErrorGetContent,
    controllerErrorGetContent
);





app.get('/*', (req, res) => {

    if (req.params[0].split('/')[1] === app.locals.token.id) {

        fs.readFile('./build/admin.html', (err, data) => {
            let payloadData = data.toString();
            payloadData += `<script>let x = 'DEDE'</script>`
            res.send(payloadData);
        });

    } else {

        fs.readFile('./login.html', (err, data) => {
            let payloadData = data.toString();
            payloadData += `<script>let x = 'DEDE'</script>`
            res.send(payloadData);
        });

    }
});
















app.listen(9000);