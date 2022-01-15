import React, {useState, useEffect, lazy, Suspense} from 'react'
import Main from './Main/Main';
import Concerts from './Concerts/Concerts';
import Albums from './Albums/Albums';
import Navigation from './Navigation/Navigation';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
	return (
		// "хуй"
		// <Router>
			<Navigation/>

		// 	<Routes>
		// 		<Route exact path='/' caseSensitive={false} element={Main} />
		// 		<Route exact path='/concerts' caseSensitive={false} element={Concerts} />
		// 		<Route exact path='/albums' caseSensitive={false} element={Albums} />
		// 	</Routes>
		// </Router>
	);
}

export default App;
