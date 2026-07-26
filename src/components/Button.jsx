export default function Button({

children,

onClick

}){

return(

<button

className="greenButton"

onClick={onClick}

>

{children}

</button>

);

}