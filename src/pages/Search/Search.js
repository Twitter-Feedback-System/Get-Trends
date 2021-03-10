import React, { Component } from 'react'
import Header from '../../components/Header/Header';

const menus = [{text: 'Home', link: 'home'}, {text: 'Search', link: 'search'}, {text: 'Team', link: 'team'}];

export default class Search extends Component {
    render() {
        return (
            <>
            <Header menus={menus} />
            <div>
                Search
            </div>
            </>
        )
    }
}
