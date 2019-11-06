import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import NumberFormat from 'react-number-format';

import history from '~/services/history';

import { selectCardRequest } from '~/store/modules/card/actions';

import {
  Wrapper,
  Content,
  ModalHeader,
  Form,
  FormMenu,
  CardList,
  Card,
  AddCard,
  SubmitSection,
} from './styles';

import ArrowLeft from '~/assets/ArrowLeft';
import Close from '~/assets/Close';
import CardIcon from '~/assets/Card';
import CheckMark from '~/assets/CheckMark';

export default function Payment() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.card.cards);
  const currentCard = useSelector(state => state.card.currentCard);

  function handleSelectCard(card) {
    dispatch(selectCardRequest(card));
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/payment');
  }

  return (
    <Wrapper>
      <Content>
        <ModalHeader>
          <strong>Cadastro de Cartão de Crédito</strong>
          <Link to="/">
            <Close />
          </Link>
        </ModalHeader>

        <Form onSubmit={handleSubmit}>
          <FormMenu>
            <Link to="/payment">
              <ArrowLeft /> <span>Voltar</span>
            </Link>
          </FormMenu>

          <strong>Cartões Cadastrados</strong>

          <CardList>
            {cards.map(card => (
              <Card
                key={card.number}
                selected={card.number === currentCard.number}>
                <button type="button" onClick={() => handleSelectCard(card)}>
                  <CardIcon color="#474971" />
                  <NumberFormat
                    displayType="text"
                    format="#### #### #### ####"
                    value={card.number}
                  />
                  <CheckMark />
                </button>
              </Card>
            ))}
          </CardList>

          <AddCard>
            <MdAdd size={28} color="#7de6c6" />
            <Link to="/card">Cadastrar Novo Cartão</Link>
          </AddCard>

          <SubmitSection>
            <button type="submit">Selecionar Cartão</button>
          </SubmitSection>
        </Form>
      </Content>
    </Wrapper>
  );
}
