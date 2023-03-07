import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      items: [],
    };
  },
  mutations: {
    addNewItem: (state, item) => {
      state.items.push(item);
    },
  },
});

export default store;
