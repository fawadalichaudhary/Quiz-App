import { Button } from "@/components/ui/button"
import { useQuiz } from "@/context/QuizContext"
import { Play, Plus } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

function MainPage() {
    const navigate = useNavigate()
    const { questions, removeQuestions } = useQuiz()
    return (
        <>
            <div className="py-6">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">
                            Quiz App
                        </h1>
                        <p className="mt-3 text-lg text-slate-500">
                            Add your own questions, then take the quiz.
                        </p>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <Link to="/addquestions"
                            className="h-11 flex px-6 py-3 font-normal bg-black text-white rounded-xl">
                            <Plus className="mr-2 h-5 w-5" />
                            Add question
                        </Link>

                        <Button onClick={() => navigate("/quizpage")}
                            disabled={questions.length == 0}
                            className="h-11 flex px-6 py-3 font-normal bg-black text-white rounded-xl cursor-pointer"
                        >
                            <Play />
                            Start quiz
                        </Button>
                        <Button
                            onClick={removeQuestions}
                            disabled={questions.length == 0}
                            className="bg-white text-black hover:bg-gray-500 cursor-pointer"
                        >
                            Clear All
                        </Button>
                    </div>
                    <div className="mt-10 rounded-3xl border border-slate-200 bg-white shadow-sm h-full">
                        <div className="flex items-center justify-between px-8 py-6">
                            <h2 className="text-2xl font-semibold">
                                Your questions
                            </h2>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-semibold">
                                {questions.length}
                            </div>
                        </div>
                        <div className="flex items-center p-10 justify-center px-6 gap-1.5">
                            {questions.length === 0 ? <><p className="text-center text-lg text-slate-500">
                                No questions yet.
                            </p>
                                <span className="font-medium text-slate-600">
                                    Add your first one to get started.
                                </span></> :
                                (
                                    <div className="space-y-4 w-full ">
                                        {questions.map((item, index) => (
                                            <div
                                                key={index}
                                                className="rounded-sm border p-4 "
                                            >
                                                <h3 className="font-semibold">
                                                    {index + 1}.  {item.question}?
                                                </h3>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
