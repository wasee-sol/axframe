import { ProgramConfig } from "@core/scripts/makeProgram/@types";

const programConfig: ProgramConfig = {
  pagesDir: "./src/pages",
  templateDir: "./src/@core/pages",
  programs: [
    {
      name: ["first", "first"],
      type: "LIST",
    },
    {
      name: "second",
      type: "LIST_AND_DRAWER",
    },
    {
      name: ["first", "second"],
      type: "LIST_WITH_FORM",
    },
  ],
};

export default programConfig;
