import "./App.css"
import { Router } from "./router/Router"
import { AppShell, Header } from "@mantine/core"
const App = () => {
  return (
    <AppShell
      padding='md'
      header={
        <Header bg='dark' height={65} c='#ffffff' p='xs'>
          <p>Hello</p>
        </Header>
      }>
      <Router />
    </AppShell>
  )
}

export default App
