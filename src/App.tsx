import { Chart } from "./Components/Chart";
import { data } from "./Components/Data";
import { data2 } from "./Components/Data1";

export function App() {
  return (
    <div>
      <Chart title={"Poliza Vencidas"} data={data} />
     <Chart title={"Poliza Vendidas"} data={data2} />
    </div>
  );
}

