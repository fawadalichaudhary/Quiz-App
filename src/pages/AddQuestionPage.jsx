import { useState } from "react"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "@/context/QuizContext"

function AddQuestionPage() {
  const { questions, addQuestion } = useQuiz()

  const navigate = useNavigate()

  const [question, setQuestion] = useState("")
  const [options, setOptions] = useState(["", "", "", ""])
  const [correctAnswer, setCorrectAnswer] = useState(null)

  const handleOptionChange = (value, index) => {
    const updatedOptions = [...options]
    updatedOptions[index] = value
    setOptions(updatedOptions)
  }

  const handleSaveQuestion = (e) => {
    e.preventDefault()

    if (!question.trim() || correctAnswer === null || options.some((option) => !option.trim())) {
      alert("Please enter complete information")
      return
    }

    const newQuestion = {
      question,
      options: options.map((option, index) => ({
        text: option,
        isCorrect: correctAnswer === index,
      })),
    }

    addQuestion(newQuestion)
    setQuestion("")
    setOptions(["", "", "", ""])
    setCorrectAnswer(null)
    alert("Question Added")
  }

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <form className="rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-3xl font-semibold">
              Add a Question
            </h2>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-semibold">
              {questions.length}
            </div>
          </div>

          <div className="my-5">
            <label className="mb-3 text-lg font-medium">
              Question
            </label>

            <Input
              value={question}
              required
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question"
              className="h-14 rounded-xl"
            />
          </div>

          <label className="mb-4 text-lg font-medium">
            Answer options (select the correct one)
          </label>

          <RadioGroup
            value={correctAnswer !== null ? String(correctAnswer) : ""}
            onValueChange={(value) => setCorrectAnswer(Number(value))}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <RadioGroupItem
                  value={String(index)}
                  id={`option-${index}`}
                />

                <Input
                  value={option}
                  required
                  onChange={(e) =>
                    handleOptionChange(e.target.value, index)
                  }
                  placeholder={`Option ${index + 1}`}
                  className="h-14 rounded-xl"
                />
              </div>
            ))}
          </RadioGroup>

          <div className="mt-10 flex justify-end">
            <Button
              type="button"
              onClick={() => navigate("/")}
              className="h-12 bg-transparent text-black font-normal px-6"
            >
              Cancel
            </Button>

            <Button
              onClick={handleSaveQuestion}
              className="h-12 rounded-xl px-6"
            >
              Save Question
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddQuestionPage