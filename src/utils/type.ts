export interface Country {
    flags:      Flags;
    name:       Name;
    currencies: { [key: string]: Currency };
    capital:    string[];
    region:     string;
    subregion:  string;
    languages:  Languages;
    borders:    string[];
    area:       number;
    population: number;
    continents: string[];
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Languages {
    eng:  string;
    hin?: string;
    tam?: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    eng:  Eng;
    hin?: Eng;
    tam?: Eng;
}

export interface Eng {
    official: string;
    common:   string;
}
