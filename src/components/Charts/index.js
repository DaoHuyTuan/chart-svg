import React from "react"
import "./style.scss"
class Chart extends React.Component {
    
    render() {
        const heightSVG = 500;
        const widthColums = 45;
        return (
	<>
          <svg className="charts">
          <g className="column" >
          <rect className="column__rect" x={0} y={heightSVG - 120} height="120"></rect>
          <text className="column__text" x={0} y={heightSVG - 130} > 120</text>
          </g>
          <g className="column">
          <rect className="column__rect" x={widthColums} y={heightSVG - 250} height="250"></rect>
          <text className="column__text" x={widthColums} y={heightSVG - 280} >250</text>
          </g>
          <g className="column">
          <rect className="column__rect" x={widthColums * 2} y={heightSVG - 400} height="400"></rect>
          <text className="column__text" x={widthColums * 2} y={heightSVG - 430}  >400</text>
          </g>
          </svg>
	  <svg className="charts">
          <g className="column" >
          <rect className="column__rect" x={0} y={heightSVG - 120} height="120"></rect>
          <text className="column__text" x={0} y={heightSVG - 130} > 120</text>
          </g>
          <g className="column">
          <rect className="column__rect" x={widthColums} y={heightSVG - 250} height="250"></rect>
          <text className="column__text" x={widthColums} y={heightSVG - 280} >250</text>
          </g>
          <g className="column">
          <rect className="column__rect" x={widthColums * 2} y={heightSVG - 400} height="400"></rect>
          <text className="column__text" x={widthColums * 2} y={heightSVG - 430}  >400</text>
          </g>
          </svg>
</>
        )
    }
}

export default Chart;
