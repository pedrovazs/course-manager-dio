import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        RouterModule.forChild([
            {
                path: 'courses',
                component: CourseListComponent
                },
                {
                // Colocando um parâmetro na rota (PathVariable)
                path: 'courses/info/:id',
                component: CourseInfoComponent
            },
        ])
    ]
})
export class CourseModule {

}