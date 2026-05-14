/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useContext, useEffect, useState } from "react"

const QuizContext = createContext()

export function QuizProvider({ children }) {
    const [questions, setQuestions] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [score, setScore] = useState(0)

    const resetScore = () => setScore(0)

    const addScore = () => setScore((prev) => prev + 1)

    useEffect(() => {
        const storedQuestions = localStorage.getItem("questions")

        if (storedQuestions) {
            setQuestions(JSON.parse(storedQuestions))
        }

        setIsLoaded(true)
    }, [])


    useEffect(() => {
        if (!isLoaded) return

        localStorage.setItem("questions", JSON.stringify(questions))
    }, [questions, isLoaded])

    const addQuestion = (newQuestion) => {
        setQuestions((prev) => [...prev, newQuestion])
    }

    const clearQuestions = () => {
        setQuestions([])
    }

    const refreshQuestions = () => {
        const storedQuestions = localStorage.getItem("questions")

        if (storedQuestions) {
            setQuestions(JSON.parse(storedQuestions))
        } else {
            setQuestions([])
        }
    }
    const removeQuestions = () => {
        localStorage.removeItem("questions")
        setQuestions([])
    }

    return (
        <QuizContext.Provider
            value={{
                questions,
                addQuestion,
                clearQuestions,
                refreshQuestions,
                score,
                resetScore,
                addScore,
                removeQuestions
            }}
        >
            {children}
        </QuizContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useQuiz() {
    return useContext(QuizContext)
}