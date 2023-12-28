import './style.css'

interface UserProps {
  src: string;
  name: string;
  address: string;
}

const User = ({
  src,
  name,
  address
}: UserProps) => {
  return (
    <div className='user-container'>
      <div className="avatar">
        <img src={src} alt="avatar-user" />
      </div>
      <div className="user-info">
        <h5>{name}</h5>
        <p>{address}</p>
      </div>
    </div>
  )
}

export default User;