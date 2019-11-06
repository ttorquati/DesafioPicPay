import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';

import { addCardRequest } from '~/store/modules/card/actions';

import {
  Wrapper,
  Content,
  ModalHeader,
  Form,
  FormMenu,
  InputSection,
  SubmitSection,
} from './styles';

import ArrowLeft from '~/assets/ArrowLeft';
import Close from '~/assets/Close';

export default function Payment() {
  const dispatch = useDispatch();

  const [banner, setBanner] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [formattedNumber, setFormattedNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [postalCode, setPostalCode] = useState('');

  function handleAddCard(e) {
    e.preventDefault();

    const card = {
      banner,
      name,
      number,
      expiryDate,
      cvv,
      postalCode,
    };

    dispatch(addCardRequest(card));
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

        <Form onSubmit={handleAddCard}>
          <FormMenu>
            <Link to="/payment">
              <ArrowLeft /> <span>Voltar</span>
            </Link>
          </FormMenu>

          <InputSection>
            <select>
              <option>Selecione a bandeira</option>
              <option>Master</option>
              <option>Visa</option>
            </select>

            <input
              type="text"
              placeholder="Nome escrito no cartão"
              required
              maxLength="60"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <NumberFormat
              placeholder="Número do cartão"
              format="#### #### #### ####"
              required
              value={formattedNumber}
              onValueChange={values => {
                const { formattedValue, value } = values;
                setNumber(value);
                setFormattedNumber(formattedValue);
              }}
            />

            <NumberFormat
              placeholder="Validade (mm/aaaa)"
              format="##/####"
              mask={['M', 'M', 'A', 'A', 'A', 'A']}
              required
              value={expiryDate}
              onChange={e => setExpiryDate(e.target.value)}
            />

            <NumberFormat
              placeholder="Código de segurança"
              format="###"
              required
              value={cvv}
              onChange={e => setCvv(e.target.value)}
            />

            <NumberFormat
              placeholder="CEP do endereço da fatura"
              format="#####-###"
              mask={['_', '_', '_', '_', '_', '_', '_', '_']}
              required
              value={postalCode}
              onChange={e => setPostalCode(e.target.value)}
            />
          </InputSection>

          <SubmitSection>
            <button type="submit">Cadastrar</button>
          </SubmitSection>
        </Form>
      </Content>
    </Wrapper>
  );
}
