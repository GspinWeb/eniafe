const rows = [
  ["EUR/USD","BUY","H1","94%","1.08420","1.08980","ACTIVE"],
  ["GBP/USD","SELL","M30","91%","1.26310","1.25810","ACTIVE"],
  ["XAU/USD","BUY","M15","88%","2328.10","2344.00","WATCH"],
  ["NAS100","BUY","H4","96%","18720","18960","ACTIVE"],
  ["USDJPY","SELL","H1","87%","160.32","159.84","ACTIVE"],
  ["AUDUSD","BUY","M30","83%","0.66210","0.66840","WATCH"],
];

export default function OpportunityTable(){

return(

<div className="tableBox">

<div className="tableHeader">

<h2>Trading Opportunities</h2>

<button>
Refresh
</button>

</div>

<table>

<thead>

<tr>

<th>Pair</th>

<th>Direction</th>

<th>TF</th>

<th>Probability</th>

<th>Entry</th>

<th>Target</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{rows.map((r,index)=>(

<tr key={index}>

<td>{r[0]}</td>

<td className={r[1]}>
{r[1]}
</td>

<td>{r[2]}</td>

<td>{r[3]}</td>

<td>{r[4]}</td>

<td>{r[5]}</td>

<td>

<span className={r[6]}>
{r[6]}
</span>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}