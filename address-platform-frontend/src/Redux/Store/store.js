import createStoreData from './index';

const {store, persistor} = createStoreData();

export const getPersistorStore = () => persistor;

export default store;
