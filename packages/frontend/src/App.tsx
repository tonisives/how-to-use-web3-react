import { Stack } from "@mui/material"
import { ConnectButton } from "./view/ConnectButton"
import { ReadCount } from "./view/ReadCount"

function App() {
  return (
    <Stack p={"20px"} spacing={"30px"}>
      <ConnectButton />
      <ReadCount />
    </Stack>
  )
}

export default App
