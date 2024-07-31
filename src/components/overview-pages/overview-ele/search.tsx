import { Input } from "../../ui/input";

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Pesquise..."
        className="md:w-[100px] lg:w-[300px] rounded-xl h-10"
      />
    </div>
  )
}