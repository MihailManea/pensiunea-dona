import { useState } from "react";
import { format, startOfDay } from "date-fns";
import { ro } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/**
 * Câmp de dată cu calendar propriu (nu cel nativ al telefonului),
 * ca zilele din trecut să fie blocate pe toate dispozitivele.
 * Trimite valoarea în formular ca yyyy-MM-dd printr-un input ascuns.
 */
export function DateField({
  id,
  label,
  value,
  onChange,
  minDate,
}: {
  id: string;
  label: string;
  value: Date | undefined;
  onChange: (d: Date | undefined) => void;
  minDate: Date;
}) {
  const [open, setOpen] = useState(false);
  const min = startOfDay(minDate);

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            className={cn(
              "mt-2 flex h-12 w-full items-center justify-between gap-2 rounded-xl border border-input bg-background px-4 text-left text-sm",
              !value && "text-muted-foreground",
            )}
          >
            <span className="min-w-0 truncate">
              {value ? format(value, "d MMMM yyyy", { locale: ro }) : "Alege data"}
            </span>
            <CalendarIcon className="size-4 shrink-0 text-wood" aria-hidden="true" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            locale={ro}
            selected={value}
            defaultMonth={value ?? min}
            startMonth={min}
            disabled={{ before: min }}
            onSelect={(d) => {
              onChange(d);
              setOpen(false);
            }}
            className="pointer-events-auto p-3"
          />
        </PopoverContent>
      </Popover>
      <input type="hidden" name={id} value={value ? format(value, "yyyy-MM-dd") : ""} />
    </div>
  );
}
