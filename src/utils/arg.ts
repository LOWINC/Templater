const [exe, js, name, type] = process.argv;

export interface Argv {
  name: string;
  type?: "view" | "store";
}

export const argv = { name, type } as Argv;
