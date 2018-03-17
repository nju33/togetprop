import {get} from 'lodash';

export type ValueFn<T extends object> = {[P in keyof T]: () => T[P]};
// export type WrapperTemplateStringsArray<T> =

export class Tag<T extends object> {
  private _transforms: Map<string, any> = new Map();
  private _target: {[P in keyof T]: T[P]} | {} = {};

  constructor(
    private _basePath: string,
    private _defaultValues?: Partial<ValueFn<T & {[k: string]: any}>>
  ) {
    if (this._defaultValues === undefined) {
      return;
    }

    Object.keys(this._defaultValues).map(prop => {
      if (this._defaultValues === undefined) {
        return;
      }

      this._transforms.set(prop, this._defaultValues[prop]);
    })
  }

  // transform(prop: keyof T, cb: (value: any) => T[keyof T]) {
  //   this._transforms.set(prop, cb);
  // }

  from(prop: keyof T, target: {[P in keyof T]: T[P]}): T[keyof T] {
    // this._target = target;
    const value = target[prop];

    if (this._transforms.has(prop)) {
      return this._transforms.get(prop)(value);
    }

    return value;
  }

  // get(prop: keyof T): T[keyof T] {
  //   const value = (this._target as {[P in keyof T]: T[P]})[prop];
  //
  //   // if (this._transforms.has(prop)) {
  //   //   return this._transforms.get(prop)(value);
  //   // }
  //
  //   return value;
  // }

  // Object.keys(data).forEach(prop => {
  //   Object.defineProperty(this, prop, {
  //     get() {
  //       return 1;
  //       // return data.
  //     }
  //   })
  // });
}

// export type Handler<T extends object> = (target: {[P in keyof T]: T[P]} | {[k: string]: any}) => T[keyof T];
export type LikeTagFn<T extends object> = (
  // relativePath: [string][]
  // relativePath: ReadonlyArray<keyof T & any>
  // relativePath: ReadonlyArray<keyof T & any>
  relativePath: keyof T
) => Tag<T>['from'] as ;
// ) => Handler<T>;

// function likeTagFn<T extends object> = (relativePath: TemplateStringsArray): Handler<T>;

// tslint:disable-next-line only-arrow-functions
function togetprop<T extends object = any>(
  basePath: string,
  defaultValues?: Partial<ValueFn<T>>
): LikeTagFn<T> {
  const tag = new Tag<T>(basePath, defaultValues);

  return relativePath => tag.from.bind(tag, relativePath[0] as keyof T);

  // target => {
  //   const obj = get(target, basePath);
  //   if (typeof obj !== 'object') {
  //     throw new Error(`Please you have to set object to obj.basePath`);
  //   }
  //
  //   return tag
  //     .from(obj)
  //     .get(relativePath[0] as keyof T);
  //
  //   // tag.get(obj, )
  //   //
  //   // const defaultValue = get(defaultValues, relativePath);
  //   //
  //   // return get(baseObj, relativePath, defaultValue);
  // };
}

export default togetprop;

interface Hoge {
  a: boolean;
  b: string;
  c: number;
}

const hoge = togetprop<Hoge>('hoge', {
  a: () => false,
  b: () => 'default str'
});

const data = {
  hoge: {
  }
}

const a = hoge('a');
const aResult = a(data);
const bResult = hoge('b')(data);
const cResult = hoge('c')(data);
// console.log(a(data))

















// console.log(hoge`a`(data))

// hoge.transform('hoge', value => value);

// hoge._``

// console.log(hoge`b`)

// console.log(hoge`a`);
