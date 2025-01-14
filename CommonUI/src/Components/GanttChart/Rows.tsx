import React, { FunctionComponent, ReactElement } from 'react';
import { GanttChartBar } from './Bar/Index';
import Row, { GanttChartRow } from './Row/Index';

export interface ComponentProps {
    rows: Array<GanttChartRow>;
    bars: GanttChartBar[];
    chartTimelineStart: number;
    chartTimelineEnd: number;
    timelineWidth: number;
}

const Rows: FunctionComponent<ComponentProps> = (
    props: ComponentProps
): ReactElement => {
    return (
        <div className="w-full border-b-2 border-gray-400">
            {props.rows.map((row: GanttChartRow, i: number) => {
                return (
                    <Row
                        chartTimelineStart={props.chartTimelineStart}
                        chartTimelineEnd={props.chartTimelineEnd}
                        timelineWidth={props.timelineWidth}
                        isLastRow={i === props.rows.length - 1}
                        key={row.id}
                        row={row}
                        bars={props.bars.filter((bar: GanttChartBar) => {
                            return bar.rowId === row.id;
                        })}
                    />
                );
            })}
        </div>
    );
};

export default Rows;
