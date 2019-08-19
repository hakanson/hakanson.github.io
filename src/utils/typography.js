import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import GitHub from "typography-theme-github"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

// from https://medium.com/@jay_hankins/static-blogging-with-gatsby-on-github-pages-bbfd2c862e63
const systemFontStack = ['-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default'];

Wordpress2016.headerFontFamily = systemFontStack;
Wordpress2016.bodyFontFamily = systemFontStack;

delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)
const typography = new Typography(GitHub)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
