import { Button, Stack } from "@mui/material"
import { hooks, metamask } from "../model/config"

export const ConnectButton = () => {
  const { useAccount } = hooks

  const connect = async () => {
    await metamask
      .activate(31337)
      .catch((e: any) => {
        console.log(`activate error ${e.message}`)
      })
      .then(() => {})
  }

  return (
    <Stack width={"300px"}>
      <Button onClick={connect}>Connect</Button>
    </Stack>
  )
}