// eslint-disable-next-line
import styled from 'styled-components';

function BrowserModal(props){

    // variables styled-components

    const Browser = styled.div`
    
        position: fixed;
        width: 90%; 
        ${ props => props.theme.isVh(80) };
        background: ${ props => props.theme.mainLGray };
        border-radius: 1rem;
        border: 2px solid ${ props => props.theme.mainBlack };
        overflow: hidden;
        box-sizing : border-box;
        
        ${
            props.view[props.index].viewSizing ?
            `max-width: 480px; max-height: 60px; transform: inherit; right: 2rem; bottom: calc(25% + ${ ( props.viewType -1 ) * 60}px); z-index : ${ 9999 - (props.viewType + 1) }; ` :
            `max-width: 980px; max-height: 760px; transform: translate(-50%, -50%); top: calc(50% + ${ ( props.viewType -1 ) * 60 }px); left: calc(50% + ${ ( props.viewType -1 ) * 60 }px); z-index : ${ 9999 + (props.viewType + 1) };`
        }

        @media ${ props => props.theme.deviceQuery.mobile }{

            width: 100%;
            height: 100%;
            max-width: inherit;
            max-height: inherit;
            border-radius: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }

    `;

    const BrowserTop = styled.div`
    
        position:relative;
        overflow:hidden;
        display: block;
        clear: both;
        height: auto;
        padding: 1rem;
        justify-content: space-between;
        border-bottom: 2px solid ${ props => props.theme.mainBlack };
        box-sizing: border-box;

    `;

    const TopBtnWrap = styled.div`

        overflow: hidden;
        margin-right: 10px;
        float: left;
        display:flex;

    `;

    const BrowserButton = styled.button`
    
        position: relative;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        background:
        ${ 
        
        props => props.action === 'close' ?
            props.theme.mainRed : 
            props.action === 'minim' ? props.theme.mainYellow :
            props.theme.mainGreen

        };
        display: block;
        overflow: hidden;
        text-indent : -9999rem;
        color: transparent;
        font-size: 0px;
        border-radius: 50%;
        box-sizing:border-box;
        border: 2px solid ${ props => props.theme.mainBlack };
        cursor: pointer;

        
        @media ${props => props.theme.deviceQuery.mobile}{

            ${ props => props.action !== 'close' && 'display : none'}

        }
        &:last-of-type{
            margin: none;
        }


        &:before, &:after{

            display:block;
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 1px;
            width: 2px;
            height: 20px;
            background: ${ props => props.theme.mainBlack };
            box-sizing: border-box;
        }
        &:before{
            
            ${
                props => props.action === 'close' ?
                'transform:translate(-50%, -50%) rotate(45deg)' :
                props.action === 'minim' ?
                'transform:translate(-50%, -50%) rotate(90deg)' :
                'transform:translate(-50%, -50%); width: 20px; background: transparent; border : 2px solid #404040;'
            }
        }
        &:after{

            ${
                props => props.action === 'close' ?
                'transform:translate(-50%, -50%) rotate(-45deg)' :
                props.action === 'minim' ?
                'transform:translate(-50%, -50%) rotate(90deg)' :
                'transform:translate(-50%, -50%); width: 20px; background: transparent; border : 2px solid #404040;'
            }

        }

    `;

    const TopLocationWrap = styled.div`
    
        position: relative;
        float: right;
        height: 40px;
        width: calc(100% - 160px);
        text-align: right;

        ${
            props.view[props.index].viewSizing && 'display:none'
        }

    `;

    const LocationBar = styled.p`
    
        display:inline-block;
        height: 100%;
        text-align: left;
        text-indent: 1.5rem;
        font-size: 1.6rem;
        line-height: 40px;
        border-radius: 20px;
        border: 2px solid ${ props => props.theme.mainBlack };
        width: 100%;
        max-width: 400px;
        background: ${ props => props.theme.mainWhite };
    `;

    const BrowserSection = styled.div`

        position: relative;
        height: calc(100% - (40px + 6rem));
        background: ${props => props.theme.mainWhite};
        overflow-y: scroll;
        padding: 2rem;

    `;

    ;

    return(
        <>
            <Browser role="dialog" aria-modal="true" aria-hidden={ props.view[props.index].viewSizing ? 'true' : 'false' } aria-expanded={ props.view[props.index].viewSizing ? 'false' : 'true' } aria-labelledby="modalTitle" aria-describedby="modalDescription" >
                <BrowserTop>
                    <TopBtnWrap>
                        <BrowserButton type="button" title="팝업 닫기" action="close" onClick={() => {
                            let popModal = [...props.view];

                            popModal[props.index].active = false;

                            props.setView(popModal);
                        }}>
                            팝업 닫기
                        </BrowserButton>
                        <BrowserButton type="button" title="팝업 최소화" onClick={() => { 
                            let sizeModal = [...props.view];

                            sizeModal[props.index].viewSizing = !sizeModal[props.index].viewSizing;

                            props.setView(sizeModal);
                         }} action="minim">
                           팝업 최소화
                        </BrowserButton>
                        <BrowserButton type="button" title="새 창 열림" action="maxim" onClick={() => props.view[props.index].redirect}>
                            { props.view[props.index].title } 새 창 열기
                        </BrowserButton>
                    </TopBtnWrap> 
                    <TopLocationWrap>
                        <LocationBar id="modalTitle">
                         { props.view[props.index].kor }
                        </LocationBar>
                    </TopLocationWrap>
                </BrowserTop>
                <BrowserSection id="modalDescription">
                    
                </BrowserSection>
            </Browser>
        </>
    )

}

export default BrowserModal;