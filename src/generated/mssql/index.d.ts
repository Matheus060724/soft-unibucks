
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Bebidas
 * 
 */
export type Bebidas = $Result.DefaultSelection<Prisma.$BebidasPayload>
/**
 * Model Cafe
 * 
 */
export type Cafe = $Result.DefaultSelection<Prisma.$CafePayload>
/**
 * Model Cardapio
 * 
 */
export type Cardapio = $Result.DefaultSelection<Prisma.$CardapioPayload>
/**
 * Model Cha
 * 
 */
export type Cha = $Result.DefaultSelection<Prisma.$ChaPayload>
/**
 * Model Comidas
 * 
 */
export type Comidas = $Result.DefaultSelection<Prisma.$ComidasPayload>
/**
 * Model Doce
 * 
 */
export type Doce = $Result.DefaultSelection<Prisma.$DocePayload>
/**
 * Model Outros
 * 
 */
export type Outros = $Result.DefaultSelection<Prisma.$OutrosPayload>
/**
 * Model Salgado
 * 
 */
export type Salgado = $Result.DefaultSelection<Prisma.$SalgadoPayload>
/**
 * Model sysdiagrams
 * 
 */
export type sysdiagrams = $Result.DefaultSelection<Prisma.$sysdiagramsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bebidas
 * const bebidas = await prisma.bebidas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bebidas
   * const bebidas = await prisma.bebidas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bebidas`: Exposes CRUD operations for the **Bebidas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bebidas
    * const bebidas = await prisma.bebidas.findMany()
    * ```
    */
  get bebidas(): Prisma.BebidasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cafe`: Exposes CRUD operations for the **Cafe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cafes
    * const cafes = await prisma.cafe.findMany()
    * ```
    */
  get cafe(): Prisma.CafeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardapio`: Exposes CRUD operations for the **Cardapio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cardapios
    * const cardapios = await prisma.cardapio.findMany()
    * ```
    */
  get cardapio(): Prisma.CardapioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cha`: Exposes CRUD operations for the **Cha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chas
    * const chas = await prisma.cha.findMany()
    * ```
    */
  get cha(): Prisma.ChaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comidas`: Exposes CRUD operations for the **Comidas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comidas
    * const comidas = await prisma.comidas.findMany()
    * ```
    */
  get comidas(): Prisma.ComidasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doce`: Exposes CRUD operations for the **Doce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doces
    * const doces = await prisma.doce.findMany()
    * ```
    */
  get doce(): Prisma.DoceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outros`: Exposes CRUD operations for the **Outros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outros
    * const outros = await prisma.outros.findMany()
    * ```
    */
  get outros(): Prisma.OutrosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salgado`: Exposes CRUD operations for the **Salgado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salgados
    * const salgados = await prisma.salgado.findMany()
    * ```
    */
  get salgado(): Prisma.SalgadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sysdiagrams`: Exposes CRUD operations for the **sysdiagrams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sysdiagrams
    * const sysdiagrams = await prisma.sysdiagrams.findMany()
    * ```
    */
  get sysdiagrams(): Prisma.sysdiagramsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Bebidas: 'Bebidas',
    Cafe: 'Cafe',
    Cardapio: 'Cardapio',
    Cha: 'Cha',
    Comidas: 'Comidas',
    Doce: 'Doce',
    Outros: 'Outros',
    Salgado: 'Salgado',
    sysdiagrams: 'sysdiagrams'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bebidas" | "cafe" | "cardapio" | "cha" | "comidas" | "doce" | "outros" | "salgado" | "sysdiagrams"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bebidas: {
        payload: Prisma.$BebidasPayload<ExtArgs>
        fields: Prisma.BebidasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BebidasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BebidasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidasPayload>
          }
          findFirst: {
            args: Prisma.BebidasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BebidasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidasPayload>
          }
          findMany: {
            args: Prisma.BebidasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidasPayload>[]
          }
          create: {
            args: Prisma.BebidasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidasPayload>
          }
          createMany: {
            args: Prisma.BebidasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BebidasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidasPayload>
          }
          update: {
            args: Prisma.BebidasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidasPayload>
          }
          deleteMany: {
            args: Prisma.BebidasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BebidasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BebidasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidasPayload>
          }
          aggregate: {
            args: Prisma.BebidasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBebidas>
          }
          groupBy: {
            args: Prisma.BebidasGroupByArgs<ExtArgs>
            result: $Utils.Optional<BebidasGroupByOutputType>[]
          }
          count: {
            args: Prisma.BebidasCountArgs<ExtArgs>
            result: $Utils.Optional<BebidasCountAggregateOutputType> | number
          }
        }
      }
      Cafe: {
        payload: Prisma.$CafePayload<ExtArgs>
        fields: Prisma.CafeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CafeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CafeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafePayload>
          }
          findFirst: {
            args: Prisma.CafeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CafeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafePayload>
          }
          findMany: {
            args: Prisma.CafeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafePayload>[]
          }
          create: {
            args: Prisma.CafeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafePayload>
          }
          createMany: {
            args: Prisma.CafeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CafeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafePayload>
          }
          update: {
            args: Prisma.CafeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafePayload>
          }
          deleteMany: {
            args: Prisma.CafeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CafeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CafeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafePayload>
          }
          aggregate: {
            args: Prisma.CafeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCafe>
          }
          groupBy: {
            args: Prisma.CafeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CafeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CafeCountArgs<ExtArgs>
            result: $Utils.Optional<CafeCountAggregateOutputType> | number
          }
        }
      }
      Cardapio: {
        payload: Prisma.$CardapioPayload<ExtArgs>
        fields: Prisma.CardapioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardapioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardapioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          findFirst: {
            args: Prisma.CardapioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardapioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          findMany: {
            args: Prisma.CardapioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>[]
          }
          create: {
            args: Prisma.CardapioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          createMany: {
            args: Prisma.CardapioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CardapioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          update: {
            args: Prisma.CardapioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          deleteMany: {
            args: Prisma.CardapioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardapioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardapioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          aggregate: {
            args: Prisma.CardapioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardapio>
          }
          groupBy: {
            args: Prisma.CardapioGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardapioGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardapioCountArgs<ExtArgs>
            result: $Utils.Optional<CardapioCountAggregateOutputType> | number
          }
        }
      }
      Cha: {
        payload: Prisma.$ChaPayload<ExtArgs>
        fields: Prisma.ChaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaPayload>
          }
          findFirst: {
            args: Prisma.ChaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaPayload>
          }
          findMany: {
            args: Prisma.ChaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaPayload>[]
          }
          create: {
            args: Prisma.ChaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaPayload>
          }
          createMany: {
            args: Prisma.ChaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaPayload>
          }
          update: {
            args: Prisma.ChaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaPayload>
          }
          deleteMany: {
            args: Prisma.ChaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaPayload>
          }
          aggregate: {
            args: Prisma.ChaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCha>
          }
          groupBy: {
            args: Prisma.ChaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChaCountArgs<ExtArgs>
            result: $Utils.Optional<ChaCountAggregateOutputType> | number
          }
        }
      }
      Comidas: {
        payload: Prisma.$ComidasPayload<ExtArgs>
        fields: Prisma.ComidasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComidasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComidasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComidasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComidasPayload>
          }
          findFirst: {
            args: Prisma.ComidasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComidasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComidasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComidasPayload>
          }
          findMany: {
            args: Prisma.ComidasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComidasPayload>[]
          }
          create: {
            args: Prisma.ComidasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComidasPayload>
          }
          createMany: {
            args: Prisma.ComidasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComidasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComidasPayload>
          }
          update: {
            args: Prisma.ComidasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComidasPayload>
          }
          deleteMany: {
            args: Prisma.ComidasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComidasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComidasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComidasPayload>
          }
          aggregate: {
            args: Prisma.ComidasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComidas>
          }
          groupBy: {
            args: Prisma.ComidasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComidasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComidasCountArgs<ExtArgs>
            result: $Utils.Optional<ComidasCountAggregateOutputType> | number
          }
        }
      }
      Doce: {
        payload: Prisma.$DocePayload<ExtArgs>
        fields: Prisma.DoceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocePayload>
          }
          findFirst: {
            args: Prisma.DoceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocePayload>
          }
          findMany: {
            args: Prisma.DoceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocePayload>[]
          }
          create: {
            args: Prisma.DoceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocePayload>
          }
          createMany: {
            args: Prisma.DoceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocePayload>
          }
          update: {
            args: Prisma.DoceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocePayload>
          }
          deleteMany: {
            args: Prisma.DoceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocePayload>
          }
          aggregate: {
            args: Prisma.DoceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoce>
          }
          groupBy: {
            args: Prisma.DoceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoceCountArgs<ExtArgs>
            result: $Utils.Optional<DoceCountAggregateOutputType> | number
          }
        }
      }
      Outros: {
        payload: Prisma.$OutrosPayload<ExtArgs>
        fields: Prisma.OutrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutrosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutrosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutrosPayload>
          }
          findFirst: {
            args: Prisma.OutrosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutrosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutrosPayload>
          }
          findMany: {
            args: Prisma.OutrosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutrosPayload>[]
          }
          create: {
            args: Prisma.OutrosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutrosPayload>
          }
          createMany: {
            args: Prisma.OutrosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OutrosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutrosPayload>
          }
          update: {
            args: Prisma.OutrosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutrosPayload>
          }
          deleteMany: {
            args: Prisma.OutrosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutrosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutrosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutrosPayload>
          }
          aggregate: {
            args: Prisma.OutrosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutros>
          }
          groupBy: {
            args: Prisma.OutrosGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutrosCountArgs<ExtArgs>
            result: $Utils.Optional<OutrosCountAggregateOutputType> | number
          }
        }
      }
      Salgado: {
        payload: Prisma.$SalgadoPayload<ExtArgs>
        fields: Prisma.SalgadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalgadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalgadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalgadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalgadoPayload>
          }
          findFirst: {
            args: Prisma.SalgadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalgadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalgadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalgadoPayload>
          }
          findMany: {
            args: Prisma.SalgadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalgadoPayload>[]
          }
          create: {
            args: Prisma.SalgadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalgadoPayload>
          }
          createMany: {
            args: Prisma.SalgadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SalgadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalgadoPayload>
          }
          update: {
            args: Prisma.SalgadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalgadoPayload>
          }
          deleteMany: {
            args: Prisma.SalgadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalgadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalgadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalgadoPayload>
          }
          aggregate: {
            args: Prisma.SalgadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalgado>
          }
          groupBy: {
            args: Prisma.SalgadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalgadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalgadoCountArgs<ExtArgs>
            result: $Utils.Optional<SalgadoCountAggregateOutputType> | number
          }
        }
      }
      sysdiagrams: {
        payload: Prisma.$sysdiagramsPayload<ExtArgs>
        fields: Prisma.sysdiagramsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sysdiagramsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sysdiagramsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          findFirst: {
            args: Prisma.sysdiagramsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sysdiagramsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          findMany: {
            args: Prisma.sysdiagramsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>[]
          }
          create: {
            args: Prisma.sysdiagramsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          createMany: {
            args: Prisma.sysdiagramsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sysdiagramsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          update: {
            args: Prisma.sysdiagramsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          deleteMany: {
            args: Prisma.sysdiagramsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sysdiagramsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sysdiagramsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          aggregate: {
            args: Prisma.SysdiagramsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSysdiagrams>
          }
          groupBy: {
            args: Prisma.sysdiagramsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SysdiagramsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sysdiagramsCountArgs<ExtArgs>
            result: $Utils.Optional<SysdiagramsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bebidas?: BebidasOmit
    cafe?: CafeOmit
    cardapio?: CardapioOmit
    cha?: ChaOmit
    comidas?: ComidasOmit
    doce?: DoceOmit
    outros?: OutrosOmit
    salgado?: SalgadoOmit
    sysdiagrams?: sysdiagramsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CardapioCountOutputType
   */

  export type CardapioCountOutputType = {
    Bebidas: number
    Comidas: number
  }

  export type CardapioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bebidas?: boolean | CardapioCountOutputTypeCountBebidasArgs
    Comidas?: boolean | CardapioCountOutputTypeCountComidasArgs
  }

  // Custom InputTypes
  /**
   * CardapioCountOutputType without action
   */
  export type CardapioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardapioCountOutputType
     */
    select?: CardapioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardapioCountOutputType without action
   */
  export type CardapioCountOutputTypeCountBebidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BebidasWhereInput
  }

  /**
   * CardapioCountOutputType without action
   */
  export type CardapioCountOutputTypeCountComidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComidasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bebidas
   */

  export type AggregateBebidas = {
    _count: BebidasCountAggregateOutputType | null
    _avg: BebidasAvgAggregateOutputType | null
    _sum: BebidasSumAggregateOutputType | null
    _min: BebidasMinAggregateOutputType | null
    _max: BebidasMaxAggregateOutputType | null
  }

  export type BebidasAvgAggregateOutputType = {
    id_item: number | null
    id_produto: number | null
  }

  export type BebidasSumAggregateOutputType = {
    id_item: number | null
    id_produto: number | null
  }

  export type BebidasMinAggregateOutputType = {
    id_item: number | null
    tipo: string | null
    milimetros: string | null
    id_produto: number | null
  }

  export type BebidasMaxAggregateOutputType = {
    id_item: number | null
    tipo: string | null
    milimetros: string | null
    id_produto: number | null
  }

  export type BebidasCountAggregateOutputType = {
    id_item: number
    tipo: number
    milimetros: number
    id_produto: number
    _all: number
  }


  export type BebidasAvgAggregateInputType = {
    id_item?: true
    id_produto?: true
  }

  export type BebidasSumAggregateInputType = {
    id_item?: true
    id_produto?: true
  }

  export type BebidasMinAggregateInputType = {
    id_item?: true
    tipo?: true
    milimetros?: true
    id_produto?: true
  }

  export type BebidasMaxAggregateInputType = {
    id_item?: true
    tipo?: true
    milimetros?: true
    id_produto?: true
  }

  export type BebidasCountAggregateInputType = {
    id_item?: true
    tipo?: true
    milimetros?: true
    id_produto?: true
    _all?: true
  }

  export type BebidasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bebidas to aggregate.
     */
    where?: BebidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bebidas to fetch.
     */
    orderBy?: BebidasOrderByWithRelationInput | BebidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BebidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bebidas
    **/
    _count?: true | BebidasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BebidasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BebidasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BebidasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BebidasMaxAggregateInputType
  }

  export type GetBebidasAggregateType<T extends BebidasAggregateArgs> = {
        [P in keyof T & keyof AggregateBebidas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBebidas[P]>
      : GetScalarType<T[P], AggregateBebidas[P]>
  }




  export type BebidasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BebidasWhereInput
    orderBy?: BebidasOrderByWithAggregationInput | BebidasOrderByWithAggregationInput[]
    by: BebidasScalarFieldEnum[] | BebidasScalarFieldEnum
    having?: BebidasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BebidasCountAggregateInputType | true
    _avg?: BebidasAvgAggregateInputType
    _sum?: BebidasSumAggregateInputType
    _min?: BebidasMinAggregateInputType
    _max?: BebidasMaxAggregateInputType
  }

  export type BebidasGroupByOutputType = {
    id_item: number
    tipo: string | null
    milimetros: string | null
    id_produto: number
    _count: BebidasCountAggregateOutputType | null
    _avg: BebidasAvgAggregateOutputType | null
    _sum: BebidasSumAggregateOutputType | null
    _min: BebidasMinAggregateOutputType | null
    _max: BebidasMaxAggregateOutputType | null
  }

  type GetBebidasGroupByPayload<T extends BebidasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BebidasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BebidasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BebidasGroupByOutputType[P]>
            : GetScalarType<T[P], BebidasGroupByOutputType[P]>
        }
      >
    >


  export type BebidasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    tipo?: boolean
    milimetros?: boolean
    id_produto?: boolean
    Cardapio?: boolean | CardapioDefaultArgs<ExtArgs>
    Cafe?: boolean | Bebidas$CafeArgs<ExtArgs>
    Cha?: boolean | Bebidas$ChaArgs<ExtArgs>
    Outros?: boolean | Bebidas$OutrosArgs<ExtArgs>
  }, ExtArgs["result"]["bebidas"]>



  export type BebidasSelectScalar = {
    id_item?: boolean
    tipo?: boolean
    milimetros?: boolean
    id_produto?: boolean
  }

  export type BebidasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_item" | "tipo" | "milimetros" | "id_produto", ExtArgs["result"]["bebidas"]>
  export type BebidasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cardapio?: boolean | CardapioDefaultArgs<ExtArgs>
    Cafe?: boolean | Bebidas$CafeArgs<ExtArgs>
    Cha?: boolean | Bebidas$ChaArgs<ExtArgs>
    Outros?: boolean | Bebidas$OutrosArgs<ExtArgs>
  }

  export type $BebidasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bebidas"
    objects: {
      Cardapio: Prisma.$CardapioPayload<ExtArgs>
      Cafe: Prisma.$CafePayload<ExtArgs> | null
      Cha: Prisma.$ChaPayload<ExtArgs> | null
      Outros: Prisma.$OutrosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_item: number
      tipo: string | null
      milimetros: string | null
      id_produto: number
    }, ExtArgs["result"]["bebidas"]>
    composites: {}
  }

  type BebidasGetPayload<S extends boolean | null | undefined | BebidasDefaultArgs> = $Result.GetResult<Prisma.$BebidasPayload, S>

  type BebidasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BebidasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BebidasCountAggregateInputType | true
    }

  export interface BebidasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bebidas'], meta: { name: 'Bebidas' } }
    /**
     * Find zero or one Bebidas that matches the filter.
     * @param {BebidasFindUniqueArgs} args - Arguments to find a Bebidas
     * @example
     * // Get one Bebidas
     * const bebidas = await prisma.bebidas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BebidasFindUniqueArgs>(args: SelectSubset<T, BebidasFindUniqueArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bebidas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BebidasFindUniqueOrThrowArgs} args - Arguments to find a Bebidas
     * @example
     * // Get one Bebidas
     * const bebidas = await prisma.bebidas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BebidasFindUniqueOrThrowArgs>(args: SelectSubset<T, BebidasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bebidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidasFindFirstArgs} args - Arguments to find a Bebidas
     * @example
     * // Get one Bebidas
     * const bebidas = await prisma.bebidas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BebidasFindFirstArgs>(args?: SelectSubset<T, BebidasFindFirstArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bebidas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidasFindFirstOrThrowArgs} args - Arguments to find a Bebidas
     * @example
     * // Get one Bebidas
     * const bebidas = await prisma.bebidas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BebidasFindFirstOrThrowArgs>(args?: SelectSubset<T, BebidasFindFirstOrThrowArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bebidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bebidas
     * const bebidas = await prisma.bebidas.findMany()
     * 
     * // Get first 10 Bebidas
     * const bebidas = await prisma.bebidas.findMany({ take: 10 })
     * 
     * // Only select the `id_item`
     * const bebidasWithId_itemOnly = await prisma.bebidas.findMany({ select: { id_item: true } })
     * 
     */
    findMany<T extends BebidasFindManyArgs>(args?: SelectSubset<T, BebidasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bebidas.
     * @param {BebidasCreateArgs} args - Arguments to create a Bebidas.
     * @example
     * // Create one Bebidas
     * const Bebidas = await prisma.bebidas.create({
     *   data: {
     *     // ... data to create a Bebidas
     *   }
     * })
     * 
     */
    create<T extends BebidasCreateArgs>(args: SelectSubset<T, BebidasCreateArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bebidas.
     * @param {BebidasCreateManyArgs} args - Arguments to create many Bebidas.
     * @example
     * // Create many Bebidas
     * const bebidas = await prisma.bebidas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BebidasCreateManyArgs>(args?: SelectSubset<T, BebidasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bebidas.
     * @param {BebidasDeleteArgs} args - Arguments to delete one Bebidas.
     * @example
     * // Delete one Bebidas
     * const Bebidas = await prisma.bebidas.delete({
     *   where: {
     *     // ... filter to delete one Bebidas
     *   }
     * })
     * 
     */
    delete<T extends BebidasDeleteArgs>(args: SelectSubset<T, BebidasDeleteArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bebidas.
     * @param {BebidasUpdateArgs} args - Arguments to update one Bebidas.
     * @example
     * // Update one Bebidas
     * const bebidas = await prisma.bebidas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BebidasUpdateArgs>(args: SelectSubset<T, BebidasUpdateArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bebidas.
     * @param {BebidasDeleteManyArgs} args - Arguments to filter Bebidas to delete.
     * @example
     * // Delete a few Bebidas
     * const { count } = await prisma.bebidas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BebidasDeleteManyArgs>(args?: SelectSubset<T, BebidasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bebidas
     * const bebidas = await prisma.bebidas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BebidasUpdateManyArgs>(args: SelectSubset<T, BebidasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bebidas.
     * @param {BebidasUpsertArgs} args - Arguments to update or create a Bebidas.
     * @example
     * // Update or create a Bebidas
     * const bebidas = await prisma.bebidas.upsert({
     *   create: {
     *     // ... data to create a Bebidas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bebidas we want to update
     *   }
     * })
     */
    upsert<T extends BebidasUpsertArgs>(args: SelectSubset<T, BebidasUpsertArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidasCountArgs} args - Arguments to filter Bebidas to count.
     * @example
     * // Count the number of Bebidas
     * const count = await prisma.bebidas.count({
     *   where: {
     *     // ... the filter for the Bebidas we want to count
     *   }
     * })
    **/
    count<T extends BebidasCountArgs>(
      args?: Subset<T, BebidasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BebidasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BebidasAggregateArgs>(args: Subset<T, BebidasAggregateArgs>): Prisma.PrismaPromise<GetBebidasAggregateType<T>>

    /**
     * Group by Bebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BebidasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BebidasGroupByArgs['orderBy'] }
        : { orderBy?: BebidasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BebidasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBebidasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bebidas model
   */
  readonly fields: BebidasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bebidas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BebidasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cardapio<T extends CardapioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardapioDefaultArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Cafe<T extends Bebidas$CafeArgs<ExtArgs> = {}>(args?: Subset<T, Bebidas$CafeArgs<ExtArgs>>): Prisma__CafeClient<$Result.GetResult<Prisma.$CafePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Cha<T extends Bebidas$ChaArgs<ExtArgs> = {}>(args?: Subset<T, Bebidas$ChaArgs<ExtArgs>>): Prisma__ChaClient<$Result.GetResult<Prisma.$ChaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Outros<T extends Bebidas$OutrosArgs<ExtArgs> = {}>(args?: Subset<T, Bebidas$OutrosArgs<ExtArgs>>): Prisma__OutrosClient<$Result.GetResult<Prisma.$OutrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bebidas model
   */
  interface BebidasFieldRefs {
    readonly id_item: FieldRef<"Bebidas", 'Int'>
    readonly tipo: FieldRef<"Bebidas", 'String'>
    readonly milimetros: FieldRef<"Bebidas", 'String'>
    readonly id_produto: FieldRef<"Bebidas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bebidas findUnique
   */
  export type BebidasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
    /**
     * Filter, which Bebidas to fetch.
     */
    where: BebidasWhereUniqueInput
  }

  /**
   * Bebidas findUniqueOrThrow
   */
  export type BebidasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
    /**
     * Filter, which Bebidas to fetch.
     */
    where: BebidasWhereUniqueInput
  }

  /**
   * Bebidas findFirst
   */
  export type BebidasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
    /**
     * Filter, which Bebidas to fetch.
     */
    where?: BebidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bebidas to fetch.
     */
    orderBy?: BebidasOrderByWithRelationInput | BebidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bebidas.
     */
    cursor?: BebidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bebidas.
     */
    distinct?: BebidasScalarFieldEnum | BebidasScalarFieldEnum[]
  }

  /**
   * Bebidas findFirstOrThrow
   */
  export type BebidasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
    /**
     * Filter, which Bebidas to fetch.
     */
    where?: BebidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bebidas to fetch.
     */
    orderBy?: BebidasOrderByWithRelationInput | BebidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bebidas.
     */
    cursor?: BebidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bebidas.
     */
    distinct?: BebidasScalarFieldEnum | BebidasScalarFieldEnum[]
  }

  /**
   * Bebidas findMany
   */
  export type BebidasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
    /**
     * Filter, which Bebidas to fetch.
     */
    where?: BebidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bebidas to fetch.
     */
    orderBy?: BebidasOrderByWithRelationInput | BebidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bebidas.
     */
    cursor?: BebidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bebidas.
     */
    skip?: number
    distinct?: BebidasScalarFieldEnum | BebidasScalarFieldEnum[]
  }

  /**
   * Bebidas create
   */
  export type BebidasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
    /**
     * The data needed to create a Bebidas.
     */
    data: XOR<BebidasCreateInput, BebidasUncheckedCreateInput>
  }

  /**
   * Bebidas createMany
   */
  export type BebidasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bebidas.
     */
    data: BebidasCreateManyInput | BebidasCreateManyInput[]
  }

  /**
   * Bebidas update
   */
  export type BebidasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
    /**
     * The data needed to update a Bebidas.
     */
    data: XOR<BebidasUpdateInput, BebidasUncheckedUpdateInput>
    /**
     * Choose, which Bebidas to update.
     */
    where: BebidasWhereUniqueInput
  }

  /**
   * Bebidas updateMany
   */
  export type BebidasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bebidas.
     */
    data: XOR<BebidasUpdateManyMutationInput, BebidasUncheckedUpdateManyInput>
    /**
     * Filter which Bebidas to update
     */
    where?: BebidasWhereInput
    /**
     * Limit how many Bebidas to update.
     */
    limit?: number
  }

  /**
   * Bebidas upsert
   */
  export type BebidasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
    /**
     * The filter to search for the Bebidas to update in case it exists.
     */
    where: BebidasWhereUniqueInput
    /**
     * In case the Bebidas found by the `where` argument doesn't exist, create a new Bebidas with this data.
     */
    create: XOR<BebidasCreateInput, BebidasUncheckedCreateInput>
    /**
     * In case the Bebidas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BebidasUpdateInput, BebidasUncheckedUpdateInput>
  }

  /**
   * Bebidas delete
   */
  export type BebidasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
    /**
     * Filter which Bebidas to delete.
     */
    where: BebidasWhereUniqueInput
  }

  /**
   * Bebidas deleteMany
   */
  export type BebidasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bebidas to delete
     */
    where?: BebidasWhereInput
    /**
     * Limit how many Bebidas to delete.
     */
    limit?: number
  }

  /**
   * Bebidas.Cafe
   */
  export type Bebidas$CafeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
    where?: CafeWhereInput
  }

  /**
   * Bebidas.Cha
   */
  export type Bebidas$ChaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
    where?: ChaWhereInput
  }

  /**
   * Bebidas.Outros
   */
  export type Bebidas$OutrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
    where?: OutrosWhereInput
  }

  /**
   * Bebidas without action
   */
  export type BebidasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
  }


  /**
   * Model Cafe
   */

  export type AggregateCafe = {
    _count: CafeCountAggregateOutputType | null
    _avg: CafeAvgAggregateOutputType | null
    _sum: CafeSumAggregateOutputType | null
    _min: CafeMinAggregateOutputType | null
    _max: CafeMaxAggregateOutputType | null
  }

  export type CafeAvgAggregateOutputType = {
    id_item: number | null
  }

  export type CafeSumAggregateOutputType = {
    id_item: number | null
  }

  export type CafeMinAggregateOutputType = {
    id_item: number | null
    item: string | null
  }

  export type CafeMaxAggregateOutputType = {
    id_item: number | null
    item: string | null
  }

  export type CafeCountAggregateOutputType = {
    id_item: number
    item: number
    _all: number
  }


  export type CafeAvgAggregateInputType = {
    id_item?: true
  }

  export type CafeSumAggregateInputType = {
    id_item?: true
  }

  export type CafeMinAggregateInputType = {
    id_item?: true
    item?: true
  }

  export type CafeMaxAggregateInputType = {
    id_item?: true
    item?: true
  }

  export type CafeCountAggregateInputType = {
    id_item?: true
    item?: true
    _all?: true
  }

  export type CafeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cafe to aggregate.
     */
    where?: CafeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cafes to fetch.
     */
    orderBy?: CafeOrderByWithRelationInput | CafeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CafeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cafes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cafes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cafes
    **/
    _count?: true | CafeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CafeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CafeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CafeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CafeMaxAggregateInputType
  }

  export type GetCafeAggregateType<T extends CafeAggregateArgs> = {
        [P in keyof T & keyof AggregateCafe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCafe[P]>
      : GetScalarType<T[P], AggregateCafe[P]>
  }




  export type CafeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CafeWhereInput
    orderBy?: CafeOrderByWithAggregationInput | CafeOrderByWithAggregationInput[]
    by: CafeScalarFieldEnum[] | CafeScalarFieldEnum
    having?: CafeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CafeCountAggregateInputType | true
    _avg?: CafeAvgAggregateInputType
    _sum?: CafeSumAggregateInputType
    _min?: CafeMinAggregateInputType
    _max?: CafeMaxAggregateInputType
  }

  export type CafeGroupByOutputType = {
    id_item: number
    item: string | null
    _count: CafeCountAggregateOutputType | null
    _avg: CafeAvgAggregateOutputType | null
    _sum: CafeSumAggregateOutputType | null
    _min: CafeMinAggregateOutputType | null
    _max: CafeMaxAggregateOutputType | null
  }

  type GetCafeGroupByPayload<T extends CafeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CafeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CafeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CafeGroupByOutputType[P]>
            : GetScalarType<T[P], CafeGroupByOutputType[P]>
        }
      >
    >


  export type CafeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    item?: boolean
    Bebidas?: boolean | BebidasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cafe"]>



  export type CafeSelectScalar = {
    id_item?: boolean
    item?: boolean
  }

  export type CafeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_item" | "item", ExtArgs["result"]["cafe"]>
  export type CafeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bebidas?: boolean | BebidasDefaultArgs<ExtArgs>
  }

  export type $CafePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cafe"
    objects: {
      Bebidas: Prisma.$BebidasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_item: number
      item: string | null
    }, ExtArgs["result"]["cafe"]>
    composites: {}
  }

  type CafeGetPayload<S extends boolean | null | undefined | CafeDefaultArgs> = $Result.GetResult<Prisma.$CafePayload, S>

  type CafeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CafeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CafeCountAggregateInputType | true
    }

  export interface CafeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cafe'], meta: { name: 'Cafe' } }
    /**
     * Find zero or one Cafe that matches the filter.
     * @param {CafeFindUniqueArgs} args - Arguments to find a Cafe
     * @example
     * // Get one Cafe
     * const cafe = await prisma.cafe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CafeFindUniqueArgs>(args: SelectSubset<T, CafeFindUniqueArgs<ExtArgs>>): Prisma__CafeClient<$Result.GetResult<Prisma.$CafePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cafe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CafeFindUniqueOrThrowArgs} args - Arguments to find a Cafe
     * @example
     * // Get one Cafe
     * const cafe = await prisma.cafe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CafeFindUniqueOrThrowArgs>(args: SelectSubset<T, CafeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CafeClient<$Result.GetResult<Prisma.$CafePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cafe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeFindFirstArgs} args - Arguments to find a Cafe
     * @example
     * // Get one Cafe
     * const cafe = await prisma.cafe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CafeFindFirstArgs>(args?: SelectSubset<T, CafeFindFirstArgs<ExtArgs>>): Prisma__CafeClient<$Result.GetResult<Prisma.$CafePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cafe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeFindFirstOrThrowArgs} args - Arguments to find a Cafe
     * @example
     * // Get one Cafe
     * const cafe = await prisma.cafe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CafeFindFirstOrThrowArgs>(args?: SelectSubset<T, CafeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CafeClient<$Result.GetResult<Prisma.$CafePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cafes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cafes
     * const cafes = await prisma.cafe.findMany()
     * 
     * // Get first 10 Cafes
     * const cafes = await prisma.cafe.findMany({ take: 10 })
     * 
     * // Only select the `id_item`
     * const cafeWithId_itemOnly = await prisma.cafe.findMany({ select: { id_item: true } })
     * 
     */
    findMany<T extends CafeFindManyArgs>(args?: SelectSubset<T, CafeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CafePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cafe.
     * @param {CafeCreateArgs} args - Arguments to create a Cafe.
     * @example
     * // Create one Cafe
     * const Cafe = await prisma.cafe.create({
     *   data: {
     *     // ... data to create a Cafe
     *   }
     * })
     * 
     */
    create<T extends CafeCreateArgs>(args: SelectSubset<T, CafeCreateArgs<ExtArgs>>): Prisma__CafeClient<$Result.GetResult<Prisma.$CafePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cafes.
     * @param {CafeCreateManyArgs} args - Arguments to create many Cafes.
     * @example
     * // Create many Cafes
     * const cafe = await prisma.cafe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CafeCreateManyArgs>(args?: SelectSubset<T, CafeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cafe.
     * @param {CafeDeleteArgs} args - Arguments to delete one Cafe.
     * @example
     * // Delete one Cafe
     * const Cafe = await prisma.cafe.delete({
     *   where: {
     *     // ... filter to delete one Cafe
     *   }
     * })
     * 
     */
    delete<T extends CafeDeleteArgs>(args: SelectSubset<T, CafeDeleteArgs<ExtArgs>>): Prisma__CafeClient<$Result.GetResult<Prisma.$CafePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cafe.
     * @param {CafeUpdateArgs} args - Arguments to update one Cafe.
     * @example
     * // Update one Cafe
     * const cafe = await prisma.cafe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CafeUpdateArgs>(args: SelectSubset<T, CafeUpdateArgs<ExtArgs>>): Prisma__CafeClient<$Result.GetResult<Prisma.$CafePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cafes.
     * @param {CafeDeleteManyArgs} args - Arguments to filter Cafes to delete.
     * @example
     * // Delete a few Cafes
     * const { count } = await prisma.cafe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CafeDeleteManyArgs>(args?: SelectSubset<T, CafeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cafes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cafes
     * const cafe = await prisma.cafe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CafeUpdateManyArgs>(args: SelectSubset<T, CafeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cafe.
     * @param {CafeUpsertArgs} args - Arguments to update or create a Cafe.
     * @example
     * // Update or create a Cafe
     * const cafe = await prisma.cafe.upsert({
     *   create: {
     *     // ... data to create a Cafe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cafe we want to update
     *   }
     * })
     */
    upsert<T extends CafeUpsertArgs>(args: SelectSubset<T, CafeUpsertArgs<ExtArgs>>): Prisma__CafeClient<$Result.GetResult<Prisma.$CafePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cafes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeCountArgs} args - Arguments to filter Cafes to count.
     * @example
     * // Count the number of Cafes
     * const count = await prisma.cafe.count({
     *   where: {
     *     // ... the filter for the Cafes we want to count
     *   }
     * })
    **/
    count<T extends CafeCountArgs>(
      args?: Subset<T, CafeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CafeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cafe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CafeAggregateArgs>(args: Subset<T, CafeAggregateArgs>): Prisma.PrismaPromise<GetCafeAggregateType<T>>

    /**
     * Group by Cafe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CafeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CafeGroupByArgs['orderBy'] }
        : { orderBy?: CafeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CafeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCafeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cafe model
   */
  readonly fields: CafeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cafe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CafeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bebidas<T extends BebidasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BebidasDefaultArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cafe model
   */
  interface CafeFieldRefs {
    readonly id_item: FieldRef<"Cafe", 'Int'>
    readonly item: FieldRef<"Cafe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cafe findUnique
   */
  export type CafeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
    /**
     * Filter, which Cafe to fetch.
     */
    where: CafeWhereUniqueInput
  }

  /**
   * Cafe findUniqueOrThrow
   */
  export type CafeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
    /**
     * Filter, which Cafe to fetch.
     */
    where: CafeWhereUniqueInput
  }

  /**
   * Cafe findFirst
   */
  export type CafeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
    /**
     * Filter, which Cafe to fetch.
     */
    where?: CafeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cafes to fetch.
     */
    orderBy?: CafeOrderByWithRelationInput | CafeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cafes.
     */
    cursor?: CafeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cafes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cafes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cafes.
     */
    distinct?: CafeScalarFieldEnum | CafeScalarFieldEnum[]
  }

  /**
   * Cafe findFirstOrThrow
   */
  export type CafeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
    /**
     * Filter, which Cafe to fetch.
     */
    where?: CafeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cafes to fetch.
     */
    orderBy?: CafeOrderByWithRelationInput | CafeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cafes.
     */
    cursor?: CafeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cafes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cafes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cafes.
     */
    distinct?: CafeScalarFieldEnum | CafeScalarFieldEnum[]
  }

  /**
   * Cafe findMany
   */
  export type CafeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
    /**
     * Filter, which Cafes to fetch.
     */
    where?: CafeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cafes to fetch.
     */
    orderBy?: CafeOrderByWithRelationInput | CafeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cafes.
     */
    cursor?: CafeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cafes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cafes.
     */
    skip?: number
    distinct?: CafeScalarFieldEnum | CafeScalarFieldEnum[]
  }

  /**
   * Cafe create
   */
  export type CafeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
    /**
     * The data needed to create a Cafe.
     */
    data: XOR<CafeCreateInput, CafeUncheckedCreateInput>
  }

  /**
   * Cafe createMany
   */
  export type CafeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cafes.
     */
    data: CafeCreateManyInput | CafeCreateManyInput[]
  }

  /**
   * Cafe update
   */
  export type CafeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
    /**
     * The data needed to update a Cafe.
     */
    data: XOR<CafeUpdateInput, CafeUncheckedUpdateInput>
    /**
     * Choose, which Cafe to update.
     */
    where: CafeWhereUniqueInput
  }

  /**
   * Cafe updateMany
   */
  export type CafeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cafes.
     */
    data: XOR<CafeUpdateManyMutationInput, CafeUncheckedUpdateManyInput>
    /**
     * Filter which Cafes to update
     */
    where?: CafeWhereInput
    /**
     * Limit how many Cafes to update.
     */
    limit?: number
  }

  /**
   * Cafe upsert
   */
  export type CafeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
    /**
     * The filter to search for the Cafe to update in case it exists.
     */
    where: CafeWhereUniqueInput
    /**
     * In case the Cafe found by the `where` argument doesn't exist, create a new Cafe with this data.
     */
    create: XOR<CafeCreateInput, CafeUncheckedCreateInput>
    /**
     * In case the Cafe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CafeUpdateInput, CafeUncheckedUpdateInput>
  }

  /**
   * Cafe delete
   */
  export type CafeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
    /**
     * Filter which Cafe to delete.
     */
    where: CafeWhereUniqueInput
  }

  /**
   * Cafe deleteMany
   */
  export type CafeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cafes to delete
     */
    where?: CafeWhereInput
    /**
     * Limit how many Cafes to delete.
     */
    limit?: number
  }

  /**
   * Cafe without action
   */
  export type CafeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cafe
     */
    select?: CafeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cafe
     */
    omit?: CafeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeInclude<ExtArgs> | null
  }


  /**
   * Model Cardapio
   */

  export type AggregateCardapio = {
    _count: CardapioCountAggregateOutputType | null
    _avg: CardapioAvgAggregateOutputType | null
    _sum: CardapioSumAggregateOutputType | null
    _min: CardapioMinAggregateOutputType | null
    _max: CardapioMaxAggregateOutputType | null
  }

  export type CardapioAvgAggregateOutputType = {
    id_produto: number | null
    valor: Decimal | null
  }

  export type CardapioSumAggregateOutputType = {
    id_produto: number | null
    valor: Decimal | null
  }

  export type CardapioMinAggregateOutputType = {
    id_produto: number | null
    valor: Decimal | null
    tipo: string | null
  }

  export type CardapioMaxAggregateOutputType = {
    id_produto: number | null
    valor: Decimal | null
    tipo: string | null
  }

  export type CardapioCountAggregateOutputType = {
    id_produto: number
    valor: number
    tipo: number
    _all: number
  }


  export type CardapioAvgAggregateInputType = {
    id_produto?: true
    valor?: true
  }

  export type CardapioSumAggregateInputType = {
    id_produto?: true
    valor?: true
  }

  export type CardapioMinAggregateInputType = {
    id_produto?: true
    valor?: true
    tipo?: true
  }

  export type CardapioMaxAggregateInputType = {
    id_produto?: true
    valor?: true
    tipo?: true
  }

  export type CardapioCountAggregateInputType = {
    id_produto?: true
    valor?: true
    tipo?: true
    _all?: true
  }

  export type CardapioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cardapio to aggregate.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cardapios
    **/
    _count?: true | CardapioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardapioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardapioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardapioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardapioMaxAggregateInputType
  }

  export type GetCardapioAggregateType<T extends CardapioAggregateArgs> = {
        [P in keyof T & keyof AggregateCardapio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardapio[P]>
      : GetScalarType<T[P], AggregateCardapio[P]>
  }




  export type CardapioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardapioWhereInput
    orderBy?: CardapioOrderByWithAggregationInput | CardapioOrderByWithAggregationInput[]
    by: CardapioScalarFieldEnum[] | CardapioScalarFieldEnum
    having?: CardapioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardapioCountAggregateInputType | true
    _avg?: CardapioAvgAggregateInputType
    _sum?: CardapioSumAggregateInputType
    _min?: CardapioMinAggregateInputType
    _max?: CardapioMaxAggregateInputType
  }

  export type CardapioGroupByOutputType = {
    id_produto: number
    valor: Decimal
    tipo: string
    _count: CardapioCountAggregateOutputType | null
    _avg: CardapioAvgAggregateOutputType | null
    _sum: CardapioSumAggregateOutputType | null
    _min: CardapioMinAggregateOutputType | null
    _max: CardapioMaxAggregateOutputType | null
  }

  type GetCardapioGroupByPayload<T extends CardapioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardapioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardapioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardapioGroupByOutputType[P]>
            : GetScalarType<T[P], CardapioGroupByOutputType[P]>
        }
      >
    >


  export type CardapioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produto?: boolean
    valor?: boolean
    tipo?: boolean
    Bebidas?: boolean | Cardapio$BebidasArgs<ExtArgs>
    Comidas?: boolean | Cardapio$ComidasArgs<ExtArgs>
    _count?: boolean | CardapioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardapio"]>



  export type CardapioSelectScalar = {
    id_produto?: boolean
    valor?: boolean
    tipo?: boolean
  }

  export type CardapioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produto" | "valor" | "tipo", ExtArgs["result"]["cardapio"]>
  export type CardapioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bebidas?: boolean | Cardapio$BebidasArgs<ExtArgs>
    Comidas?: boolean | Cardapio$ComidasArgs<ExtArgs>
    _count?: boolean | CardapioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CardapioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cardapio"
    objects: {
      Bebidas: Prisma.$BebidasPayload<ExtArgs>[]
      Comidas: Prisma.$ComidasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produto: number
      valor: Prisma.Decimal
      tipo: string
    }, ExtArgs["result"]["cardapio"]>
    composites: {}
  }

  type CardapioGetPayload<S extends boolean | null | undefined | CardapioDefaultArgs> = $Result.GetResult<Prisma.$CardapioPayload, S>

  type CardapioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardapioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardapioCountAggregateInputType | true
    }

  export interface CardapioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cardapio'], meta: { name: 'Cardapio' } }
    /**
     * Find zero or one Cardapio that matches the filter.
     * @param {CardapioFindUniqueArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardapioFindUniqueArgs>(args: SelectSubset<T, CardapioFindUniqueArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cardapio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardapioFindUniqueOrThrowArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardapioFindUniqueOrThrowArgs>(args: SelectSubset<T, CardapioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cardapio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioFindFirstArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardapioFindFirstArgs>(args?: SelectSubset<T, CardapioFindFirstArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cardapio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioFindFirstOrThrowArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardapioFindFirstOrThrowArgs>(args?: SelectSubset<T, CardapioFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cardapios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cardapios
     * const cardapios = await prisma.cardapio.findMany()
     * 
     * // Get first 10 Cardapios
     * const cardapios = await prisma.cardapio.findMany({ take: 10 })
     * 
     * // Only select the `id_produto`
     * const cardapioWithId_produtoOnly = await prisma.cardapio.findMany({ select: { id_produto: true } })
     * 
     */
    findMany<T extends CardapioFindManyArgs>(args?: SelectSubset<T, CardapioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cardapio.
     * @param {CardapioCreateArgs} args - Arguments to create a Cardapio.
     * @example
     * // Create one Cardapio
     * const Cardapio = await prisma.cardapio.create({
     *   data: {
     *     // ... data to create a Cardapio
     *   }
     * })
     * 
     */
    create<T extends CardapioCreateArgs>(args: SelectSubset<T, CardapioCreateArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cardapios.
     * @param {CardapioCreateManyArgs} args - Arguments to create many Cardapios.
     * @example
     * // Create many Cardapios
     * const cardapio = await prisma.cardapio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardapioCreateManyArgs>(args?: SelectSubset<T, CardapioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cardapio.
     * @param {CardapioDeleteArgs} args - Arguments to delete one Cardapio.
     * @example
     * // Delete one Cardapio
     * const Cardapio = await prisma.cardapio.delete({
     *   where: {
     *     // ... filter to delete one Cardapio
     *   }
     * })
     * 
     */
    delete<T extends CardapioDeleteArgs>(args: SelectSubset<T, CardapioDeleteArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cardapio.
     * @param {CardapioUpdateArgs} args - Arguments to update one Cardapio.
     * @example
     * // Update one Cardapio
     * const cardapio = await prisma.cardapio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardapioUpdateArgs>(args: SelectSubset<T, CardapioUpdateArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cardapios.
     * @param {CardapioDeleteManyArgs} args - Arguments to filter Cardapios to delete.
     * @example
     * // Delete a few Cardapios
     * const { count } = await prisma.cardapio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardapioDeleteManyArgs>(args?: SelectSubset<T, CardapioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cardapios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cardapios
     * const cardapio = await prisma.cardapio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardapioUpdateManyArgs>(args: SelectSubset<T, CardapioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cardapio.
     * @param {CardapioUpsertArgs} args - Arguments to update or create a Cardapio.
     * @example
     * // Update or create a Cardapio
     * const cardapio = await prisma.cardapio.upsert({
     *   create: {
     *     // ... data to create a Cardapio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cardapio we want to update
     *   }
     * })
     */
    upsert<T extends CardapioUpsertArgs>(args: SelectSubset<T, CardapioUpsertArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cardapios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioCountArgs} args - Arguments to filter Cardapios to count.
     * @example
     * // Count the number of Cardapios
     * const count = await prisma.cardapio.count({
     *   where: {
     *     // ... the filter for the Cardapios we want to count
     *   }
     * })
    **/
    count<T extends CardapioCountArgs>(
      args?: Subset<T, CardapioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardapioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cardapio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardapioAggregateArgs>(args: Subset<T, CardapioAggregateArgs>): Prisma.PrismaPromise<GetCardapioAggregateType<T>>

    /**
     * Group by Cardapio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardapioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardapioGroupByArgs['orderBy'] }
        : { orderBy?: CardapioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardapioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardapioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cardapio model
   */
  readonly fields: CardapioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cardapio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardapioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bebidas<T extends Cardapio$BebidasArgs<ExtArgs> = {}>(args?: Subset<T, Cardapio$BebidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Comidas<T extends Cardapio$ComidasArgs<ExtArgs> = {}>(args?: Subset<T, Cardapio$ComidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cardapio model
   */
  interface CardapioFieldRefs {
    readonly id_produto: FieldRef<"Cardapio", 'Int'>
    readonly valor: FieldRef<"Cardapio", 'Decimal'>
    readonly tipo: FieldRef<"Cardapio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cardapio findUnique
   */
  export type CardapioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio findUniqueOrThrow
   */
  export type CardapioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio findFirst
   */
  export type CardapioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cardapios.
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cardapios.
     */
    distinct?: CardapioScalarFieldEnum | CardapioScalarFieldEnum[]
  }

  /**
   * Cardapio findFirstOrThrow
   */
  export type CardapioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cardapios.
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cardapios.
     */
    distinct?: CardapioScalarFieldEnum | CardapioScalarFieldEnum[]
  }

  /**
   * Cardapio findMany
   */
  export type CardapioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter, which Cardapios to fetch.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cardapios.
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    distinct?: CardapioScalarFieldEnum | CardapioScalarFieldEnum[]
  }

  /**
   * Cardapio create
   */
  export type CardapioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * The data needed to create a Cardapio.
     */
    data: XOR<CardapioCreateInput, CardapioUncheckedCreateInput>
  }

  /**
   * Cardapio createMany
   */
  export type CardapioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cardapios.
     */
    data: CardapioCreateManyInput | CardapioCreateManyInput[]
  }

  /**
   * Cardapio update
   */
  export type CardapioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * The data needed to update a Cardapio.
     */
    data: XOR<CardapioUpdateInput, CardapioUncheckedUpdateInput>
    /**
     * Choose, which Cardapio to update.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio updateMany
   */
  export type CardapioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cardapios.
     */
    data: XOR<CardapioUpdateManyMutationInput, CardapioUncheckedUpdateManyInput>
    /**
     * Filter which Cardapios to update
     */
    where?: CardapioWhereInput
    /**
     * Limit how many Cardapios to update.
     */
    limit?: number
  }

  /**
   * Cardapio upsert
   */
  export type CardapioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * The filter to search for the Cardapio to update in case it exists.
     */
    where: CardapioWhereUniqueInput
    /**
     * In case the Cardapio found by the `where` argument doesn't exist, create a new Cardapio with this data.
     */
    create: XOR<CardapioCreateInput, CardapioUncheckedCreateInput>
    /**
     * In case the Cardapio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardapioUpdateInput, CardapioUncheckedUpdateInput>
  }

  /**
   * Cardapio delete
   */
  export type CardapioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter which Cardapio to delete.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio deleteMany
   */
  export type CardapioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cardapios to delete
     */
    where?: CardapioWhereInput
    /**
     * Limit how many Cardapios to delete.
     */
    limit?: number
  }

  /**
   * Cardapio.Bebidas
   */
  export type Cardapio$BebidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebidas
     */
    select?: BebidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebidas
     */
    omit?: BebidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidasInclude<ExtArgs> | null
    where?: BebidasWhereInput
    orderBy?: BebidasOrderByWithRelationInput | BebidasOrderByWithRelationInput[]
    cursor?: BebidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BebidasScalarFieldEnum | BebidasScalarFieldEnum[]
  }

  /**
   * Cardapio.Comidas
   */
  export type Cardapio$ComidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
    where?: ComidasWhereInput
    orderBy?: ComidasOrderByWithRelationInput | ComidasOrderByWithRelationInput[]
    cursor?: ComidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComidasScalarFieldEnum | ComidasScalarFieldEnum[]
  }

  /**
   * Cardapio without action
   */
  export type CardapioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
  }


  /**
   * Model Cha
   */

  export type AggregateCha = {
    _count: ChaCountAggregateOutputType | null
    _avg: ChaAvgAggregateOutputType | null
    _sum: ChaSumAggregateOutputType | null
    _min: ChaMinAggregateOutputType | null
    _max: ChaMaxAggregateOutputType | null
  }

  export type ChaAvgAggregateOutputType = {
    id_item: number | null
  }

  export type ChaSumAggregateOutputType = {
    id_item: number | null
  }

  export type ChaMinAggregateOutputType = {
    id_item: number | null
    item: string | null
  }

  export type ChaMaxAggregateOutputType = {
    id_item: number | null
    item: string | null
  }

  export type ChaCountAggregateOutputType = {
    id_item: number
    item: number
    _all: number
  }


  export type ChaAvgAggregateInputType = {
    id_item?: true
  }

  export type ChaSumAggregateInputType = {
    id_item?: true
  }

  export type ChaMinAggregateInputType = {
    id_item?: true
    item?: true
  }

  export type ChaMaxAggregateInputType = {
    id_item?: true
    item?: true
  }

  export type ChaCountAggregateInputType = {
    id_item?: true
    item?: true
    _all?: true
  }

  export type ChaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cha to aggregate.
     */
    where?: ChaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chas to fetch.
     */
    orderBy?: ChaOrderByWithRelationInput | ChaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chas
    **/
    _count?: true | ChaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChaMaxAggregateInputType
  }

  export type GetChaAggregateType<T extends ChaAggregateArgs> = {
        [P in keyof T & keyof AggregateCha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCha[P]>
      : GetScalarType<T[P], AggregateCha[P]>
  }




  export type ChaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChaWhereInput
    orderBy?: ChaOrderByWithAggregationInput | ChaOrderByWithAggregationInput[]
    by: ChaScalarFieldEnum[] | ChaScalarFieldEnum
    having?: ChaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChaCountAggregateInputType | true
    _avg?: ChaAvgAggregateInputType
    _sum?: ChaSumAggregateInputType
    _min?: ChaMinAggregateInputType
    _max?: ChaMaxAggregateInputType
  }

  export type ChaGroupByOutputType = {
    id_item: number
    item: string | null
    _count: ChaCountAggregateOutputType | null
    _avg: ChaAvgAggregateOutputType | null
    _sum: ChaSumAggregateOutputType | null
    _min: ChaMinAggregateOutputType | null
    _max: ChaMaxAggregateOutputType | null
  }

  type GetChaGroupByPayload<T extends ChaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChaGroupByOutputType[P]>
            : GetScalarType<T[P], ChaGroupByOutputType[P]>
        }
      >
    >


  export type ChaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    item?: boolean
    Bebidas?: boolean | BebidasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cha"]>



  export type ChaSelectScalar = {
    id_item?: boolean
    item?: boolean
  }

  export type ChaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_item" | "item", ExtArgs["result"]["cha"]>
  export type ChaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bebidas?: boolean | BebidasDefaultArgs<ExtArgs>
  }

  export type $ChaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cha"
    objects: {
      Bebidas: Prisma.$BebidasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_item: number
      item: string | null
    }, ExtArgs["result"]["cha"]>
    composites: {}
  }

  type ChaGetPayload<S extends boolean | null | undefined | ChaDefaultArgs> = $Result.GetResult<Prisma.$ChaPayload, S>

  type ChaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChaCountAggregateInputType | true
    }

  export interface ChaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cha'], meta: { name: 'Cha' } }
    /**
     * Find zero or one Cha that matches the filter.
     * @param {ChaFindUniqueArgs} args - Arguments to find a Cha
     * @example
     * // Get one Cha
     * const cha = await prisma.cha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChaFindUniqueArgs>(args: SelectSubset<T, ChaFindUniqueArgs<ExtArgs>>): Prisma__ChaClient<$Result.GetResult<Prisma.$ChaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChaFindUniqueOrThrowArgs} args - Arguments to find a Cha
     * @example
     * // Get one Cha
     * const cha = await prisma.cha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChaFindUniqueOrThrowArgs>(args: SelectSubset<T, ChaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChaClient<$Result.GetResult<Prisma.$ChaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaFindFirstArgs} args - Arguments to find a Cha
     * @example
     * // Get one Cha
     * const cha = await prisma.cha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChaFindFirstArgs>(args?: SelectSubset<T, ChaFindFirstArgs<ExtArgs>>): Prisma__ChaClient<$Result.GetResult<Prisma.$ChaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaFindFirstOrThrowArgs} args - Arguments to find a Cha
     * @example
     * // Get one Cha
     * const cha = await prisma.cha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChaFindFirstOrThrowArgs>(args?: SelectSubset<T, ChaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChaClient<$Result.GetResult<Prisma.$ChaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chas
     * const chas = await prisma.cha.findMany()
     * 
     * // Get first 10 Chas
     * const chas = await prisma.cha.findMany({ take: 10 })
     * 
     * // Only select the `id_item`
     * const chaWithId_itemOnly = await prisma.cha.findMany({ select: { id_item: true } })
     * 
     */
    findMany<T extends ChaFindManyArgs>(args?: SelectSubset<T, ChaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cha.
     * @param {ChaCreateArgs} args - Arguments to create a Cha.
     * @example
     * // Create one Cha
     * const Cha = await prisma.cha.create({
     *   data: {
     *     // ... data to create a Cha
     *   }
     * })
     * 
     */
    create<T extends ChaCreateArgs>(args: SelectSubset<T, ChaCreateArgs<ExtArgs>>): Prisma__ChaClient<$Result.GetResult<Prisma.$ChaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chas.
     * @param {ChaCreateManyArgs} args - Arguments to create many Chas.
     * @example
     * // Create many Chas
     * const cha = await prisma.cha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChaCreateManyArgs>(args?: SelectSubset<T, ChaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cha.
     * @param {ChaDeleteArgs} args - Arguments to delete one Cha.
     * @example
     * // Delete one Cha
     * const Cha = await prisma.cha.delete({
     *   where: {
     *     // ... filter to delete one Cha
     *   }
     * })
     * 
     */
    delete<T extends ChaDeleteArgs>(args: SelectSubset<T, ChaDeleteArgs<ExtArgs>>): Prisma__ChaClient<$Result.GetResult<Prisma.$ChaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cha.
     * @param {ChaUpdateArgs} args - Arguments to update one Cha.
     * @example
     * // Update one Cha
     * const cha = await prisma.cha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChaUpdateArgs>(args: SelectSubset<T, ChaUpdateArgs<ExtArgs>>): Prisma__ChaClient<$Result.GetResult<Prisma.$ChaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chas.
     * @param {ChaDeleteManyArgs} args - Arguments to filter Chas to delete.
     * @example
     * // Delete a few Chas
     * const { count } = await prisma.cha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChaDeleteManyArgs>(args?: SelectSubset<T, ChaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chas
     * const cha = await prisma.cha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChaUpdateManyArgs>(args: SelectSubset<T, ChaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cha.
     * @param {ChaUpsertArgs} args - Arguments to update or create a Cha.
     * @example
     * // Update or create a Cha
     * const cha = await prisma.cha.upsert({
     *   create: {
     *     // ... data to create a Cha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cha we want to update
     *   }
     * })
     */
    upsert<T extends ChaUpsertArgs>(args: SelectSubset<T, ChaUpsertArgs<ExtArgs>>): Prisma__ChaClient<$Result.GetResult<Prisma.$ChaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaCountArgs} args - Arguments to filter Chas to count.
     * @example
     * // Count the number of Chas
     * const count = await prisma.cha.count({
     *   where: {
     *     // ... the filter for the Chas we want to count
     *   }
     * })
    **/
    count<T extends ChaCountArgs>(
      args?: Subset<T, ChaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChaAggregateArgs>(args: Subset<T, ChaAggregateArgs>): Prisma.PrismaPromise<GetChaAggregateType<T>>

    /**
     * Group by Cha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChaGroupByArgs['orderBy'] }
        : { orderBy?: ChaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cha model
   */
  readonly fields: ChaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bebidas<T extends BebidasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BebidasDefaultArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cha model
   */
  interface ChaFieldRefs {
    readonly id_item: FieldRef<"Cha", 'Int'>
    readonly item: FieldRef<"Cha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cha findUnique
   */
  export type ChaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
    /**
     * Filter, which Cha to fetch.
     */
    where: ChaWhereUniqueInput
  }

  /**
   * Cha findUniqueOrThrow
   */
  export type ChaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
    /**
     * Filter, which Cha to fetch.
     */
    where: ChaWhereUniqueInput
  }

  /**
   * Cha findFirst
   */
  export type ChaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
    /**
     * Filter, which Cha to fetch.
     */
    where?: ChaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chas to fetch.
     */
    orderBy?: ChaOrderByWithRelationInput | ChaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chas.
     */
    cursor?: ChaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chas.
     */
    distinct?: ChaScalarFieldEnum | ChaScalarFieldEnum[]
  }

  /**
   * Cha findFirstOrThrow
   */
  export type ChaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
    /**
     * Filter, which Cha to fetch.
     */
    where?: ChaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chas to fetch.
     */
    orderBy?: ChaOrderByWithRelationInput | ChaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chas.
     */
    cursor?: ChaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chas.
     */
    distinct?: ChaScalarFieldEnum | ChaScalarFieldEnum[]
  }

  /**
   * Cha findMany
   */
  export type ChaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
    /**
     * Filter, which Chas to fetch.
     */
    where?: ChaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chas to fetch.
     */
    orderBy?: ChaOrderByWithRelationInput | ChaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chas.
     */
    cursor?: ChaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chas.
     */
    skip?: number
    distinct?: ChaScalarFieldEnum | ChaScalarFieldEnum[]
  }

  /**
   * Cha create
   */
  export type ChaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cha.
     */
    data: XOR<ChaCreateInput, ChaUncheckedCreateInput>
  }

  /**
   * Cha createMany
   */
  export type ChaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chas.
     */
    data: ChaCreateManyInput | ChaCreateManyInput[]
  }

  /**
   * Cha update
   */
  export type ChaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cha.
     */
    data: XOR<ChaUpdateInput, ChaUncheckedUpdateInput>
    /**
     * Choose, which Cha to update.
     */
    where: ChaWhereUniqueInput
  }

  /**
   * Cha updateMany
   */
  export type ChaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chas.
     */
    data: XOR<ChaUpdateManyMutationInput, ChaUncheckedUpdateManyInput>
    /**
     * Filter which Chas to update
     */
    where?: ChaWhereInput
    /**
     * Limit how many Chas to update.
     */
    limit?: number
  }

  /**
   * Cha upsert
   */
  export type ChaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cha to update in case it exists.
     */
    where: ChaWhereUniqueInput
    /**
     * In case the Cha found by the `where` argument doesn't exist, create a new Cha with this data.
     */
    create: XOR<ChaCreateInput, ChaUncheckedCreateInput>
    /**
     * In case the Cha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChaUpdateInput, ChaUncheckedUpdateInput>
  }

  /**
   * Cha delete
   */
  export type ChaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
    /**
     * Filter which Cha to delete.
     */
    where: ChaWhereUniqueInput
  }

  /**
   * Cha deleteMany
   */
  export type ChaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chas to delete
     */
    where?: ChaWhereInput
    /**
     * Limit how many Chas to delete.
     */
    limit?: number
  }

  /**
   * Cha without action
   */
  export type ChaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cha
     */
    select?: ChaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cha
     */
    omit?: ChaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaInclude<ExtArgs> | null
  }


  /**
   * Model Comidas
   */

  export type AggregateComidas = {
    _count: ComidasCountAggregateOutputType | null
    _avg: ComidasAvgAggregateOutputType | null
    _sum: ComidasSumAggregateOutputType | null
    _min: ComidasMinAggregateOutputType | null
    _max: ComidasMaxAggregateOutputType | null
  }

  export type ComidasAvgAggregateOutputType = {
    id_item: number | null
    id_produto: number | null
  }

  export type ComidasSumAggregateOutputType = {
    id_item: number | null
    id_produto: number | null
  }

  export type ComidasMinAggregateOutputType = {
    id_item: number | null
    tipo: string | null
    peso: string | null
    id_produto: number | null
  }

  export type ComidasMaxAggregateOutputType = {
    id_item: number | null
    tipo: string | null
    peso: string | null
    id_produto: number | null
  }

  export type ComidasCountAggregateOutputType = {
    id_item: number
    tipo: number
    peso: number
    id_produto: number
    _all: number
  }


  export type ComidasAvgAggregateInputType = {
    id_item?: true
    id_produto?: true
  }

  export type ComidasSumAggregateInputType = {
    id_item?: true
    id_produto?: true
  }

  export type ComidasMinAggregateInputType = {
    id_item?: true
    tipo?: true
    peso?: true
    id_produto?: true
  }

  export type ComidasMaxAggregateInputType = {
    id_item?: true
    tipo?: true
    peso?: true
    id_produto?: true
  }

  export type ComidasCountAggregateInputType = {
    id_item?: true
    tipo?: true
    peso?: true
    id_produto?: true
    _all?: true
  }

  export type ComidasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comidas to aggregate.
     */
    where?: ComidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comidas to fetch.
     */
    orderBy?: ComidasOrderByWithRelationInput | ComidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comidas
    **/
    _count?: true | ComidasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComidasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComidasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComidasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComidasMaxAggregateInputType
  }

  export type GetComidasAggregateType<T extends ComidasAggregateArgs> = {
        [P in keyof T & keyof AggregateComidas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComidas[P]>
      : GetScalarType<T[P], AggregateComidas[P]>
  }




  export type ComidasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComidasWhereInput
    orderBy?: ComidasOrderByWithAggregationInput | ComidasOrderByWithAggregationInput[]
    by: ComidasScalarFieldEnum[] | ComidasScalarFieldEnum
    having?: ComidasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComidasCountAggregateInputType | true
    _avg?: ComidasAvgAggregateInputType
    _sum?: ComidasSumAggregateInputType
    _min?: ComidasMinAggregateInputType
    _max?: ComidasMaxAggregateInputType
  }

  export type ComidasGroupByOutputType = {
    id_item: number
    tipo: string | null
    peso: string | null
    id_produto: number
    _count: ComidasCountAggregateOutputType | null
    _avg: ComidasAvgAggregateOutputType | null
    _sum: ComidasSumAggregateOutputType | null
    _min: ComidasMinAggregateOutputType | null
    _max: ComidasMaxAggregateOutputType | null
  }

  type GetComidasGroupByPayload<T extends ComidasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComidasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComidasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComidasGroupByOutputType[P]>
            : GetScalarType<T[P], ComidasGroupByOutputType[P]>
        }
      >
    >


  export type ComidasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    tipo?: boolean
    peso?: boolean
    id_produto?: boolean
    Cardapio?: boolean | CardapioDefaultArgs<ExtArgs>
    Doce?: boolean | Comidas$DoceArgs<ExtArgs>
    Salgado?: boolean | Comidas$SalgadoArgs<ExtArgs>
  }, ExtArgs["result"]["comidas"]>



  export type ComidasSelectScalar = {
    id_item?: boolean
    tipo?: boolean
    peso?: boolean
    id_produto?: boolean
  }

  export type ComidasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_item" | "tipo" | "peso" | "id_produto", ExtArgs["result"]["comidas"]>
  export type ComidasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cardapio?: boolean | CardapioDefaultArgs<ExtArgs>
    Doce?: boolean | Comidas$DoceArgs<ExtArgs>
    Salgado?: boolean | Comidas$SalgadoArgs<ExtArgs>
  }

  export type $ComidasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comidas"
    objects: {
      Cardapio: Prisma.$CardapioPayload<ExtArgs>
      Doce: Prisma.$DocePayload<ExtArgs> | null
      Salgado: Prisma.$SalgadoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_item: number
      tipo: string | null
      peso: string | null
      id_produto: number
    }, ExtArgs["result"]["comidas"]>
    composites: {}
  }

  type ComidasGetPayload<S extends boolean | null | undefined | ComidasDefaultArgs> = $Result.GetResult<Prisma.$ComidasPayload, S>

  type ComidasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComidasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComidasCountAggregateInputType | true
    }

  export interface ComidasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comidas'], meta: { name: 'Comidas' } }
    /**
     * Find zero or one Comidas that matches the filter.
     * @param {ComidasFindUniqueArgs} args - Arguments to find a Comidas
     * @example
     * // Get one Comidas
     * const comidas = await prisma.comidas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComidasFindUniqueArgs>(args: SelectSubset<T, ComidasFindUniqueArgs<ExtArgs>>): Prisma__ComidasClient<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comidas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComidasFindUniqueOrThrowArgs} args - Arguments to find a Comidas
     * @example
     * // Get one Comidas
     * const comidas = await prisma.comidas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComidasFindUniqueOrThrowArgs>(args: SelectSubset<T, ComidasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComidasClient<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComidasFindFirstArgs} args - Arguments to find a Comidas
     * @example
     * // Get one Comidas
     * const comidas = await prisma.comidas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComidasFindFirstArgs>(args?: SelectSubset<T, ComidasFindFirstArgs<ExtArgs>>): Prisma__ComidasClient<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comidas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComidasFindFirstOrThrowArgs} args - Arguments to find a Comidas
     * @example
     * // Get one Comidas
     * const comidas = await prisma.comidas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComidasFindFirstOrThrowArgs>(args?: SelectSubset<T, ComidasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComidasClient<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComidasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comidas
     * const comidas = await prisma.comidas.findMany()
     * 
     * // Get first 10 Comidas
     * const comidas = await prisma.comidas.findMany({ take: 10 })
     * 
     * // Only select the `id_item`
     * const comidasWithId_itemOnly = await prisma.comidas.findMany({ select: { id_item: true } })
     * 
     */
    findMany<T extends ComidasFindManyArgs>(args?: SelectSubset<T, ComidasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comidas.
     * @param {ComidasCreateArgs} args - Arguments to create a Comidas.
     * @example
     * // Create one Comidas
     * const Comidas = await prisma.comidas.create({
     *   data: {
     *     // ... data to create a Comidas
     *   }
     * })
     * 
     */
    create<T extends ComidasCreateArgs>(args: SelectSubset<T, ComidasCreateArgs<ExtArgs>>): Prisma__ComidasClient<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comidas.
     * @param {ComidasCreateManyArgs} args - Arguments to create many Comidas.
     * @example
     * // Create many Comidas
     * const comidas = await prisma.comidas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComidasCreateManyArgs>(args?: SelectSubset<T, ComidasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comidas.
     * @param {ComidasDeleteArgs} args - Arguments to delete one Comidas.
     * @example
     * // Delete one Comidas
     * const Comidas = await prisma.comidas.delete({
     *   where: {
     *     // ... filter to delete one Comidas
     *   }
     * })
     * 
     */
    delete<T extends ComidasDeleteArgs>(args: SelectSubset<T, ComidasDeleteArgs<ExtArgs>>): Prisma__ComidasClient<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comidas.
     * @param {ComidasUpdateArgs} args - Arguments to update one Comidas.
     * @example
     * // Update one Comidas
     * const comidas = await prisma.comidas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComidasUpdateArgs>(args: SelectSubset<T, ComidasUpdateArgs<ExtArgs>>): Prisma__ComidasClient<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comidas.
     * @param {ComidasDeleteManyArgs} args - Arguments to filter Comidas to delete.
     * @example
     * // Delete a few Comidas
     * const { count } = await prisma.comidas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComidasDeleteManyArgs>(args?: SelectSubset<T, ComidasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComidasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comidas
     * const comidas = await prisma.comidas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComidasUpdateManyArgs>(args: SelectSubset<T, ComidasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comidas.
     * @param {ComidasUpsertArgs} args - Arguments to update or create a Comidas.
     * @example
     * // Update or create a Comidas
     * const comidas = await prisma.comidas.upsert({
     *   create: {
     *     // ... data to create a Comidas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comidas we want to update
     *   }
     * })
     */
    upsert<T extends ComidasUpsertArgs>(args: SelectSubset<T, ComidasUpsertArgs<ExtArgs>>): Prisma__ComidasClient<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComidasCountArgs} args - Arguments to filter Comidas to count.
     * @example
     * // Count the number of Comidas
     * const count = await prisma.comidas.count({
     *   where: {
     *     // ... the filter for the Comidas we want to count
     *   }
     * })
    **/
    count<T extends ComidasCountArgs>(
      args?: Subset<T, ComidasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComidasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComidasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComidasAggregateArgs>(args: Subset<T, ComidasAggregateArgs>): Prisma.PrismaPromise<GetComidasAggregateType<T>>

    /**
     * Group by Comidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComidasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComidasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComidasGroupByArgs['orderBy'] }
        : { orderBy?: ComidasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComidasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComidasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comidas model
   */
  readonly fields: ComidasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comidas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComidasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cardapio<T extends CardapioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardapioDefaultArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Doce<T extends Comidas$DoceArgs<ExtArgs> = {}>(args?: Subset<T, Comidas$DoceArgs<ExtArgs>>): Prisma__DoceClient<$Result.GetResult<Prisma.$DocePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Salgado<T extends Comidas$SalgadoArgs<ExtArgs> = {}>(args?: Subset<T, Comidas$SalgadoArgs<ExtArgs>>): Prisma__SalgadoClient<$Result.GetResult<Prisma.$SalgadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comidas model
   */
  interface ComidasFieldRefs {
    readonly id_item: FieldRef<"Comidas", 'Int'>
    readonly tipo: FieldRef<"Comidas", 'String'>
    readonly peso: FieldRef<"Comidas", 'String'>
    readonly id_produto: FieldRef<"Comidas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comidas findUnique
   */
  export type ComidasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
    /**
     * Filter, which Comidas to fetch.
     */
    where: ComidasWhereUniqueInput
  }

  /**
   * Comidas findUniqueOrThrow
   */
  export type ComidasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
    /**
     * Filter, which Comidas to fetch.
     */
    where: ComidasWhereUniqueInput
  }

  /**
   * Comidas findFirst
   */
  export type ComidasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
    /**
     * Filter, which Comidas to fetch.
     */
    where?: ComidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comidas to fetch.
     */
    orderBy?: ComidasOrderByWithRelationInput | ComidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comidas.
     */
    cursor?: ComidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comidas.
     */
    distinct?: ComidasScalarFieldEnum | ComidasScalarFieldEnum[]
  }

  /**
   * Comidas findFirstOrThrow
   */
  export type ComidasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
    /**
     * Filter, which Comidas to fetch.
     */
    where?: ComidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comidas to fetch.
     */
    orderBy?: ComidasOrderByWithRelationInput | ComidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comidas.
     */
    cursor?: ComidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comidas.
     */
    distinct?: ComidasScalarFieldEnum | ComidasScalarFieldEnum[]
  }

  /**
   * Comidas findMany
   */
  export type ComidasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
    /**
     * Filter, which Comidas to fetch.
     */
    where?: ComidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comidas to fetch.
     */
    orderBy?: ComidasOrderByWithRelationInput | ComidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comidas.
     */
    cursor?: ComidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comidas.
     */
    skip?: number
    distinct?: ComidasScalarFieldEnum | ComidasScalarFieldEnum[]
  }

  /**
   * Comidas create
   */
  export type ComidasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
    /**
     * The data needed to create a Comidas.
     */
    data: XOR<ComidasCreateInput, ComidasUncheckedCreateInput>
  }

  /**
   * Comidas createMany
   */
  export type ComidasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comidas.
     */
    data: ComidasCreateManyInput | ComidasCreateManyInput[]
  }

  /**
   * Comidas update
   */
  export type ComidasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
    /**
     * The data needed to update a Comidas.
     */
    data: XOR<ComidasUpdateInput, ComidasUncheckedUpdateInput>
    /**
     * Choose, which Comidas to update.
     */
    where: ComidasWhereUniqueInput
  }

  /**
   * Comidas updateMany
   */
  export type ComidasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comidas.
     */
    data: XOR<ComidasUpdateManyMutationInput, ComidasUncheckedUpdateManyInput>
    /**
     * Filter which Comidas to update
     */
    where?: ComidasWhereInput
    /**
     * Limit how many Comidas to update.
     */
    limit?: number
  }

  /**
   * Comidas upsert
   */
  export type ComidasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
    /**
     * The filter to search for the Comidas to update in case it exists.
     */
    where: ComidasWhereUniqueInput
    /**
     * In case the Comidas found by the `where` argument doesn't exist, create a new Comidas with this data.
     */
    create: XOR<ComidasCreateInput, ComidasUncheckedCreateInput>
    /**
     * In case the Comidas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComidasUpdateInput, ComidasUncheckedUpdateInput>
  }

  /**
   * Comidas delete
   */
  export type ComidasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
    /**
     * Filter which Comidas to delete.
     */
    where: ComidasWhereUniqueInput
  }

  /**
   * Comidas deleteMany
   */
  export type ComidasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comidas to delete
     */
    where?: ComidasWhereInput
    /**
     * Limit how many Comidas to delete.
     */
    limit?: number
  }

  /**
   * Comidas.Doce
   */
  export type Comidas$DoceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
    where?: DoceWhereInput
  }

  /**
   * Comidas.Salgado
   */
  export type Comidas$SalgadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
    where?: SalgadoWhereInput
  }

  /**
   * Comidas without action
   */
  export type ComidasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comidas
     */
    select?: ComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comidas
     */
    omit?: ComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComidasInclude<ExtArgs> | null
  }


  /**
   * Model Doce
   */

  export type AggregateDoce = {
    _count: DoceCountAggregateOutputType | null
    _avg: DoceAvgAggregateOutputType | null
    _sum: DoceSumAggregateOutputType | null
    _min: DoceMinAggregateOutputType | null
    _max: DoceMaxAggregateOutputType | null
  }

  export type DoceAvgAggregateOutputType = {
    id_item: number | null
  }

  export type DoceSumAggregateOutputType = {
    id_item: number | null
  }

  export type DoceMinAggregateOutputType = {
    id_item: number | null
    item: string | null
  }

  export type DoceMaxAggregateOutputType = {
    id_item: number | null
    item: string | null
  }

  export type DoceCountAggregateOutputType = {
    id_item: number
    item: number
    _all: number
  }


  export type DoceAvgAggregateInputType = {
    id_item?: true
  }

  export type DoceSumAggregateInputType = {
    id_item?: true
  }

  export type DoceMinAggregateInputType = {
    id_item?: true
    item?: true
  }

  export type DoceMaxAggregateInputType = {
    id_item?: true
    item?: true
  }

  export type DoceCountAggregateInputType = {
    id_item?: true
    item?: true
    _all?: true
  }

  export type DoceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doce to aggregate.
     */
    where?: DoceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doces to fetch.
     */
    orderBy?: DoceOrderByWithRelationInput | DoceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doces
    **/
    _count?: true | DoceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoceMaxAggregateInputType
  }

  export type GetDoceAggregateType<T extends DoceAggregateArgs> = {
        [P in keyof T & keyof AggregateDoce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoce[P]>
      : GetScalarType<T[P], AggregateDoce[P]>
  }




  export type DoceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoceWhereInput
    orderBy?: DoceOrderByWithAggregationInput | DoceOrderByWithAggregationInput[]
    by: DoceScalarFieldEnum[] | DoceScalarFieldEnum
    having?: DoceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoceCountAggregateInputType | true
    _avg?: DoceAvgAggregateInputType
    _sum?: DoceSumAggregateInputType
    _min?: DoceMinAggregateInputType
    _max?: DoceMaxAggregateInputType
  }

  export type DoceGroupByOutputType = {
    id_item: number
    item: string | null
    _count: DoceCountAggregateOutputType | null
    _avg: DoceAvgAggregateOutputType | null
    _sum: DoceSumAggregateOutputType | null
    _min: DoceMinAggregateOutputType | null
    _max: DoceMaxAggregateOutputType | null
  }

  type GetDoceGroupByPayload<T extends DoceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoceGroupByOutputType[P]>
            : GetScalarType<T[P], DoceGroupByOutputType[P]>
        }
      >
    >


  export type DoceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    item?: boolean
    Comidas?: boolean | ComidasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doce"]>



  export type DoceSelectScalar = {
    id_item?: boolean
    item?: boolean
  }

  export type DoceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_item" | "item", ExtArgs["result"]["doce"]>
  export type DoceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comidas?: boolean | ComidasDefaultArgs<ExtArgs>
  }

  export type $DocePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doce"
    objects: {
      Comidas: Prisma.$ComidasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_item: number
      item: string | null
    }, ExtArgs["result"]["doce"]>
    composites: {}
  }

  type DoceGetPayload<S extends boolean | null | undefined | DoceDefaultArgs> = $Result.GetResult<Prisma.$DocePayload, S>

  type DoceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoceCountAggregateInputType | true
    }

  export interface DoceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doce'], meta: { name: 'Doce' } }
    /**
     * Find zero or one Doce that matches the filter.
     * @param {DoceFindUniqueArgs} args - Arguments to find a Doce
     * @example
     * // Get one Doce
     * const doce = await prisma.doce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoceFindUniqueArgs>(args: SelectSubset<T, DoceFindUniqueArgs<ExtArgs>>): Prisma__DoceClient<$Result.GetResult<Prisma.$DocePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoceFindUniqueOrThrowArgs} args - Arguments to find a Doce
     * @example
     * // Get one Doce
     * const doce = await prisma.doce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoceFindUniqueOrThrowArgs>(args: SelectSubset<T, DoceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoceClient<$Result.GetResult<Prisma.$DocePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoceFindFirstArgs} args - Arguments to find a Doce
     * @example
     * // Get one Doce
     * const doce = await prisma.doce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoceFindFirstArgs>(args?: SelectSubset<T, DoceFindFirstArgs<ExtArgs>>): Prisma__DoceClient<$Result.GetResult<Prisma.$DocePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoceFindFirstOrThrowArgs} args - Arguments to find a Doce
     * @example
     * // Get one Doce
     * const doce = await prisma.doce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoceFindFirstOrThrowArgs>(args?: SelectSubset<T, DoceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoceClient<$Result.GetResult<Prisma.$DocePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doces
     * const doces = await prisma.doce.findMany()
     * 
     * // Get first 10 Doces
     * const doces = await prisma.doce.findMany({ take: 10 })
     * 
     * // Only select the `id_item`
     * const doceWithId_itemOnly = await prisma.doce.findMany({ select: { id_item: true } })
     * 
     */
    findMany<T extends DoceFindManyArgs>(args?: SelectSubset<T, DoceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doce.
     * @param {DoceCreateArgs} args - Arguments to create a Doce.
     * @example
     * // Create one Doce
     * const Doce = await prisma.doce.create({
     *   data: {
     *     // ... data to create a Doce
     *   }
     * })
     * 
     */
    create<T extends DoceCreateArgs>(args: SelectSubset<T, DoceCreateArgs<ExtArgs>>): Prisma__DoceClient<$Result.GetResult<Prisma.$DocePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doces.
     * @param {DoceCreateManyArgs} args - Arguments to create many Doces.
     * @example
     * // Create many Doces
     * const doce = await prisma.doce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoceCreateManyArgs>(args?: SelectSubset<T, DoceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doce.
     * @param {DoceDeleteArgs} args - Arguments to delete one Doce.
     * @example
     * // Delete one Doce
     * const Doce = await prisma.doce.delete({
     *   where: {
     *     // ... filter to delete one Doce
     *   }
     * })
     * 
     */
    delete<T extends DoceDeleteArgs>(args: SelectSubset<T, DoceDeleteArgs<ExtArgs>>): Prisma__DoceClient<$Result.GetResult<Prisma.$DocePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doce.
     * @param {DoceUpdateArgs} args - Arguments to update one Doce.
     * @example
     * // Update one Doce
     * const doce = await prisma.doce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoceUpdateArgs>(args: SelectSubset<T, DoceUpdateArgs<ExtArgs>>): Prisma__DoceClient<$Result.GetResult<Prisma.$DocePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doces.
     * @param {DoceDeleteManyArgs} args - Arguments to filter Doces to delete.
     * @example
     * // Delete a few Doces
     * const { count } = await prisma.doce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoceDeleteManyArgs>(args?: SelectSubset<T, DoceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doces
     * const doce = await prisma.doce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoceUpdateManyArgs>(args: SelectSubset<T, DoceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doce.
     * @param {DoceUpsertArgs} args - Arguments to update or create a Doce.
     * @example
     * // Update or create a Doce
     * const doce = await prisma.doce.upsert({
     *   create: {
     *     // ... data to create a Doce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doce we want to update
     *   }
     * })
     */
    upsert<T extends DoceUpsertArgs>(args: SelectSubset<T, DoceUpsertArgs<ExtArgs>>): Prisma__DoceClient<$Result.GetResult<Prisma.$DocePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoceCountArgs} args - Arguments to filter Doces to count.
     * @example
     * // Count the number of Doces
     * const count = await prisma.doce.count({
     *   where: {
     *     // ... the filter for the Doces we want to count
     *   }
     * })
    **/
    count<T extends DoceCountArgs>(
      args?: Subset<T, DoceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoceAggregateArgs>(args: Subset<T, DoceAggregateArgs>): Prisma.PrismaPromise<GetDoceAggregateType<T>>

    /**
     * Group by Doce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoceGroupByArgs['orderBy'] }
        : { orderBy?: DoceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doce model
   */
  readonly fields: DoceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comidas<T extends ComidasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComidasDefaultArgs<ExtArgs>>): Prisma__ComidasClient<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doce model
   */
  interface DoceFieldRefs {
    readonly id_item: FieldRef<"Doce", 'Int'>
    readonly item: FieldRef<"Doce", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doce findUnique
   */
  export type DoceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
    /**
     * Filter, which Doce to fetch.
     */
    where: DoceWhereUniqueInput
  }

  /**
   * Doce findUniqueOrThrow
   */
  export type DoceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
    /**
     * Filter, which Doce to fetch.
     */
    where: DoceWhereUniqueInput
  }

  /**
   * Doce findFirst
   */
  export type DoceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
    /**
     * Filter, which Doce to fetch.
     */
    where?: DoceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doces to fetch.
     */
    orderBy?: DoceOrderByWithRelationInput | DoceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doces.
     */
    cursor?: DoceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doces.
     */
    distinct?: DoceScalarFieldEnum | DoceScalarFieldEnum[]
  }

  /**
   * Doce findFirstOrThrow
   */
  export type DoceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
    /**
     * Filter, which Doce to fetch.
     */
    where?: DoceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doces to fetch.
     */
    orderBy?: DoceOrderByWithRelationInput | DoceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doces.
     */
    cursor?: DoceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doces.
     */
    distinct?: DoceScalarFieldEnum | DoceScalarFieldEnum[]
  }

  /**
   * Doce findMany
   */
  export type DoceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
    /**
     * Filter, which Doces to fetch.
     */
    where?: DoceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doces to fetch.
     */
    orderBy?: DoceOrderByWithRelationInput | DoceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doces.
     */
    cursor?: DoceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doces.
     */
    skip?: number
    distinct?: DoceScalarFieldEnum | DoceScalarFieldEnum[]
  }

  /**
   * Doce create
   */
  export type DoceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
    /**
     * The data needed to create a Doce.
     */
    data: XOR<DoceCreateInput, DoceUncheckedCreateInput>
  }

  /**
   * Doce createMany
   */
  export type DoceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doces.
     */
    data: DoceCreateManyInput | DoceCreateManyInput[]
  }

  /**
   * Doce update
   */
  export type DoceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
    /**
     * The data needed to update a Doce.
     */
    data: XOR<DoceUpdateInput, DoceUncheckedUpdateInput>
    /**
     * Choose, which Doce to update.
     */
    where: DoceWhereUniqueInput
  }

  /**
   * Doce updateMany
   */
  export type DoceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doces.
     */
    data: XOR<DoceUpdateManyMutationInput, DoceUncheckedUpdateManyInput>
    /**
     * Filter which Doces to update
     */
    where?: DoceWhereInput
    /**
     * Limit how many Doces to update.
     */
    limit?: number
  }

  /**
   * Doce upsert
   */
  export type DoceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
    /**
     * The filter to search for the Doce to update in case it exists.
     */
    where: DoceWhereUniqueInput
    /**
     * In case the Doce found by the `where` argument doesn't exist, create a new Doce with this data.
     */
    create: XOR<DoceCreateInput, DoceUncheckedCreateInput>
    /**
     * In case the Doce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoceUpdateInput, DoceUncheckedUpdateInput>
  }

  /**
   * Doce delete
   */
  export type DoceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
    /**
     * Filter which Doce to delete.
     */
    where: DoceWhereUniqueInput
  }

  /**
   * Doce deleteMany
   */
  export type DoceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doces to delete
     */
    where?: DoceWhereInput
    /**
     * Limit how many Doces to delete.
     */
    limit?: number
  }

  /**
   * Doce without action
   */
  export type DoceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doce
     */
    select?: DoceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doce
     */
    omit?: DoceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoceInclude<ExtArgs> | null
  }


  /**
   * Model Outros
   */

  export type AggregateOutros = {
    _count: OutrosCountAggregateOutputType | null
    _avg: OutrosAvgAggregateOutputType | null
    _sum: OutrosSumAggregateOutputType | null
    _min: OutrosMinAggregateOutputType | null
    _max: OutrosMaxAggregateOutputType | null
  }

  export type OutrosAvgAggregateOutputType = {
    id_item: number | null
  }

  export type OutrosSumAggregateOutputType = {
    id_item: number | null
  }

  export type OutrosMinAggregateOutputType = {
    id_item: number | null
    item: string | null
  }

  export type OutrosMaxAggregateOutputType = {
    id_item: number | null
    item: string | null
  }

  export type OutrosCountAggregateOutputType = {
    id_item: number
    item: number
    _all: number
  }


  export type OutrosAvgAggregateInputType = {
    id_item?: true
  }

  export type OutrosSumAggregateInputType = {
    id_item?: true
  }

  export type OutrosMinAggregateInputType = {
    id_item?: true
    item?: true
  }

  export type OutrosMaxAggregateInputType = {
    id_item?: true
    item?: true
  }

  export type OutrosCountAggregateInputType = {
    id_item?: true
    item?: true
    _all?: true
  }

  export type OutrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outros to aggregate.
     */
    where?: OutrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outros to fetch.
     */
    orderBy?: OutrosOrderByWithRelationInput | OutrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outros
    **/
    _count?: true | OutrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutrosMaxAggregateInputType
  }

  export type GetOutrosAggregateType<T extends OutrosAggregateArgs> = {
        [P in keyof T & keyof AggregateOutros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutros[P]>
      : GetScalarType<T[P], AggregateOutros[P]>
  }




  export type OutrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutrosWhereInput
    orderBy?: OutrosOrderByWithAggregationInput | OutrosOrderByWithAggregationInput[]
    by: OutrosScalarFieldEnum[] | OutrosScalarFieldEnum
    having?: OutrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutrosCountAggregateInputType | true
    _avg?: OutrosAvgAggregateInputType
    _sum?: OutrosSumAggregateInputType
    _min?: OutrosMinAggregateInputType
    _max?: OutrosMaxAggregateInputType
  }

  export type OutrosGroupByOutputType = {
    id_item: number
    item: string | null
    _count: OutrosCountAggregateOutputType | null
    _avg: OutrosAvgAggregateOutputType | null
    _sum: OutrosSumAggregateOutputType | null
    _min: OutrosMinAggregateOutputType | null
    _max: OutrosMaxAggregateOutputType | null
  }

  type GetOutrosGroupByPayload<T extends OutrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutrosGroupByOutputType[P]>
            : GetScalarType<T[P], OutrosGroupByOutputType[P]>
        }
      >
    >


  export type OutrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    item?: boolean
    Bebidas?: boolean | BebidasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outros"]>



  export type OutrosSelectScalar = {
    id_item?: boolean
    item?: boolean
  }

  export type OutrosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_item" | "item", ExtArgs["result"]["outros"]>
  export type OutrosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bebidas?: boolean | BebidasDefaultArgs<ExtArgs>
  }

  export type $OutrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outros"
    objects: {
      Bebidas: Prisma.$BebidasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_item: number
      item: string | null
    }, ExtArgs["result"]["outros"]>
    composites: {}
  }

  type OutrosGetPayload<S extends boolean | null | undefined | OutrosDefaultArgs> = $Result.GetResult<Prisma.$OutrosPayload, S>

  type OutrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutrosCountAggregateInputType | true
    }

  export interface OutrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outros'], meta: { name: 'Outros' } }
    /**
     * Find zero or one Outros that matches the filter.
     * @param {OutrosFindUniqueArgs} args - Arguments to find a Outros
     * @example
     * // Get one Outros
     * const outros = await prisma.outros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutrosFindUniqueArgs>(args: SelectSubset<T, OutrosFindUniqueArgs<ExtArgs>>): Prisma__OutrosClient<$Result.GetResult<Prisma.$OutrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutrosFindUniqueOrThrowArgs} args - Arguments to find a Outros
     * @example
     * // Get one Outros
     * const outros = await prisma.outros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutrosFindUniqueOrThrowArgs>(args: SelectSubset<T, OutrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutrosClient<$Result.GetResult<Prisma.$OutrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutrosFindFirstArgs} args - Arguments to find a Outros
     * @example
     * // Get one Outros
     * const outros = await prisma.outros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutrosFindFirstArgs>(args?: SelectSubset<T, OutrosFindFirstArgs<ExtArgs>>): Prisma__OutrosClient<$Result.GetResult<Prisma.$OutrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutrosFindFirstOrThrowArgs} args - Arguments to find a Outros
     * @example
     * // Get one Outros
     * const outros = await prisma.outros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutrosFindFirstOrThrowArgs>(args?: SelectSubset<T, OutrosFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutrosClient<$Result.GetResult<Prisma.$OutrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutrosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outros
     * const outros = await prisma.outros.findMany()
     * 
     * // Get first 10 Outros
     * const outros = await prisma.outros.findMany({ take: 10 })
     * 
     * // Only select the `id_item`
     * const outrosWithId_itemOnly = await prisma.outros.findMany({ select: { id_item: true } })
     * 
     */
    findMany<T extends OutrosFindManyArgs>(args?: SelectSubset<T, OutrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outros.
     * @param {OutrosCreateArgs} args - Arguments to create a Outros.
     * @example
     * // Create one Outros
     * const Outros = await prisma.outros.create({
     *   data: {
     *     // ... data to create a Outros
     *   }
     * })
     * 
     */
    create<T extends OutrosCreateArgs>(args: SelectSubset<T, OutrosCreateArgs<ExtArgs>>): Prisma__OutrosClient<$Result.GetResult<Prisma.$OutrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outros.
     * @param {OutrosCreateManyArgs} args - Arguments to create many Outros.
     * @example
     * // Create many Outros
     * const outros = await prisma.outros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutrosCreateManyArgs>(args?: SelectSubset<T, OutrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Outros.
     * @param {OutrosDeleteArgs} args - Arguments to delete one Outros.
     * @example
     * // Delete one Outros
     * const Outros = await prisma.outros.delete({
     *   where: {
     *     // ... filter to delete one Outros
     *   }
     * })
     * 
     */
    delete<T extends OutrosDeleteArgs>(args: SelectSubset<T, OutrosDeleteArgs<ExtArgs>>): Prisma__OutrosClient<$Result.GetResult<Prisma.$OutrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outros.
     * @param {OutrosUpdateArgs} args - Arguments to update one Outros.
     * @example
     * // Update one Outros
     * const outros = await prisma.outros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutrosUpdateArgs>(args: SelectSubset<T, OutrosUpdateArgs<ExtArgs>>): Prisma__OutrosClient<$Result.GetResult<Prisma.$OutrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outros.
     * @param {OutrosDeleteManyArgs} args - Arguments to filter Outros to delete.
     * @example
     * // Delete a few Outros
     * const { count } = await prisma.outros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutrosDeleteManyArgs>(args?: SelectSubset<T, OutrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outros
     * const outros = await prisma.outros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutrosUpdateManyArgs>(args: SelectSubset<T, OutrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outros.
     * @param {OutrosUpsertArgs} args - Arguments to update or create a Outros.
     * @example
     * // Update or create a Outros
     * const outros = await prisma.outros.upsert({
     *   create: {
     *     // ... data to create a Outros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outros we want to update
     *   }
     * })
     */
    upsert<T extends OutrosUpsertArgs>(args: SelectSubset<T, OutrosUpsertArgs<ExtArgs>>): Prisma__OutrosClient<$Result.GetResult<Prisma.$OutrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutrosCountArgs} args - Arguments to filter Outros to count.
     * @example
     * // Count the number of Outros
     * const count = await prisma.outros.count({
     *   where: {
     *     // ... the filter for the Outros we want to count
     *   }
     * })
    **/
    count<T extends OutrosCountArgs>(
      args?: Subset<T, OutrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutrosAggregateArgs>(args: Subset<T, OutrosAggregateArgs>): Prisma.PrismaPromise<GetOutrosAggregateType<T>>

    /**
     * Group by Outros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutrosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutrosGroupByArgs['orderBy'] }
        : { orderBy?: OutrosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outros model
   */
  readonly fields: OutrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bebidas<T extends BebidasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BebidasDefaultArgs<ExtArgs>>): Prisma__BebidasClient<$Result.GetResult<Prisma.$BebidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outros model
   */
  interface OutrosFieldRefs {
    readonly id_item: FieldRef<"Outros", 'Int'>
    readonly item: FieldRef<"Outros", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Outros findUnique
   */
  export type OutrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
    /**
     * Filter, which Outros to fetch.
     */
    where: OutrosWhereUniqueInput
  }

  /**
   * Outros findUniqueOrThrow
   */
  export type OutrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
    /**
     * Filter, which Outros to fetch.
     */
    where: OutrosWhereUniqueInput
  }

  /**
   * Outros findFirst
   */
  export type OutrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
    /**
     * Filter, which Outros to fetch.
     */
    where?: OutrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outros to fetch.
     */
    orderBy?: OutrosOrderByWithRelationInput | OutrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outros.
     */
    cursor?: OutrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outros.
     */
    distinct?: OutrosScalarFieldEnum | OutrosScalarFieldEnum[]
  }

  /**
   * Outros findFirstOrThrow
   */
  export type OutrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
    /**
     * Filter, which Outros to fetch.
     */
    where?: OutrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outros to fetch.
     */
    orderBy?: OutrosOrderByWithRelationInput | OutrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outros.
     */
    cursor?: OutrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outros.
     */
    distinct?: OutrosScalarFieldEnum | OutrosScalarFieldEnum[]
  }

  /**
   * Outros findMany
   */
  export type OutrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
    /**
     * Filter, which Outros to fetch.
     */
    where?: OutrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outros to fetch.
     */
    orderBy?: OutrosOrderByWithRelationInput | OutrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outros.
     */
    cursor?: OutrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outros.
     */
    skip?: number
    distinct?: OutrosScalarFieldEnum | OutrosScalarFieldEnum[]
  }

  /**
   * Outros create
   */
  export type OutrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
    /**
     * The data needed to create a Outros.
     */
    data: XOR<OutrosCreateInput, OutrosUncheckedCreateInput>
  }

  /**
   * Outros createMany
   */
  export type OutrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outros.
     */
    data: OutrosCreateManyInput | OutrosCreateManyInput[]
  }

  /**
   * Outros update
   */
  export type OutrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
    /**
     * The data needed to update a Outros.
     */
    data: XOR<OutrosUpdateInput, OutrosUncheckedUpdateInput>
    /**
     * Choose, which Outros to update.
     */
    where: OutrosWhereUniqueInput
  }

  /**
   * Outros updateMany
   */
  export type OutrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outros.
     */
    data: XOR<OutrosUpdateManyMutationInput, OutrosUncheckedUpdateManyInput>
    /**
     * Filter which Outros to update
     */
    where?: OutrosWhereInput
    /**
     * Limit how many Outros to update.
     */
    limit?: number
  }

  /**
   * Outros upsert
   */
  export type OutrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
    /**
     * The filter to search for the Outros to update in case it exists.
     */
    where: OutrosWhereUniqueInput
    /**
     * In case the Outros found by the `where` argument doesn't exist, create a new Outros with this data.
     */
    create: XOR<OutrosCreateInput, OutrosUncheckedCreateInput>
    /**
     * In case the Outros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutrosUpdateInput, OutrosUncheckedUpdateInput>
  }

  /**
   * Outros delete
   */
  export type OutrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
    /**
     * Filter which Outros to delete.
     */
    where: OutrosWhereUniqueInput
  }

  /**
   * Outros deleteMany
   */
  export type OutrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outros to delete
     */
    where?: OutrosWhereInput
    /**
     * Limit how many Outros to delete.
     */
    limit?: number
  }

  /**
   * Outros without action
   */
  export type OutrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outros
     */
    select?: OutrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outros
     */
    omit?: OutrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutrosInclude<ExtArgs> | null
  }


  /**
   * Model Salgado
   */

  export type AggregateSalgado = {
    _count: SalgadoCountAggregateOutputType | null
    _avg: SalgadoAvgAggregateOutputType | null
    _sum: SalgadoSumAggregateOutputType | null
    _min: SalgadoMinAggregateOutputType | null
    _max: SalgadoMaxAggregateOutputType | null
  }

  export type SalgadoAvgAggregateOutputType = {
    id_item: number | null
  }

  export type SalgadoSumAggregateOutputType = {
    id_item: number | null
  }

  export type SalgadoMinAggregateOutputType = {
    id_item: number | null
    item: string | null
  }

  export type SalgadoMaxAggregateOutputType = {
    id_item: number | null
    item: string | null
  }

  export type SalgadoCountAggregateOutputType = {
    id_item: number
    item: number
    _all: number
  }


  export type SalgadoAvgAggregateInputType = {
    id_item?: true
  }

  export type SalgadoSumAggregateInputType = {
    id_item?: true
  }

  export type SalgadoMinAggregateInputType = {
    id_item?: true
    item?: true
  }

  export type SalgadoMaxAggregateInputType = {
    id_item?: true
    item?: true
  }

  export type SalgadoCountAggregateInputType = {
    id_item?: true
    item?: true
    _all?: true
  }

  export type SalgadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salgado to aggregate.
     */
    where?: SalgadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salgados to fetch.
     */
    orderBy?: SalgadoOrderByWithRelationInput | SalgadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalgadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salgados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salgados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salgados
    **/
    _count?: true | SalgadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalgadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalgadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalgadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalgadoMaxAggregateInputType
  }

  export type GetSalgadoAggregateType<T extends SalgadoAggregateArgs> = {
        [P in keyof T & keyof AggregateSalgado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalgado[P]>
      : GetScalarType<T[P], AggregateSalgado[P]>
  }




  export type SalgadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalgadoWhereInput
    orderBy?: SalgadoOrderByWithAggregationInput | SalgadoOrderByWithAggregationInput[]
    by: SalgadoScalarFieldEnum[] | SalgadoScalarFieldEnum
    having?: SalgadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalgadoCountAggregateInputType | true
    _avg?: SalgadoAvgAggregateInputType
    _sum?: SalgadoSumAggregateInputType
    _min?: SalgadoMinAggregateInputType
    _max?: SalgadoMaxAggregateInputType
  }

  export type SalgadoGroupByOutputType = {
    id_item: number
    item: string | null
    _count: SalgadoCountAggregateOutputType | null
    _avg: SalgadoAvgAggregateOutputType | null
    _sum: SalgadoSumAggregateOutputType | null
    _min: SalgadoMinAggregateOutputType | null
    _max: SalgadoMaxAggregateOutputType | null
  }

  type GetSalgadoGroupByPayload<T extends SalgadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalgadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalgadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalgadoGroupByOutputType[P]>
            : GetScalarType<T[P], SalgadoGroupByOutputType[P]>
        }
      >
    >


  export type SalgadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    item?: boolean
    Comidas?: boolean | ComidasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salgado"]>



  export type SalgadoSelectScalar = {
    id_item?: boolean
    item?: boolean
  }

  export type SalgadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_item" | "item", ExtArgs["result"]["salgado"]>
  export type SalgadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comidas?: boolean | ComidasDefaultArgs<ExtArgs>
  }

  export type $SalgadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Salgado"
    objects: {
      Comidas: Prisma.$ComidasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_item: number
      item: string | null
    }, ExtArgs["result"]["salgado"]>
    composites: {}
  }

  type SalgadoGetPayload<S extends boolean | null | undefined | SalgadoDefaultArgs> = $Result.GetResult<Prisma.$SalgadoPayload, S>

  type SalgadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalgadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalgadoCountAggregateInputType | true
    }

  export interface SalgadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Salgado'], meta: { name: 'Salgado' } }
    /**
     * Find zero or one Salgado that matches the filter.
     * @param {SalgadoFindUniqueArgs} args - Arguments to find a Salgado
     * @example
     * // Get one Salgado
     * const salgado = await prisma.salgado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalgadoFindUniqueArgs>(args: SelectSubset<T, SalgadoFindUniqueArgs<ExtArgs>>): Prisma__SalgadoClient<$Result.GetResult<Prisma.$SalgadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Salgado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalgadoFindUniqueOrThrowArgs} args - Arguments to find a Salgado
     * @example
     * // Get one Salgado
     * const salgado = await prisma.salgado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalgadoFindUniqueOrThrowArgs>(args: SelectSubset<T, SalgadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalgadoClient<$Result.GetResult<Prisma.$SalgadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salgado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalgadoFindFirstArgs} args - Arguments to find a Salgado
     * @example
     * // Get one Salgado
     * const salgado = await prisma.salgado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalgadoFindFirstArgs>(args?: SelectSubset<T, SalgadoFindFirstArgs<ExtArgs>>): Prisma__SalgadoClient<$Result.GetResult<Prisma.$SalgadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salgado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalgadoFindFirstOrThrowArgs} args - Arguments to find a Salgado
     * @example
     * // Get one Salgado
     * const salgado = await prisma.salgado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalgadoFindFirstOrThrowArgs>(args?: SelectSubset<T, SalgadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalgadoClient<$Result.GetResult<Prisma.$SalgadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salgados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalgadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salgados
     * const salgados = await prisma.salgado.findMany()
     * 
     * // Get first 10 Salgados
     * const salgados = await prisma.salgado.findMany({ take: 10 })
     * 
     * // Only select the `id_item`
     * const salgadoWithId_itemOnly = await prisma.salgado.findMany({ select: { id_item: true } })
     * 
     */
    findMany<T extends SalgadoFindManyArgs>(args?: SelectSubset<T, SalgadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalgadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Salgado.
     * @param {SalgadoCreateArgs} args - Arguments to create a Salgado.
     * @example
     * // Create one Salgado
     * const Salgado = await prisma.salgado.create({
     *   data: {
     *     // ... data to create a Salgado
     *   }
     * })
     * 
     */
    create<T extends SalgadoCreateArgs>(args: SelectSubset<T, SalgadoCreateArgs<ExtArgs>>): Prisma__SalgadoClient<$Result.GetResult<Prisma.$SalgadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salgados.
     * @param {SalgadoCreateManyArgs} args - Arguments to create many Salgados.
     * @example
     * // Create many Salgados
     * const salgado = await prisma.salgado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalgadoCreateManyArgs>(args?: SelectSubset<T, SalgadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Salgado.
     * @param {SalgadoDeleteArgs} args - Arguments to delete one Salgado.
     * @example
     * // Delete one Salgado
     * const Salgado = await prisma.salgado.delete({
     *   where: {
     *     // ... filter to delete one Salgado
     *   }
     * })
     * 
     */
    delete<T extends SalgadoDeleteArgs>(args: SelectSubset<T, SalgadoDeleteArgs<ExtArgs>>): Prisma__SalgadoClient<$Result.GetResult<Prisma.$SalgadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Salgado.
     * @param {SalgadoUpdateArgs} args - Arguments to update one Salgado.
     * @example
     * // Update one Salgado
     * const salgado = await prisma.salgado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalgadoUpdateArgs>(args: SelectSubset<T, SalgadoUpdateArgs<ExtArgs>>): Prisma__SalgadoClient<$Result.GetResult<Prisma.$SalgadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salgados.
     * @param {SalgadoDeleteManyArgs} args - Arguments to filter Salgados to delete.
     * @example
     * // Delete a few Salgados
     * const { count } = await prisma.salgado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalgadoDeleteManyArgs>(args?: SelectSubset<T, SalgadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salgados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalgadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salgados
     * const salgado = await prisma.salgado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalgadoUpdateManyArgs>(args: SelectSubset<T, SalgadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Salgado.
     * @param {SalgadoUpsertArgs} args - Arguments to update or create a Salgado.
     * @example
     * // Update or create a Salgado
     * const salgado = await prisma.salgado.upsert({
     *   create: {
     *     // ... data to create a Salgado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salgado we want to update
     *   }
     * })
     */
    upsert<T extends SalgadoUpsertArgs>(args: SelectSubset<T, SalgadoUpsertArgs<ExtArgs>>): Prisma__SalgadoClient<$Result.GetResult<Prisma.$SalgadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salgados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalgadoCountArgs} args - Arguments to filter Salgados to count.
     * @example
     * // Count the number of Salgados
     * const count = await prisma.salgado.count({
     *   where: {
     *     // ... the filter for the Salgados we want to count
     *   }
     * })
    **/
    count<T extends SalgadoCountArgs>(
      args?: Subset<T, SalgadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalgadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Salgado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalgadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalgadoAggregateArgs>(args: Subset<T, SalgadoAggregateArgs>): Prisma.PrismaPromise<GetSalgadoAggregateType<T>>

    /**
     * Group by Salgado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalgadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalgadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalgadoGroupByArgs['orderBy'] }
        : { orderBy?: SalgadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalgadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalgadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Salgado model
   */
  readonly fields: SalgadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Salgado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalgadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comidas<T extends ComidasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComidasDefaultArgs<ExtArgs>>): Prisma__ComidasClient<$Result.GetResult<Prisma.$ComidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Salgado model
   */
  interface SalgadoFieldRefs {
    readonly id_item: FieldRef<"Salgado", 'Int'>
    readonly item: FieldRef<"Salgado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Salgado findUnique
   */
  export type SalgadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
    /**
     * Filter, which Salgado to fetch.
     */
    where: SalgadoWhereUniqueInput
  }

  /**
   * Salgado findUniqueOrThrow
   */
  export type SalgadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
    /**
     * Filter, which Salgado to fetch.
     */
    where: SalgadoWhereUniqueInput
  }

  /**
   * Salgado findFirst
   */
  export type SalgadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
    /**
     * Filter, which Salgado to fetch.
     */
    where?: SalgadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salgados to fetch.
     */
    orderBy?: SalgadoOrderByWithRelationInput | SalgadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salgados.
     */
    cursor?: SalgadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salgados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salgados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salgados.
     */
    distinct?: SalgadoScalarFieldEnum | SalgadoScalarFieldEnum[]
  }

  /**
   * Salgado findFirstOrThrow
   */
  export type SalgadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
    /**
     * Filter, which Salgado to fetch.
     */
    where?: SalgadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salgados to fetch.
     */
    orderBy?: SalgadoOrderByWithRelationInput | SalgadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salgados.
     */
    cursor?: SalgadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salgados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salgados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salgados.
     */
    distinct?: SalgadoScalarFieldEnum | SalgadoScalarFieldEnum[]
  }

  /**
   * Salgado findMany
   */
  export type SalgadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
    /**
     * Filter, which Salgados to fetch.
     */
    where?: SalgadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salgados to fetch.
     */
    orderBy?: SalgadoOrderByWithRelationInput | SalgadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salgados.
     */
    cursor?: SalgadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salgados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salgados.
     */
    skip?: number
    distinct?: SalgadoScalarFieldEnum | SalgadoScalarFieldEnum[]
  }

  /**
   * Salgado create
   */
  export type SalgadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Salgado.
     */
    data: XOR<SalgadoCreateInput, SalgadoUncheckedCreateInput>
  }

  /**
   * Salgado createMany
   */
  export type SalgadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salgados.
     */
    data: SalgadoCreateManyInput | SalgadoCreateManyInput[]
  }

  /**
   * Salgado update
   */
  export type SalgadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Salgado.
     */
    data: XOR<SalgadoUpdateInput, SalgadoUncheckedUpdateInput>
    /**
     * Choose, which Salgado to update.
     */
    where: SalgadoWhereUniqueInput
  }

  /**
   * Salgado updateMany
   */
  export type SalgadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salgados.
     */
    data: XOR<SalgadoUpdateManyMutationInput, SalgadoUncheckedUpdateManyInput>
    /**
     * Filter which Salgados to update
     */
    where?: SalgadoWhereInput
    /**
     * Limit how many Salgados to update.
     */
    limit?: number
  }

  /**
   * Salgado upsert
   */
  export type SalgadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Salgado to update in case it exists.
     */
    where: SalgadoWhereUniqueInput
    /**
     * In case the Salgado found by the `where` argument doesn't exist, create a new Salgado with this data.
     */
    create: XOR<SalgadoCreateInput, SalgadoUncheckedCreateInput>
    /**
     * In case the Salgado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalgadoUpdateInput, SalgadoUncheckedUpdateInput>
  }

  /**
   * Salgado delete
   */
  export type SalgadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
    /**
     * Filter which Salgado to delete.
     */
    where: SalgadoWhereUniqueInput
  }

  /**
   * Salgado deleteMany
   */
  export type SalgadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salgados to delete
     */
    where?: SalgadoWhereInput
    /**
     * Limit how many Salgados to delete.
     */
    limit?: number
  }

  /**
   * Salgado without action
   */
  export type SalgadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salgado
     */
    select?: SalgadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salgado
     */
    omit?: SalgadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalgadoInclude<ExtArgs> | null
  }


  /**
   * Model sysdiagrams
   */

  export type AggregateSysdiagrams = {
    _count: SysdiagramsCountAggregateOutputType | null
    _avg: SysdiagramsAvgAggregateOutputType | null
    _sum: SysdiagramsSumAggregateOutputType | null
    _min: SysdiagramsMinAggregateOutputType | null
    _max: SysdiagramsMaxAggregateOutputType | null
  }

  export type SysdiagramsAvgAggregateOutputType = {
    principal_id: number | null
    diagram_id: number | null
    version: number | null
  }

  export type SysdiagramsSumAggregateOutputType = {
    principal_id: number | null
    diagram_id: number | null
    version: number | null
  }

  export type SysdiagramsMinAggregateOutputType = {
    name: string | null
    principal_id: number | null
    diagram_id: number | null
    version: number | null
    definition: Bytes | null
  }

  export type SysdiagramsMaxAggregateOutputType = {
    name: string | null
    principal_id: number | null
    diagram_id: number | null
    version: number | null
    definition: Bytes | null
  }

  export type SysdiagramsCountAggregateOutputType = {
    name: number
    principal_id: number
    diagram_id: number
    version: number
    definition: number
    _all: number
  }


  export type SysdiagramsAvgAggregateInputType = {
    principal_id?: true
    diagram_id?: true
    version?: true
  }

  export type SysdiagramsSumAggregateInputType = {
    principal_id?: true
    diagram_id?: true
    version?: true
  }

  export type SysdiagramsMinAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
  }

  export type SysdiagramsMaxAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
  }

  export type SysdiagramsCountAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
    _all?: true
  }

  export type SysdiagramsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysdiagrams to aggregate.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sysdiagrams
    **/
    _count?: true | SysdiagramsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysdiagramsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysdiagramsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysdiagramsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysdiagramsMaxAggregateInputType
  }

  export type GetSysdiagramsAggregateType<T extends SysdiagramsAggregateArgs> = {
        [P in keyof T & keyof AggregateSysdiagrams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysdiagrams[P]>
      : GetScalarType<T[P], AggregateSysdiagrams[P]>
  }




  export type sysdiagramsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sysdiagramsWhereInput
    orderBy?: sysdiagramsOrderByWithAggregationInput | sysdiagramsOrderByWithAggregationInput[]
    by: SysdiagramsScalarFieldEnum[] | SysdiagramsScalarFieldEnum
    having?: sysdiagramsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysdiagramsCountAggregateInputType | true
    _avg?: SysdiagramsAvgAggregateInputType
    _sum?: SysdiagramsSumAggregateInputType
    _min?: SysdiagramsMinAggregateInputType
    _max?: SysdiagramsMaxAggregateInputType
  }

  export type SysdiagramsGroupByOutputType = {
    name: string
    principal_id: number
    diagram_id: number
    version: number | null
    definition: Bytes | null
    _count: SysdiagramsCountAggregateOutputType | null
    _avg: SysdiagramsAvgAggregateOutputType | null
    _sum: SysdiagramsSumAggregateOutputType | null
    _min: SysdiagramsMinAggregateOutputType | null
    _max: SysdiagramsMaxAggregateOutputType | null
  }

  type GetSysdiagramsGroupByPayload<T extends sysdiagramsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysdiagramsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysdiagramsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysdiagramsGroupByOutputType[P]>
            : GetScalarType<T[P], SysdiagramsGroupByOutputType[P]>
        }
      >
    >


  export type sysdiagramsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    principal_id?: boolean
    diagram_id?: boolean
    version?: boolean
    definition?: boolean
  }, ExtArgs["result"]["sysdiagrams"]>



  export type sysdiagramsSelectScalar = {
    name?: boolean
    principal_id?: boolean
    diagram_id?: boolean
    version?: boolean
    definition?: boolean
  }

  export type sysdiagramsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "principal_id" | "diagram_id" | "version" | "definition", ExtArgs["result"]["sysdiagrams"]>

  export type $sysdiagramsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sysdiagrams"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string
      principal_id: number
      diagram_id: number
      version: number | null
      definition: Prisma.Bytes | null
    }, ExtArgs["result"]["sysdiagrams"]>
    composites: {}
  }

  type sysdiagramsGetPayload<S extends boolean | null | undefined | sysdiagramsDefaultArgs> = $Result.GetResult<Prisma.$sysdiagramsPayload, S>

  type sysdiagramsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sysdiagramsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SysdiagramsCountAggregateInputType | true
    }

  export interface sysdiagramsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sysdiagrams'], meta: { name: 'sysdiagrams' } }
    /**
     * Find zero or one Sysdiagrams that matches the filter.
     * @param {sysdiagramsFindUniqueArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sysdiagramsFindUniqueArgs>(args: SelectSubset<T, sysdiagramsFindUniqueArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sysdiagrams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sysdiagramsFindUniqueOrThrowArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sysdiagramsFindUniqueOrThrowArgs>(args: SelectSubset<T, sysdiagramsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sysdiagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindFirstArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sysdiagramsFindFirstArgs>(args?: SelectSubset<T, sysdiagramsFindFirstArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sysdiagrams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindFirstOrThrowArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sysdiagramsFindFirstOrThrowArgs>(args?: SelectSubset<T, sysdiagramsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sysdiagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findMany()
     * 
     * // Get first 10 Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const sysdiagramsWithNameOnly = await prisma.sysdiagrams.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends sysdiagramsFindManyArgs>(args?: SelectSubset<T, sysdiagramsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sysdiagrams.
     * @param {sysdiagramsCreateArgs} args - Arguments to create a Sysdiagrams.
     * @example
     * // Create one Sysdiagrams
     * const Sysdiagrams = await prisma.sysdiagrams.create({
     *   data: {
     *     // ... data to create a Sysdiagrams
     *   }
     * })
     * 
     */
    create<T extends sysdiagramsCreateArgs>(args: SelectSubset<T, sysdiagramsCreateArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sysdiagrams.
     * @param {sysdiagramsCreateManyArgs} args - Arguments to create many Sysdiagrams.
     * @example
     * // Create many Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sysdiagramsCreateManyArgs>(args?: SelectSubset<T, sysdiagramsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sysdiagrams.
     * @param {sysdiagramsDeleteArgs} args - Arguments to delete one Sysdiagrams.
     * @example
     * // Delete one Sysdiagrams
     * const Sysdiagrams = await prisma.sysdiagrams.delete({
     *   where: {
     *     // ... filter to delete one Sysdiagrams
     *   }
     * })
     * 
     */
    delete<T extends sysdiagramsDeleteArgs>(args: SelectSubset<T, sysdiagramsDeleteArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sysdiagrams.
     * @param {sysdiagramsUpdateArgs} args - Arguments to update one Sysdiagrams.
     * @example
     * // Update one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sysdiagramsUpdateArgs>(args: SelectSubset<T, sysdiagramsUpdateArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sysdiagrams.
     * @param {sysdiagramsDeleteManyArgs} args - Arguments to filter Sysdiagrams to delete.
     * @example
     * // Delete a few Sysdiagrams
     * const { count } = await prisma.sysdiagrams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sysdiagramsDeleteManyArgs>(args?: SelectSubset<T, sysdiagramsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sysdiagramsUpdateManyArgs>(args: SelectSubset<T, sysdiagramsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sysdiagrams.
     * @param {sysdiagramsUpsertArgs} args - Arguments to update or create a Sysdiagrams.
     * @example
     * // Update or create a Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.upsert({
     *   create: {
     *     // ... data to create a Sysdiagrams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sysdiagrams we want to update
     *   }
     * })
     */
    upsert<T extends sysdiagramsUpsertArgs>(args: SelectSubset<T, sysdiagramsUpsertArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsCountArgs} args - Arguments to filter Sysdiagrams to count.
     * @example
     * // Count the number of Sysdiagrams
     * const count = await prisma.sysdiagrams.count({
     *   where: {
     *     // ... the filter for the Sysdiagrams we want to count
     *   }
     * })
    **/
    count<T extends sysdiagramsCountArgs>(
      args?: Subset<T, sysdiagramsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysdiagramsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysdiagramsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysdiagramsAggregateArgs>(args: Subset<T, SysdiagramsAggregateArgs>): Prisma.PrismaPromise<GetSysdiagramsAggregateType<T>>

    /**
     * Group by Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sysdiagramsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sysdiagramsGroupByArgs['orderBy'] }
        : { orderBy?: sysdiagramsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sysdiagramsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysdiagramsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sysdiagrams model
   */
  readonly fields: sysdiagramsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sysdiagrams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sysdiagramsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sysdiagrams model
   */
  interface sysdiagramsFieldRefs {
    readonly name: FieldRef<"sysdiagrams", 'String'>
    readonly principal_id: FieldRef<"sysdiagrams", 'Int'>
    readonly diagram_id: FieldRef<"sysdiagrams", 'Int'>
    readonly version: FieldRef<"sysdiagrams", 'Int'>
    readonly definition: FieldRef<"sysdiagrams", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * sysdiagrams findUnique
   */
  export type sysdiagramsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams findUniqueOrThrow
   */
  export type sysdiagramsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams findFirst
   */
  export type sysdiagramsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysdiagrams.
     */
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams findFirstOrThrow
   */
  export type sysdiagramsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysdiagrams.
     */
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams findMany
   */
  export type sysdiagramsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams create
   */
  export type sysdiagramsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The data needed to create a sysdiagrams.
     */
    data: XOR<sysdiagramsCreateInput, sysdiagramsUncheckedCreateInput>
  }

  /**
   * sysdiagrams createMany
   */
  export type sysdiagramsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sysdiagrams.
     */
    data: sysdiagramsCreateManyInput | sysdiagramsCreateManyInput[]
  }

  /**
   * sysdiagrams update
   */
  export type sysdiagramsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The data needed to update a sysdiagrams.
     */
    data: XOR<sysdiagramsUpdateInput, sysdiagramsUncheckedUpdateInput>
    /**
     * Choose, which sysdiagrams to update.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams updateMany
   */
  export type sysdiagramsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sysdiagrams.
     */
    data: XOR<sysdiagramsUpdateManyMutationInput, sysdiagramsUncheckedUpdateManyInput>
    /**
     * Filter which sysdiagrams to update
     */
    where?: sysdiagramsWhereInput
    /**
     * Limit how many sysdiagrams to update.
     */
    limit?: number
  }

  /**
   * sysdiagrams upsert
   */
  export type sysdiagramsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The filter to search for the sysdiagrams to update in case it exists.
     */
    where: sysdiagramsWhereUniqueInput
    /**
     * In case the sysdiagrams found by the `where` argument doesn't exist, create a new sysdiagrams with this data.
     */
    create: XOR<sysdiagramsCreateInput, sysdiagramsUncheckedCreateInput>
    /**
     * In case the sysdiagrams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sysdiagramsUpdateInput, sysdiagramsUncheckedUpdateInput>
  }

  /**
   * sysdiagrams delete
   */
  export type sysdiagramsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter which sysdiagrams to delete.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams deleteMany
   */
  export type sysdiagramsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysdiagrams to delete
     */
    where?: sysdiagramsWhereInput
    /**
     * Limit how many sysdiagrams to delete.
     */
    limit?: number
  }

  /**
   * sysdiagrams without action
   */
  export type sysdiagramsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BebidasScalarFieldEnum: {
    id_item: 'id_item',
    tipo: 'tipo',
    milimetros: 'milimetros',
    id_produto: 'id_produto'
  };

  export type BebidasScalarFieldEnum = (typeof BebidasScalarFieldEnum)[keyof typeof BebidasScalarFieldEnum]


  export const CafeScalarFieldEnum: {
    id_item: 'id_item',
    item: 'item'
  };

  export type CafeScalarFieldEnum = (typeof CafeScalarFieldEnum)[keyof typeof CafeScalarFieldEnum]


  export const CardapioScalarFieldEnum: {
    id_produto: 'id_produto',
    valor: 'valor',
    tipo: 'tipo'
  };

  export type CardapioScalarFieldEnum = (typeof CardapioScalarFieldEnum)[keyof typeof CardapioScalarFieldEnum]


  export const ChaScalarFieldEnum: {
    id_item: 'id_item',
    item: 'item'
  };

  export type ChaScalarFieldEnum = (typeof ChaScalarFieldEnum)[keyof typeof ChaScalarFieldEnum]


  export const ComidasScalarFieldEnum: {
    id_item: 'id_item',
    tipo: 'tipo',
    peso: 'peso',
    id_produto: 'id_produto'
  };

  export type ComidasScalarFieldEnum = (typeof ComidasScalarFieldEnum)[keyof typeof ComidasScalarFieldEnum]


  export const DoceScalarFieldEnum: {
    id_item: 'id_item',
    item: 'item'
  };

  export type DoceScalarFieldEnum = (typeof DoceScalarFieldEnum)[keyof typeof DoceScalarFieldEnum]


  export const OutrosScalarFieldEnum: {
    id_item: 'id_item',
    item: 'item'
  };

  export type OutrosScalarFieldEnum = (typeof OutrosScalarFieldEnum)[keyof typeof OutrosScalarFieldEnum]


  export const SalgadoScalarFieldEnum: {
    id_item: 'id_item',
    item: 'item'
  };

  export type SalgadoScalarFieldEnum = (typeof SalgadoScalarFieldEnum)[keyof typeof SalgadoScalarFieldEnum]


  export const SysdiagramsScalarFieldEnum: {
    name: 'name',
    principal_id: 'principal_id',
    diagram_id: 'diagram_id',
    version: 'version',
    definition: 'definition'
  };

  export type SysdiagramsScalarFieldEnum = (typeof SysdiagramsScalarFieldEnum)[keyof typeof SysdiagramsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BebidasWhereInput = {
    AND?: BebidasWhereInput | BebidasWhereInput[]
    OR?: BebidasWhereInput[]
    NOT?: BebidasWhereInput | BebidasWhereInput[]
    id_item?: IntFilter<"Bebidas"> | number
    tipo?: StringNullableFilter<"Bebidas"> | string | null
    milimetros?: StringNullableFilter<"Bebidas"> | string | null
    id_produto?: IntFilter<"Bebidas"> | number
    Cardapio?: XOR<CardapioScalarRelationFilter, CardapioWhereInput>
    Cafe?: XOR<CafeNullableScalarRelationFilter, CafeWhereInput> | null
    Cha?: XOR<ChaNullableScalarRelationFilter, ChaWhereInput> | null
    Outros?: XOR<OutrosNullableScalarRelationFilter, OutrosWhereInput> | null
  }

  export type BebidasOrderByWithRelationInput = {
    id_item?: SortOrder
    tipo?: SortOrderInput | SortOrder
    milimetros?: SortOrderInput | SortOrder
    id_produto?: SortOrder
    Cardapio?: CardapioOrderByWithRelationInput
    Cafe?: CafeOrderByWithRelationInput
    Cha?: ChaOrderByWithRelationInput
    Outros?: OutrosOrderByWithRelationInput
  }

  export type BebidasWhereUniqueInput = Prisma.AtLeast<{
    id_item?: number
    AND?: BebidasWhereInput | BebidasWhereInput[]
    OR?: BebidasWhereInput[]
    NOT?: BebidasWhereInput | BebidasWhereInput[]
    tipo?: StringNullableFilter<"Bebidas"> | string | null
    milimetros?: StringNullableFilter<"Bebidas"> | string | null
    id_produto?: IntFilter<"Bebidas"> | number
    Cardapio?: XOR<CardapioScalarRelationFilter, CardapioWhereInput>
    Cafe?: XOR<CafeNullableScalarRelationFilter, CafeWhereInput> | null
    Cha?: XOR<ChaNullableScalarRelationFilter, ChaWhereInput> | null
    Outros?: XOR<OutrosNullableScalarRelationFilter, OutrosWhereInput> | null
  }, "id_item">

  export type BebidasOrderByWithAggregationInput = {
    id_item?: SortOrder
    tipo?: SortOrderInput | SortOrder
    milimetros?: SortOrderInput | SortOrder
    id_produto?: SortOrder
    _count?: BebidasCountOrderByAggregateInput
    _avg?: BebidasAvgOrderByAggregateInput
    _max?: BebidasMaxOrderByAggregateInput
    _min?: BebidasMinOrderByAggregateInput
    _sum?: BebidasSumOrderByAggregateInput
  }

  export type BebidasScalarWhereWithAggregatesInput = {
    AND?: BebidasScalarWhereWithAggregatesInput | BebidasScalarWhereWithAggregatesInput[]
    OR?: BebidasScalarWhereWithAggregatesInput[]
    NOT?: BebidasScalarWhereWithAggregatesInput | BebidasScalarWhereWithAggregatesInput[]
    id_item?: IntWithAggregatesFilter<"Bebidas"> | number
    tipo?: StringNullableWithAggregatesFilter<"Bebidas"> | string | null
    milimetros?: StringNullableWithAggregatesFilter<"Bebidas"> | string | null
    id_produto?: IntWithAggregatesFilter<"Bebidas"> | number
  }

  export type CafeWhereInput = {
    AND?: CafeWhereInput | CafeWhereInput[]
    OR?: CafeWhereInput[]
    NOT?: CafeWhereInput | CafeWhereInput[]
    id_item?: IntFilter<"Cafe"> | number
    item?: StringNullableFilter<"Cafe"> | string | null
    Bebidas?: XOR<BebidasScalarRelationFilter, BebidasWhereInput>
  }

  export type CafeOrderByWithRelationInput = {
    id_item?: SortOrder
    item?: SortOrderInput | SortOrder
    Bebidas?: BebidasOrderByWithRelationInput
  }

  export type CafeWhereUniqueInput = Prisma.AtLeast<{
    id_item?: number
    AND?: CafeWhereInput | CafeWhereInput[]
    OR?: CafeWhereInput[]
    NOT?: CafeWhereInput | CafeWhereInput[]
    item?: StringNullableFilter<"Cafe"> | string | null
    Bebidas?: XOR<BebidasScalarRelationFilter, BebidasWhereInput>
  }, "id_item">

  export type CafeOrderByWithAggregationInput = {
    id_item?: SortOrder
    item?: SortOrderInput | SortOrder
    _count?: CafeCountOrderByAggregateInput
    _avg?: CafeAvgOrderByAggregateInput
    _max?: CafeMaxOrderByAggregateInput
    _min?: CafeMinOrderByAggregateInput
    _sum?: CafeSumOrderByAggregateInput
  }

  export type CafeScalarWhereWithAggregatesInput = {
    AND?: CafeScalarWhereWithAggregatesInput | CafeScalarWhereWithAggregatesInput[]
    OR?: CafeScalarWhereWithAggregatesInput[]
    NOT?: CafeScalarWhereWithAggregatesInput | CafeScalarWhereWithAggregatesInput[]
    id_item?: IntWithAggregatesFilter<"Cafe"> | number
    item?: StringNullableWithAggregatesFilter<"Cafe"> | string | null
  }

  export type CardapioWhereInput = {
    AND?: CardapioWhereInput | CardapioWhereInput[]
    OR?: CardapioWhereInput[]
    NOT?: CardapioWhereInput | CardapioWhereInput[]
    id_produto?: IntFilter<"Cardapio"> | number
    valor?: DecimalFilter<"Cardapio"> | Decimal | DecimalJsLike | number | string
    tipo?: StringFilter<"Cardapio"> | string
    Bebidas?: BebidasListRelationFilter
    Comidas?: ComidasListRelationFilter
  }

  export type CardapioOrderByWithRelationInput = {
    id_produto?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    Bebidas?: BebidasOrderByRelationAggregateInput
    Comidas?: ComidasOrderByRelationAggregateInput
  }

  export type CardapioWhereUniqueInput = Prisma.AtLeast<{
    id_produto?: number
    AND?: CardapioWhereInput | CardapioWhereInput[]
    OR?: CardapioWhereInput[]
    NOT?: CardapioWhereInput | CardapioWhereInput[]
    valor?: DecimalFilter<"Cardapio"> | Decimal | DecimalJsLike | number | string
    tipo?: StringFilter<"Cardapio"> | string
    Bebidas?: BebidasListRelationFilter
    Comidas?: ComidasListRelationFilter
  }, "id_produto">

  export type CardapioOrderByWithAggregationInput = {
    id_produto?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    _count?: CardapioCountOrderByAggregateInput
    _avg?: CardapioAvgOrderByAggregateInput
    _max?: CardapioMaxOrderByAggregateInput
    _min?: CardapioMinOrderByAggregateInput
    _sum?: CardapioSumOrderByAggregateInput
  }

  export type CardapioScalarWhereWithAggregatesInput = {
    AND?: CardapioScalarWhereWithAggregatesInput | CardapioScalarWhereWithAggregatesInput[]
    OR?: CardapioScalarWhereWithAggregatesInput[]
    NOT?: CardapioScalarWhereWithAggregatesInput | CardapioScalarWhereWithAggregatesInput[]
    id_produto?: IntWithAggregatesFilter<"Cardapio"> | number
    valor?: DecimalWithAggregatesFilter<"Cardapio"> | Decimal | DecimalJsLike | number | string
    tipo?: StringWithAggregatesFilter<"Cardapio"> | string
  }

  export type ChaWhereInput = {
    AND?: ChaWhereInput | ChaWhereInput[]
    OR?: ChaWhereInput[]
    NOT?: ChaWhereInput | ChaWhereInput[]
    id_item?: IntFilter<"Cha"> | number
    item?: StringNullableFilter<"Cha"> | string | null
    Bebidas?: XOR<BebidasScalarRelationFilter, BebidasWhereInput>
  }

  export type ChaOrderByWithRelationInput = {
    id_item?: SortOrder
    item?: SortOrderInput | SortOrder
    Bebidas?: BebidasOrderByWithRelationInput
  }

  export type ChaWhereUniqueInput = Prisma.AtLeast<{
    id_item?: number
    AND?: ChaWhereInput | ChaWhereInput[]
    OR?: ChaWhereInput[]
    NOT?: ChaWhereInput | ChaWhereInput[]
    item?: StringNullableFilter<"Cha"> | string | null
    Bebidas?: XOR<BebidasScalarRelationFilter, BebidasWhereInput>
  }, "id_item">

  export type ChaOrderByWithAggregationInput = {
    id_item?: SortOrder
    item?: SortOrderInput | SortOrder
    _count?: ChaCountOrderByAggregateInput
    _avg?: ChaAvgOrderByAggregateInput
    _max?: ChaMaxOrderByAggregateInput
    _min?: ChaMinOrderByAggregateInput
    _sum?: ChaSumOrderByAggregateInput
  }

  export type ChaScalarWhereWithAggregatesInput = {
    AND?: ChaScalarWhereWithAggregatesInput | ChaScalarWhereWithAggregatesInput[]
    OR?: ChaScalarWhereWithAggregatesInput[]
    NOT?: ChaScalarWhereWithAggregatesInput | ChaScalarWhereWithAggregatesInput[]
    id_item?: IntWithAggregatesFilter<"Cha"> | number
    item?: StringNullableWithAggregatesFilter<"Cha"> | string | null
  }

  export type ComidasWhereInput = {
    AND?: ComidasWhereInput | ComidasWhereInput[]
    OR?: ComidasWhereInput[]
    NOT?: ComidasWhereInput | ComidasWhereInput[]
    id_item?: IntFilter<"Comidas"> | number
    tipo?: StringNullableFilter<"Comidas"> | string | null
    peso?: StringNullableFilter<"Comidas"> | string | null
    id_produto?: IntFilter<"Comidas"> | number
    Cardapio?: XOR<CardapioScalarRelationFilter, CardapioWhereInput>
    Doce?: XOR<DoceNullableScalarRelationFilter, DoceWhereInput> | null
    Salgado?: XOR<SalgadoNullableScalarRelationFilter, SalgadoWhereInput> | null
  }

  export type ComidasOrderByWithRelationInput = {
    id_item?: SortOrder
    tipo?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    id_produto?: SortOrder
    Cardapio?: CardapioOrderByWithRelationInput
    Doce?: DoceOrderByWithRelationInput
    Salgado?: SalgadoOrderByWithRelationInput
  }

  export type ComidasWhereUniqueInput = Prisma.AtLeast<{
    id_item?: number
    AND?: ComidasWhereInput | ComidasWhereInput[]
    OR?: ComidasWhereInput[]
    NOT?: ComidasWhereInput | ComidasWhereInput[]
    tipo?: StringNullableFilter<"Comidas"> | string | null
    peso?: StringNullableFilter<"Comidas"> | string | null
    id_produto?: IntFilter<"Comidas"> | number
    Cardapio?: XOR<CardapioScalarRelationFilter, CardapioWhereInput>
    Doce?: XOR<DoceNullableScalarRelationFilter, DoceWhereInput> | null
    Salgado?: XOR<SalgadoNullableScalarRelationFilter, SalgadoWhereInput> | null
  }, "id_item">

  export type ComidasOrderByWithAggregationInput = {
    id_item?: SortOrder
    tipo?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    id_produto?: SortOrder
    _count?: ComidasCountOrderByAggregateInput
    _avg?: ComidasAvgOrderByAggregateInput
    _max?: ComidasMaxOrderByAggregateInput
    _min?: ComidasMinOrderByAggregateInput
    _sum?: ComidasSumOrderByAggregateInput
  }

  export type ComidasScalarWhereWithAggregatesInput = {
    AND?: ComidasScalarWhereWithAggregatesInput | ComidasScalarWhereWithAggregatesInput[]
    OR?: ComidasScalarWhereWithAggregatesInput[]
    NOT?: ComidasScalarWhereWithAggregatesInput | ComidasScalarWhereWithAggregatesInput[]
    id_item?: IntWithAggregatesFilter<"Comidas"> | number
    tipo?: StringNullableWithAggregatesFilter<"Comidas"> | string | null
    peso?: StringNullableWithAggregatesFilter<"Comidas"> | string | null
    id_produto?: IntWithAggregatesFilter<"Comidas"> | number
  }

  export type DoceWhereInput = {
    AND?: DoceWhereInput | DoceWhereInput[]
    OR?: DoceWhereInput[]
    NOT?: DoceWhereInput | DoceWhereInput[]
    id_item?: IntFilter<"Doce"> | number
    item?: StringNullableFilter<"Doce"> | string | null
    Comidas?: XOR<ComidasScalarRelationFilter, ComidasWhereInput>
  }

  export type DoceOrderByWithRelationInput = {
    id_item?: SortOrder
    item?: SortOrderInput | SortOrder
    Comidas?: ComidasOrderByWithRelationInput
  }

  export type DoceWhereUniqueInput = Prisma.AtLeast<{
    id_item?: number
    AND?: DoceWhereInput | DoceWhereInput[]
    OR?: DoceWhereInput[]
    NOT?: DoceWhereInput | DoceWhereInput[]
    item?: StringNullableFilter<"Doce"> | string | null
    Comidas?: XOR<ComidasScalarRelationFilter, ComidasWhereInput>
  }, "id_item">

  export type DoceOrderByWithAggregationInput = {
    id_item?: SortOrder
    item?: SortOrderInput | SortOrder
    _count?: DoceCountOrderByAggregateInput
    _avg?: DoceAvgOrderByAggregateInput
    _max?: DoceMaxOrderByAggregateInput
    _min?: DoceMinOrderByAggregateInput
    _sum?: DoceSumOrderByAggregateInput
  }

  export type DoceScalarWhereWithAggregatesInput = {
    AND?: DoceScalarWhereWithAggregatesInput | DoceScalarWhereWithAggregatesInput[]
    OR?: DoceScalarWhereWithAggregatesInput[]
    NOT?: DoceScalarWhereWithAggregatesInput | DoceScalarWhereWithAggregatesInput[]
    id_item?: IntWithAggregatesFilter<"Doce"> | number
    item?: StringNullableWithAggregatesFilter<"Doce"> | string | null
  }

  export type OutrosWhereInput = {
    AND?: OutrosWhereInput | OutrosWhereInput[]
    OR?: OutrosWhereInput[]
    NOT?: OutrosWhereInput | OutrosWhereInput[]
    id_item?: IntFilter<"Outros"> | number
    item?: StringNullableFilter<"Outros"> | string | null
    Bebidas?: XOR<BebidasScalarRelationFilter, BebidasWhereInput>
  }

  export type OutrosOrderByWithRelationInput = {
    id_item?: SortOrder
    item?: SortOrderInput | SortOrder
    Bebidas?: BebidasOrderByWithRelationInput
  }

  export type OutrosWhereUniqueInput = Prisma.AtLeast<{
    id_item?: number
    AND?: OutrosWhereInput | OutrosWhereInput[]
    OR?: OutrosWhereInput[]
    NOT?: OutrosWhereInput | OutrosWhereInput[]
    item?: StringNullableFilter<"Outros"> | string | null
    Bebidas?: XOR<BebidasScalarRelationFilter, BebidasWhereInput>
  }, "id_item">

  export type OutrosOrderByWithAggregationInput = {
    id_item?: SortOrder
    item?: SortOrderInput | SortOrder
    _count?: OutrosCountOrderByAggregateInput
    _avg?: OutrosAvgOrderByAggregateInput
    _max?: OutrosMaxOrderByAggregateInput
    _min?: OutrosMinOrderByAggregateInput
    _sum?: OutrosSumOrderByAggregateInput
  }

  export type OutrosScalarWhereWithAggregatesInput = {
    AND?: OutrosScalarWhereWithAggregatesInput | OutrosScalarWhereWithAggregatesInput[]
    OR?: OutrosScalarWhereWithAggregatesInput[]
    NOT?: OutrosScalarWhereWithAggregatesInput | OutrosScalarWhereWithAggregatesInput[]
    id_item?: IntWithAggregatesFilter<"Outros"> | number
    item?: StringNullableWithAggregatesFilter<"Outros"> | string | null
  }

  export type SalgadoWhereInput = {
    AND?: SalgadoWhereInput | SalgadoWhereInput[]
    OR?: SalgadoWhereInput[]
    NOT?: SalgadoWhereInput | SalgadoWhereInput[]
    id_item?: IntFilter<"Salgado"> | number
    item?: StringNullableFilter<"Salgado"> | string | null
    Comidas?: XOR<ComidasScalarRelationFilter, ComidasWhereInput>
  }

  export type SalgadoOrderByWithRelationInput = {
    id_item?: SortOrder
    item?: SortOrderInput | SortOrder
    Comidas?: ComidasOrderByWithRelationInput
  }

  export type SalgadoWhereUniqueInput = Prisma.AtLeast<{
    id_item?: number
    AND?: SalgadoWhereInput | SalgadoWhereInput[]
    OR?: SalgadoWhereInput[]
    NOT?: SalgadoWhereInput | SalgadoWhereInput[]
    item?: StringNullableFilter<"Salgado"> | string | null
    Comidas?: XOR<ComidasScalarRelationFilter, ComidasWhereInput>
  }, "id_item">

  export type SalgadoOrderByWithAggregationInput = {
    id_item?: SortOrder
    item?: SortOrderInput | SortOrder
    _count?: SalgadoCountOrderByAggregateInput
    _avg?: SalgadoAvgOrderByAggregateInput
    _max?: SalgadoMaxOrderByAggregateInput
    _min?: SalgadoMinOrderByAggregateInput
    _sum?: SalgadoSumOrderByAggregateInput
  }

  export type SalgadoScalarWhereWithAggregatesInput = {
    AND?: SalgadoScalarWhereWithAggregatesInput | SalgadoScalarWhereWithAggregatesInput[]
    OR?: SalgadoScalarWhereWithAggregatesInput[]
    NOT?: SalgadoScalarWhereWithAggregatesInput | SalgadoScalarWhereWithAggregatesInput[]
    id_item?: IntWithAggregatesFilter<"Salgado"> | number
    item?: StringNullableWithAggregatesFilter<"Salgado"> | string | null
  }

  export type sysdiagramsWhereInput = {
    AND?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    OR?: sysdiagramsWhereInput[]
    NOT?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    name?: StringFilter<"sysdiagrams"> | string
    principal_id?: IntFilter<"sysdiagrams"> | number
    diagram_id?: IntFilter<"sysdiagrams"> | number
    version?: IntNullableFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableFilter<"sysdiagrams"> | Bytes | null
  }

  export type sysdiagramsOrderByWithRelationInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
  }

  export type sysdiagramsWhereUniqueInput = Prisma.AtLeast<{
    diagram_id?: number
    principal_id_name?: sysdiagramsPrincipal_idNameCompoundUniqueInput
    AND?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    OR?: sysdiagramsWhereInput[]
    NOT?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    name?: StringFilter<"sysdiagrams"> | string
    principal_id?: IntFilter<"sysdiagrams"> | number
    version?: IntNullableFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableFilter<"sysdiagrams"> | Bytes | null
  }, "diagram_id" | "principal_id_name">

  export type sysdiagramsOrderByWithAggregationInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
    _count?: sysdiagramsCountOrderByAggregateInput
    _avg?: sysdiagramsAvgOrderByAggregateInput
    _max?: sysdiagramsMaxOrderByAggregateInput
    _min?: sysdiagramsMinOrderByAggregateInput
    _sum?: sysdiagramsSumOrderByAggregateInput
  }

  export type sysdiagramsScalarWhereWithAggregatesInput = {
    AND?: sysdiagramsScalarWhereWithAggregatesInput | sysdiagramsScalarWhereWithAggregatesInput[]
    OR?: sysdiagramsScalarWhereWithAggregatesInput[]
    NOT?: sysdiagramsScalarWhereWithAggregatesInput | sysdiagramsScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"sysdiagrams"> | string
    principal_id?: IntWithAggregatesFilter<"sysdiagrams"> | number
    diagram_id?: IntWithAggregatesFilter<"sysdiagrams"> | number
    version?: IntNullableWithAggregatesFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableWithAggregatesFilter<"sysdiagrams"> | Bytes | null
  }

  export type BebidasCreateInput = {
    tipo?: string | null
    milimetros?: string | null
    Cardapio: CardapioCreateNestedOneWithoutBebidasInput
    Cafe?: CafeCreateNestedOneWithoutBebidasInput
    Cha?: ChaCreateNestedOneWithoutBebidasInput
    Outros?: OutrosCreateNestedOneWithoutBebidasInput
  }

  export type BebidasUncheckedCreateInput = {
    id_item?: number
    tipo?: string | null
    milimetros?: string | null
    id_produto: number
    Cafe?: CafeUncheckedCreateNestedOneWithoutBebidasInput
    Cha?: ChaUncheckedCreateNestedOneWithoutBebidasInput
    Outros?: OutrosUncheckedCreateNestedOneWithoutBebidasInput
  }

  export type BebidasUpdateInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    Cardapio?: CardapioUpdateOneRequiredWithoutBebidasNestedInput
    Cafe?: CafeUpdateOneWithoutBebidasNestedInput
    Cha?: ChaUpdateOneWithoutBebidasNestedInput
    Outros?: OutrosUpdateOneWithoutBebidasNestedInput
  }

  export type BebidasUncheckedUpdateInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    id_produto?: IntFieldUpdateOperationsInput | number
    Cafe?: CafeUncheckedUpdateOneWithoutBebidasNestedInput
    Cha?: ChaUncheckedUpdateOneWithoutBebidasNestedInput
    Outros?: OutrosUncheckedUpdateOneWithoutBebidasNestedInput
  }

  export type BebidasCreateManyInput = {
    tipo?: string | null
    milimetros?: string | null
    id_produto: number
  }

  export type BebidasUpdateManyMutationInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BebidasUncheckedUpdateManyInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    id_produto?: IntFieldUpdateOperationsInput | number
  }

  export type CafeCreateInput = {
    item?: string | null
    Bebidas: BebidasCreateNestedOneWithoutCafeInput
  }

  export type CafeUncheckedCreateInput = {
    id_item: number
    item?: string | null
  }

  export type CafeUpdateInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    Bebidas?: BebidasUpdateOneRequiredWithoutCafeNestedInput
  }

  export type CafeUncheckedUpdateInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CafeCreateManyInput = {
    id_item: number
    item?: string | null
  }

  export type CafeUpdateManyMutationInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CafeUncheckedUpdateManyInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardapioCreateInput = {
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    Bebidas?: BebidasCreateNestedManyWithoutCardapioInput
    Comidas?: ComidasCreateNestedManyWithoutCardapioInput
  }

  export type CardapioUncheckedCreateInput = {
    id_produto?: number
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    Bebidas?: BebidasUncheckedCreateNestedManyWithoutCardapioInput
    Comidas?: ComidasUncheckedCreateNestedManyWithoutCardapioInput
  }

  export type CardapioUpdateInput = {
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    Bebidas?: BebidasUpdateManyWithoutCardapioNestedInput
    Comidas?: ComidasUpdateManyWithoutCardapioNestedInput
  }

  export type CardapioUncheckedUpdateInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    Bebidas?: BebidasUncheckedUpdateManyWithoutCardapioNestedInput
    Comidas?: ComidasUncheckedUpdateManyWithoutCardapioNestedInput
  }

  export type CardapioCreateManyInput = {
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
  }

  export type CardapioUpdateManyMutationInput = {
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type CardapioUncheckedUpdateManyInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type ChaCreateInput = {
    item?: string | null
    Bebidas: BebidasCreateNestedOneWithoutChaInput
  }

  export type ChaUncheckedCreateInput = {
    id_item: number
    item?: string | null
  }

  export type ChaUpdateInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    Bebidas?: BebidasUpdateOneRequiredWithoutChaNestedInput
  }

  export type ChaUncheckedUpdateInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChaCreateManyInput = {
    id_item: number
    item?: string | null
  }

  export type ChaUpdateManyMutationInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChaUncheckedUpdateManyInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComidasCreateInput = {
    tipo?: string | null
    peso?: string | null
    Cardapio: CardapioCreateNestedOneWithoutComidasInput
    Doce?: DoceCreateNestedOneWithoutComidasInput
    Salgado?: SalgadoCreateNestedOneWithoutComidasInput
  }

  export type ComidasUncheckedCreateInput = {
    id_item?: number
    tipo?: string | null
    peso?: string | null
    id_produto: number
    Doce?: DoceUncheckedCreateNestedOneWithoutComidasInput
    Salgado?: SalgadoUncheckedCreateNestedOneWithoutComidasInput
  }

  export type ComidasUpdateInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    Cardapio?: CardapioUpdateOneRequiredWithoutComidasNestedInput
    Doce?: DoceUpdateOneWithoutComidasNestedInput
    Salgado?: SalgadoUpdateOneWithoutComidasNestedInput
  }

  export type ComidasUncheckedUpdateInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    id_produto?: IntFieldUpdateOperationsInput | number
    Doce?: DoceUncheckedUpdateOneWithoutComidasNestedInput
    Salgado?: SalgadoUncheckedUpdateOneWithoutComidasNestedInput
  }

  export type ComidasCreateManyInput = {
    tipo?: string | null
    peso?: string | null
    id_produto: number
  }

  export type ComidasUpdateManyMutationInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComidasUncheckedUpdateManyInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    id_produto?: IntFieldUpdateOperationsInput | number
  }

  export type DoceCreateInput = {
    item?: string | null
    Comidas: ComidasCreateNestedOneWithoutDoceInput
  }

  export type DoceUncheckedCreateInput = {
    id_item: number
    item?: string | null
  }

  export type DoceUpdateInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    Comidas?: ComidasUpdateOneRequiredWithoutDoceNestedInput
  }

  export type DoceUncheckedUpdateInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoceCreateManyInput = {
    id_item: number
    item?: string | null
  }

  export type DoceUpdateManyMutationInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoceUncheckedUpdateManyInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutrosCreateInput = {
    item?: string | null
    Bebidas: BebidasCreateNestedOneWithoutOutrosInput
  }

  export type OutrosUncheckedCreateInput = {
    id_item: number
    item?: string | null
  }

  export type OutrosUpdateInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    Bebidas?: BebidasUpdateOneRequiredWithoutOutrosNestedInput
  }

  export type OutrosUncheckedUpdateInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutrosCreateManyInput = {
    id_item: number
    item?: string | null
  }

  export type OutrosUpdateManyMutationInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutrosUncheckedUpdateManyInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalgadoCreateInput = {
    item?: string | null
    Comidas: ComidasCreateNestedOneWithoutSalgadoInput
  }

  export type SalgadoUncheckedCreateInput = {
    id_item: number
    item?: string | null
  }

  export type SalgadoUpdateInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    Comidas?: ComidasUpdateOneRequiredWithoutSalgadoNestedInput
  }

  export type SalgadoUncheckedUpdateInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalgadoCreateManyInput = {
    id_item: number
    item?: string | null
  }

  export type SalgadoUpdateManyMutationInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalgadoUncheckedUpdateManyInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sysdiagramsCreateInput = {
    name: string
    principal_id: number
    version?: number | null
    definition?: Bytes | null
  }

  export type sysdiagramsUncheckedCreateInput = {
    name: string
    principal_id: number
    diagram_id?: number
    version?: number | null
    definition?: Bytes | null
  }

  export type sysdiagramsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type sysdiagramsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    diagram_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type sysdiagramsCreateManyInput = {
    name: string
    principal_id: number
    version?: number | null
    definition?: Bytes | null
  }

  export type sysdiagramsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type sysdiagramsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    diagram_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CardapioScalarRelationFilter = {
    is?: CardapioWhereInput
    isNot?: CardapioWhereInput
  }

  export type CafeNullableScalarRelationFilter = {
    is?: CafeWhereInput | null
    isNot?: CafeWhereInput | null
  }

  export type ChaNullableScalarRelationFilter = {
    is?: ChaWhereInput | null
    isNot?: ChaWhereInput | null
  }

  export type OutrosNullableScalarRelationFilter = {
    is?: OutrosWhereInput | null
    isNot?: OutrosWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BebidasCountOrderByAggregateInput = {
    id_item?: SortOrder
    tipo?: SortOrder
    milimetros?: SortOrder
    id_produto?: SortOrder
  }

  export type BebidasAvgOrderByAggregateInput = {
    id_item?: SortOrder
    id_produto?: SortOrder
  }

  export type BebidasMaxOrderByAggregateInput = {
    id_item?: SortOrder
    tipo?: SortOrder
    milimetros?: SortOrder
    id_produto?: SortOrder
  }

  export type BebidasMinOrderByAggregateInput = {
    id_item?: SortOrder
    tipo?: SortOrder
    milimetros?: SortOrder
    id_produto?: SortOrder
  }

  export type BebidasSumOrderByAggregateInput = {
    id_item?: SortOrder
    id_produto?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BebidasScalarRelationFilter = {
    is?: BebidasWhereInput
    isNot?: BebidasWhereInput
  }

  export type CafeCountOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type CafeAvgOrderByAggregateInput = {
    id_item?: SortOrder
  }

  export type CafeMaxOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type CafeMinOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type CafeSumOrderByAggregateInput = {
    id_item?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BebidasListRelationFilter = {
    every?: BebidasWhereInput
    some?: BebidasWhereInput
    none?: BebidasWhereInput
  }

  export type ComidasListRelationFilter = {
    every?: ComidasWhereInput
    some?: ComidasWhereInput
    none?: ComidasWhereInput
  }

  export type BebidasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComidasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardapioCountOrderByAggregateInput = {
    id_produto?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
  }

  export type CardapioAvgOrderByAggregateInput = {
    id_produto?: SortOrder
    valor?: SortOrder
  }

  export type CardapioMaxOrderByAggregateInput = {
    id_produto?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
  }

  export type CardapioMinOrderByAggregateInput = {
    id_produto?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
  }

  export type CardapioSumOrderByAggregateInput = {
    id_produto?: SortOrder
    valor?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ChaCountOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type ChaAvgOrderByAggregateInput = {
    id_item?: SortOrder
  }

  export type ChaMaxOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type ChaMinOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type ChaSumOrderByAggregateInput = {
    id_item?: SortOrder
  }

  export type DoceNullableScalarRelationFilter = {
    is?: DoceWhereInput | null
    isNot?: DoceWhereInput | null
  }

  export type SalgadoNullableScalarRelationFilter = {
    is?: SalgadoWhereInput | null
    isNot?: SalgadoWhereInput | null
  }

  export type ComidasCountOrderByAggregateInput = {
    id_item?: SortOrder
    tipo?: SortOrder
    peso?: SortOrder
    id_produto?: SortOrder
  }

  export type ComidasAvgOrderByAggregateInput = {
    id_item?: SortOrder
    id_produto?: SortOrder
  }

  export type ComidasMaxOrderByAggregateInput = {
    id_item?: SortOrder
    tipo?: SortOrder
    peso?: SortOrder
    id_produto?: SortOrder
  }

  export type ComidasMinOrderByAggregateInput = {
    id_item?: SortOrder
    tipo?: SortOrder
    peso?: SortOrder
    id_produto?: SortOrder
  }

  export type ComidasSumOrderByAggregateInput = {
    id_item?: SortOrder
    id_produto?: SortOrder
  }

  export type ComidasScalarRelationFilter = {
    is?: ComidasWhereInput
    isNot?: ComidasWhereInput
  }

  export type DoceCountOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type DoceAvgOrderByAggregateInput = {
    id_item?: SortOrder
  }

  export type DoceMaxOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type DoceMinOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type DoceSumOrderByAggregateInput = {
    id_item?: SortOrder
  }

  export type OutrosCountOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type OutrosAvgOrderByAggregateInput = {
    id_item?: SortOrder
  }

  export type OutrosMaxOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type OutrosMinOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type OutrosSumOrderByAggregateInput = {
    id_item?: SortOrder
  }

  export type SalgadoCountOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type SalgadoAvgOrderByAggregateInput = {
    id_item?: SortOrder
  }

  export type SalgadoMaxOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type SalgadoMinOrderByAggregateInput = {
    id_item?: SortOrder
    item?: SortOrder
  }

  export type SalgadoSumOrderByAggregateInput = {
    id_item?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type sysdiagramsPrincipal_idNameCompoundUniqueInput = {
    principal_id: number
    name: string
  }

  export type sysdiagramsCountOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsAvgOrderByAggregateInput = {
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
  }

  export type sysdiagramsMaxOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsMinOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsSumOrderByAggregateInput = {
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type CardapioCreateNestedOneWithoutBebidasInput = {
    create?: XOR<CardapioCreateWithoutBebidasInput, CardapioUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: CardapioCreateOrConnectWithoutBebidasInput
    connect?: CardapioWhereUniqueInput
  }

  export type CafeCreateNestedOneWithoutBebidasInput = {
    create?: XOR<CafeCreateWithoutBebidasInput, CafeUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: CafeCreateOrConnectWithoutBebidasInput
    connect?: CafeWhereUniqueInput
  }

  export type ChaCreateNestedOneWithoutBebidasInput = {
    create?: XOR<ChaCreateWithoutBebidasInput, ChaUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: ChaCreateOrConnectWithoutBebidasInput
    connect?: ChaWhereUniqueInput
  }

  export type OutrosCreateNestedOneWithoutBebidasInput = {
    create?: XOR<OutrosCreateWithoutBebidasInput, OutrosUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: OutrosCreateOrConnectWithoutBebidasInput
    connect?: OutrosWhereUniqueInput
  }

  export type CafeUncheckedCreateNestedOneWithoutBebidasInput = {
    create?: XOR<CafeCreateWithoutBebidasInput, CafeUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: CafeCreateOrConnectWithoutBebidasInput
    connect?: CafeWhereUniqueInput
  }

  export type ChaUncheckedCreateNestedOneWithoutBebidasInput = {
    create?: XOR<ChaCreateWithoutBebidasInput, ChaUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: ChaCreateOrConnectWithoutBebidasInput
    connect?: ChaWhereUniqueInput
  }

  export type OutrosUncheckedCreateNestedOneWithoutBebidasInput = {
    create?: XOR<OutrosCreateWithoutBebidasInput, OutrosUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: OutrosCreateOrConnectWithoutBebidasInput
    connect?: OutrosWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CardapioUpdateOneRequiredWithoutBebidasNestedInput = {
    create?: XOR<CardapioCreateWithoutBebidasInput, CardapioUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: CardapioCreateOrConnectWithoutBebidasInput
    upsert?: CardapioUpsertWithoutBebidasInput
    connect?: CardapioWhereUniqueInput
    update?: XOR<XOR<CardapioUpdateToOneWithWhereWithoutBebidasInput, CardapioUpdateWithoutBebidasInput>, CardapioUncheckedUpdateWithoutBebidasInput>
  }

  export type CafeUpdateOneWithoutBebidasNestedInput = {
    create?: XOR<CafeCreateWithoutBebidasInput, CafeUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: CafeCreateOrConnectWithoutBebidasInput
    upsert?: CafeUpsertWithoutBebidasInput
    disconnect?: CafeWhereInput | boolean
    delete?: CafeWhereInput | boolean
    connect?: CafeWhereUniqueInput
    update?: XOR<XOR<CafeUpdateToOneWithWhereWithoutBebidasInput, CafeUpdateWithoutBebidasInput>, CafeUncheckedUpdateWithoutBebidasInput>
  }

  export type ChaUpdateOneWithoutBebidasNestedInput = {
    create?: XOR<ChaCreateWithoutBebidasInput, ChaUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: ChaCreateOrConnectWithoutBebidasInput
    upsert?: ChaUpsertWithoutBebidasInput
    disconnect?: ChaWhereInput | boolean
    delete?: ChaWhereInput | boolean
    connect?: ChaWhereUniqueInput
    update?: XOR<XOR<ChaUpdateToOneWithWhereWithoutBebidasInput, ChaUpdateWithoutBebidasInput>, ChaUncheckedUpdateWithoutBebidasInput>
  }

  export type OutrosUpdateOneWithoutBebidasNestedInput = {
    create?: XOR<OutrosCreateWithoutBebidasInput, OutrosUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: OutrosCreateOrConnectWithoutBebidasInput
    upsert?: OutrosUpsertWithoutBebidasInput
    disconnect?: OutrosWhereInput | boolean
    delete?: OutrosWhereInput | boolean
    connect?: OutrosWhereUniqueInput
    update?: XOR<XOR<OutrosUpdateToOneWithWhereWithoutBebidasInput, OutrosUpdateWithoutBebidasInput>, OutrosUncheckedUpdateWithoutBebidasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CafeUncheckedUpdateOneWithoutBebidasNestedInput = {
    create?: XOR<CafeCreateWithoutBebidasInput, CafeUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: CafeCreateOrConnectWithoutBebidasInput
    upsert?: CafeUpsertWithoutBebidasInput
    disconnect?: CafeWhereInput | boolean
    delete?: CafeWhereInput | boolean
    connect?: CafeWhereUniqueInput
    update?: XOR<XOR<CafeUpdateToOneWithWhereWithoutBebidasInput, CafeUpdateWithoutBebidasInput>, CafeUncheckedUpdateWithoutBebidasInput>
  }

  export type ChaUncheckedUpdateOneWithoutBebidasNestedInput = {
    create?: XOR<ChaCreateWithoutBebidasInput, ChaUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: ChaCreateOrConnectWithoutBebidasInput
    upsert?: ChaUpsertWithoutBebidasInput
    disconnect?: ChaWhereInput | boolean
    delete?: ChaWhereInput | boolean
    connect?: ChaWhereUniqueInput
    update?: XOR<XOR<ChaUpdateToOneWithWhereWithoutBebidasInput, ChaUpdateWithoutBebidasInput>, ChaUncheckedUpdateWithoutBebidasInput>
  }

  export type OutrosUncheckedUpdateOneWithoutBebidasNestedInput = {
    create?: XOR<OutrosCreateWithoutBebidasInput, OutrosUncheckedCreateWithoutBebidasInput>
    connectOrCreate?: OutrosCreateOrConnectWithoutBebidasInput
    upsert?: OutrosUpsertWithoutBebidasInput
    disconnect?: OutrosWhereInput | boolean
    delete?: OutrosWhereInput | boolean
    connect?: OutrosWhereUniqueInput
    update?: XOR<XOR<OutrosUpdateToOneWithWhereWithoutBebidasInput, OutrosUpdateWithoutBebidasInput>, OutrosUncheckedUpdateWithoutBebidasInput>
  }

  export type BebidasCreateNestedOneWithoutCafeInput = {
    create?: XOR<BebidasCreateWithoutCafeInput, BebidasUncheckedCreateWithoutCafeInput>
    connectOrCreate?: BebidasCreateOrConnectWithoutCafeInput
    connect?: BebidasWhereUniqueInput
  }

  export type BebidasUpdateOneRequiredWithoutCafeNestedInput = {
    create?: XOR<BebidasCreateWithoutCafeInput, BebidasUncheckedCreateWithoutCafeInput>
    connectOrCreate?: BebidasCreateOrConnectWithoutCafeInput
    upsert?: BebidasUpsertWithoutCafeInput
    connect?: BebidasWhereUniqueInput
    update?: XOR<XOR<BebidasUpdateToOneWithWhereWithoutCafeInput, BebidasUpdateWithoutCafeInput>, BebidasUncheckedUpdateWithoutCafeInput>
  }

  export type BebidasCreateNestedManyWithoutCardapioInput = {
    create?: XOR<BebidasCreateWithoutCardapioInput, BebidasUncheckedCreateWithoutCardapioInput> | BebidasCreateWithoutCardapioInput[] | BebidasUncheckedCreateWithoutCardapioInput[]
    connectOrCreate?: BebidasCreateOrConnectWithoutCardapioInput | BebidasCreateOrConnectWithoutCardapioInput[]
    createMany?: BebidasCreateManyCardapioInputEnvelope
    connect?: BebidasWhereUniqueInput | BebidasWhereUniqueInput[]
  }

  export type ComidasCreateNestedManyWithoutCardapioInput = {
    create?: XOR<ComidasCreateWithoutCardapioInput, ComidasUncheckedCreateWithoutCardapioInput> | ComidasCreateWithoutCardapioInput[] | ComidasUncheckedCreateWithoutCardapioInput[]
    connectOrCreate?: ComidasCreateOrConnectWithoutCardapioInput | ComidasCreateOrConnectWithoutCardapioInput[]
    createMany?: ComidasCreateManyCardapioInputEnvelope
    connect?: ComidasWhereUniqueInput | ComidasWhereUniqueInput[]
  }

  export type BebidasUncheckedCreateNestedManyWithoutCardapioInput = {
    create?: XOR<BebidasCreateWithoutCardapioInput, BebidasUncheckedCreateWithoutCardapioInput> | BebidasCreateWithoutCardapioInput[] | BebidasUncheckedCreateWithoutCardapioInput[]
    connectOrCreate?: BebidasCreateOrConnectWithoutCardapioInput | BebidasCreateOrConnectWithoutCardapioInput[]
    createMany?: BebidasCreateManyCardapioInputEnvelope
    connect?: BebidasWhereUniqueInput | BebidasWhereUniqueInput[]
  }

  export type ComidasUncheckedCreateNestedManyWithoutCardapioInput = {
    create?: XOR<ComidasCreateWithoutCardapioInput, ComidasUncheckedCreateWithoutCardapioInput> | ComidasCreateWithoutCardapioInput[] | ComidasUncheckedCreateWithoutCardapioInput[]
    connectOrCreate?: ComidasCreateOrConnectWithoutCardapioInput | ComidasCreateOrConnectWithoutCardapioInput[]
    createMany?: ComidasCreateManyCardapioInputEnvelope
    connect?: ComidasWhereUniqueInput | ComidasWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BebidasUpdateManyWithoutCardapioNestedInput = {
    create?: XOR<BebidasCreateWithoutCardapioInput, BebidasUncheckedCreateWithoutCardapioInput> | BebidasCreateWithoutCardapioInput[] | BebidasUncheckedCreateWithoutCardapioInput[]
    connectOrCreate?: BebidasCreateOrConnectWithoutCardapioInput | BebidasCreateOrConnectWithoutCardapioInput[]
    upsert?: BebidasUpsertWithWhereUniqueWithoutCardapioInput | BebidasUpsertWithWhereUniqueWithoutCardapioInput[]
    createMany?: BebidasCreateManyCardapioInputEnvelope
    set?: BebidasWhereUniqueInput | BebidasWhereUniqueInput[]
    disconnect?: BebidasWhereUniqueInput | BebidasWhereUniqueInput[]
    delete?: BebidasWhereUniqueInput | BebidasWhereUniqueInput[]
    connect?: BebidasWhereUniqueInput | BebidasWhereUniqueInput[]
    update?: BebidasUpdateWithWhereUniqueWithoutCardapioInput | BebidasUpdateWithWhereUniqueWithoutCardapioInput[]
    updateMany?: BebidasUpdateManyWithWhereWithoutCardapioInput | BebidasUpdateManyWithWhereWithoutCardapioInput[]
    deleteMany?: BebidasScalarWhereInput | BebidasScalarWhereInput[]
  }

  export type ComidasUpdateManyWithoutCardapioNestedInput = {
    create?: XOR<ComidasCreateWithoutCardapioInput, ComidasUncheckedCreateWithoutCardapioInput> | ComidasCreateWithoutCardapioInput[] | ComidasUncheckedCreateWithoutCardapioInput[]
    connectOrCreate?: ComidasCreateOrConnectWithoutCardapioInput | ComidasCreateOrConnectWithoutCardapioInput[]
    upsert?: ComidasUpsertWithWhereUniqueWithoutCardapioInput | ComidasUpsertWithWhereUniqueWithoutCardapioInput[]
    createMany?: ComidasCreateManyCardapioInputEnvelope
    set?: ComidasWhereUniqueInput | ComidasWhereUniqueInput[]
    disconnect?: ComidasWhereUniqueInput | ComidasWhereUniqueInput[]
    delete?: ComidasWhereUniqueInput | ComidasWhereUniqueInput[]
    connect?: ComidasWhereUniqueInput | ComidasWhereUniqueInput[]
    update?: ComidasUpdateWithWhereUniqueWithoutCardapioInput | ComidasUpdateWithWhereUniqueWithoutCardapioInput[]
    updateMany?: ComidasUpdateManyWithWhereWithoutCardapioInput | ComidasUpdateManyWithWhereWithoutCardapioInput[]
    deleteMany?: ComidasScalarWhereInput | ComidasScalarWhereInput[]
  }

  export type BebidasUncheckedUpdateManyWithoutCardapioNestedInput = {
    create?: XOR<BebidasCreateWithoutCardapioInput, BebidasUncheckedCreateWithoutCardapioInput> | BebidasCreateWithoutCardapioInput[] | BebidasUncheckedCreateWithoutCardapioInput[]
    connectOrCreate?: BebidasCreateOrConnectWithoutCardapioInput | BebidasCreateOrConnectWithoutCardapioInput[]
    upsert?: BebidasUpsertWithWhereUniqueWithoutCardapioInput | BebidasUpsertWithWhereUniqueWithoutCardapioInput[]
    createMany?: BebidasCreateManyCardapioInputEnvelope
    set?: BebidasWhereUniqueInput | BebidasWhereUniqueInput[]
    disconnect?: BebidasWhereUniqueInput | BebidasWhereUniqueInput[]
    delete?: BebidasWhereUniqueInput | BebidasWhereUniqueInput[]
    connect?: BebidasWhereUniqueInput | BebidasWhereUniqueInput[]
    update?: BebidasUpdateWithWhereUniqueWithoutCardapioInput | BebidasUpdateWithWhereUniqueWithoutCardapioInput[]
    updateMany?: BebidasUpdateManyWithWhereWithoutCardapioInput | BebidasUpdateManyWithWhereWithoutCardapioInput[]
    deleteMany?: BebidasScalarWhereInput | BebidasScalarWhereInput[]
  }

  export type ComidasUncheckedUpdateManyWithoutCardapioNestedInput = {
    create?: XOR<ComidasCreateWithoutCardapioInput, ComidasUncheckedCreateWithoutCardapioInput> | ComidasCreateWithoutCardapioInput[] | ComidasUncheckedCreateWithoutCardapioInput[]
    connectOrCreate?: ComidasCreateOrConnectWithoutCardapioInput | ComidasCreateOrConnectWithoutCardapioInput[]
    upsert?: ComidasUpsertWithWhereUniqueWithoutCardapioInput | ComidasUpsertWithWhereUniqueWithoutCardapioInput[]
    createMany?: ComidasCreateManyCardapioInputEnvelope
    set?: ComidasWhereUniqueInput | ComidasWhereUniqueInput[]
    disconnect?: ComidasWhereUniqueInput | ComidasWhereUniqueInput[]
    delete?: ComidasWhereUniqueInput | ComidasWhereUniqueInput[]
    connect?: ComidasWhereUniqueInput | ComidasWhereUniqueInput[]
    update?: ComidasUpdateWithWhereUniqueWithoutCardapioInput | ComidasUpdateWithWhereUniqueWithoutCardapioInput[]
    updateMany?: ComidasUpdateManyWithWhereWithoutCardapioInput | ComidasUpdateManyWithWhereWithoutCardapioInput[]
    deleteMany?: ComidasScalarWhereInput | ComidasScalarWhereInput[]
  }

  export type BebidasCreateNestedOneWithoutChaInput = {
    create?: XOR<BebidasCreateWithoutChaInput, BebidasUncheckedCreateWithoutChaInput>
    connectOrCreate?: BebidasCreateOrConnectWithoutChaInput
    connect?: BebidasWhereUniqueInput
  }

  export type BebidasUpdateOneRequiredWithoutChaNestedInput = {
    create?: XOR<BebidasCreateWithoutChaInput, BebidasUncheckedCreateWithoutChaInput>
    connectOrCreate?: BebidasCreateOrConnectWithoutChaInput
    upsert?: BebidasUpsertWithoutChaInput
    connect?: BebidasWhereUniqueInput
    update?: XOR<XOR<BebidasUpdateToOneWithWhereWithoutChaInput, BebidasUpdateWithoutChaInput>, BebidasUncheckedUpdateWithoutChaInput>
  }

  export type CardapioCreateNestedOneWithoutComidasInput = {
    create?: XOR<CardapioCreateWithoutComidasInput, CardapioUncheckedCreateWithoutComidasInput>
    connectOrCreate?: CardapioCreateOrConnectWithoutComidasInput
    connect?: CardapioWhereUniqueInput
  }

  export type DoceCreateNestedOneWithoutComidasInput = {
    create?: XOR<DoceCreateWithoutComidasInput, DoceUncheckedCreateWithoutComidasInput>
    connectOrCreate?: DoceCreateOrConnectWithoutComidasInput
    connect?: DoceWhereUniqueInput
  }

  export type SalgadoCreateNestedOneWithoutComidasInput = {
    create?: XOR<SalgadoCreateWithoutComidasInput, SalgadoUncheckedCreateWithoutComidasInput>
    connectOrCreate?: SalgadoCreateOrConnectWithoutComidasInput
    connect?: SalgadoWhereUniqueInput
  }

  export type DoceUncheckedCreateNestedOneWithoutComidasInput = {
    create?: XOR<DoceCreateWithoutComidasInput, DoceUncheckedCreateWithoutComidasInput>
    connectOrCreate?: DoceCreateOrConnectWithoutComidasInput
    connect?: DoceWhereUniqueInput
  }

  export type SalgadoUncheckedCreateNestedOneWithoutComidasInput = {
    create?: XOR<SalgadoCreateWithoutComidasInput, SalgadoUncheckedCreateWithoutComidasInput>
    connectOrCreate?: SalgadoCreateOrConnectWithoutComidasInput
    connect?: SalgadoWhereUniqueInput
  }

  export type CardapioUpdateOneRequiredWithoutComidasNestedInput = {
    create?: XOR<CardapioCreateWithoutComidasInput, CardapioUncheckedCreateWithoutComidasInput>
    connectOrCreate?: CardapioCreateOrConnectWithoutComidasInput
    upsert?: CardapioUpsertWithoutComidasInput
    connect?: CardapioWhereUniqueInput
    update?: XOR<XOR<CardapioUpdateToOneWithWhereWithoutComidasInput, CardapioUpdateWithoutComidasInput>, CardapioUncheckedUpdateWithoutComidasInput>
  }

  export type DoceUpdateOneWithoutComidasNestedInput = {
    create?: XOR<DoceCreateWithoutComidasInput, DoceUncheckedCreateWithoutComidasInput>
    connectOrCreate?: DoceCreateOrConnectWithoutComidasInput
    upsert?: DoceUpsertWithoutComidasInput
    disconnect?: DoceWhereInput | boolean
    delete?: DoceWhereInput | boolean
    connect?: DoceWhereUniqueInput
    update?: XOR<XOR<DoceUpdateToOneWithWhereWithoutComidasInput, DoceUpdateWithoutComidasInput>, DoceUncheckedUpdateWithoutComidasInput>
  }

  export type SalgadoUpdateOneWithoutComidasNestedInput = {
    create?: XOR<SalgadoCreateWithoutComidasInput, SalgadoUncheckedCreateWithoutComidasInput>
    connectOrCreate?: SalgadoCreateOrConnectWithoutComidasInput
    upsert?: SalgadoUpsertWithoutComidasInput
    disconnect?: SalgadoWhereInput | boolean
    delete?: SalgadoWhereInput | boolean
    connect?: SalgadoWhereUniqueInput
    update?: XOR<XOR<SalgadoUpdateToOneWithWhereWithoutComidasInput, SalgadoUpdateWithoutComidasInput>, SalgadoUncheckedUpdateWithoutComidasInput>
  }

  export type DoceUncheckedUpdateOneWithoutComidasNestedInput = {
    create?: XOR<DoceCreateWithoutComidasInput, DoceUncheckedCreateWithoutComidasInput>
    connectOrCreate?: DoceCreateOrConnectWithoutComidasInput
    upsert?: DoceUpsertWithoutComidasInput
    disconnect?: DoceWhereInput | boolean
    delete?: DoceWhereInput | boolean
    connect?: DoceWhereUniqueInput
    update?: XOR<XOR<DoceUpdateToOneWithWhereWithoutComidasInput, DoceUpdateWithoutComidasInput>, DoceUncheckedUpdateWithoutComidasInput>
  }

  export type SalgadoUncheckedUpdateOneWithoutComidasNestedInput = {
    create?: XOR<SalgadoCreateWithoutComidasInput, SalgadoUncheckedCreateWithoutComidasInput>
    connectOrCreate?: SalgadoCreateOrConnectWithoutComidasInput
    upsert?: SalgadoUpsertWithoutComidasInput
    disconnect?: SalgadoWhereInput | boolean
    delete?: SalgadoWhereInput | boolean
    connect?: SalgadoWhereUniqueInput
    update?: XOR<XOR<SalgadoUpdateToOneWithWhereWithoutComidasInput, SalgadoUpdateWithoutComidasInput>, SalgadoUncheckedUpdateWithoutComidasInput>
  }

  export type ComidasCreateNestedOneWithoutDoceInput = {
    create?: XOR<ComidasCreateWithoutDoceInput, ComidasUncheckedCreateWithoutDoceInput>
    connectOrCreate?: ComidasCreateOrConnectWithoutDoceInput
    connect?: ComidasWhereUniqueInput
  }

  export type ComidasUpdateOneRequiredWithoutDoceNestedInput = {
    create?: XOR<ComidasCreateWithoutDoceInput, ComidasUncheckedCreateWithoutDoceInput>
    connectOrCreate?: ComidasCreateOrConnectWithoutDoceInput
    upsert?: ComidasUpsertWithoutDoceInput
    connect?: ComidasWhereUniqueInput
    update?: XOR<XOR<ComidasUpdateToOneWithWhereWithoutDoceInput, ComidasUpdateWithoutDoceInput>, ComidasUncheckedUpdateWithoutDoceInput>
  }

  export type BebidasCreateNestedOneWithoutOutrosInput = {
    create?: XOR<BebidasCreateWithoutOutrosInput, BebidasUncheckedCreateWithoutOutrosInput>
    connectOrCreate?: BebidasCreateOrConnectWithoutOutrosInput
    connect?: BebidasWhereUniqueInput
  }

  export type BebidasUpdateOneRequiredWithoutOutrosNestedInput = {
    create?: XOR<BebidasCreateWithoutOutrosInput, BebidasUncheckedCreateWithoutOutrosInput>
    connectOrCreate?: BebidasCreateOrConnectWithoutOutrosInput
    upsert?: BebidasUpsertWithoutOutrosInput
    connect?: BebidasWhereUniqueInput
    update?: XOR<XOR<BebidasUpdateToOneWithWhereWithoutOutrosInput, BebidasUpdateWithoutOutrosInput>, BebidasUncheckedUpdateWithoutOutrosInput>
  }

  export type ComidasCreateNestedOneWithoutSalgadoInput = {
    create?: XOR<ComidasCreateWithoutSalgadoInput, ComidasUncheckedCreateWithoutSalgadoInput>
    connectOrCreate?: ComidasCreateOrConnectWithoutSalgadoInput
    connect?: ComidasWhereUniqueInput
  }

  export type ComidasUpdateOneRequiredWithoutSalgadoNestedInput = {
    create?: XOR<ComidasCreateWithoutSalgadoInput, ComidasUncheckedCreateWithoutSalgadoInput>
    connectOrCreate?: ComidasCreateOrConnectWithoutSalgadoInput
    upsert?: ComidasUpsertWithoutSalgadoInput
    connect?: ComidasWhereUniqueInput
    update?: XOR<XOR<ComidasUpdateToOneWithWhereWithoutSalgadoInput, ComidasUpdateWithoutSalgadoInput>, ComidasUncheckedUpdateWithoutSalgadoInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Bytes | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type CardapioCreateWithoutBebidasInput = {
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    Comidas?: ComidasCreateNestedManyWithoutCardapioInput
  }

  export type CardapioUncheckedCreateWithoutBebidasInput = {
    id_produto?: number
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    Comidas?: ComidasUncheckedCreateNestedManyWithoutCardapioInput
  }

  export type CardapioCreateOrConnectWithoutBebidasInput = {
    where: CardapioWhereUniqueInput
    create: XOR<CardapioCreateWithoutBebidasInput, CardapioUncheckedCreateWithoutBebidasInput>
  }

  export type CafeCreateWithoutBebidasInput = {
    item?: string | null
  }

  export type CafeUncheckedCreateWithoutBebidasInput = {
    item?: string | null
  }

  export type CafeCreateOrConnectWithoutBebidasInput = {
    where: CafeWhereUniqueInput
    create: XOR<CafeCreateWithoutBebidasInput, CafeUncheckedCreateWithoutBebidasInput>
  }

  export type ChaCreateWithoutBebidasInput = {
    item?: string | null
  }

  export type ChaUncheckedCreateWithoutBebidasInput = {
    item?: string | null
  }

  export type ChaCreateOrConnectWithoutBebidasInput = {
    where: ChaWhereUniqueInput
    create: XOR<ChaCreateWithoutBebidasInput, ChaUncheckedCreateWithoutBebidasInput>
  }

  export type OutrosCreateWithoutBebidasInput = {
    item?: string | null
  }

  export type OutrosUncheckedCreateWithoutBebidasInput = {
    item?: string | null
  }

  export type OutrosCreateOrConnectWithoutBebidasInput = {
    where: OutrosWhereUniqueInput
    create: XOR<OutrosCreateWithoutBebidasInput, OutrosUncheckedCreateWithoutBebidasInput>
  }

  export type CardapioUpsertWithoutBebidasInput = {
    update: XOR<CardapioUpdateWithoutBebidasInput, CardapioUncheckedUpdateWithoutBebidasInput>
    create: XOR<CardapioCreateWithoutBebidasInput, CardapioUncheckedCreateWithoutBebidasInput>
    where?: CardapioWhereInput
  }

  export type CardapioUpdateToOneWithWhereWithoutBebidasInput = {
    where?: CardapioWhereInput
    data: XOR<CardapioUpdateWithoutBebidasInput, CardapioUncheckedUpdateWithoutBebidasInput>
  }

  export type CardapioUpdateWithoutBebidasInput = {
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    Comidas?: ComidasUpdateManyWithoutCardapioNestedInput
  }

  export type CardapioUncheckedUpdateWithoutBebidasInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    Comidas?: ComidasUncheckedUpdateManyWithoutCardapioNestedInput
  }

  export type CafeUpsertWithoutBebidasInput = {
    update: XOR<CafeUpdateWithoutBebidasInput, CafeUncheckedUpdateWithoutBebidasInput>
    create: XOR<CafeCreateWithoutBebidasInput, CafeUncheckedCreateWithoutBebidasInput>
    where?: CafeWhereInput
  }

  export type CafeUpdateToOneWithWhereWithoutBebidasInput = {
    where?: CafeWhereInput
    data: XOR<CafeUpdateWithoutBebidasInput, CafeUncheckedUpdateWithoutBebidasInput>
  }

  export type CafeUpdateWithoutBebidasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CafeUncheckedUpdateWithoutBebidasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChaUpsertWithoutBebidasInput = {
    update: XOR<ChaUpdateWithoutBebidasInput, ChaUncheckedUpdateWithoutBebidasInput>
    create: XOR<ChaCreateWithoutBebidasInput, ChaUncheckedCreateWithoutBebidasInput>
    where?: ChaWhereInput
  }

  export type ChaUpdateToOneWithWhereWithoutBebidasInput = {
    where?: ChaWhereInput
    data: XOR<ChaUpdateWithoutBebidasInput, ChaUncheckedUpdateWithoutBebidasInput>
  }

  export type ChaUpdateWithoutBebidasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChaUncheckedUpdateWithoutBebidasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutrosUpsertWithoutBebidasInput = {
    update: XOR<OutrosUpdateWithoutBebidasInput, OutrosUncheckedUpdateWithoutBebidasInput>
    create: XOR<OutrosCreateWithoutBebidasInput, OutrosUncheckedCreateWithoutBebidasInput>
    where?: OutrosWhereInput
  }

  export type OutrosUpdateToOneWithWhereWithoutBebidasInput = {
    where?: OutrosWhereInput
    data: XOR<OutrosUpdateWithoutBebidasInput, OutrosUncheckedUpdateWithoutBebidasInput>
  }

  export type OutrosUpdateWithoutBebidasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutrosUncheckedUpdateWithoutBebidasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BebidasCreateWithoutCafeInput = {
    tipo?: string | null
    milimetros?: string | null
    Cardapio: CardapioCreateNestedOneWithoutBebidasInput
    Cha?: ChaCreateNestedOneWithoutBebidasInput
    Outros?: OutrosCreateNestedOneWithoutBebidasInput
  }

  export type BebidasUncheckedCreateWithoutCafeInput = {
    id_item?: number
    tipo?: string | null
    milimetros?: string | null
    id_produto: number
    Cha?: ChaUncheckedCreateNestedOneWithoutBebidasInput
    Outros?: OutrosUncheckedCreateNestedOneWithoutBebidasInput
  }

  export type BebidasCreateOrConnectWithoutCafeInput = {
    where: BebidasWhereUniqueInput
    create: XOR<BebidasCreateWithoutCafeInput, BebidasUncheckedCreateWithoutCafeInput>
  }

  export type BebidasUpsertWithoutCafeInput = {
    update: XOR<BebidasUpdateWithoutCafeInput, BebidasUncheckedUpdateWithoutCafeInput>
    create: XOR<BebidasCreateWithoutCafeInput, BebidasUncheckedCreateWithoutCafeInput>
    where?: BebidasWhereInput
  }

  export type BebidasUpdateToOneWithWhereWithoutCafeInput = {
    where?: BebidasWhereInput
    data: XOR<BebidasUpdateWithoutCafeInput, BebidasUncheckedUpdateWithoutCafeInput>
  }

  export type BebidasUpdateWithoutCafeInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    Cardapio?: CardapioUpdateOneRequiredWithoutBebidasNestedInput
    Cha?: ChaUpdateOneWithoutBebidasNestedInput
    Outros?: OutrosUpdateOneWithoutBebidasNestedInput
  }

  export type BebidasUncheckedUpdateWithoutCafeInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    id_produto?: IntFieldUpdateOperationsInput | number
    Cha?: ChaUncheckedUpdateOneWithoutBebidasNestedInput
    Outros?: OutrosUncheckedUpdateOneWithoutBebidasNestedInput
  }

  export type BebidasCreateWithoutCardapioInput = {
    tipo?: string | null
    milimetros?: string | null
    Cafe?: CafeCreateNestedOneWithoutBebidasInput
    Cha?: ChaCreateNestedOneWithoutBebidasInput
    Outros?: OutrosCreateNestedOneWithoutBebidasInput
  }

  export type BebidasUncheckedCreateWithoutCardapioInput = {
    id_item?: number
    tipo?: string | null
    milimetros?: string | null
    Cafe?: CafeUncheckedCreateNestedOneWithoutBebidasInput
    Cha?: ChaUncheckedCreateNestedOneWithoutBebidasInput
    Outros?: OutrosUncheckedCreateNestedOneWithoutBebidasInput
  }

  export type BebidasCreateOrConnectWithoutCardapioInput = {
    where: BebidasWhereUniqueInput
    create: XOR<BebidasCreateWithoutCardapioInput, BebidasUncheckedCreateWithoutCardapioInput>
  }

  export type BebidasCreateManyCardapioInputEnvelope = {
    data: BebidasCreateManyCardapioInput | BebidasCreateManyCardapioInput[]
  }

  export type ComidasCreateWithoutCardapioInput = {
    tipo?: string | null
    peso?: string | null
    Doce?: DoceCreateNestedOneWithoutComidasInput
    Salgado?: SalgadoCreateNestedOneWithoutComidasInput
  }

  export type ComidasUncheckedCreateWithoutCardapioInput = {
    id_item?: number
    tipo?: string | null
    peso?: string | null
    Doce?: DoceUncheckedCreateNestedOneWithoutComidasInput
    Salgado?: SalgadoUncheckedCreateNestedOneWithoutComidasInput
  }

  export type ComidasCreateOrConnectWithoutCardapioInput = {
    where: ComidasWhereUniqueInput
    create: XOR<ComidasCreateWithoutCardapioInput, ComidasUncheckedCreateWithoutCardapioInput>
  }

  export type ComidasCreateManyCardapioInputEnvelope = {
    data: ComidasCreateManyCardapioInput | ComidasCreateManyCardapioInput[]
  }

  export type BebidasUpsertWithWhereUniqueWithoutCardapioInput = {
    where: BebidasWhereUniqueInput
    update: XOR<BebidasUpdateWithoutCardapioInput, BebidasUncheckedUpdateWithoutCardapioInput>
    create: XOR<BebidasCreateWithoutCardapioInput, BebidasUncheckedCreateWithoutCardapioInput>
  }

  export type BebidasUpdateWithWhereUniqueWithoutCardapioInput = {
    where: BebidasWhereUniqueInput
    data: XOR<BebidasUpdateWithoutCardapioInput, BebidasUncheckedUpdateWithoutCardapioInput>
  }

  export type BebidasUpdateManyWithWhereWithoutCardapioInput = {
    where: BebidasScalarWhereInput
    data: XOR<BebidasUpdateManyMutationInput, BebidasUncheckedUpdateManyWithoutCardapioInput>
  }

  export type BebidasScalarWhereInput = {
    AND?: BebidasScalarWhereInput | BebidasScalarWhereInput[]
    OR?: BebidasScalarWhereInput[]
    NOT?: BebidasScalarWhereInput | BebidasScalarWhereInput[]
    id_item?: IntFilter<"Bebidas"> | number
    tipo?: StringNullableFilter<"Bebidas"> | string | null
    milimetros?: StringNullableFilter<"Bebidas"> | string | null
    id_produto?: IntFilter<"Bebidas"> | number
  }

  export type ComidasUpsertWithWhereUniqueWithoutCardapioInput = {
    where: ComidasWhereUniqueInput
    update: XOR<ComidasUpdateWithoutCardapioInput, ComidasUncheckedUpdateWithoutCardapioInput>
    create: XOR<ComidasCreateWithoutCardapioInput, ComidasUncheckedCreateWithoutCardapioInput>
  }

  export type ComidasUpdateWithWhereUniqueWithoutCardapioInput = {
    where: ComidasWhereUniqueInput
    data: XOR<ComidasUpdateWithoutCardapioInput, ComidasUncheckedUpdateWithoutCardapioInput>
  }

  export type ComidasUpdateManyWithWhereWithoutCardapioInput = {
    where: ComidasScalarWhereInput
    data: XOR<ComidasUpdateManyMutationInput, ComidasUncheckedUpdateManyWithoutCardapioInput>
  }

  export type ComidasScalarWhereInput = {
    AND?: ComidasScalarWhereInput | ComidasScalarWhereInput[]
    OR?: ComidasScalarWhereInput[]
    NOT?: ComidasScalarWhereInput | ComidasScalarWhereInput[]
    id_item?: IntFilter<"Comidas"> | number
    tipo?: StringNullableFilter<"Comidas"> | string | null
    peso?: StringNullableFilter<"Comidas"> | string | null
    id_produto?: IntFilter<"Comidas"> | number
  }

  export type BebidasCreateWithoutChaInput = {
    tipo?: string | null
    milimetros?: string | null
    Cardapio: CardapioCreateNestedOneWithoutBebidasInput
    Cafe?: CafeCreateNestedOneWithoutBebidasInput
    Outros?: OutrosCreateNestedOneWithoutBebidasInput
  }

  export type BebidasUncheckedCreateWithoutChaInput = {
    id_item?: number
    tipo?: string | null
    milimetros?: string | null
    id_produto: number
    Cafe?: CafeUncheckedCreateNestedOneWithoutBebidasInput
    Outros?: OutrosUncheckedCreateNestedOneWithoutBebidasInput
  }

  export type BebidasCreateOrConnectWithoutChaInput = {
    where: BebidasWhereUniqueInput
    create: XOR<BebidasCreateWithoutChaInput, BebidasUncheckedCreateWithoutChaInput>
  }

  export type BebidasUpsertWithoutChaInput = {
    update: XOR<BebidasUpdateWithoutChaInput, BebidasUncheckedUpdateWithoutChaInput>
    create: XOR<BebidasCreateWithoutChaInput, BebidasUncheckedCreateWithoutChaInput>
    where?: BebidasWhereInput
  }

  export type BebidasUpdateToOneWithWhereWithoutChaInput = {
    where?: BebidasWhereInput
    data: XOR<BebidasUpdateWithoutChaInput, BebidasUncheckedUpdateWithoutChaInput>
  }

  export type BebidasUpdateWithoutChaInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    Cardapio?: CardapioUpdateOneRequiredWithoutBebidasNestedInput
    Cafe?: CafeUpdateOneWithoutBebidasNestedInput
    Outros?: OutrosUpdateOneWithoutBebidasNestedInput
  }

  export type BebidasUncheckedUpdateWithoutChaInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    id_produto?: IntFieldUpdateOperationsInput | number
    Cafe?: CafeUncheckedUpdateOneWithoutBebidasNestedInput
    Outros?: OutrosUncheckedUpdateOneWithoutBebidasNestedInput
  }

  export type CardapioCreateWithoutComidasInput = {
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    Bebidas?: BebidasCreateNestedManyWithoutCardapioInput
  }

  export type CardapioUncheckedCreateWithoutComidasInput = {
    id_produto?: number
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    Bebidas?: BebidasUncheckedCreateNestedManyWithoutCardapioInput
  }

  export type CardapioCreateOrConnectWithoutComidasInput = {
    where: CardapioWhereUniqueInput
    create: XOR<CardapioCreateWithoutComidasInput, CardapioUncheckedCreateWithoutComidasInput>
  }

  export type DoceCreateWithoutComidasInput = {
    item?: string | null
  }

  export type DoceUncheckedCreateWithoutComidasInput = {
    item?: string | null
  }

  export type DoceCreateOrConnectWithoutComidasInput = {
    where: DoceWhereUniqueInput
    create: XOR<DoceCreateWithoutComidasInput, DoceUncheckedCreateWithoutComidasInput>
  }

  export type SalgadoCreateWithoutComidasInput = {
    item?: string | null
  }

  export type SalgadoUncheckedCreateWithoutComidasInput = {
    item?: string | null
  }

  export type SalgadoCreateOrConnectWithoutComidasInput = {
    where: SalgadoWhereUniqueInput
    create: XOR<SalgadoCreateWithoutComidasInput, SalgadoUncheckedCreateWithoutComidasInput>
  }

  export type CardapioUpsertWithoutComidasInput = {
    update: XOR<CardapioUpdateWithoutComidasInput, CardapioUncheckedUpdateWithoutComidasInput>
    create: XOR<CardapioCreateWithoutComidasInput, CardapioUncheckedCreateWithoutComidasInput>
    where?: CardapioWhereInput
  }

  export type CardapioUpdateToOneWithWhereWithoutComidasInput = {
    where?: CardapioWhereInput
    data: XOR<CardapioUpdateWithoutComidasInput, CardapioUncheckedUpdateWithoutComidasInput>
  }

  export type CardapioUpdateWithoutComidasInput = {
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    Bebidas?: BebidasUpdateManyWithoutCardapioNestedInput
  }

  export type CardapioUncheckedUpdateWithoutComidasInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    Bebidas?: BebidasUncheckedUpdateManyWithoutCardapioNestedInput
  }

  export type DoceUpsertWithoutComidasInput = {
    update: XOR<DoceUpdateWithoutComidasInput, DoceUncheckedUpdateWithoutComidasInput>
    create: XOR<DoceCreateWithoutComidasInput, DoceUncheckedCreateWithoutComidasInput>
    where?: DoceWhereInput
  }

  export type DoceUpdateToOneWithWhereWithoutComidasInput = {
    where?: DoceWhereInput
    data: XOR<DoceUpdateWithoutComidasInput, DoceUncheckedUpdateWithoutComidasInput>
  }

  export type DoceUpdateWithoutComidasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoceUncheckedUpdateWithoutComidasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalgadoUpsertWithoutComidasInput = {
    update: XOR<SalgadoUpdateWithoutComidasInput, SalgadoUncheckedUpdateWithoutComidasInput>
    create: XOR<SalgadoCreateWithoutComidasInput, SalgadoUncheckedCreateWithoutComidasInput>
    where?: SalgadoWhereInput
  }

  export type SalgadoUpdateToOneWithWhereWithoutComidasInput = {
    where?: SalgadoWhereInput
    data: XOR<SalgadoUpdateWithoutComidasInput, SalgadoUncheckedUpdateWithoutComidasInput>
  }

  export type SalgadoUpdateWithoutComidasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalgadoUncheckedUpdateWithoutComidasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComidasCreateWithoutDoceInput = {
    tipo?: string | null
    peso?: string | null
    Cardapio: CardapioCreateNestedOneWithoutComidasInput
    Salgado?: SalgadoCreateNestedOneWithoutComidasInput
  }

  export type ComidasUncheckedCreateWithoutDoceInput = {
    id_item?: number
    tipo?: string | null
    peso?: string | null
    id_produto: number
    Salgado?: SalgadoUncheckedCreateNestedOneWithoutComidasInput
  }

  export type ComidasCreateOrConnectWithoutDoceInput = {
    where: ComidasWhereUniqueInput
    create: XOR<ComidasCreateWithoutDoceInput, ComidasUncheckedCreateWithoutDoceInput>
  }

  export type ComidasUpsertWithoutDoceInput = {
    update: XOR<ComidasUpdateWithoutDoceInput, ComidasUncheckedUpdateWithoutDoceInput>
    create: XOR<ComidasCreateWithoutDoceInput, ComidasUncheckedCreateWithoutDoceInput>
    where?: ComidasWhereInput
  }

  export type ComidasUpdateToOneWithWhereWithoutDoceInput = {
    where?: ComidasWhereInput
    data: XOR<ComidasUpdateWithoutDoceInput, ComidasUncheckedUpdateWithoutDoceInput>
  }

  export type ComidasUpdateWithoutDoceInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    Cardapio?: CardapioUpdateOneRequiredWithoutComidasNestedInput
    Salgado?: SalgadoUpdateOneWithoutComidasNestedInput
  }

  export type ComidasUncheckedUpdateWithoutDoceInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    id_produto?: IntFieldUpdateOperationsInput | number
    Salgado?: SalgadoUncheckedUpdateOneWithoutComidasNestedInput
  }

  export type BebidasCreateWithoutOutrosInput = {
    tipo?: string | null
    milimetros?: string | null
    Cardapio: CardapioCreateNestedOneWithoutBebidasInput
    Cafe?: CafeCreateNestedOneWithoutBebidasInput
    Cha?: ChaCreateNestedOneWithoutBebidasInput
  }

  export type BebidasUncheckedCreateWithoutOutrosInput = {
    id_item?: number
    tipo?: string | null
    milimetros?: string | null
    id_produto: number
    Cafe?: CafeUncheckedCreateNestedOneWithoutBebidasInput
    Cha?: ChaUncheckedCreateNestedOneWithoutBebidasInput
  }

  export type BebidasCreateOrConnectWithoutOutrosInput = {
    where: BebidasWhereUniqueInput
    create: XOR<BebidasCreateWithoutOutrosInput, BebidasUncheckedCreateWithoutOutrosInput>
  }

  export type BebidasUpsertWithoutOutrosInput = {
    update: XOR<BebidasUpdateWithoutOutrosInput, BebidasUncheckedUpdateWithoutOutrosInput>
    create: XOR<BebidasCreateWithoutOutrosInput, BebidasUncheckedCreateWithoutOutrosInput>
    where?: BebidasWhereInput
  }

  export type BebidasUpdateToOneWithWhereWithoutOutrosInput = {
    where?: BebidasWhereInput
    data: XOR<BebidasUpdateWithoutOutrosInput, BebidasUncheckedUpdateWithoutOutrosInput>
  }

  export type BebidasUpdateWithoutOutrosInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    Cardapio?: CardapioUpdateOneRequiredWithoutBebidasNestedInput
    Cafe?: CafeUpdateOneWithoutBebidasNestedInput
    Cha?: ChaUpdateOneWithoutBebidasNestedInput
  }

  export type BebidasUncheckedUpdateWithoutOutrosInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    id_produto?: IntFieldUpdateOperationsInput | number
    Cafe?: CafeUncheckedUpdateOneWithoutBebidasNestedInput
    Cha?: ChaUncheckedUpdateOneWithoutBebidasNestedInput
  }

  export type ComidasCreateWithoutSalgadoInput = {
    tipo?: string | null
    peso?: string | null
    Cardapio: CardapioCreateNestedOneWithoutComidasInput
    Doce?: DoceCreateNestedOneWithoutComidasInput
  }

  export type ComidasUncheckedCreateWithoutSalgadoInput = {
    id_item?: number
    tipo?: string | null
    peso?: string | null
    id_produto: number
    Doce?: DoceUncheckedCreateNestedOneWithoutComidasInput
  }

  export type ComidasCreateOrConnectWithoutSalgadoInput = {
    where: ComidasWhereUniqueInput
    create: XOR<ComidasCreateWithoutSalgadoInput, ComidasUncheckedCreateWithoutSalgadoInput>
  }

  export type ComidasUpsertWithoutSalgadoInput = {
    update: XOR<ComidasUpdateWithoutSalgadoInput, ComidasUncheckedUpdateWithoutSalgadoInput>
    create: XOR<ComidasCreateWithoutSalgadoInput, ComidasUncheckedCreateWithoutSalgadoInput>
    where?: ComidasWhereInput
  }

  export type ComidasUpdateToOneWithWhereWithoutSalgadoInput = {
    where?: ComidasWhereInput
    data: XOR<ComidasUpdateWithoutSalgadoInput, ComidasUncheckedUpdateWithoutSalgadoInput>
  }

  export type ComidasUpdateWithoutSalgadoInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    Cardapio?: CardapioUpdateOneRequiredWithoutComidasNestedInput
    Doce?: DoceUpdateOneWithoutComidasNestedInput
  }

  export type ComidasUncheckedUpdateWithoutSalgadoInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    id_produto?: IntFieldUpdateOperationsInput | number
    Doce?: DoceUncheckedUpdateOneWithoutComidasNestedInput
  }

  export type BebidasCreateManyCardapioInput = {
    tipo?: string | null
    milimetros?: string | null
  }

  export type ComidasCreateManyCardapioInput = {
    tipo?: string | null
    peso?: string | null
  }

  export type BebidasUpdateWithoutCardapioInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    Cafe?: CafeUpdateOneWithoutBebidasNestedInput
    Cha?: ChaUpdateOneWithoutBebidasNestedInput
    Outros?: OutrosUpdateOneWithoutBebidasNestedInput
  }

  export type BebidasUncheckedUpdateWithoutCardapioInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
    Cafe?: CafeUncheckedUpdateOneWithoutBebidasNestedInput
    Cha?: ChaUncheckedUpdateOneWithoutBebidasNestedInput
    Outros?: OutrosUncheckedUpdateOneWithoutBebidasNestedInput
  }

  export type BebidasUncheckedUpdateManyWithoutCardapioInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    milimetros?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComidasUpdateWithoutCardapioInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    Doce?: DoceUpdateOneWithoutComidasNestedInput
    Salgado?: SalgadoUpdateOneWithoutComidasNestedInput
  }

  export type ComidasUncheckedUpdateWithoutCardapioInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    Doce?: DoceUncheckedUpdateOneWithoutComidasNestedInput
    Salgado?: SalgadoUncheckedUpdateOneWithoutComidasNestedInput
  }

  export type ComidasUncheckedUpdateManyWithoutCardapioInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}