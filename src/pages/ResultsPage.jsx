import { Button } from "@/components/ui/button"
import { useQuiz } from "@/context/QuizContext"
import { useNavigate } from "react-router-dom"

function ResultsPage() {
    const { questions, score } = useQuiz()
    const navigate = useNavigate()

    const total = questions.length
    const percentage = score / total * 100

    return (
        <div className="px-4 py-10">
            <div className="mt-10 rounded-2xl border border-gray-200 p-8 shadow-sm max-w-5xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold my-2">
                        Keep practicing.
                    </h1>

                    <div className="flex justify-center">

                        <p className="text-gray-500 mt-2 text-3xl">
                            {score}
                        </p>
                        <p className="text-gray-500 mt-2">
                            /{total}
                        </p>
                    </div>
                    <p className="text-2xl font-semibold text-gray-700 mt-4">
                        {percentage}% correct
                    </p>

                </div>

                <div className="flex gap-3 justify-center mt-4">
                    <Button onClick={() => navigate("/quizpage")} >
                        Retake quiz
                    </Button>
                    <Button onClick={() => navigate("/")}>
                        Back to home
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ResultsPage