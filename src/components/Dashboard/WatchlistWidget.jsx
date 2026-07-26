import "./WatchlistWidget.css";
import { useState } from "react";

const symbols = [
  { symbol:"EUR/USD", bid:"1.08418", ask:"1.08422", change:"+0.42%" },
  { symbol:"GBP/USD", bid:"1.26308", ask:"1.26312", change:"-0.31%" },
  { symbol:"USD/JPY", bid:"160.220", ask:"160.224", change:"+0.18%" },
  { symbol:"XAU/USD", bid:"2328.10", ask:"2328.40", change:"+1.27%" },
  { symbol:"BTC/USD", bid:"43210", ask:"43218", change:"+2.46%" },
  { symbol:"NAS100", bid:"18720", ask:"18721", change:"+0.85%" },
  { symbol:"US30", bid:"39210", ask:"39214", change:"-0.24%" }
];

export default function WatchlistWidget(){

    const [search,setSearch]=useState("");

    const list=symbols.filter(item=>

        item.symbol
        .toLowerCase()
        .includes(search.toLowerCase())

    );

    return(

        <section className="watchlistWidget">

            <div className="watchHeader">

                <div>

                    <h2>Watchlist</h2>

                    <small>Favourite Markets</small>

                </div>

                <button>

                    +

                </button>

            </div>

            <input
                className="watchSearch"
                placeholder="Search symbol..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />

            <div className="watchTable">

                <div className="watchHeading">

                    <span>Pair</span>

                    <span>Bid</span>

                    <span>Ask</span>

                    <span>Day</span>

                </div>

                {list.map((row)=>(

                    <div
                        key={row.symbol}
                        className="watchRow"
                    >

                        <strong>

                            {row.symbol}

                        </strong>

                        <span>

                            {row.bid}

                        </span>

                        <span>

                            {row.ask}

                        </span>

                        <span
                            className={
                                row.change.startsWith("+")
                                ? "up"
                                : "down"
                            }
                        >

                            {row.change}

                        </span>

                    </div>

                ))}

            </div>

        </section>

    );

}