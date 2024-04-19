<script setup lang="ts">
import { onMounted, ref} from "vue"
import { Country} from '../utils/type';
import { Riderect } from '../utils/methods'
const props = defineProps<{ data: Country[] }>()

const { name, population, area, capital, subregion, languages, currencies, continents, flags, borders} = props.data[0]

const ObjectToString = (props: {}, num? : number) => {
    return Object.keys(props).map(key => {
        return num? props[key as keyof typeof props]["name"] : props[key as keyof typeof props]
    }).join(',')
} 

let neighbours = ref<{flag: string, name: string}[]>([]);

onMounted(async() => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borders}&fields=flags,name`);
    const dataform = await response.json()

    for(let data of dataform){
        neighbours.value.push({
            flag: data.flags.png,
            name: data.name.common
        })
    }
})

</script>

<template>
    <div class="boxContainer-country">
        <img :src="flags.png" :alt="flags.alt" class="flag">
        <section class="title-container">
            <h2>{{ name.common}}</h2>
            <p>{{ name.official}}</p>
        </section>

        <div class="second-container">
            <div>
                <p>Population</p>
                <p>{{ population }}</p>
            </div>

            <div>
                <p>Area (km²)</p>
                <p>{{ area }}</p>
            </div>
        </div>

        <div class="row-container">
            <section>
                <p><span>Capital</span></p>
                <p>{{ capital.join(',') }}</p>
            </section>
            <section>
                <p><span>Subregion</span></p>
                <p>{{ subregion }}</p>
            </section>
            <section>
                <p><span>Language</span></p>
                <p>{{ObjectToString(languages)}}</p>
            </section>
            <section>
                <p><span>Currencies</span></p>
                <p>{{ObjectToString(currencies, 1)}}</p>
            </section>
            <section>
                <p><span>Continents</span></p>
                <p>{{continents.join(',')}}</p>
            </section>
            <section>
                <div>
                    <p><span>Neighbouring Countries</span></p>

                    <div class="neighboar-grid">
                        <section v-for="neighbour in neighbours">
                            <img :src="neighbour.flag" :alt="neighbour.name" @click="Riderect(neighbour.name)">
                            <p @click="Riderect(neighbour.name)">{{neighbour.name}}</p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>