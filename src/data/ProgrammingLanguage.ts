export enum ProgrammingLanguage {
    c = "c",
    cpp = "cpp",
    csharp = "csharp",
    css = "css",
    go = "go",
    haskell = "haskell",
    java = "java",
    javascript = "javascript",
    json = "json",
    markup = "markup",
    python = "python",
    sql = "sql",
    other = "other",
}

// Languages with syntax highlighting support
export const supportedLanguagesSyntaxHighlighting = [
    ProgrammingLanguage.c,
    ProgrammingLanguage.cpp,
    ProgrammingLanguage.csharp,
    ProgrammingLanguage.css,
    ProgrammingLanguage.go,
    ProgrammingLanguage.haskell,
    ProgrammingLanguage.markup,
    ProgrammingLanguage.javascript,
    ProgrammingLanguage.python,
    ProgrammingLanguage.java,
    ProgrammingLanguage.json,
    ProgrammingLanguage.sql,
];

// Languages with unit testing support
export const supportedLanguagesUnitTesting = [
    ProgrammingLanguage.javascript,
    ProgrammingLanguage.python,
    ProgrammingLanguage.c,
    ProgrammingLanguage.cpp,
    ProgrammingLanguage.java,
    ProgrammingLanguage.csharp,
];
