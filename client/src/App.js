// import React, {useState, useEffect, lazy, Suspense} from 'react'
import Main from './Main/Main';
import Concerts from './Concerts/Concerts';
import Albums from './Albums/Albums';
import Admin from './Admin/Admin';
import Navigation from './Navigation/Navigation';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import Album from './Album/Album';
import UserStore from './stores/UserStore';
import { useEffect } from 'react';
import Page404 from './Page404/Page404';

function App() {

	useEffect(() => {
        if (localStorage.getItem('token')) {
            UserStore.checkAuth()
        }
    }, [])

	return (
		<Router>
			<Navigation/>
			<Routes>
				<Route 
					path='/'
					// caseSensitive={false}
					element={<Main/>}
				/>
		 		<Route 
					path='/concerts'
					// caseSensitive={false}
					element={<Concerts/>}
				/>
		 		<Route 
					path='/albums'
					// caseSensitive={false} 
					element={<Albums/>}
				/>
				<Route 
				   path='/album/:id'
				   // caseSensitive={false} 
				   element={<Album/>}
			   />
				<Route 
					path='/admin'
					// caseSensitive={false} 
					element={<Admin/>}
				/>
				<Route
					path='*'
					element={<Page404/>}
				/>
			</Routes>
			<Footer/>
		</Router>
	);
}

export default App;
