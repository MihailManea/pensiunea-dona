import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/pensiunea-dona")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});