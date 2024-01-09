import UserInfo from "./exercise"
import { AuthProvider } from "./store"

const LearnUseContext = () => {
  return (
    <AuthProvider>
      <div>
        <h1>React useContext Example</h1>
        <UserInfo />
      </div>
    </AuthProvider>
  )
}

export default LearnUseContext