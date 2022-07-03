import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { Contract } from "ethers"
import { hooks } from "../model/config"
import { Counter, Counter__factory } from "../typechain-types"
export const ReadCount = () => {
  const [count, setCount] = useState("0")
  const { useProvider } = hooks
  const provider = useProvider()

  const readCount = async () => {
    const counter = new Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      Counter__factory.abi,
      provider?.getSigner()
    ) as Counter

    const count = await counter.getCount()
    setCount(count.toString())
  }
  return (
    <Stack direction={"row"}>
      <TextField label="count" value={count} />
      <Button onClick={readCount}>Read count</Button>
    </Stack>
  )
}
