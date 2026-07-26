import "./NewsFeedWidget.css";

const news = [
  {
    time: "08:10",
    category: "FOREX",
    title: "Dollar strengthens as traders await U.S. inflation figures.",
    sentiment: "Bullish"
  },
  {
    time: "09:25",
    category: "GOLD",
    title: "Gold continues higher after fresh institutional buying.",
    sentiment: "Bullish"
  },
  {
    time: "10:15",
    category: "CRYPTO",
    title: "Bitcoin consolidates after strong weekly advance.",
    sentiment: "Neutral"
  },
  {
    time: "11:40",
    category: "INDICES",
    title: "European markets open mixed ahead of central bank comments.",
    sentiment: "Neutral"
  },
  {
    time: "13:30",
    category: "USD",
    title: "Markets prepare for major economic releases this afternoon.",
    sentiment: "High Impact"
  },
  {
    time: "15:00",
    category: "ENERGY",
    title: "Oil prices edge higher as supply concerns return.",
    sentiment: "Bullish"
  }
];

export default function NewsFeedWidget() {

    return(

        <section className="newsWidget">

            <div className="newsHeader">

                <div>

                    <h2>Market News</h2>

                    <small>
                        Live Financial Headlines
                    </small>

                </div>

                <button>

                    View All

                </button>

            </div>

            <div className="newsList">

                {news.map((item,index)=>(

                    <div
                        key={index}
                        className="newsCard"
                    >

                        <div className="newsTop">

                            <span className="newsTime">

                                {item.time}

                            </span>

                            <span className="newsCategory">

                                {item.category}

                            </span>

                        </div>

                        <div className="newsTitle">

                            {item.title}

                        </div>

                        <div className="newsBottom">

                            <span
                                className={
                                    item.sentiment==="Bullish"
                                    ? "bullish"
                                    : item.sentiment==="High Impact"
                                    ? "impact"
                                    : "neutral"
                                }
                            >

                                {item.sentiment}

                            </span>

                            <button>

                                Read

                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}