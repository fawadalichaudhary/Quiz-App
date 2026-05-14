import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import AddQuestionPage from "./pages/AddQuestionPage"
import QuizPage from "./pages/QuizPage"
import ResultsPage from "./pages/ResultsPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addquestions" element={<AddQuestionPage />} />
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/resultspage" element={<ResultsPage />} />
      </Routes>
    </>
  )
}

export default App
