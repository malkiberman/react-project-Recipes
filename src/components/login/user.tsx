import { UserData } from "./reduser/rreducerUser"

/**
 * User component
 * @param user UserData object
 */
const User=(user:UserData)=>{
return (<>
<div>{user.name}</div>
<div>{user.lname}</div>
<div>{user.email}</div>
<div>{user.phone}</div>

</>)
}
export default User