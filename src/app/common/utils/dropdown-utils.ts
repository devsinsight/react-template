export class DropdownUtils{

    static dropdownFormatter(list: any[], text: string, value: string){
        list.map( item => {
            return {
                text: item[text],
                value: item[value]
            }
        })
    }

}