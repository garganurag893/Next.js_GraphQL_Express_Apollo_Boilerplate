import {widthRatio} from './stylesheet';

const themebackground1 = '#c06c84';
const themebackground2 = '#6c5b7b';
const themebackground3 = '#355c7d';

const styleGuide = {
  secondaryColor: '#c06c84',
  primaryColor: '#355c7d',
  themebackground: themebackground1,
  textColor: 'white',
  inputTextColor: 'black',
  bigShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  gradient: [themebackground1, themebackground2, themebackground3],
  warningToast: {
    backgroundColor: '#f0ad4e',
    paddingHorizontal: widthRatio * 50,
  },
  dangerToast: {
    backgroundColor: '#d9534f',
    paddingHorizontal: widthRatio * 50,
  },
  successToast: {
    backgroundColor: '#5cb85c',
    paddingHorizontal: widthRatio * 50,
  },
  toastTextStyle: {color: 'white', fontSize: 17},
};

export default styleGuide;
