import { useIsOnline } from "./hooks/customHooks";
import { useMousePointer } from "./hooks/mousePointer";

function App() {
  const isOnline = useIsOnline();
  const mousePointer = useMousePointer();
  return (
    <div>
      {isOnline ? "You are online" : "You are offline"}
      Position:{mousePointer.x}and{mousePointer.y}
    </div>

  )
}

export default App
