export default function BottomPanels() {

    return(

        <div className="bottomGrid">

            <div className="bottomCard">

                <h3>Recent Activity</h3>

                <ul>

                    <li>EUR/USD opportunity detected.</li>

                    <li>Gold reached projected target.</li>

                    <li>GBP/USD entered watch mode.</li>

                    <li>NASDAQ trend strengthened.</li>

                </ul>

            </div>

            <div className="bottomCard">

                <h3>Market Sentiment</h3>

                <div className="sentiment">

                    <div className="bar">

                        <div
                            className="fill"
                            style={{width:"72%"}}
                        />

                    </div>

                    <span>72% Bullish</span>

                </div>

            </div>

        </div>

    );

}