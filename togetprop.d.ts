
declare module 'togetprop' {
  interface DefaultValues {
    [key: string]: any;
  }

  type GetProp = (data: object) => any;
  type CreatePropPathTag = (strings: TemplateStringsArray) => GetProp

  function togetprop(baseObj: string | null, defaultValues?: DefaultValues): CreatePropPathTag;

  export = togetprop;
}

