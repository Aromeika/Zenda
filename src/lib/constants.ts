import RNFS from 'react-native-fs';

export interface ProvidersList {
  name: string;
  value: string;
  type: string;
  flag: string;
}
export const providersList: ProvidersList[] = [
  {
    name: 'VegaMovies',
    value: 'vega',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'MultiStream',
    value: 'multiStream',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'MoviesDrive',
    value: 'drive',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'MultiMovies',
    value: 'multi',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'World4uFree',
    value: 'world4u',
    type: 'global',
    flag: '🌏',
  },
  // {
  //   name: 'KatMoviesHd',
  //   value: 'katmovies',
  //   type: 'global',
  //   flag: '🌏',
  // },
  {
    name: 'ExtraMovies',
    value: 'extraMovies',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'MoviesMod',
    value: 'mod',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'UHDMovies',
    value: 'uhd',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'ProtonMovies',
    value: 'protonMovies',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'CinemaLuxe',
    value: 'cinemaLuxe',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'NetflixMirror',
    value: 'netflixMirror',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'HdHub4u',
    value: 'hdhub4u',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'VadaPav',
    value: 'vadapav',
    type: 'global',
    flag: '🌏',
  },
  {
    name: 'AnimeRulz',
    value: 'animeRulz',
    type: 'global',
    flag: '🌏',
  },
  // {
  //   name: 'ToonStream',
  //   value: 'toonstream',
  //   type: 'global',
  //   flag: '🌏',
  // },
  // {
  //   name: 'MoviesApi',
  //   value: 'moviesApi',
  //   type: 'english',
  //   flag: '🇬🇧',
  // },
  {
    name: 'RidoMovies',
    value: 'ridoMovies',
    type: 'english',
    flag: '🇬🇧',
  },
  {
    name: 'FlixHQ',
    value: 'flixhq',
    type: 'english',
    flag: '🇬🇧',
  },
  {
    name: 'Primewire',
    value: 'primewire',
    type: 'english',
    flag: '🇬🇧',
  },
  {
    name: 'HiAnime',
    value: 'hiAnime',
    type: 'english',
    flag: '🇬🇧',
  },
  {
    name: 'GogoAnime',
    value: 'gogo',
    type: 'english',
    flag: '🇬🇧',
  },
  // {
  //   name: 'AE Anime',
  //   value: 'AEAnime',
  //   type: 'english',
  //   flag: '🇬🇧',
  // },
  {
    name: 'TokyoInsider',
    value: 'tokyoInsider',
    type: 'english',
    flag: '🇬🇧',
  },
  {
    name: 'KissKh',
    value: 'kissKh',
    type: 'english',
    flag: '🇬🇧',
  },
  {
    name: 'DramaCool',
    value: 'dramaCool',
    type: 'english',
    flag: '🇬🇧',
  },
  // {
  //   name: 'AE Drama',
  //   value: 'AEDrama',
  //   type: 'english',
  //   flag: '🇬🇧',
  // },
  {
    name: 'Dooflix',
    value: 'dooflix',
    type: 'india',
    flag: '🇮🇳',
  },
  {
    name: 'RogMovies',
    value: 'lux',
    type: 'india',
    flag: '🇮🇳',
  },
  {
    name: 'GuardaHD',
    value: 'guardahd',
    type: 'italy',
    flag: '🇮🇹',
  },
];

export const downloadFolder = RNFS.DownloadDirectoryPath + '/vega';

export const themes: {name: string; color: string}[] = [
  {
    name: 'Vega',
    color: '#FF6347',
  },
  {
    name: 'Hayasaka',
    color: '#00e6e6',
  },
  {
    name: 'Lavender',
    color: '#B2A4D4',
  },
  {
    name: 'Sky',
    color: '#87CEEB',
  },
  {
    name: 'Mint',
    color: '#98FB98',
  },
  {
    name: 'Sunset',
    color: '#FFA07A',
  },
  {
    name: 'Flix',
    color: '#E50914',
  },
  {
    name: 'Material',
    color: '#2196F3',
  },
  {
    name: 'Custom',
    color: '#FFFFFF',
  },
];

export const socialLinks = {
  github: 'https://github.com/Zenda-Cross/vega-app',
  discord: 'https://discord.gg/cr42m6maWy',
};
