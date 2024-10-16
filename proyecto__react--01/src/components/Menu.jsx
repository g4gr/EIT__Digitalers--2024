
import './Menu.css'  ;

export default function Menu (){

    const ItemsNMenu = [
        {
            id : 0 ,
            path : '#URI--about' ,
            item : 'About'
        } ,
        {
            id : 1 ,
            path : '#URI--services' ,
            item : 'Services'
        } ,
        {
            id : 2 ,
            path : '#URI--proyect' ,
            item : 'Proyects'
        }
    ] ;

    const ItemsMenuLinks = ItemsNMenu.map( (e , id ) => 
        <li className='menu__item' key={ id } >
            <a className='menu__item--link' href={ e.path } target="_self" rel="noopener noreferrer">{ e.item }</a>
        </li>

    )

    return (
        <menu className='menu' >
            { ItemsMenuLinks }
        </menu>
    )

}