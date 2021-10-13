

const vhUnit = window.innerHeight / 100;

const Theme = {
    mainRed : '#e1262a;',
    mainBlack : '#111;',
    mainGray : '#232323;',
    mainWhite : '#fff;',
    pureBlack : '#000',
    textRedShadow : '-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff, -2px -2px 0 #232323, 2px -2px 0 #232323, -2px 2px 0 #232323, 2px 2px 0 #232323;',
    textWhiteShadow : '-1px -1px 0 #e1262a, 1px -1px 0 #e1262a, -1px 1px 0 #e1262a, 1px 1px 0 #e1262a, -2px -2px 0 #232323, 2px -2px 0 #232323, -2px 2px 0 #232323, 2px 2px 0 #232323;',
    
    // Mixin
    isActive : (ifVal, elseVal) => props => props.active === 'active' ? ifVal : elseVal,
    isVh : (unit = 100) => `height : ${ Math.floor(unit * vhUnit) }px `,
    isCenter : (top = null, left = null) => `position: absolute; top: ${top}%; ${ left != null ?  `left: ${left}%` : ';' }; transform: translateY(-${top}%) ${ left != null ? 'translateX(-50%)' : ';' }; text-align: center; `,
    isImagin : `content: ''; display: block; position: absolute;`,
    isIR : 'text-indent: -9999rem; color: transparent; overflow: hidden;',
    // isActiveColor : `color: ${props => props.active === 'active' ? props.theme.mainRed : props.theme.mainWhite }; text-shadow : ${props => props.active === 'active' ? props.theme.textRedShadow : props.theme.textWhiteShadow }; `,
    isColor : (col = 'white') => `color : ${ col === 'white' ? Theme.mainWhite : col === 'black' ?  Theme.mainBlack : col === 'red' ? Theme.mainRed : 'transparent;' } text-shadow : ${ col === 'white' ? Theme.textWhiteShadow : col === 'black' ?Theme.textRedShadow : col === 'red' ? Theme.textRedShadow : '0;'} `,

  }
export default Theme;