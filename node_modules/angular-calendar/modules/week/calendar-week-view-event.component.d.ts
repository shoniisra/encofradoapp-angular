import { EventEmitter, TemplateRef } from '@angular/core';
import { WeekViewAllDayEvent, DayViewEvent, WeekViewHourColumn } from 'calendar-utils';
import { PlacementArray } from 'positioning';
export declare class CalendarWeekViewEventComponent {
    weekEvent: WeekViewAllDayEvent | DayViewEvent;
    tooltipPlacement: PlacementArray;
    tooltipAppendToBody: boolean;
    tooltipDisabled: boolean;
    tooltipDelay: number | null;
    customTemplate: TemplateRef<any>;
    eventTitleTemplate: TemplateRef<any>;
    eventActionsTemplate: TemplateRef<any>;
    tooltipTemplate: TemplateRef<any>;
    column: WeekViewHourColumn;
    eventClicked: EventEmitter<any>;
}
