import React, { Fragment } from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Users from '../../models/Users';

const Context = React.createContext({
    isLoading: false,
    users: null,
    user: null,
    repos: null,
    repo: null,
    getUsers: () => Users.getUsers(),
    getUser: (userId) => Users.getUser(userId),
    getRepos: (userId) => Repos.getRepos(userId),
    getRepo: (userId, repoId) => Repos.getRepo(userId, repoId)
})

const Container = () => {
    return (
        <Context.Provider>
            <Context.Consumer>

                {props => (
                    <Fragment>
                        <Header {...props}/>
                        <Main {...props} />
                    </Fragment>
                )}
                
            </Context.Consumer>
            <Footer />
        </Context.Provider>
    )
}

export default Container;
