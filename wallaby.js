module.exports = function (wallaby) {
  return {
    files: [
      "src/FizzBuzzer/*.ts",
      "src/rules/*.ts",
      "!src/**/*spec.ts",
      "!src/**/*test*.ts",
    ],

    tests: ["src/**/*spec.ts*", "src/test/*.ts"],

    compilers: {
      "**/*.ts?(x)": wallaby.compilers.typeScript(),
    },
    testFramework: "jasmine",
    env: {
      type: "node",
    },
  };
};
