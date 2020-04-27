export interface Options {}

export interface OptionsRL extends Options {
    order?: number;
    precision?: number;
    toPredict?: number;
}

export interface OptionsSVM extends Options {
    C?: number;
    maxiter?: number;
    numpass?: number;
    firstQuery?: number;
}
