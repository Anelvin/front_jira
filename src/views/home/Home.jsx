import React from 'react';
import PrimarySearchAppBar from '../../components/AppBar';
import ProjectList from '../../components/ProjectList';
import SearchBar from '../../components/SearchBar';

function Home(){

    return (
        <div>
            <PrimarySearchAppBar />
            <SearchBar />
            <ProjectList />
        </div>
    );

}

export default Home;