import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return <>This is / (not telegram app)</>
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
