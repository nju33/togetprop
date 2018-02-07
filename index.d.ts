declare function togetprop(baseObj: string | null, defaultValues?: togetprop.DefaultValues): togetprop.CreatePropPathTag;

declare namespace togetprop {
  export interface DefaultValues {
    [key: string]: any;
  }

  export type GetProp = (data: object) => any;
  export type CreatePropPathTag = (strings: TemplateStringsArray) => GetProp
}

export = togetprop;
