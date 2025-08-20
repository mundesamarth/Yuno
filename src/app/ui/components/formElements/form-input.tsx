import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";

interface formInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: string;
  label: string;
  placeholder?: string;
  icon: LucideIcon;
  required?: boolean;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = forwardRef<HTMLInputElement, formInputProps>(
  ({ id, label, icon: Icon, error, ...props }, ref) => {
    return (
      <div className="space-y-2 pb-3">
        <Label htmlFor={id}>{label}</Label>
        <div className="relative">
          <Icon className="absolute top-3 left-3 h-4 w-4" />
          <Input id={id} ref={ref} className="pl-12" {...props} />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";
export default FormInput;
