import { Stack } from "@mui/material"
import { ConnectButton } from "./view/ConnectButton"
import { IncreaseCount } from "./view/IncreaseCount"
import { ReadCount } from "./view/ReadCount"

function App() {
  return (
    <Stack p={"20px"} spacing={"30px"}>
      <ConnectButton />
      <ReadCount />
      <IncreaseCount />
    </Stack>
  )
}

export default App
