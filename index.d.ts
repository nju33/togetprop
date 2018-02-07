interface defaultValues {
  [key: string]: any;
}

type getProp = (data: object) => any;
type createPropPathTag = (strings: TemplateStringsArray) => getProp

declare function togetprop(baseObj: string | null, defaultValues?: defaultValues): createPropPathTag;

export = togetprop;
