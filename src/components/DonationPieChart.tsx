import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { useMediaQuery } from 'react-responsive';

/**
 * Decimal adjustment of a number.
 *
 * @param {string}  type  The type of adjustment.
 * @param {number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
}

const chatTheme = {
  labels: {
    text: {
      fontSize: 12,
    },
  },
};

const data = [
  {
    id: 'pr-demo',
    label: 'Demo Server & other maintenance costs',
    value: 492,
  },
  {
    id: 'domain',
    label: 'Domain-related costs',
    value: 100,
  },
  {
    id: 'dev-budget',
    label: 'Development budget',
    value: 1500,
  },
];

const valueTotal = data.reduce((a, b) => a + b.value, 0);

const colors = ['#ca0000ba', '#f47560', '#2d41a68a'];

const DonationPieChart: React.FC = () => {
  const smallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="chart-wrapper">
      <div className="chart-container">
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={colors}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          radialLabel="label"
          tooltipFormat={value =>
            `${decimalAdjust('round', (value * 100) / valueTotal, -1)}%`
          }
          radialLabelsSkipAngle={10}
          enableRadialLabels={smallScreen ? false : true}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: 'color' }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          sliceLabel={item =>
            `${decimalAdjust('round', (item.value * 100) / valueTotal, -1)}%`
          }
          animate={true}
          theme={chatTheme}
        />
      </div>
      {smallScreen && (
        <div className="custom-legend-container">
          {data.map((obj, index) => (
            <div className="legend-item" key={obj.id}>
              <div
                className="label-box"
                style={{ backgroundColor: colors[index] }}
              />
              <div>{obj.label}</div>
            </div>
          ))}
        </div>
      )}
      <style jsx>
        {`
          .chart-wrapper {
            margin-bottom: 20px;
          }
          .chart-container {
            height: 400px;
          }
          .custom-legend-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .legend-item {
            padding: 0 10px;
            display: flex;
            align-items: center;
          }
          .label-box {
            width: 10px;
            height: 10px;
            margin-right: 5px;
          }
          @media (max-width: 992px) {
            .chart-container {
              height: 350px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default DonationPieChart;
