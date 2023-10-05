import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width:"500px"}}>
                <h1 className="text-center">Контакты волонтёров приюта Домик Надежды</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Адрес электронной почты</Form.Label>
                        <Form.Control type="email" placeholder="Введите адрес электронной почты" />
                        <Form.Text>
                            Мы никогда не передадим ваш адрес электронной почты кому-либо еще
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control as="textarea" row="3" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Проверить" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Отправить</Button>

                </Form>
            </Container>
        )
    }
}