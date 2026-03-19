import { Ecosystem } from './components/Ecosystem'
import { Introduction } from './components/Introduction'
import { Roadmap } from './components/Roadmap'
import { Summary } from './components/Summary'

export function Home() {
  return (
    <>
      <Introduction />
      <Summary />
      <Ecosystem />
      <Roadmap />
    </>
  )
}
