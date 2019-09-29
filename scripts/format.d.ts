declare interface FormatOptions {
  cwd?: string;
}

declare function format(options?: FormatOptions): Promise<"SUCCESS" | "NOLOCKFILE">;

export = format;
