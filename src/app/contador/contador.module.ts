import { NgModule } from "@angular/core";
import { ContadorComponent } from "./constador/contador.component";


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})

export class ContadorModule {}