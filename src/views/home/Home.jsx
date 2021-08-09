import React from 'react';
import PrimarySearchAppBar from '../../components/AppBar';
import TemporaryDrawer from '../../components/SideBar';

function Home(){

    return (
        <div>
            <PrimarySearchAppBar />
            <TemporaryDrawer test={true} />
        </div>
    );

}

export default Home;