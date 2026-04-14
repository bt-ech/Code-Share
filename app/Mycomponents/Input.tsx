
interface InputProps {
    value: string;
    onChange: (value: string) => void ;
}

export default function Input({value , onChange}: InputProps){
    return (
        <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">
                Name of Paste
            </label>
            <input value={value} placeholder="Name of Paste" onChange={(e) => onChange(e.target.value)}
            className="
                w-72
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                transition
            "
            />
        </div>
    )
}