import Bookmark from '../Bookmark/Bookmark.jsx'
import Body from '../Body.jsx'
import Bodyseafood from '../Bodyseafood.jsx'
import Bodyveg from '../Bodyveg.jsx'
import Toppings from '../Toppings.jsx'

export function Menu(){
    return(
        <>
         <Bookmark/>
         <Body/>
         <Bodyseafood/>
         <Bodyveg/>
         <Toppings/>
        </>
    );
}
