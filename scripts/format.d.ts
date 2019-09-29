declare interface FormatOptions {
  cwd?: string;
}

declare function format(options?: FormatOptions): Promise<void>;

export = format;
