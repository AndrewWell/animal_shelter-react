import React, { Component } from "react";
import { Container,  Card,  Row } from "react-bootstrap";

import cat1 from '../assets/catHoma1.jpg';
import cat2 from '../assets/catHoma2.jpg';
import cat3 from '../assets/catHoma3.jpg';
import cat4 from '../assets/catHoma4.jpg';
import cat5 from '../assets/catHoma5.jpg';
import cat6 from '../assets/catHoma6.jpg';


export default class Cats extends Component {
    render() {
        return (
            <>
                <Container>
                    <h2 className="text-center m-4" >Наши любимцы</h2>
                    <Row md={3} className="m-4">
                        <Card >
                            <Card.Img
                                variant="top"
                                src={cat1}
                            />
                            <Card.Body>
                                <Card.Title>Сибма</Card.Title>
                                <Card.Text>
                                    Котенок Симба был найден на улице. Он был очень маленьким и слабым, но сотрудники приюта сделали все возможное, чтобы он выжил.
                                    Сейчас это  очень игривый кот, любящий веселиться со своими соседями по клетке и мечтающий о том, чтобы найти свой дом и любящих хозяев.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Body>
                                <Card.Title>Белок</Card.Title>
                                <Card.Text>
                                    Котенок Белок был найден на улице в очень голодном и измотанном состоянии. Его привезли в приют для животных, где сотрудники начали заботиться о нем.
                                    Сейчас это красивый и игривый кот, который ждет когда его заберут в новую семью.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img
                                variant="top"
                                src={cat4}
                            />
                        </Card>

                        <Card >
                        <Card.Img
                                variant="top"
                                src={cat3}
                            />
                            <Card.Body>
                                <Card.Title>Клео</Card.Title>
                                <Card.Text>
                                    Кошка Клео появилась в нашем приюте не давно. У прошлых хозяев оказалась аллергяи на шерсть животных и они принесли ее в наш приют.
                                    Кошка ласковая, спокойная, стерелизованная, любит играть и спать на теплом коврике. 
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Body>
                                <Card.Title>Лунтик</Card.Title>
                                <Card.Text>
                                Лунтик - интересное имя для кота, неправдоли. Кот привит, приучен к лотку. 
                                </Card.Text>
                            </Card.Body>
                             <Card.Img
                                variant="button"
                                src={cat2}
                            />
                        </Card>
                        <Card >
                        <Card.Img
                                variant="top"
                                src={cat5}
                            />
                            <Card.Body>
                                <Card.Title>Рыжик</Card.Title>
                                <Card.Text>
                                    Котенок Белок был найден на улице в очень голодном и измотанном состоянии. Его привезли в приют для животных, где сотрудники начали заботиться о нем.
                                    Сейчас это красивый и игривый кот, который ждет когда его заберут в новую семью.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Body>
                                <Card.Title>Малыш</Card.Title>
                                <Card.Text>
                                    Малыша подкинули в наш приют несколько месяуев назат. Интересно почему от него избавелись, ведь это спокойный и добродушный кот, который ждет когда его заберут
                                    в новую семью.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img
                                variant="top"
                                src={cat6}
                            />
                        </Card>
                        
                    </Row>
                </Container>
            </>
        )
    }
}