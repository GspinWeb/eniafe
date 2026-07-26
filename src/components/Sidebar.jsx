const menus = [

    "Dashboard",

    "Scanner",

    "Markets",

    "Opportunities",

    "Watchlist",

    "News",

    "Calendar",

    "Portfolio",

    "Journal",

    "Settings"

];

export default function Sidebar() {

    return (

        <aside className="sidebar">

            {menus.map((item, index) => (

                <button

                    key={item}

                    className={index === 0 ? "active" : ""}

                >

                    {item}

                </button>

            ))}

        </aside>

    );

}