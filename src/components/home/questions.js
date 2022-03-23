import React from 'react';
import {  Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


class AppQuestions extends React.Component {
    render(){
        return(
            <div id='questions' className='block questionsBlock'>
            <div className='container-fluid'>
              <div className='titleHolder'>
                <div className='quickSupport'>
                    <h2>Нужна помощь?</h2>
                    <p>Вы можете отправить свой вопрос на нашу почту.</p>
                    <Button type="primary" size='large'><i class='fas fa-envelope'></i> Email your question</Button>

                </div>
              </div>
            </div>
            </div>

        )

    }
}
export default AppQuestions;