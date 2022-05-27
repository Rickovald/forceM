// import React, {useState, useEffect, lazy, Suspense} from 'react'
import Main from './Main/Main';
import Concerts from './Concerts/Concerts';
import Albums from './Albums/Albums';
import Admin from './Admin/Admin';
import Navigation from './Navigation/Navigation';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import Album from './Album/Album';

function App() {
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
					path='/contact'
					// caseSensitive={false}
					element={<Contacts/>}
				/>
			</Routes>
			<Footer/>
		</Router>
	);
}

export default App;
