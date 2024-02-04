import { useState } from 'react';
import { useAuth } from '../../contexts/auth.context';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const navigate = useNavigate();

  const { signIn } = useAuth();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      return alert('아이디와 비밀번호를 입력해주세요.');
    }

    if (username === 'udemy' && password === 'udemy') {
      signIn();
      navigate('/');
    } else {
      return alert('아이디 혹은 비밀번호가 맞지 않습니다.');
    }
  };

  return (
    <div>
      <form
        className='w-80 flex flex-col gap5 mx-auto gap-3'
        onSubmit={handleSubmit}
      >
        <input
          className='bg-[#f8f9fa] text-[18px] px-2 py-2 border border-[#adb5bd] outline-none rounded'
          type='text'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='bg-[#f8f9fa] text-[18px] px-2 py-2 border border-[#adb5bd]  outline-none rounded'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-black text-white text-[18px] px-2 py-2 rounded'>
          로그인
        </button>
      </form>
    </div>
  );
}
