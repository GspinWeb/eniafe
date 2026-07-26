import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";
import OpportunityTable from "../components/OpportunityTable";
import RightSidebar from "../components/RightSidebar";
import BottomPanels from "../components/BottomPanels";

export default function Dashboard(){

return(

<div className="app">

<Header/>

<div className="body">

<Sidebar/>

<main className="workspace">

<section className="welcome">

<h1>ENIAFE</h1>

<p>Professional Trading Workspace</p>

</section>

<SummaryCards/>

<OpportunityTable/>

<BottomPanels/>

</main>

<RightSidebar/>

</div>

</div>

);

}