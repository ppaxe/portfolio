const vhUnit = window.innerHeight / 100,
      responsiveSizes = {
          mobile : '415px',
          tablet :  '769px',
          laptop : '1081px',
      },
      deviceQuery = {
          mobile : `screen and (max-width : ${responsiveSizes.mobile})`,
          tablet : `screen and (max-width : ${responsiveSizes.tablet})`,
          laptop : `screen and (max-width : ${responsiveSizes.laptop})`,
      }

const Theme = {

    mainLGray : '#D9D9D9',
    mainGray : '#BFBFBF',
    mainDGray : '#A6A6A6',
    mainBlue : '#4159b2',
    mainPoint : '#15A0A2',
    mainRed : '#f2594b',
    mainGreen : '#b5cf00',
    mainYellow : '#ffc400',
    mainWhite : '#F2F2F2',
    mainBlack : '#404040',
    deviceQuery
}

export default Theme;