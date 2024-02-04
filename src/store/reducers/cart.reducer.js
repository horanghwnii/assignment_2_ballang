import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  initialState: {
    items: [],
    totalItems: 0,
  },
  name: 'cart',
  reducers: {
    addItem(state, action) {
      const {
        id,
        img,
        brandNm,
        goodsNm,
        price,
        salePercent,
        amount = 1,
      } = action.payload;

      // --- 방법 1 ---
      // if (state.items.find((item) => item.id === id)) {
      //   state.items = state.items.map((item) =>
      //     item.id === id ? { ...item, count: item.count + 1 } : item
      //   );
      // }

      // --- 방법 2 ---
      const findItem = state.items.find((item) => item.id === id);

      if (findItem) {
        findItem.count += amount;
      } else {
        const newItem = {
          id,
          img,
          brandNm,
          goodsNm,
          price,
          salePercent,
          count: amount,
        };
        state.items.push(newItem);
      }

      state.totalItems += amount;
    },
    removeItem(state, action) {
      const { id, amount = 1 } = action.payload;

      const findItem = state.items.find((item) => item.id === id);

      if (amount > findItem.count) {
        return alert('담긴 개수보다 많습니다.');
      }

      if (findItem && findItem.count >= 1) {
        findItem.count -= amount;
        state.totalItems -= amount;
      }

      if (findItem.count === 0) {
        const newItems = state.items.filter((item) => item.id !== id);
        state.items = newItems;
        state.totalItems -= amount;
      }
    },
    forceRemoveItem(state, action) {
      const { id, amount } = action.payload;

      const findIndex = state.items.find((item) => item.id === id);

      if (findIndex) {
        const newItems = state.items.filter((item) => item.id !== id);
        state.items = newItems;
        state.totalItems -= amount;
      }
    },
  },
});

export default cartSlice.reducer;
export const { totalItems, addItem, removeItem, forceRemoveItem } =
  cartSlice.actions;

// updateExperience(state, action) {
//   const { id, data } = action;
// const experienceIndexToUpdate = state.profile.experiences.findIndex(
//     (experience) => experience.id === id
//   );
//   state.profile.experiences[experienceIndexToUpdate] = data;
// },
