import "./TerminalHeader.css";
import { useEffect, useState } from "react";

export default function TerminalHeader() {

    const [time,setTime]=useState(new Date());

    useEffect(()=>{

        const timer=setInterval(()=>{

            setTime(new Date());

        },1000);

        return()=>clearInterval(timer);

    },[]);

    const ticker=[

        {symbol:"EUR/USD",price:"1.08422",change:"+0.24%"},
        {symbol:"GBP/USD",price:"1.26311",change:"-0.18%"},
        {symbol:"USD/JPY",price:"160.224",change:"+0.12%"},
        {symbol:"XAU/USD",price:"2328.10",change:"+1.43%"},
        {symbol:"BTC/USD",price:"43218",change:"+2.11%"},
        {symbol:"NAS100",price:"18720",change:"+0.74%"},
        {symbol:"US30",price:"39214",change:"+0.34%"}
    ];

    return(

        <header className="terminalHeader">

            <div className="terminalLeft">

                <div className="terminalLogo">

                    E

                </div>

                <div>

                    <h2>

                        ENIAFE

                    </h2>

                    <small>

                        Professional Trading Workspace

                    </small>

                </div>

            </div>

            <div className="tickerWrapper">

                <div className="ticker">

                    {[...ticker,...ticker].map((item,index)=>(

                        <div
                            key={index}
                            className="tickerItem"
                        >

                            <strong>

                                {item.symbol}

                            </strong>

                            <span>

                                {item.price}

                            </span>

                            <span
                                className={
                                    item.change.startsWith("+")
                                    ? "up"
                                    : "down"
                                }
                            >

                                {item.change}

                            </span>

                        </div>

                    ))}

                </div>

            </div>

            <div className="terminalRight">

                <div className="terminalStatus">

                    <span className="liveDot"></span>

                    LIVE

                </div>

                <div className="terminalClock">

                    {time.toLocaleTimeString()}

                </div>

            </div>

        </header>

    );

}