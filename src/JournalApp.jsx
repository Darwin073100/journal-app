import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"

export const JournalApp = () => {
  return (
    <BrowserRouter>
        <h1>JournalApp</h1>
        <AppRouter />
    </BrowserRouter>
  )
}
