export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'theme1',
    target: 'root',
    list: [
      { name: 'theme1', class: 'theme1', color: '#f00' },
      { name: 'theme2', class: 'theme2', color: '#0f0' },
    ],
  },
}