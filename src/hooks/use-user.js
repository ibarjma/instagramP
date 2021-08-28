import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjById() {
      //  se llama a esta funcion de firebase que retorna el user a partir del uid auth (service)
      // console.log(user);
      const [response] = await getUserByUserId(user.uid);
      // entrecorchetes para destructuring ya que es un array siempre de 1 elemento que se puede parsear a obj
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjById();
    }
  }, [user]);

  return { user: activeUser };
}
