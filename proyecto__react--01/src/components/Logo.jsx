
import './Logo.css' ;

export default function Logo (){

    const LogoImg = {
            outer : {
                height : '32px' ,
                width : '132px'
            } ,
            inner : {
                height : '24px' ,
                width : '124px'
            } ,
            image : {
                path : './assets/logo.svg' ,
                alt : 'Logo Sunnyside'
            }

        };

    return (
        <figure className='Logo' height={ LogoImg.outer.height } width={ LogoImg.outer.width } >
            <img
                className="Logo__img"
                height={ LogoImg.inner.height }
                width={ LogoImg.inner.width }
                src={ LogoImg.image.path }
                alt={ LogoImg.image.alt }
            />
        </figure>
    )

} ;