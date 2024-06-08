import { ValueOf } from 'type-fest';
export type TraverseAndProcessFileHandler<TArgs extends unknown[]> = (entryPath: string, ...args: TArgs) => Promise<boolean>;
export declare const kProcessCmdType: {
    readonly addExtToImports: "add-ext";
    readonly jestToVitest: "jest-to-vitest";
    readonly renameExt: "rename-ext";
    readonly help: "help";
    readonly version: "version";
};
export type ProcessCmdType = ValueOf<typeof kProcessCmdType>;
export interface ParsedCLIArgs {
    argsTuple: [string, string][];
    argsMap: Record<string, string | undefined>;
    unamedArgs: string[];
}
export interface PackageJson {
    name?: string;
    version?: string;
    description?: string;
}
