export default function Header() {
    return (

        <header className="header">

            <div className="brand">

                <div className="brandLogo">
                    E
                </div>

                <div>

                    <h2>ENIAFE</h2>

                    <small>
                        Professional Trading Workspace
                    </small>

                </div>

            </div>

            <div className="search">

                <input
                    type="text"
                    placeholder="Search..."
                />

            </div>

            <div className="headerRight">

                <div className="market">
                    EUR/USD
                    <span className="up">
                        ▲
                    </span>
                </div>

                <div className="market">
                    GBP/USD
                    <span className="down">
                        ▼
                    </span>
                </div>

                <div className="market">
                    XAU/USD
                    <span className="up">
                        ▲
                    </span>
                </div>

                <div className="avatar">
                    GS
                </div>

            </div>

        </header>

    );
}