import { Country, FilterProperties } from "./type";

export function GetAllParams () {
    let obj = {}
    let urlParams = new URLSearchParams(window.location.search);
    for(let val of urlParams.keys()){
        obj = {...obj, [val] : ["continent","status"].includes(val)? urlParams.getAll(val) : urlParams.get(val)}
    }

    return obj;
};

export function WorldLists (country: string | null, dataform: Country[]){
    return country != null?dataform.filter((val: Country)=> val.name.common == "Philippines") : dataform.slice(0,11) 
} 

export function DataFiltered (filterProperties: FilterProperties, props: Country[]) {   
    const {page, sort, region, status, search} = filterProperties;

    const searchFilter = FilterFunction(props, 1, search);
    // const regionFilter = FilterFunction(props, "region", region);
    const regionFilter = FilterFunction(searchFilter, 2, region);

    // const statusFilter = regionFilter.filter(prop => prop.unMember == true)
    
    // const sortBy = statusFilter.sort((x,y)=> x.population - y.population)
    return regionFilter
}

function FilterFunction (props : Country[], key:number , value: string[] | string | boolean) {
    const newKey: number = (<string[] | string>value).length != 0? key : 5;

    switch(newKey){
        case 1:
            return props.filter((prop) => prop.name.common == value)
        case 2:
            return props.filter((prop)=> {
                for(let val of value as string){
                    if(prop.region == val){
                        return true;
                    }
                }
            })
        case 3:
            
        case 4:
            
        default:
            return props;
    }
    // if(value){
       
    //     return props.filter((prop) => (key == "common"? prop.name.common : prop[key as keyof Country]) == value)
    // }else{
    //     return props
    // }
    // return props.filter((prop)=> {
    //     for(let val of value){
    //         if(prop.region == val){
    //             return true;
    //         }
    //     }
    // })

    // | boolean | string
   
    // return value? props.filter((prop) => (key == "common"? prop.name.common : prop[key as keyof Country]) == value) : props
}
