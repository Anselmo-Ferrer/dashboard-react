import { Search } from "lucide-react"
import { Input } from "./components/ui/input"
import { ButtonIcon } from "./components/ui/buttonicon"
import { HighlightSection } from "./components/highlightsection"

function App() {

  return (
    <div id="container" className="flex h-screen bg-black">

      <div id="aside" className="w-1/5 bg-neutral-800 p-4 h-screen" >
          <h1>hello</h1>
      </div>

      <div id="header" className="w-4/5 bg-black flex justify-end h-14 items-center pl-2 pb-5 pt-5 pr-5 gap-2">
        <div id="input__field" className="flex items-center bg-neutral-800 pl-2 pr-2 rounded-2xl h-8">
          <Search className="size-5 text-gray-400"/>
          <Input className="w-100 bg-neutral-800 border-none placeholder-gray-400 font-light text-gray-200" placeholder="Search"/>
        </div>
        <ButtonIcon></ButtonIcon>
      </div>
      
      <div id="main">
        <div id="highlights">
          <HighlightSection/>
          <HighlightSection/>
          <HighlightSection/>
        </div>
      </div>
      
    </div>
  )
}

export default App
