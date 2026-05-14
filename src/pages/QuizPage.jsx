import { useEffect, useState } from "react"
import { useQuiz } from "@/context/QuizContext"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

function QuizPage() {
    const navigate = useNavigate()
    const { questions, addScore, resetScore } = useQuiz()

    useEffect(() => {
        resetScore()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [showResult, setShowResult] = useState(false)

    if (questions.length === 0) {
        return (
            <div className="mt-10 flex h-40 items-center justify-center rounded-2xl border border-dashed border-slate-200">
                <p className="text-slate-500">No questions added yet.</p>
            </div>
        )
    }

    const currentQuestion = questions[currentIndex]

    const handleOptionClick = (optionIndex) => {
        if (showResult) return

        setSelectedOption(optionIndex)
        setShowResult(true)

        const selected = currentQuestion.options[optionIndex]
        if (selected.isCorrect) {
            addScore()
        }
    }

    const handleNext = () => {
        setSelectedOption(null)
        setShowResult(false)

        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1)
        }
    }

    return (
        <div className="px-4 py-10">
            <div className="mt-10 rounded-2xl border border-slate-200 mx-auto p-8 shadow-sm max-w-5xl">
                <div className="mb-6 flex items-center justify-between">

                    <div className="flex text-gray-500 font-semibold">
                        Question    {currentIndex + 1}/{questions.length}
                    </div>
                    <Button className="text-gray-500 bg-white"
                        onClick={() => navigate("/")}>
                        Exit
                    </Button>
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                    {currentQuestion.question}
                </h3>
                <div className="mt-6 space-y-3">
                    {currentQuestion.options.map((option, index) => {
                        let bg = "bg-gray-100"
                        if (showResult) {
                            if (option.isCorrect) {
                                bg = "bg-green-200 text-green-800"
                            } else if (selectedOption === index) {
                                bg = "bg-red-200 text-red-800"
                            }
                        }

                        return (
                            <div
                                key={index}
                                onClick={() => handleOptionClick(index)}
                                className={`cursor-pointer rounded-xl px-4 py-3 text-sm transition ${bg}`}
                            >
                                {option.text}
                            </div>
                        )
                    })}
                </div>
                <div className="mt-6 flex justify-end gap-3">
                    {currentIndex < questions.length - 1 ? (
                        <Button onClick={handleNext}
                            disabled={selectedOption === null}>
                            Next
                        </Button>
                    ) : (
                        <Button
                            disabled={selectedOption === null}
                            onClick={() => navigate("/resultspage")}
                            className="bg-black text-white font-normal p-2 rounded-lg"
                        >
                            End Quiz
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default QuizPage