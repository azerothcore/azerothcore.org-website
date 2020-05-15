import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
  {
    id: 'pr-demo',
    label: 'Pull Requests & Demo Server',
    value: 492,
  },
  {
    id: 'domain',
    label: 'Domain-related costs',
    value: 100,
  },
  {
    id: 'extra',
    label: 'Extra budget',
    value: 1500,
  },
];

const DonationPieChart: React.FC = () => (
  <>
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      startAngle={10}
      endAngle={260}
      padAngle={0.7}
      cornerRadius={3}
      colors={['#ca0000ba', '#f47560', '#2d41a68a']}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      radialLabel="label"
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
      animate={true}
    />
    <style jsx global>{`
      svg > g {
        transform: translate(20px, 40px);
      }
      svg text {
        font-size: 12px;
      }
    `}</style>
  </>
);

export default DonationPieChart;
