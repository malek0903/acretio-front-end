import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { SharedModule } from '../../shared/shared.module';

import { Dashboardv1Component } from './dashboardv1/dashboardv1.component';
import { Dashboardv2Component } from './dashboardv2/dashboardv2.component';
import { Dashboardv3Component } from './dashboardv3/dashboardv3.component';
/****************************************************************************** */
import { DialogAllModule } from '@syncfusion/ej2-angular-popups';

import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';

import { AccumulationAnnotationService, AccumulationDataLabelService, AccumulationLegendService, AccumulationTooltipService, ChartAllModule } from '@syncfusion/ej2-angular-charts';

import { DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule } from '@syncfusion/ej2-angular-diagrams';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';

import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { NumericTextBoxModule, ColorPickerModule, UploaderModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import { ButtonModule, CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
/********************************************************************************* */

const routes: Routes = [
    { path: '', redirectTo: 'dashboard' },
    { path: 'v1', component: Dashboardv1Component },
    { path: 'v2', component: Dashboardv2Component },
    { path: 'v3', component: Dashboardv3Component },
];

@NgModule({
    imports: [
        DiagramAllModule,
        ChartAllModule,
        GridAllModule,
        SymbolPaletteAllModule,
        OverviewAllModule,
        ButtonModule,
        ColorPickerModule,
        DateRangePickerModule,
        CheckBoxModule,
        AccumulationChartModule,
        ToolbarModule,
        DropDownButtonModule,
        UploaderModule,
        CircularGaugeModule,
        DropDownListAllModule,
        ListViewAllModule,
        DialogAllModule,
        TextBoxModule,
        RadioButtonModule,
        MultiSelectModule,
        NumericTextBoxModule,
        SharedModule,
        DiagramModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        Dashboardv1Component,
        Dashboardv2Component,
        Dashboardv3Component
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardModule { }
