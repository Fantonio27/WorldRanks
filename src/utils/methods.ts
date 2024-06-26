import { Country, FilterProperties, type SortBy} from "./type";

export function Riderect (country: string){
    window.location.href = `http://localhost:5173/?country=${country}`
}

export async function FetchData (country: string | null) {
    const response = await fetch(`https://restcountries.com/v3.1/${country? `name/${country}` :'all'}?fields=flags,name,population,area,region,capital,subregion,languages,currencies,continents,borders,unMember,cca3`);
    const data = await response.json()

    return data
}

export function DataFiltered (filterProperties: FilterProperties, props: Country[]) {   
    const {page, sort, region, status, search} = filterProperties;

    const stats = (!status.independent && !status.unmember) || (status.independent && status.unmember)? '': status.unmember

 
    const searchFilter = FilterFunction(props, 1, search);
    const regionFilter = FilterFunction(searchFilter, 2, region);
    const statusFilter = FilterFunction(regionFilter, 3, stats);
    const sorting = FilterFunction(statusFilter, 4, sort); 
    const pages = FilterFunction(sorting, 0, page);
    
    return {data: pages, length: sorting.length}
}

function FilterFunction (props : Country[], key:number , value: string[] | string | number | boolean) {
    const newKey: number = (<string[] | string>value).length != 0? key : 5;

    switch(newKey){
        case 0:
            let end = Number(value) * 10;
            let start = end - 10;
           
            return props.slice(start, end)
        case 1:
            return props.filter((prop) => prop.name.common.startsWith(value as string))
        case 2:
            return props.filter((prop)=> {
                for(let val of value as string){
                    if(prop.region == val){
                        return true;
                    }
                }
            })
        case 3:
            return props.filter((prop) => prop.unMember == value? true: false)
        case 4:
           return value == 'name'? props.sort((x,y)=> x.name.common.localeCompare(y.name.common)) : props.sort((x,y)=> x[value as SortBy] - y[value as SortBy]) 
        default:
            return props;
    }
}
