export class CourseValidation{
    id: string;
    title: string;
    watchHref: string;
    authorId: string;
    length: string;
    category: string;

    isValid(){
        return !(this.id.length + 
                this.title.length +
                this.watchHref.length +
                this.authorId.length +
                this.category.length)
    }
}