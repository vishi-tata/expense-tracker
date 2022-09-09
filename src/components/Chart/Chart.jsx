import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxDataValue = Math.max(...dataValueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxDataValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
