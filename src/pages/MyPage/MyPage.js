import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateNickname,
  updatePassword,
} from '../../store/reducers/user.reducer';

export default function MyPage() {
  const password = useSelector((state) => state.user.password);
  const nick = useSelector((state) => state.user.nickname);

  const dispatch = useDispatch();

  const [isChangeNick, setIsChangeNick] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);

  const nicknameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleClickChangeNickname = () => {
    if (!nicknameRef.current) {
      return alert('변경할 닉네임을 입력해주세요.');
    }

    const nickname = nicknameRef.current.value;
    dispatch(updateNickname({ nickname }));

    setIsChangeNick(!isChangeNick);
  };

  const handleClickChangePassword = () => {
    if (!passwordRef.current) {
      return alert('변경할 비밀번호를 입력해주세요.');
    }

    const password = passwordRef.current.value;
    dispatch(updatePassword({ password }));

    setIsChangePassword(!isChangePassword);
  };

  return (
    <div className='w-80 flex flex-col gap5 mx-auto gap-1 mt-32'>
      {!isChangeNick ? (
        <div className='flex gap-2'>
          <input
            className='w-96 bg-[#f8f9fa] text-[18px] px-2 py-2 border border-[#adb5bd] outline-none rounded placeholder-slate-600'
            type='text'
            placeholder={nick}
            disabled
          />
          <button
            className='border border-gray-400 rounded w-44 bg-black text-white'
            onClick={() => setIsChangeNick(!isChangeNick)}
          >
            수정하기
          </button>
        </div>
      ) : (
        <div className='flex gap-2'>
          <input
            ref={nicknameRef}
            className='bg-[#f8f9fa] text-[18px] px-2 py-2 border border-[#adb5bd] outline-none rounded placeholder-slate-950'
            type='text'
            placeholder={nick}
          />
          <button
            onClick={handleClickChangeNickname}
            className='border border-gray-400 rounded w-44 bg-black text-white'
          >
            저장하기
          </button>
        </div>
      )}
      {!isChangePassword ? (
        <div className='flex gap-2'>
          <input
            className='w-96 bg-[#f8f9fa] text-[18px] px-2 py-2 border border-[#adb5bd] outline-none rounded placeholder-slate-600'
            type='text'
            placeholder={password}
            disabled
          />
          <button
            className='border border-gray-400 rounded w-44 bg-black text-white'
            onClick={() => setIsChangePassword(!isChangePassword)}
          >
            수정하기
          </button>
        </div>
      ) : (
        <div className='flex gap-2'>
          <input
            ref={passwordRef}
            className='bg-[#f8f9fa] text-[18px] px-2 py-2 border border-[#adb5bd] outline-none rounded placeholder-slate-950'
            type='text'
            placeholder={password}
          />
          <button
            onClick={handleClickChangePassword}
            className='border border-gray-400 rounded w-44 bg-black text-white'
          >
            저장하기
          </button>
        </div>
      )}
    </div>
  );
}
