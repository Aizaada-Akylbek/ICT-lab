import React from 'react';
import { Carousel, Button } from 'antd';

const items = [
    {
      key: '1',
      title: 'Быстрые решения для вашего бизнеса',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      title: 'Work better together. Schedule meetings',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      title: 'The best app to increase your productivity',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
  ]

function AppHero(){
    return(
        <div id='hero' className='heroBlock'>
            <Carousel>
                {items.map(item=>{
                    return (
                        <div className='container-fluid'>
                            <div className='content'>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className='btnHolder'></div>
                                <Button type="primary" size='large'>Подробнее</Button>
                            </div>

                        </div>
                    )
                })}
            <div>
            <h3>1</h3>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
        </Carousel>,

        </div>
    )
}
export default AppHero;