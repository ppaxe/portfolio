import Utils from './../utils/Utils';

const vhUnit = window.innerHeight / 100,
      user = Utils.checkUser();

const Theme = {

    mainLGray : '#D9D9D9',
    mainGray : '#BFBFBF',
    mainDGray : '#A6A6A6',
    mainBlue : '#105187',
    mainPoint : '#15A0A2',
    mainRed : '#C33325',
    mainGreen : '#CBD72C',
    mainYellow : '#F19722',
    mainWhite : '#F2F2F2',
    mainBlack : '#404040',
    
    isVh : (unit = 100) => {

        let deviceInnerHeight;

        user.os &&
            user.os === 'ios' ? 
                deviceInnerHeight = `${( Math.floor(unit * vhUnit) )}px` :
                deviceInnerHeight = `${unit}vh`;

        return `height : ${deviceInnerHeight}`;

    }

}

export default Theme;