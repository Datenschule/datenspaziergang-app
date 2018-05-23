// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  mapbox_key: 'pk.eyJ1Ijoib2tmZGUiLCJhIjoiY2lpOHhvMnNhMDAyNnZla280ZWhmMm96NyJ9.IvGz74dvvukg19B4Npsm1g',
  mapboxTiles: {
    light: 'mapbox://styles/mapbox/light-v9',
    street: 'mapbox://styles/okfde/cjhhp085v001u2rqh82cj1x6p',
    chloropleth: "mapbox://styles/okfde/cjh7f7il55yme2rqsd3plnhf5"
  }
};
