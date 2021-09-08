
// Para mostrar para o Angular que essa classe é uma classe de componente,
// utilizamos o decorator '@Component'

import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

// Este decorator recebe um objeto
@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];
    _courses: Course[] = [];
    _filterBy: string = '';



    // Faz a injeção
    constructor(private courseService: CourseService) {

    }

    ngOnInit(): void {
        this.retriveAll();
    }

    retriveAll(): void {
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log(err)
        })
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with success')
                this.retriveAll();
            },
            error: err => console.group(err)
        })
    }

    // Filtro de pesquisa
    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => 
            course.name
                .toLocaleLowerCase()
                .indexOf(this._filterBy.toLocaleLowerCase()) > -1
        )
    }

    get filter() {
        return this._filterBy;
    }
}