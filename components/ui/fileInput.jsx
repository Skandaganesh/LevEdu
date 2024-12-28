import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const FileInput = ({ label, accept, name, onChange, required }) => {
    return (
      <div>
        <Label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</Label>
        <Input
          type="file"
          accept={accept}
          name={name}
          onChange={onChange}
          required={required}
          className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    );
  };

export { FileInput }