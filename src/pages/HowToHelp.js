import React, { Component } from "react";
import { Container, Card, Row } from "react-bootstrap";


import help2 from '../assets/help2.jpg';
import help3 from '../assets/help3.jpg';
import donat from '../assets/donat.jpg';

export default class HowToHelp extends Component {
    render() {
        return (
            <>
                <Container>
                    <h2 className="text-center m-4" >Как помочь</h2>
                    <Row md={3} className="m-4">
                        <Card >
                            <Card.Img
                                variant="top"
                                src={help2}
                            />
                            <Card.Body>
                                <Card.Title>Разные нужности</Card.Title>
                                <Card.Text>
                                    Вы сможете нам помочь, если просто принесёте такие вещи, как:
                                    <ui className="list-group">
                                        <li class="list-group-item">СУХОЙ КОРМ ежедневно собаки съедают 60кг корма (едят Чаппи), такжеконсервы для старых собак и щенков.</li>
                                        <li class="list-group-item">Обрезь мясная, мясо, спинки куриные.</li>
                                        <li class="list-group-item"> сено - стелить в будки</li>
                                        <li class="list-group-item"> мисочки для животных либо обычные металлические миски и кастрюльки</li>
                                        <li class="list-group-item"> КАПЛИ ОТ КЛЕЩЕЙ (Дана, Барс).</li>
                                        <li class="list-group-item"> Игрушки для щенков,</li>
                                        <li class="list-group-item"> перчатки х/б и резиновые,</li>
                                        <li class="list-group-item">пакеты мусорные плотные (120-160л).</li>
                                    </ui>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Img
                                variant="top"
                                src={donat}
                            />
                            <Card.Body>
                                <Card.Title>Банковские реквизиты</Card.Title>
                                <Card.Text>
                                    <p>
                                        СБЕРБАНК

                                        КРОО помощи приюту животных "Домик Надежды"

                                        ИНН: 3600399399 КПП: 490605591

                                        Расчетный счет: 20703810256792000999

                                        Банк получателя

                                        СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК РОССИИ

                                        БИК 042748634

                                        Корсчет: 00101810100498300699

                                        Назначение платежа :

                                        Благотворительная помощь на содержание животных в приюте Домик Надежды</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Img
                                variant="top"
                                src={help3}
                            />
                            <Card.Body>
                                <Card.Title>Сборы на лечение</Card.Title>
                                <Card.Text>
                                    За годы работы приюта у нас остались на доживание никому не нужные, так называемый «неликвид». Без ног, глаз, хвостов, ушей и просто некрасивые или невезучие собаки. Мы не усыпляем их, а даём возможность нормально жить. Каждой такой собаке нужно лечение.
                                    Кроме того, к нам постоянно поступают новыесобаки, которым тоже зачастуюнужна помощь ветеринарови серьезное лечение.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Row>
                </Container>
            </>
        );
    }
}