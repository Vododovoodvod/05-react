const options = [
    {
        text: "Option A",
        value: "A",
        id: "option-a"
    },
    {
        text: "Option B",
        value: "B",
        id: "option-b"
    }
]

export function SingleChoiceQuestion() {
    const optionElements = options.map((option) => (
        <div>
            <label>
                <input  type="radio" name="question" id="question" if={option.value} value={option.value}/>
                {option.text}
            </label>
        </div>
    ));
    
    return (
        <div>
            <div>Question text</div>
            {optionElements}
        </div>
    )
}