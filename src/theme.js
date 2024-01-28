import { extendTheme, theme as base } from "@chakra-ui/react";
const theme = extendTheme(
    {
       colors: {
        brand: {
            100:"#65a30d"
        }
       },
fonts: {
    heading: `Montserrat, ${base.fonts.heading}`,
    body:"Inter"
}
});
export default  theme;