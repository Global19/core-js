import ChromeToElectronModule from 'electron-to-chromium/chromium-versions.js';

export default {
  // https://nodejs.org/dist/index.json
  ChromeToNode: [
    [3, '0.0.3'],
    [4, '0.1.19'],
    [5, '0.1.27'],
    [6, '0.1.90'],
    [7, '0.1.101'],
    [9, '0.3.0'],
    [10, '0.3.2'],
    [11, '0.3.8'],
    [14, '0.5.1'],
    [15, '0.5.4'],
    [16, '0.5.6'],
    [18, '0.7.0'],
    [19, '0.7.3'],
    [21, '0.7.11'],
    [23, '0.9.3'],
    [24, '0.9.6'],
    [27, '0.11.0'],
    [28, '0.11.1'],
    [29, '0.11.2'],
    [30, '0.11.4'],
    [31, '0.11.8'],
    [32, '0.11.9'],
    [35, '0.11.13'],
    [36, '0.11.14'],
    [38, '0.11.15'],
    [41, '1.0'], // io.js
    [42, '2.0'], // io.js
    [44, '3.0'], // io.js
    [45, '4.0'],
    [46, '5.0'],
    [50, '6.0'],
    [51, '6.5'],
    [54, '7.0'],
    [55, '7.6'],
    [58, '8.0'],
    [60, '8.3'],
    [61, '8.7'],
    [62, '8.10'],
    [66, '10.0'],
    [67, '10.4'],
    [68, '10.9'],
    [70, '11.0'],
    [74, '12.0'],
    [75, '12.5'],
    [76, '12.9'],
    [77, '12.11'],
    [78, '13.0'],
    [79, '13.2'],
    [81, '14.0'],
    [83, '14.5'],
    [84, '14.6'],
    [86, '15.0'],
    [90, '16.0'],
    [91, '16.4'],
  ],
  // https://github.com/mdn/browser-compat-data/blob/master/browsers/deno.json
  ChromeToDeno: [
    [84, '1.0'],
    [85, '1.2'],
    [86, '1.3'],
    [87, '1.4'],
    [88, '1.6'],
    [89, '1.7'],
    [90, '1.8'],
    [91, '1.9'],
    [92, '1.12'],
    [93, '1.13'],
  ],
  // https://github.com/mdn/browser-compat-data/blob/master/browsers/samsunginternet_android.json
  ChromeToSamsung: [
    [18, '1.0'],
    [28, '1.5'],
    [34, '2.0'],
    [38, '3.0'],
    [42, '3.4'],
    [44, '4.0'],
    [51, '5.0'],
    [56, '6.0'],
    [59, '7.0'],
    [63, '8.0'],
    [67, '9.0'],
    [71, '10.0'],
    [75, '11.0'],
    [79, '12.0'],
    [83, '13.0'],
    [87, '14.0'],
    [90, '15.0'],
  ],
  // https://github.com/mdn/browser-compat-data/blob/master/browsers/opera_android.json
  ChromeToOperaMobile: [
    [59, 43],
    [60, 44],
    [61, 45],
    [63, 46],
    [66, 47],
    [69, 48],
    [70, 49],
    [71, 50],
    [72, 51],
    [73, 52],
    [74, 53],
    [76, 54],
    [77, 55],
    [78, 56],
    [80, 57],
    [81, 58],
    [83, 59],
    [85, 60],
    [86, 61],
    [87, 62],
    [89, 63],
    [91, 64],
  ],
  ChromeToAndroid: [
    [9, '3.0'],
    [12, '4.0'],
    [30, '4.4'],
    [33, '4.4.3'],
  ],
  ChromeToElectron: Object.entries(ChromeToElectronModule),
  // https://github.com/mdn/browser-compat-data/blob/master/browsers/safari_ios.json
  SafariToIOS: [
    ['3.0', '1.0'],
    ['3.1', '2.0'],
    ['3.2', '3.0'],
    ['4.0', '3.2'],
    ['4.1', '4.2'],
    ['5.1', '5.1'],
    ['6.0', '6.0'],
    ['6.1', '7.0'],
    ['7.1', '8.0'],
    ['9.0', '9.0'],
    ['9.1', '9.3'],
    ['10.0', '10.0'],
    ['10.1', '10.3'],
    ['11.0', '11.0'],
    ['11.1', '11.3'],
    ['12.0', '12.0'],
    ['12.1', '12.2'],
    ['13.0', '13.0'],
    ['13.1', '13.4'],
    ['14.0', '14.0'],
    ['14.1', '14.5'],
    ['15.0', '15.0'],
  ],
  SafariToPhantomJS: [
    ['4.1', '1.9'],
    ['6.0', '2.0'],
  ],
};
