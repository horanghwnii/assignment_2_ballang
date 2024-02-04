// import { createContext, useContext, useState } from 'react';

// const initialValue = {
//   username: '',
//   password: '',
//   nickname: '',
//   isChangeInfo: false,
//   readyChangeInfo: () => {},
//   doneChangeInfo: () => {},
// };

// const ProfileContext = createContext(initialValue);

// export function ProfileProvider({ children }) {
//   const [nickname, setNickname] = useState('홀앵희');
//   const [isChangeInfo, setIsChangeInfo] = useState(false);

//   const readyChangeInfo = () => setIsChangeInfo(true);
//   const doneChangeInfo = () => setIsChangeInfo(false);

//   const updateNickname = (newNickname) => {
//     setNickname(newNickname);
//   };

//   const value = {
//     nickname,
//     updateNickname,
//     isChangeInfo,
//     readyChangeInfo,
//     doneChangeInfo,
//   };

//   return (
//     <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
//   );
// }

// export const useProfile = () => useContext(ProfileContext);

// export default ProfileContext;
