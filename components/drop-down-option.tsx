import { Select, SelectItem } from "@nextui-org/react";
import { products } from "@wix/stores";

export function Option({
  onChange,
  option,
  selectedOption,
}: {
  onChange?: (selected: Record<string, string>) => void;
  option: products.ProductOption;
  selectedOption: string;
}) {
  const onSelect = (optionSelected: string) => {
    onChange?.({ [option.name!]: optionSelected });
  };

  return (
    <Select
      label={option.name!}
      placeholder={"Seleccionar " + option.name!.toLowerCase()}
      className="max-w-xs"
    >
      {option.choices!.map(({ value }) => (
        <SelectItem key={value!} onClick={() => onSelect(value!)}>{value}</SelectItem>
      ))}
    </Select>
  );
}
