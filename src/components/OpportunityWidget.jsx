import Widget from "./Widget";
import Badge from "./Badge";
import Button from "./Button";

const rows = [
{
pair:"EUR/USD",
direction:"BUY",
tf:"H1",
probability:"94%",
entry:"1.08420",
target:"1.08980",
status:"ACTIVE"
},
{
pair:"GBP/USD",
direction:"SELL",
tf:"M30",
probability:"91%",
entry:"1.26310",
target:"1.25800",
status:"ACTIVE"
},
{
pair:"XAU/USD",
direction:"BUY",
tf:"M15",
probability:"88%",
entry:"2328.10",
target:"2344.00",
status:"WATCH"
},
{
pair:"NAS100",
direction:"BUY",
tf:"H4",
probability:"96%",
entry:"18720",
target:"18960",
status:"ACTIVE"
}
];

export default function OpportunityWidget(){

return(

<Widget title="Trading Opportunities">

<table className="opTable">

<thead>

<tr>

<th>Pair</th>

<th>Dir</th>

<th>TF</th>

<th>Prob.</th>

<th>Entry</th>

<th>Target</th>

<th>Status</th>

<th></th>

</tr>

</thead>

<tbody>

{rows.map((r)=>(

<tr key={r.pair}>

<td>{r.pair}</td>

<td>
<Badge
text={r.direction}
type={r.direction}
/>
</td>

<td>{r.tf}</td>

<td>{r.probability}</td>

<td>{r.entry}</td>

<td>{r.target}</td>

<td>

<Badge
text={r.status}
type={r.status}
/>

</td>

<td>

<Button>

Open

</Button>

</td>

</tr>

))}

</tbody>

</table>

</Widget>

);

}