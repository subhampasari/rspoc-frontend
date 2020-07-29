import { createStore } from 'redux';

import experienceStore from './experienceStore';

const store = createStore(experienceStore);

export default store;