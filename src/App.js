import './App.css';
import React from 'react';
import {BaseLayout} from "./layouts";
import {Home, MovieDetails} from "./pages";
import {Route, Switch, useHistory,} from "react-router-dom";


export default function App() {
    const history = useHistory();
    return (
        <BaseLayout>
            <Switch>
                <Route path={'/home'} exact>
                    <Home/>
                </Route>
                <Route path={'/movie/:id'}>
                    <MovieDetails/>
                </Route>
                <Route>
                    <h1>Home page</h1>
                    <button onClick={()=>{
                        history.push('/home')
                    }
                    }>Go gome</button>
                </Route>
            </Switch>
        </BaseLayout>
    );
}
