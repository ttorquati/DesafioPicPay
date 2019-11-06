import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'picpay',
      storage,
      whitelist: ['card', 'payment', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
