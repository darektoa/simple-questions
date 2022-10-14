import './styles/App.css'
import { Route, Routes } from 'react-router-dom';
import Question from './pages/Question';

const App = () => {
    return (
		<main>
			<Routes>
				<Route path="/" element={<Question />} />
				<Route path="/finish" element={<Question.Result />} />
			</Routes>
		</main>
    )
}

export default App
