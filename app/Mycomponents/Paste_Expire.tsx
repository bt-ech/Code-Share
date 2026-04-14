import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const expiries = [
    {label: "Never" , value: "N"},
    {label: "10 Minutes" , value:"10M"},
    {label: "1 Hour" , value:"1H"},
    {label: "1 Day" , value:"1D"},
    {label: "1 Week" , value:"1W"},
    {label: "2 Weeks", value: "2W"},
    {label: "1 Month" , value: "1M"},
    {label: "1 Year" , value: "1Y"},
]

export default function PasteExpire({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select a Expiry"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {expiries.map((expire) => (
                <SelectItem key={expire.value} value={expire.value}>
                  {expire.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
  )
}