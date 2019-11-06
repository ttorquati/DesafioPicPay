import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import api from '~/services/api';

import { addUserInfoRequest } from '~/store/modules/user/actions';

import Dollar from '~/assets/Dollar';
import Arrow from '~/assets/Arrow';

import {
  Wrapper,
  Content,
  UserList,
  User,
  Profile,
  Payment,
  Loading,
} from './styles';

export default function Home() {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const sortUsers = data => {
    data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    return data;
  };

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);

      const response = await api.get('/users');

      setUsers(sortUsers(response.data));

      setLoading(false);
    }

    loadUsers();
  }, []);

  function handleAddUserInfo(user) {
    dispatch(addUserInfoRequest(user));
  }

  return (
    <Wrapper>
      {loading ? (
        <Loading>
          <FaSpinner size={48} color="#fff" />
        </Loading>
      ) : (
        <Content>
          <UserList>
            {users.map(user => (
              <User key={user.id}>
                <Profile>
                  <img src={user.img} alt="" />

                  <div>
                    <strong>{user.name}</strong>
                    <span>
                      id: {user.id} {user.username}
                    </span>
                  </div>
                </Profile>

                <Payment>
                  <button type="button" onClick={() => handleAddUserInfo(user)}>
                    <Dollar />
                    PAGAR
                    <Arrow />
                  </button>
                </Payment>
              </User>
            ))}
          </UserList>
        </Content>
      )}
    </Wrapper>
  );
}
