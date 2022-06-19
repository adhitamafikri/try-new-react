import { searchItems as searchItemsApi } from "../../api";

const searchItems = {
  state: {
    loading: false,
    data: null,
    error: null,
  },

  reducers: {
    beginSearchItems(state) {
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    },
    successSearchItems(state, payload) {
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };
    },
    errorSearchItems(state, payload) {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    },
  },

  effects: {
    async searchItems({ keyword = "" }) {
      try {
        this.beginSearchItems();
        const response = await searchItemsApi({ keyword });
        console.log('response', response)
        this.successSearchItems(response.data);
      } catch (error) {
        this.errorSearchItems(error);
        throw error;
      }
    },
  },
};

export default searchItems;
