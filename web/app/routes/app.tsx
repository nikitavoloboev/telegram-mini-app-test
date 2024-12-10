import { createFileRoute, Outlet } from "@tanstack/react-router"
import TelegramProvider from "~/components/TelegramProvider"

function OutletComponent() {
  return (
    <>
      <TelegramProvider>
        <Outlet />
      </TelegramProvider>
    </>
  )
}

export const Route = createFileRoute("/app")({
  component: OutletComponent,
})
