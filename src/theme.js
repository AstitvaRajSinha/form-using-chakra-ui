import { extendTheme, theme as base } from "@chakra-ui/react";
const theme = extendTheme({
fonts: {
    heading: `Monstserrat, $(base.fonts.heading)`,
    body:
}
});
export default  theme;