import { Button } from "@/components/ui/button"
import { useQuiz } from "@/context/QuizContext"
import { ListChecks, Play, Plus, Trash2 } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

function MainPage() {
    const navigate = useNavigate()
    const { questions, removeQuestions } = useQuiz()
    return (
        <>
            <div className="py-6">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center flex flex-col items-center space-y-2.5">
                        <div className=" bg-gray-300 h-15 w-15 rounded-full p-3.5">
                            <ListChecks className="h-8 w-8 " />
                        </div>
                        <h1 className="text-5xl font-bold">
                            Quiz App
                        </h1>
                        <p className="mt-3 text-lg text-slate-500">
                            Add your own questions, then take the quiz.
                        </p>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <Link to="/addquestions"
                            className="h-11 flex px-6 py-3 font-normal bg-black text-white rounded-xl items-center">
                            <Plus className="mr-2 h-5 w-5" />
                            Add question
                        </Link>

                        <Button onClick={() => navigate("/quizpage")}
                            disabled={questions.length == 0}
                            className="h-11 flex px-6 py-3 font-normal bg-gray-100 shadow-sm hover:bg-gray-200 text-black rounded-xl cursor-pointer"
                        >
                            <Play />
                            Start quiz
                        </Button>
                        {questions.length === 0 ? "" : <Button
                            onClick={removeQuestions}
                            disabled={questions.length == 0}
                            variant="ghost"
                        >
                            <Trash2 />  Clear All
                        </Button>}
                    </div>
                    <div className="mt-10 rounded-3xl border border-slate-200 bg-white shadow-sm h-full">
                        <div className="flex items-center justify-between px-8 py-6">
                            <h2 className="text-xl font-semibold">
                                Your questions
                            </h2>

                            <div className="flex h-8 w-10 items-center justify-center rounded-xl bg-slate-100 font-semibold">
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
                                                className="rounded-sm border p-4 w-full "
                                            >
                                                <h3 className="font-semibold">
                                                    {index + 1}.  {item.question}
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
