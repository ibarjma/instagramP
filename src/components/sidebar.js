import useUser from '../hooks/use-user';

export default function Sidebar() {
  const x = useUser();
  console.log(x);
  return <p> soy el sidebar </p>;
}
