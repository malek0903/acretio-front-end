import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ColorsService } from '../../../shared/colors/colors.service';
import { AnnotationConstraints, Connector, ConnectorConstraints, ConnectorModel, DiagramComponent, DiagramConstraints, FlowShapeModel, ICollectionChangeEventArgs, IConnectionChangeEventArgs, IDragEnterEventArgs, MarginModel, NodeModel, OrthogonalSegmentModel, PaletteModel, PointModel, PointPortModel, SnapSettingsModel, StrokeStyleModel, SymbolInfo, TextStyleModel } from '@syncfusion/ej2-angular-diagrams';

import { paletteIconClick } from '../script/diagram-common';
import { ExpandMode } from '@syncfusion/ej2-navigations';
@Component({
    selector: 'app-dashboardv3',
    templateUrl: './dashboardv3.component.html'
})
export class Dashboardv3Component  {
     //Diagram Properties
  public diagram: DiagramComponent;
  public terminator: FlowShapeModel = { type: 'Flow', shape: 'Terminator' };
  public process: FlowShapeModel = { type: 'Flow', shape: 'Process' };
  public decision: FlowShapeModel = { type: 'Flow', shape: 'Decision' };
  public data: FlowShapeModel = { type: 'Flow', shape: 'Data' };
  public directdata: FlowShapeModel = { type: 'Flow', shape: 'DirectData' };

  public margin: MarginModel = { left: 25, right: 25 };
  public connAnnotStyle: TextStyleModel = { fill: 'white' };
  public strokeStyle: StrokeStyleModel = { strokeDashArray: '2,2' };

  public segments: OrthogonalSegmentModel = [{ type: 'Orthogonal', direction: 'Top', length: 120 }];
  public segments1: OrthogonalSegmentModel = [
    { type: 'Orthogonal', direction: 'Right', length: 100 }
  ];

  public nodeDefaults(node: NodeModel): NodeModel {
    let obj: NodeModel = {};
    if (obj.width === undefined) {
      obj.width = 145;
    } else {
      let ratio: number = 100 / obj.width;
      obj.width = 100;
      obj.height *= ratio;
    }
    obj.style = { fill: '#357BD2', strokeColor: 'white' };
    obj.annotations = [{ style: { color: 'white', fill: 'transparent' } }];
    obj.ports = getPorts(node);
    return obj;
  }
  public connDefaults(obj: Connector): void {
    if (obj.id.indexOf('connector') !== -1) {
      obj.type = 'Orthogonal';
      obj.targetDecorator = { shape: 'Arrow', width: 10, height: 10 };
    }
  }
  public interval: number[] = [
    1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25,
    9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75
  ];

  public snapSettings: SnapSettingsModel = {
    horizontalGridlines: { lineColor: '#e0e0e0', lineIntervals: this.interval },
    verticalGridlines: { lineColor: '#e0e0e0', lineIntervals: this.interval }
  };

  public dragEnter(args: IDragEnterEventArgs): void {
    let obj: NodeModel = args.element as NodeModel;
    console.log("node :",obj)
    if (obj instanceof Node) {
      let oWidth: number = obj.width;
      let oHeight: number = obj.height;
      let ratio: number = 100 / obj.width;
      obj.width = 100;
      obj.height *= ratio;
      obj.offsetX += (obj.width - oWidth) / 2;
      obj.offsetY += (obj.height - oHeight) / 2;
      obj.style = { fill: '#357BD2', strokeColor: 'white' };
    }
  }

  //SymbolPalette Properties
  public symbolMargin: MarginModel = { left: 15, right: 15, top: 15, bottom: 15 };
  public expandMode: ExpandMode = 'Multiple';
  //Initialize the flowshapes for the symbol palatte
  private flowshapes: NodeModel[] = [
    { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
    { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
    { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
    
  ];

  //Initializes connector symbols for the symbol palette
  private connectorSymbols: ConnectorModel[] = [
  
    {
      id: 'Link21',
      type: 'Straight',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: 'Arrow' },
      style: { strokeWidth: 1 }
    },
   
  ];

  public palettes: PaletteModel[] = [
    {
      id: 'flow',
      expanded: true,
      symbols: this.flowshapes,
      iconCss: 'shapes',
      title: 'Flow Shapes'
    },
    {
      id: 'connectors',
      expanded: true,
      symbols: this.connectorSymbols,
      iconCss: 'shapes',
      title: 'Connectors'
    }
  ];

  public getSymbolInfo(symbol: NodeModel): SymbolInfo {
    return { fit: true };
  }

  public getSymbolDefaults(symbol: NodeModel): void {
    if (symbol.id === 'Terminator' || symbol.id === 'Process') {
      symbol.width = 80;
      symbol.height = 40;
    } else if (
      symbol.id === 'Decision' ||
      symbol.id === 'Document' ||
      symbol.id === 'PreDefinedProcess' ||
      symbol.id === 'PaperTap' ||
      symbol.id === 'DirectData' ||
      symbol.id === 'MultiDocument' ||
      symbol.id === 'Data'
    ) {
      symbol.width = 50;
      symbol.height = 40;
    } else {
      symbol.width = 50;
      symbol.height = 50;
    }
  }

  

  public diagramCreate(args: Object): void {
    paletteIconClick();
  }
  
  public connectionChange(args: IConnectionChangeEventArgs): void {    
      if (args.state === 'Changed') {
        debugger
        let connector = args.connector;
        //Get from/to node details using sourceid/targetId while changing the connection...
      }
  }
  public collectionChange(args: ICollectionChangeEventArgs): void {
      if(args.state === 'Changed' && args.type === 'Addition'){
        
        let node = args.element;
        //Get node/connector details from here while adding the node/connectors...
      }
  }
}

function getPorts(obj: NodeModel): PointPortModel[] {
  let ports: PointPortModel[] = [
    { id: 'port1', shape: 'Circle', offset: { x: 0, y: 0.5 } },
    { id: 'port2', shape: 'Circle', offset: { x: 0.5, y: 1 } },
    { id: 'port3', shape: 'Circle', offset: { x: 1, y: 0.5 } },
    { id: 'port4', shape: 'Circle', offset: { x: 0.5, y: 0 } }
  ];
  return ports;
}