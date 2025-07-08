import { useFetchUser } from './hooks/useFetchUser';

type User = {
  userId: number;
}

function User({ userId }: User) {
  const { user } = useFetchUser(userId);

  if (!user) return <p>Loading...</p>
  
  return (
    <div>
      <h2>{ user.name }</h2>
      <p>{ user.email }</p>
    </div>
  )
}
export default User