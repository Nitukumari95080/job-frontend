import { useEffect, useState } from "react";
import {IconSelector
} from "@tabler/icons-react";
import {
  Checkbox,
  Combobox,
  Group,
  Pill,
  Input,
  PillsInput,
  useCombobox,
} from "@mantine/core";



const MultiInput = (props:any) => {
    useEffect(()=>{
setData(props.options)
    },[])
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const [search, setSearch] = useState("");
  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useState<string[]>([]);

  const exactOptionMatch = data.some((item) => item === search);

  const handleValueSelect = (val: string) => {
    setSearch("");

    if (val === "$create") {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val)
          ? current.filter((v) => v !== val)
          : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.slice(0, 1).map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          <Checkbox
            size="xs"
            color="cinnamon.6"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: "none" }}
          />
          <span className="text-mine-shaft-100 text-xl">{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          variant="unstyled"
          onClick={() => combobox.toggleDropdown()}
          rightSection={<IconSelector
            />}
          leftSection={
            <div className="text-cinnamon-600  p-1 bg-mine-shaft-900 rounded-full mr-2">
              <props.icon />
            </div>
          }
        >
          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && <Pill>+{value.length - 1} more</Pill>}
              </>
            ) : (
              <Input.Placeholder className="font-semibold !text-mine-shaft-50"> {props.title}
              </Input.Placeholder>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search groceries"
        />
        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}

          {exactOptionMatch &&
            search.trim().length > 0 &&
            options.length === 0 && (
              <Combobox.Empty>Nothing found</Combobox.Empty>
            )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
export default MultiInput;