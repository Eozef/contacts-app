import { extendTheme } from "@chakra-ui/react";
import { theme as chakratheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const overrides = {
  ...chakratheme,
};

const customTheme = extendTheme(overrides);

export default customTheme;
