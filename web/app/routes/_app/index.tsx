import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return <>This is telegram app (it has telegram env etc.)</>
}

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
})
