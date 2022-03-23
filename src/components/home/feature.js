import React from 'react';
import {Row, Col} from 'antd';
import imageLogo from '../../assets/images/advanced-option.jpg';
import imageModernDesign from '../../assets/images/modern-design.jpg';
import imageUnlimited from '../../assets/images/unlimited-features.jpg';
import imageEasy from '../../assets/images/easy-customise.jpg';
import imageSupport from '../../assets/images/great-support.jpg';

import { Card } from 'antd';
const { Meta } = Card;

function AppFeature(){
    return (
        <div id='feature' className= 'block featureBlock bgGray'>
          <div className='container-fluid'>
              <div className='titleHolder'>
                  <h2>Наши ПРОЕКТЫ</h2>
                  <p> Можно описать наши проекты</p>

              </div>
            <Row gutter={[16, 16]}>
                    <Col span={8} >
                        <Card
                            hoverable
                            cover={<img alt="VAK.KG" src={imageLogo} />}
                        >
                            <Meta title="VAK.KG" />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card
                            hoverable
                            cover={<img alt="FSA.KG" src={imageModernDesign} />}
                        >
                            <Meta title="FSA.KG" />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card
                            hoverable
                            cover={<img alt="Mobile Application" src={imageSupport} />}
                        >
                            <Meta title="Mobile application" />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card
                            hoverable
                            cover={<img alt="WEB APPLICATION" src={imageUnlimited} />}
                        >
                            <Meta title="WEB APPLICATION" />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card
                            hoverable
                            cover={<img alt="Партнерство ТЕЗИС" src={imageEasy} />}
                        >
                            <Meta title="Партнерство ТЕЗИС" />
                        </Card>
                    </Col>
                
                </Row>

          </div>
        </div>
    )
}
export default AppFeature;