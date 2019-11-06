import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import history from '~/services/history';

import {
  Wrapper,
  Content,
  ModalHeader,
  Form,
  FormMenu,
  Profile,
  ValueInfo,
  SubmitSection,
} from './styles';

import ArrowLeft from '~/assets/ArrowLeft';
import Close from '~/assets/Close';

export default function Payment() {
  const {
    destination_user,
    id,
    timestampFormatted,
    valueFormatted,
  } = useSelector(state => state.payment.transaction);

  const { card_number } = useSelector(state => state.payment.paymentRequest);

  return (
    <Wrapper>
      <Content>
        <ModalHeader>
          <strong>
            Pagamento para <span>{destination_user.name}</span>
          </strong>
          <Link to="/">
            <Close />
          </Link>
        </ModalHeader>

        <Form>
          <FormMenu>
            <Link to="/payment">
              <ArrowLeft /> <span>Voltar</span>
            </Link>
          </FormMenu>

          <Profile>
            <img src={destination_user.img} alt="" />
            <div>
              <strong>{destination_user.name}</strong>
              <span>
                id: {destination_user.id} {destination_user.username}
              </span>
            </div>
          </Profile>

          <ValueInfo>
            <strong>Pagamento confirmado!</strong>
            <ul>
              <li>
                Transação <span>{id}</span>
              </li>
              <li>
                Data <span>{timestampFormatted}</span>
              </li>
              <li>
                Cartão{' '}
                <span>
                  **** **** ****{' '}
                  <NumberFormat
                    displayType="text"
                    format="####"
                    value={card_number.slice(-4)}
                  />
                </span>
              </li>
              <li>
                Valor <span>{valueFormatted}</span>
              </li>
            </ul>
          </ValueInfo>

          <SubmitSection>
            <button type="button" onClick={() => history.push('/')}>
              Voltar
            </button>
            <button type="button" onClick={() => history.push('/payment')}>
              Pagar Novamente
            </button>
          </SubmitSection>
        </Form>
      </Content>
    </Wrapper>
  );
}
