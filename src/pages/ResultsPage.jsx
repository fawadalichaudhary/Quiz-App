import { Button } from "@/components/ui/button"
import { useQuiz } from "@/context/QuizContext"
import { Trophy } from "lucide-react"
import { useNavigate } from "react-router-dom"

function ResultsPage() {
    const { questions, score } = useQuiz()
    const navigate = useNavigate()

    const total = questions.length
    const percentage = score / total * 100

    return (
        <div className="px-4 py-10">
            <div className="mt-10 rounded-2xl border border-gray-200 p-8 shadow-sm max-w-3xl mx-auto">
                <div className="text-center">
                    <div className="flex flex-col items-center justify-center">
                        <p className="bg-gray-300 h-13 w-13 rounded-full p-2.5">
                            <Trophy className="h-8 w-8" />
                        </p>
                        <h1 className="text-4xl font-bold my-2">
                            Keep practicing.
                        </h1>

                    </div>

                    <div className="flex justify-center">

                        <p className="mt-2 text-3xl font-bold">
                            {score}
                        </p>
                        <p className="text-gray-500 mt-5">
                            /{total}
                        </p>
                    </div>
                    <p className="text-2xl font-semibold text-gray-700 mt-4">
                        {percentage}% correct
                    </p>

                </div>

                <div className="flex gap-3 justify-center mt-10">
                    <Button onClick={() => navigate("/quizpage")}
                        className="cursor-pointer"
                    >
                        Retake quiz
                    </Button>
                    <Button onClick={() => navigate("/")}
                        className="cursor-pointer bg-gray-50 hover:bg-gray-200 text-black"
                    >
                        Back to home
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ResultsPage