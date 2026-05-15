import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainPage from "./pages/MainPage"
import AddQuestionPage from "./pages/AddQuestionPage"
import QuizPage from "./pages/QuizPage"
import ResultsPage from "./pages/ResultsPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      Component: MainPage

    },
    {
      path: "/addquestions",
      element: <AddQuestionPage />
    },
    {
      path: "/quizpage",
      element: <QuizPage />
    },
    {
      path: "/resultspage",
      element: <ResultsPage />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
