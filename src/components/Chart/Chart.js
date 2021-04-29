import ChartBar from './ChartBar'
import './Chart.css'

function Chart(props) {
    const valueArray = props.dataPoints.map(dataPoint => {return dataPoint.value})
    const totalMax = Math.max(...valueArray)

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
                return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label}></ChartBar>
            })}
        </div>
    )
}

export default Chart