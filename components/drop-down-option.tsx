import { Select, SelectItem } from "@nextui-org/react";
import { products } from "@wix/stores";

export function Option({
  onChange,
  option,
}: {
  onChange?: (selected: Record<string, string>) => void;
  option: products.ProductOption;
}) {
  const onSelect = (optionSelected: string) => {
    onChange?.({ [option.name!]: optionSelected });
  };
  const noStock: products.Choice[] = option.choices!.filter(
    (value) => value.inStock
  );
  return (
    <Select
      label={option.name!}
      placeholder={
        noStock?.length === 0
          ? "Sin stock"
          : "Selecionar " + option.name!.toLowerCase()
      }
      defaultSelectedKeys={
        noStock?.length === 0
          ? undefined
          : option.choices![0].value && [option.choices![0].value]
      }
      className="max-w-xs"
    >
      {option.choices!.map(({ value, inStock }, i) => (
        <SelectItem
          isDisabled={!inStock}
          key={value!}
          onClick={() => onSelect(value!)}
        >
          {value}
        </SelectItem>
      ))}
    </Select>
  );
}
