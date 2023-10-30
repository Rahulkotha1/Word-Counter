import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskOne() {
  const [text, setText] = useState('')
    const wordCount = text.split(/\s+/).filter(Boolean).length
    const TextChange = (e) => {
        setText(e.target.value)
    }
  return (
    <div className='container'>
      <div className='shadow p-3 mb-5 bg-white rounded row justify-content-md-center'>
        <div className='col col-md-6'>
          <h1>Responsive Paragraph Word Counter</h1>
          <div class="input-group">
            <div class="input-group-prepend">
            </div>
            <textarea class="form-control" aria-label="With textarea" onChange={TextChange} value={text}></textarea>
          </div>
            Word Count: {wordCount}
        </div>
      </div>
    </div>
  )
}

export default TaskOne