import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import IntlCurrencyInput from 'react-intl-currency-input';

import currencyConfig from '~/config/currencyConfig';

import { addPaymentRequest } from '~/store/modules/payment/actions';

import {
  Wrapper,
  Content,
  ModalHeader,
  Form,
  FormMenu,
  Profile,
  ValueInfo,
  CardInfo,
  SubmitSection,
} from './styles';

import Alert from '~/assets/Alert';
import CardIcon from '~/assets/Card';
import ArrowLeft from '~/assets/ArrowLeft';
import Close from '~/assets/Close';

export default function Payment() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { currentCard } = useSelector(state => state.card);
  const { loading } = useSelector(state => state.payment);

  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const { id } = user;
    const { number, cvv, expiryDate } = currentCard;

    const paymentRequest = {
      destination_user_id: id,
      card_number: number,
      cvv,
      expiry_date: expiryDate,
      value,
    };

    if (number) {
      dispatch(addPaymentRequest(paymentRequest));
    }
  }

  const handleCurrency = useCallback((e, valueEntered, maskedValue) => {
    e.preventDefault();
    setValue(valueEntered);
  }, []);

  return (
    <Wrapper>
      <Content>
        <ModalHeader>
          <strong>
            Pagamento para <span>{user.name}</span>
          </strong>
          <Link to="/">
            <Close />
          </Link>
        </ModalHeader>

        <Form onSubmit={handleSubmit}>
          <FormMenu>
            <Link to="/">
              <ArrowLeft /> <span>Voltar</span>
            </Link>
          </FormMenu>

          <Profile>
            <img src={user.img} alt="" />
            <div>
              <strong>{user.name}</strong>
              <span>
                id: {user.id} {user.username}
              </span>
            </div>
          </Profile>

          <ValueInfo>
            <IntlCurrencyInput
              currency="BRL"
              config={currencyConfig}
              onChange={handleCurrency}
              maxLength="10"
              autoFocus
            />
          </ValueInfo>

          {currentCard && currentCard.number ? (
            <CardInfo selectedCard>
              <CardIcon />
              <div>
                <span>Forma de pagamento</span>
                <Link to="/card-list">
                  Cartão de Crédito com final {currentCard.number.slice(-4)}
                </Link>
              </div>
            </CardInfo>
          ) : (
            <CardInfo>
              <Alert />
              <div>
                <span>Nenhum cartão de crédito cadastrado.</span>
                <Link to="/card">Cadastrar agora</Link>
              </div>
            </CardInfo>
          )}

          <SubmitSection>
            <button type="submit">
              {loading ? <FaSpinner size={18} color="#474971" /> : 'PAGAR'}
            </button>
          </SubmitSection>
        </Form>
      </Content>
    </Wrapper>
  );
}
