import { IInputs, IOutputs } from './generated/ManifestTypes';

// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import TextFieldComponent from './TextFieldComponent'

export class TextField implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private context: ComponentFramework.Context<IInputs>;
	private notifyOutputChanged: () => void;
	private container: HTMLDivElement;

	// HTML Related members
	private input: HTMLInputElement;

	// // React related members
	// private value: string;

	public init (context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
	  // Add control initialization code
	  this.context = context;
	  this.notifyOutputChanged = notifyOutputChanged;
	  this.container = container;

	  this.input = document.createElement('input');
	  this.input.onchange = () => {
	  	this.notifyOutputChanged();
	  };
	  this.container.appendChild(this.input);

	  // this.value = context.parameters.sampleProperty.raw ?? '';
	}

	public updateView (context: ComponentFramework.Context<IInputs>): void {
	  // Add code to update control view
	  this.context = context;

	  // HTML Input
	  this.input.value = context.parameters.sampleProperty.raw ?? '';

	  // React Input
	  // this.value = context.parameters.sampleProperty.raw ?? '';
	  // ReactDOM.render(
	  //   React.createElement(TextFieldComponent, {
	  //     value: this.value,
	  //     onChange: (newValue: string) => {
	  //       this.value = newValue
	  //       this.notifyOutputChanged()
	  //     }
	  //   }),
	  //   this.container
	  // );
	}

	public getOutputs (): IOutputs {
	  return {
	    // HTML: Return from the HTML input element
	    sampleProperty: this.input.value

	    // React: Return the value directly from current class
	    //sampleProperty: this.value
	  };
	}

	public destroy (): void {
	  // Add code to cleanup control if necessary

	  //ReactDOM.unmountComponentAtNode(this.container);
	}
}
