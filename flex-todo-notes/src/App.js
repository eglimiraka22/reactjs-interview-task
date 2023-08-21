import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Todo from './components/categories/Todo';
function App() {
	return (
		<Provider store={store}>
			<React.Fragment>
				<Todo />
			</React.Fragment>
		</Provider>
	);
}

export default App;
