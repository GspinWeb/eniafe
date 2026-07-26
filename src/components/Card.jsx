export default function Card({

title,

value,

footer,

color="green"

}){

return(

<div className="summaryCard">

<div className="summaryTitle">

{title}

</div>

<div className="summaryValue">

{value}

</div>

<div className={color}>

{footer}

</div>

</div>

);

}