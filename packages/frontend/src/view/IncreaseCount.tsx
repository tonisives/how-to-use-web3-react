import { Button, CircularProgress, Stack } from "@mui/material"
import { useState } from "react"
import { Contract } from "ethers"
import { hooks } from "../model/config"
import { Counter, Counter__factory } from "../typechain-types"

export const IncreaseCount = () => {
  const [loading, setLoading] = useState(false)
  const { useProvider } = hooks
  const provider = useProvider()

  const increaseCount = async () => {
    setLoading(true)

    const counter = new Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      Counter__factory.abi,
      provider?.getSigner()
    ) as Counter

    const tx = await counter.countUp()

    if (!tx) return

    provider!.once(tx.hash, (tx) => {
      setLoading(false)
    })
  }

  return (
    <Stack direction={"row"}>
      {loading ? <CircularProgress /> : <Button onClick={increaseCount}>Increase count</Button>}
    </Stack>
  )
}
