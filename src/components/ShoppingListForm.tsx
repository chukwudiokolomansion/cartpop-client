import { useState } from "react";

interface Props {
  onCreate: (name: string) => void;
}

export default function ShoppingListForm({ onCreate }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    onCreate(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Shopping List Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">
        Create List
      </button>
    </form>
  );
}