declare const _default: {
  extends: "@commitlint/config-conventional";
  rules: {
    "body-max-line-length": [1, "always", 100];
    "footer-max-line-length": [1, "always", 100];
    "type-case": [2, "always", "camel-case"];
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "revert",
        "build",
        "initial",
        "dependencies",
        "peerDependencies",
        "devDependencies",
        "metadata",
        "docs",
        "style",
        "chore",
        "refactor",
        "test",
        "ci",
      ],
    ];
  };
};

export = _default;
