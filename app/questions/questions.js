const Questions = ({name, answers, setIndex, index, setResponses, responses}) => {
    return(
            <section class="questionnaire-slide active-question">
                <h2 class="questionnaire-question-text">{name}</h2>
                {
                    answers.map((a, i)=>(
                        <button onClick={() => {
                            setIndex(index+1)
                            setResponses(prevResponses => [...prevAnswers, a])
                        }} class="questionnaire-option">{a}</button>

                    ))
                }
            </section>
    )
}

export default Questions