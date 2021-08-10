import React from 'react';
import ProjectList from '../../components/ProjectList';
import SearchBar from '../../components/SearchBar';

function Home(){

    return (
        <div>
            <SearchBar />
            <ProjectList />
        </div>
    );

}

export default Home;