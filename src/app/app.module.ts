import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { SmartDumbSplitModule } from './smart-dumb/split/split.module';
import { SmartDumbCombinedModule } from './smart-dumb/combined/combined.module';
import { ComponentTestingModule } from './component-testing/component-testing.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { RouterReuseModule } from './router-reuse/router-reuse.module';
import { ComponentScopeModule } from './component-scope/component-scope.module';
import { ComponentChilrenModule } from './component-children/component-chilren.module';
import { AsyncModule } from './async/async.module';
import { DynamicComponentCreationModule } from './dynamic-component-creation/dynamic-component-creation.module';
import { ControlValueAccessorModule } from './control-value-accessor/control-value-accessor.module';
import { ObservablesModule } from './observables/observables.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		AppRouting,
		NgbModule,
		AsyncModule,
		ComponentChilrenModule,
		ComponentTestingModule,
		ComponentScopeModule,
		ContentProjectionModule,
		ControlValueAccessorModule,
		DynamicComponentCreationModule,
		ObservablesModule,
		RouterReuseModule,
		SmartDumbCombinedModule
		// SmartDumbSplitModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

