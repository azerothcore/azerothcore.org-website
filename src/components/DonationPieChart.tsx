import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';

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

const DonationPieChart: React.FC = () => (
  <>
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
      tooltipFormat={value => `${Math.round((value * 100) / valueTotal)}%`}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: 'color' }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      sliceLabel={item => `${Math.round((item.value * 100) / valueTotal)}%`}
      animate={true}
      theme={chatTheme}
    />
  </>
);

export default DonationPieChart;
