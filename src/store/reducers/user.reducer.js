import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  initialState: {
    username: 'udemy',
    password: 'udemy',
    nickname: '홀앵희',
  },
  name: 'user',
  reducers: {
    updateNickname(state, action) {
      const { nickname } = action.payload;

      if (nickname.length < 1) {
        return alert('한글자 이상 입력해주세요');
      }

      state.nickname = nickname;
    },
    updatePassword(state, action) {
      const { password } = action.payload;

      if (password.length < 5) {
        return alert('다섯자 이상 입력해주세요.');
      }

      state.password = password;
    },
  },
});

export default userSlice.reducer;
export const { updateNickname, updatePassword } = userSlice.actions;
