import { useIsOnline } from "./hooks/customHooks";

function App() {
  const isOnline = useIsOnline();

  return (
    isOnline ? "You are online" : "You are offline"
  )
}

export default App
