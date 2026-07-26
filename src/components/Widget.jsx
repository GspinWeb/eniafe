export default function Widget({

title,

children,

height="auto"

}){

return(

<section
className="widget"
style={{height}}
>

<div className="widgetHeader">

<h3>
{title}
</h3>

<div className="widgetTools">

<button>⟳</button>

<button>—</button>

<button>⚙</button>

</div>

</div>

<div className="widgetBody">

{children}

</div>

</section>

);

}