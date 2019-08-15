import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

export default function Routes() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/admin" component={Admin}></Route>
        </BrowserRouter>
    );
}