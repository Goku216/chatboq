"use client"
import { Confetti } from "./components/Confetti"
import HomePage from "./components/HomePage"
import { Button } from "@/components/ui/button"
import Popup from "./components/Popup"



export default function Home() {

  return(
    <>
    <HomePage />
    <Confetti />
    <Popup />
    </>
  )
}