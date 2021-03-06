import './theme.css'

import Typography from 'typography'
// import Wordpress2016 from 'typography-theme-wordpress-2016'

// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     body: { color: 'rgba(0,0,0,.86)' },
//     a: {
//       color: '#e8512f',
//     },
//     'a.gatsby-resp-image-link': {
//       boxShadow: `none`,
//     },
//     blockquote: {
//       color: 'inherit',
//       borderLeftColor: 'inherit',
//       opacity: '0.8',
//     },
//     'blockquote.translation': {
//       fontSize: '1em',
//     },
//   }
// }

// delete Wordpress2016.googleFonts

const typography = new Typography({})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
// export const rhythm = typography.rhythm
// export const scale = typography.scale
