import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"



export default function Paste({ code, setCode }: { code: string; setCode: (value: string) => void }) {
    return (
        <Field>
          <FieldLabel>Paste</FieldLabel>
          <FieldDescription>Enter your Code below.</FieldDescription>
          <Textarea value={code} onChange={(e) => setCode(e.target.value)} id="textarea-message" placeholder="Type your Code here." className="h-[400px] overflow-y-auto resize-none font-mono text-sm"/>
        </Field>
    )
};