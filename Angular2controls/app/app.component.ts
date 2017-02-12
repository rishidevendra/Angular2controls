import { Component, AnimationTransitionEvent } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [TabsComponent]
})

export class AppComponent {
}