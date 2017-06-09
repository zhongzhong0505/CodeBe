import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

declare var mxClient: any;
declare var mxGraph: any;
declare var mxUtils: any;
declare var mxEvent: any;
declare var mxRubberband: any;
declare var mxVertexHandler: any;
declare var mxCylinder: any;
declare var mxRectangle: any;
declare var mxCellRenderer: any;
declare var mxHandle: any;
declare var mxPoint: any;
declare var mxConnectionHandler: any;
declare var mxImage: any;
declare var mxToolbar: any;
declare var mxDivResizer: any;
declare var mxGraphModel: any;
declare var mxKeyHandler: any;
declare var mxCell: any;
declare var mxGeometry: any;

@Component({
  selector: 'app-mxgraph-demo',
  templateUrl: './mxgraph-demo.component.html',
  styleUrls: ['./mxgraph-demo.component.css']
})
export class MxgraphDemoComponent implements OnInit {
  @ViewChild('tbContainer') tbContainer: ElementRef;
  @ViewChild('container') container: ElementRef;
  constructor() { }

  ngOnInit() {
    this.test();
  }
  test(){
    let me = this;
			// Checks if browser is supported
			if (!mxClient.isBrowserSupported())
			{
				// Displays an error message if the browser is
				// not supported.
				mxUtils.error('Browser is not supported!', 200, false);
			}
			else
			{
				// Defines an icon for creating new connections in the connection handler.
				// This will automatically disable the highlighting of the source vertex.
				mxConnectionHandler.prototype.connectImage = new mxImage('/assets/mxgraph/src/images/connector.gif', 16, 16);

				// Creates the div for the toolbar
				var tbContainer = this.tbContainer.nativeElement;
				
				// Creates new toolbar without event processing
				var toolbar = new mxToolbar(tbContainer);
				toolbar.enabled = false
				
				// Creates the div for the graph
				var container = this.container.nativeElement;

				// Workaround for Internet Explorer ignoring certain styles
				if (mxClient.IS_QUIRKS)
				{
					document.body.style.overflow = 'hidden';
					new mxDivResizer(tbContainer);
					new mxDivResizer(container);
				}
	
				// Creates the model and the graph inside the container
				// using the fastest rendering available on the browser
				var model = new mxGraphModel();
				var graph = new mxGraph(container, model);

				// Enables new connections in the graph
				graph.setConnectable(true);
				graph.setMultigraph(false);

				// Stops editing on enter or escape keypress
				var keyHandler = new mxKeyHandler(graph);
				var rubberband = new mxRubberband(graph);
				
				var addVertex = function(icon, w, h, style)
				{
					var vertex = new mxCell(null, new mxGeometry(0, 0, w, h), style);
					vertex.setVertex(true);
				
					var img = me.addToolbarItem(graph, toolbar, vertex, icon);
					img.enabled = true;
					
					graph.getSelectionModel().addListener(mxEvent.CHANGE, function()
					{
						var tmp = graph.isSelectionEmpty();
						mxUtils.setOpacity(img, (tmp) ? 100 : 20);
						img.enabled = tmp;
					});
				};
				
				addVertex('/assets/mxgraph/src/images/rectangle.gif', 100, 40, '');
				addVertex('/assets/mxgraph/src/images/rounded.gif', 100, 40, 'shape=rounded');
				addVertex('/assets/mxgraph/src/images/ellipse.gif', 40, 40, 'shape=ellipse');
				addVertex('/assets/mxgraph/src/images/rhombus.gif', 40, 40, 'shape=rhombus');
				addVertex('/assets/mxgraph/src/images/triangle.gif', 40, 40, 'shape=triangle');
				addVertex('/assets/mxgraph/src/images/cylinder.gif', 40, 40, 'shape=cylinder');
				addVertex('/assets/mxgraph/src/images/actor.gif', 30, 40, 'shape=actor');
			}
		}

	addToolbarItem(graph, toolbar, prototype, image)
		{
			// Function that is executed when the image is dropped on
			// the graph. The cell argument points to the cell under
			// the mousepointer if there is one.
			var funct = function(graph, evt, cell, x, y)
			{
				graph.stopEditing(false);

				var vertex = graph.getModel().cloneCell(prototype);
				vertex.geometry.x = x;
				vertex.geometry.y = y;
					
				graph.addCell(vertex);
				graph.setSelectionCell(vertex);
			}
			
			// Creates the image which is used as the drag icon (preview)
			var img = toolbar.addMode(null, image, function(evt, cell)
			{
				var pt = this.graph.getPointForEvent(evt);
				funct(graph, evt, cell, pt.x, pt.y);
			});
			
			// Disables dragging if element is disabled. This is a workaround
			// for wrong event order in IE. Following is a dummy listener that
			// is invoked as the last listener in IE.
			mxEvent.addListener(img, 'mousedown', function(evt)
			{
				// do nothing
			});
			
			// This listener is always called first before any other listener
			// in all browsers.
			mxEvent.addListener(img, 'mousedown', function(evt)
			{
				if (img.enabled == false)
				{
					mxEvent.consume(evt);
				}
			});
						
			mxUtils.makeDraggable(img, graph, funct);
			
			return img;
  }
}
