import { useRef } from 'react';
import { useProfile } from '../../contexts/profile.context';
import { useSelector } from 'react-redux';

export default function MyPage() {
  const {
    nickname,
    updateNickname,
    isChangeInfo,
    readyChangeInfo,
    doneChangeInfo,
  } = useProfile();

  // redux 사용
  const items = useSelector((state) => state.cart.items);

  console.log(items);

  const nicknameRef = useRef(null);

  const handleClickChangeNickname = () => {
    if (nicknameRef.current.value === '') {
      return alert('변경할 닉네임을 입력해주세요.');
    }

    const inputValue = nicknameRef.current.value;
    updateNickname(inputValue);
    doneChangeInfo();
  };

  return (
    <div className='w-80 flex gap5 mx-auto gap-1'>
      {!isChangeInfo ? (
        <>
          <input
            className='w-96 bg-[#f8f9fa] text-[18px] px-2 py-2 border border-[#adb5bd] outline-none rounded placeholder-slate-600'
            type='text'
            value={nickname}
            disabled
          />
          <button
            className='border border-gray-400 rounded w-44 bg-black text-white'
            onClick={readyChangeInfo}
          >
            수정하기
          </button>
        </>
      ) : (
        <>
          <input
            ref={nicknameRef}
            className='bg-[#f8f9fa] text-[18px] px-2 py-2 border border-[#adb5bd] outline-none rounded placeholder-slate-950'
            type='text'
            placeholder={nickname}
          />
          <button
            onClick={handleClickChangeNickname}
            className='border border-gray-400 rounded w-44 bg-black text-white'
          >
            저장하기
          </button>
        </>
      )}
    </div>
  );
}
