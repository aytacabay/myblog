import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";

import Comment from './comment/comment'
import ContentData from './contentdata/contentdata'
import Contact from './contact/contact'
import Projects from './projects/projects'
import Error from './error/error'
import Home from './todolist/home'
import Exit from './exit/exit'
import Notfound404 from './notfound404/notfound404'

export default function SwitchComp() {
    return (
        <Switch>
            <Route path="/todolist/:id">
                <Home />
            </Route>
            <Route path="/contentdata/:id">
                <ContentData />
            </Route>
            <Route path="/comments/:id">
                <Comment />
            </Route>
            <Route path="/contacts/:id">
                <Contact />
            </Route>
            <Route path="/projects/:id">
                <Projects />
            </Route>
            <Route path="/exit/:id">
                <Exit />
            </Route>
            <Route path="/errors/:id">
                <Error />
            </Route>
            <Route path="/:url*">
                <Notfound404 />
            </Route>
        </Switch>
    )
}
