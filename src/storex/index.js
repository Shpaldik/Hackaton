import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      // Auth State
      accessToken: localStorage.getItem('access_token') || null,

      // Bookshelf State
      bookshelves: [],  // list of bookshelves
      books: [
        { id: 1, title: 'Book One' },
        { id: 2, title: 'Book Two' },
        { id: 3, title: 'Book Three' },
        // Add more books as needed
      ],
    };
  },
  mutations: {
    // Auth Mutations
    setAccessToken(state, token) {
      state.accessToken = token;
      localStorage.setItem('access_token', token);
    },
    clearAccessToken(state) {
      state.accessToken = null;
      localStorage.removeItem('access_token');
    },

    // Bookshelf Mutations
    createBookshelf(state, name) {
      state.bookshelves.push({
        id: Date.now(),
        name,
        books: [], // each bookshelf will have a list of books
      });
    },
    addBookToBookshelf(state, { bookshelfId, book }) {
      const bookshelf = state.bookshelves.find(bs => bs.id === bookshelfId);
      if (bookshelf) {
        bookshelf.books.push(book);
      }
    }
  },
  actions: {
    // Auth Actions
    login({ commit }, token) {
      // Simulate API call or pass in the token
      commit('setAccessToken', token);
    },
    logout({ commit }) {
      commit('clearAccessToken');
    },

    // Bookshelf Actions
    createBookshelf({ commit }, name) {
      commit('createBookshelf', name);
    },
    addBookToBookshelf({ commit }, payload) {
      commit('addBookToBookshelf', payload);
    }
  },
  getters: {
    // Auth Getter
    isAuthenticated: state => !!state.accessToken,

    // Bookshelf Getters
    getBookshelves(state) {
      return state.bookshelves;
    },
    getBooks(state) {
      return state.books;
    }
  }
});

export default store;
