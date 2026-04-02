
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Guide
 * 
 */
export type Guide = $Result.DefaultSelection<Prisma.$GuidePayload>
/**
 * Model GuideTab
 * 
 */
export type GuideTab = $Result.DefaultSelection<Prisma.$GuideTabPayload>
/**
 * Model GuideClassification
 * Bloques breves de marco o clasificación: subtítulo, un cuerpo de texto e imagen opcional (sin título de tarjeta como GuideSection).
 */
export type GuideClassification = $Result.DefaultSelection<Prisma.$GuideClassificationPayload>
/**
 * Model GuideSection
 * 
 */
export type GuideSection = $Result.DefaultSelection<Prisma.$GuideSectionPayload>
/**
 * Model GuideParagraph
 * 
 */
export type GuideParagraph = $Result.DefaultSelection<Prisma.$GuideParagraphPayload>
/**
 * Model GuideTable
 * 
 */
export type GuideTable = $Result.DefaultSelection<Prisma.$GuideTablePayload>
/**
 * Model GuideTableRow
 * 
 */
export type GuideTableRow = $Result.DefaultSelection<Prisma.$GuideTableRowPayload>
/**
 * Model GlossaryItem
 * 
 */
export type GlossaryItem = $Result.DefaultSelection<Prisma.$GlossaryItemPayload>
/**
 * Model GlossaryDetail
 * 
 */
export type GlossaryDetail = $Result.DefaultSelection<Prisma.$GlossaryDetailPayload>
/**
 * Model GlossaryItemCategory
 * 
 */
export type GlossaryItemCategory = $Result.DefaultSelection<Prisma.$GlossaryItemCategoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guide`: Exposes CRUD operations for the **Guide** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guides
    * const guides = await prisma.guide.findMany()
    * ```
    */
  get guide(): Prisma.GuideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guideTab`: Exposes CRUD operations for the **GuideTab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuideTabs
    * const guideTabs = await prisma.guideTab.findMany()
    * ```
    */
  get guideTab(): Prisma.GuideTabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guideClassification`: Exposes CRUD operations for the **GuideClassification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuideClassifications
    * const guideClassifications = await prisma.guideClassification.findMany()
    * ```
    */
  get guideClassification(): Prisma.GuideClassificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guideSection`: Exposes CRUD operations for the **GuideSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuideSections
    * const guideSections = await prisma.guideSection.findMany()
    * ```
    */
  get guideSection(): Prisma.GuideSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guideParagraph`: Exposes CRUD operations for the **GuideParagraph** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuideParagraphs
    * const guideParagraphs = await prisma.guideParagraph.findMany()
    * ```
    */
  get guideParagraph(): Prisma.GuideParagraphDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guideTable`: Exposes CRUD operations for the **GuideTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuideTables
    * const guideTables = await prisma.guideTable.findMany()
    * ```
    */
  get guideTable(): Prisma.GuideTableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guideTableRow`: Exposes CRUD operations for the **GuideTableRow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuideTableRows
    * const guideTableRows = await prisma.guideTableRow.findMany()
    * ```
    */
  get guideTableRow(): Prisma.GuideTableRowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.glossaryItem`: Exposes CRUD operations for the **GlossaryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlossaryItems
    * const glossaryItems = await prisma.glossaryItem.findMany()
    * ```
    */
  get glossaryItem(): Prisma.GlossaryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.glossaryDetail`: Exposes CRUD operations for the **GlossaryDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlossaryDetails
    * const glossaryDetails = await prisma.glossaryDetail.findMany()
    * ```
    */
  get glossaryDetail(): Prisma.GlossaryDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.glossaryItemCategory`: Exposes CRUD operations for the **GlossaryItemCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlossaryItemCategories
    * const glossaryItemCategories = await prisma.glossaryItemCategory.findMany()
    * ```
    */
  get glossaryItemCategory(): Prisma.GlossaryItemCategoryDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Category: 'Category',
    Guide: 'Guide',
    GuideTab: 'GuideTab',
    GuideClassification: 'GuideClassification',
    GuideSection: 'GuideSection',
    GuideParagraph: 'GuideParagraph',
    GuideTable: 'GuideTable',
    GuideTableRow: 'GuideTableRow',
    GlossaryItem: 'GlossaryItem',
    GlossaryDetail: 'GlossaryDetail',
    GlossaryItemCategory: 'GlossaryItemCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "guide" | "guideTab" | "guideClassification" | "guideSection" | "guideParagraph" | "guideTable" | "guideTableRow" | "glossaryItem" | "glossaryDetail" | "glossaryItemCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Guide: {
        payload: Prisma.$GuidePayload<ExtArgs>
        fields: Prisma.GuideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          findFirst: {
            args: Prisma.GuideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          findMany: {
            args: Prisma.GuideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>[]
          }
          create: {
            args: Prisma.GuideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          createMany: {
            args: Prisma.GuideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>[]
          }
          delete: {
            args: Prisma.GuideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          update: {
            args: Prisma.GuideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          deleteMany: {
            args: Prisma.GuideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>[]
          }
          upsert: {
            args: Prisma.GuideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          aggregate: {
            args: Prisma.GuideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuide>
          }
          groupBy: {
            args: Prisma.GuideGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuideGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuideCountArgs<ExtArgs>
            result: $Utils.Optional<GuideCountAggregateOutputType> | number
          }
        }
      }
      GuideTab: {
        payload: Prisma.$GuideTabPayload<ExtArgs>
        fields: Prisma.GuideTabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuideTabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuideTabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload>
          }
          findFirst: {
            args: Prisma.GuideTabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuideTabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload>
          }
          findMany: {
            args: Prisma.GuideTabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload>[]
          }
          create: {
            args: Prisma.GuideTabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload>
          }
          createMany: {
            args: Prisma.GuideTabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuideTabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload>[]
          }
          delete: {
            args: Prisma.GuideTabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload>
          }
          update: {
            args: Prisma.GuideTabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload>
          }
          deleteMany: {
            args: Prisma.GuideTabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuideTabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuideTabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload>[]
          }
          upsert: {
            args: Prisma.GuideTabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTabPayload>
          }
          aggregate: {
            args: Prisma.GuideTabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuideTab>
          }
          groupBy: {
            args: Prisma.GuideTabGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuideTabGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuideTabCountArgs<ExtArgs>
            result: $Utils.Optional<GuideTabCountAggregateOutputType> | number
          }
        }
      }
      GuideClassification: {
        payload: Prisma.$GuideClassificationPayload<ExtArgs>
        fields: Prisma.GuideClassificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuideClassificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuideClassificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload>
          }
          findFirst: {
            args: Prisma.GuideClassificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuideClassificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload>
          }
          findMany: {
            args: Prisma.GuideClassificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload>[]
          }
          create: {
            args: Prisma.GuideClassificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload>
          }
          createMany: {
            args: Prisma.GuideClassificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuideClassificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload>[]
          }
          delete: {
            args: Prisma.GuideClassificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload>
          }
          update: {
            args: Prisma.GuideClassificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload>
          }
          deleteMany: {
            args: Prisma.GuideClassificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuideClassificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuideClassificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload>[]
          }
          upsert: {
            args: Prisma.GuideClassificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideClassificationPayload>
          }
          aggregate: {
            args: Prisma.GuideClassificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuideClassification>
          }
          groupBy: {
            args: Prisma.GuideClassificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuideClassificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuideClassificationCountArgs<ExtArgs>
            result: $Utils.Optional<GuideClassificationCountAggregateOutputType> | number
          }
        }
      }
      GuideSection: {
        payload: Prisma.$GuideSectionPayload<ExtArgs>
        fields: Prisma.GuideSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuideSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuideSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload>
          }
          findFirst: {
            args: Prisma.GuideSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuideSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload>
          }
          findMany: {
            args: Prisma.GuideSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload>[]
          }
          create: {
            args: Prisma.GuideSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload>
          }
          createMany: {
            args: Prisma.GuideSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuideSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload>[]
          }
          delete: {
            args: Prisma.GuideSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload>
          }
          update: {
            args: Prisma.GuideSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload>
          }
          deleteMany: {
            args: Prisma.GuideSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuideSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuideSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload>[]
          }
          upsert: {
            args: Prisma.GuideSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideSectionPayload>
          }
          aggregate: {
            args: Prisma.GuideSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuideSection>
          }
          groupBy: {
            args: Prisma.GuideSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuideSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuideSectionCountArgs<ExtArgs>
            result: $Utils.Optional<GuideSectionCountAggregateOutputType> | number
          }
        }
      }
      GuideParagraph: {
        payload: Prisma.$GuideParagraphPayload<ExtArgs>
        fields: Prisma.GuideParagraphFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuideParagraphFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuideParagraphFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload>
          }
          findFirst: {
            args: Prisma.GuideParagraphFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuideParagraphFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload>
          }
          findMany: {
            args: Prisma.GuideParagraphFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload>[]
          }
          create: {
            args: Prisma.GuideParagraphCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload>
          }
          createMany: {
            args: Prisma.GuideParagraphCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuideParagraphCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload>[]
          }
          delete: {
            args: Prisma.GuideParagraphDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload>
          }
          update: {
            args: Prisma.GuideParagraphUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload>
          }
          deleteMany: {
            args: Prisma.GuideParagraphDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuideParagraphUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuideParagraphUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload>[]
          }
          upsert: {
            args: Prisma.GuideParagraphUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideParagraphPayload>
          }
          aggregate: {
            args: Prisma.GuideParagraphAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuideParagraph>
          }
          groupBy: {
            args: Prisma.GuideParagraphGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuideParagraphGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuideParagraphCountArgs<ExtArgs>
            result: $Utils.Optional<GuideParagraphCountAggregateOutputType> | number
          }
        }
      }
      GuideTable: {
        payload: Prisma.$GuideTablePayload<ExtArgs>
        fields: Prisma.GuideTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuideTableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuideTableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload>
          }
          findFirst: {
            args: Prisma.GuideTableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuideTableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload>
          }
          findMany: {
            args: Prisma.GuideTableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload>[]
          }
          create: {
            args: Prisma.GuideTableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload>
          }
          createMany: {
            args: Prisma.GuideTableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuideTableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload>[]
          }
          delete: {
            args: Prisma.GuideTableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload>
          }
          update: {
            args: Prisma.GuideTableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload>
          }
          deleteMany: {
            args: Prisma.GuideTableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuideTableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuideTableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload>[]
          }
          upsert: {
            args: Prisma.GuideTableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTablePayload>
          }
          aggregate: {
            args: Prisma.GuideTableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuideTable>
          }
          groupBy: {
            args: Prisma.GuideTableGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuideTableGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuideTableCountArgs<ExtArgs>
            result: $Utils.Optional<GuideTableCountAggregateOutputType> | number
          }
        }
      }
      GuideTableRow: {
        payload: Prisma.$GuideTableRowPayload<ExtArgs>
        fields: Prisma.GuideTableRowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuideTableRowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuideTableRowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload>
          }
          findFirst: {
            args: Prisma.GuideTableRowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuideTableRowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload>
          }
          findMany: {
            args: Prisma.GuideTableRowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload>[]
          }
          create: {
            args: Prisma.GuideTableRowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload>
          }
          createMany: {
            args: Prisma.GuideTableRowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuideTableRowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload>[]
          }
          delete: {
            args: Prisma.GuideTableRowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload>
          }
          update: {
            args: Prisma.GuideTableRowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload>
          }
          deleteMany: {
            args: Prisma.GuideTableRowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuideTableRowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuideTableRowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload>[]
          }
          upsert: {
            args: Prisma.GuideTableRowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuideTableRowPayload>
          }
          aggregate: {
            args: Prisma.GuideTableRowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuideTableRow>
          }
          groupBy: {
            args: Prisma.GuideTableRowGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuideTableRowGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuideTableRowCountArgs<ExtArgs>
            result: $Utils.Optional<GuideTableRowCountAggregateOutputType> | number
          }
        }
      }
      GlossaryItem: {
        payload: Prisma.$GlossaryItemPayload<ExtArgs>
        fields: Prisma.GlossaryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlossaryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlossaryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload>
          }
          findFirst: {
            args: Prisma.GlossaryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlossaryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload>
          }
          findMany: {
            args: Prisma.GlossaryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload>[]
          }
          create: {
            args: Prisma.GlossaryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload>
          }
          createMany: {
            args: Prisma.GlossaryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlossaryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload>[]
          }
          delete: {
            args: Prisma.GlossaryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload>
          }
          update: {
            args: Prisma.GlossaryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload>
          }
          deleteMany: {
            args: Prisma.GlossaryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlossaryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlossaryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload>[]
          }
          upsert: {
            args: Prisma.GlossaryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemPayload>
          }
          aggregate: {
            args: Prisma.GlossaryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlossaryItem>
          }
          groupBy: {
            args: Prisma.GlossaryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlossaryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlossaryItemCountArgs<ExtArgs>
            result: $Utils.Optional<GlossaryItemCountAggregateOutputType> | number
          }
        }
      }
      GlossaryDetail: {
        payload: Prisma.$GlossaryDetailPayload<ExtArgs>
        fields: Prisma.GlossaryDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlossaryDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlossaryDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload>
          }
          findFirst: {
            args: Prisma.GlossaryDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlossaryDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload>
          }
          findMany: {
            args: Prisma.GlossaryDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload>[]
          }
          create: {
            args: Prisma.GlossaryDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload>
          }
          createMany: {
            args: Prisma.GlossaryDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlossaryDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload>[]
          }
          delete: {
            args: Prisma.GlossaryDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload>
          }
          update: {
            args: Prisma.GlossaryDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload>
          }
          deleteMany: {
            args: Prisma.GlossaryDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlossaryDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlossaryDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload>[]
          }
          upsert: {
            args: Prisma.GlossaryDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryDetailPayload>
          }
          aggregate: {
            args: Prisma.GlossaryDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlossaryDetail>
          }
          groupBy: {
            args: Prisma.GlossaryDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlossaryDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlossaryDetailCountArgs<ExtArgs>
            result: $Utils.Optional<GlossaryDetailCountAggregateOutputType> | number
          }
        }
      }
      GlossaryItemCategory: {
        payload: Prisma.$GlossaryItemCategoryPayload<ExtArgs>
        fields: Prisma.GlossaryItemCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlossaryItemCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlossaryItemCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload>
          }
          findFirst: {
            args: Prisma.GlossaryItemCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlossaryItemCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload>
          }
          findMany: {
            args: Prisma.GlossaryItemCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload>[]
          }
          create: {
            args: Prisma.GlossaryItemCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload>
          }
          createMany: {
            args: Prisma.GlossaryItemCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlossaryItemCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload>[]
          }
          delete: {
            args: Prisma.GlossaryItemCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload>
          }
          update: {
            args: Prisma.GlossaryItemCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload>
          }
          deleteMany: {
            args: Prisma.GlossaryItemCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlossaryItemCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlossaryItemCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload>[]
          }
          upsert: {
            args: Prisma.GlossaryItemCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlossaryItemCategoryPayload>
          }
          aggregate: {
            args: Prisma.GlossaryItemCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlossaryItemCategory>
          }
          groupBy: {
            args: Prisma.GlossaryItemCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlossaryItemCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlossaryItemCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<GlossaryItemCategoryCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    guide?: GuideOmit
    guideTab?: GuideTabOmit
    guideClassification?: GuideClassificationOmit
    guideSection?: GuideSectionOmit
    guideParagraph?: GuideParagraphOmit
    guideTable?: GuideTableOmit
    guideTableRow?: GuideTableRowOmit
    glossaryItem?: GlossaryItemOmit
    glossaryDetail?: GlossaryDetailOmit
    glossaryItemCategory?: GlossaryItemCategoryOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    glossaryLinks: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryLinks?: boolean | CategoryCountOutputTypeCountGlossaryLinksArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountGlossaryLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryItemCategoryWhereInput
  }


  /**
   * Count Type GuideCountOutputType
   */

  export type GuideCountOutputType = {
    tabs: number
  }

  export type GuideCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tabs?: boolean | GuideCountOutputTypeCountTabsArgs
  }

  // Custom InputTypes
  /**
   * GuideCountOutputType without action
   */
  export type GuideCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideCountOutputType
     */
    select?: GuideCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuideCountOutputType without action
   */
  export type GuideCountOutputTypeCountTabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideTabWhereInput
  }


  /**
   * Count Type GuideTabCountOutputType
   */

  export type GuideTabCountOutputType = {
    sections: number
    tables: number
    classifications: number
  }

  export type GuideTabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | GuideTabCountOutputTypeCountSectionsArgs
    tables?: boolean | GuideTabCountOutputTypeCountTablesArgs
    classifications?: boolean | GuideTabCountOutputTypeCountClassificationsArgs
  }

  // Custom InputTypes
  /**
   * GuideTabCountOutputType without action
   */
  export type GuideTabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTabCountOutputType
     */
    select?: GuideTabCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuideTabCountOutputType without action
   */
  export type GuideTabCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideSectionWhereInput
  }

  /**
   * GuideTabCountOutputType without action
   */
  export type GuideTabCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideTableWhereInput
  }

  /**
   * GuideTabCountOutputType without action
   */
  export type GuideTabCountOutputTypeCountClassificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideClassificationWhereInput
  }


  /**
   * Count Type GuideSectionCountOutputType
   */

  export type GuideSectionCountOutputType = {
    paragraphs: number
  }

  export type GuideSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paragraphs?: boolean | GuideSectionCountOutputTypeCountParagraphsArgs
  }

  // Custom InputTypes
  /**
   * GuideSectionCountOutputType without action
   */
  export type GuideSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSectionCountOutputType
     */
    select?: GuideSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuideSectionCountOutputType without action
   */
  export type GuideSectionCountOutputTypeCountParagraphsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideParagraphWhereInput
  }


  /**
   * Count Type GuideTableCountOutputType
   */

  export type GuideTableCountOutputType = {
    rows: number
  }

  export type GuideTableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rows?: boolean | GuideTableCountOutputTypeCountRowsArgs
  }

  // Custom InputTypes
  /**
   * GuideTableCountOutputType without action
   */
  export type GuideTableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableCountOutputType
     */
    select?: GuideTableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuideTableCountOutputType without action
   */
  export type GuideTableCountOutputTypeCountRowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideTableRowWhereInput
  }


  /**
   * Count Type GlossaryItemCountOutputType
   */

  export type GlossaryItemCountOutputType = {
    details: number
    relatedCategories: number
  }

  export type GlossaryItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | GlossaryItemCountOutputTypeCountDetailsArgs
    relatedCategories?: boolean | GlossaryItemCountOutputTypeCountRelatedCategoriesArgs
  }

  // Custom InputTypes
  /**
   * GlossaryItemCountOutputType without action
   */
  export type GlossaryItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCountOutputType
     */
    select?: GlossaryItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GlossaryItemCountOutputType without action
   */
  export type GlossaryItemCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryDetailWhereInput
  }

  /**
   * GlossaryItemCountOutputType without action
   */
  export type GlossaryItemCountOutputTypeCountRelatedCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryItemCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    position: number | null
  }

  export type CategorySumAggregateOutputType = {
    position: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    position: number | null
    title: string | null
    summary: string | null
    abv: string | null
    origin: string | null
    imageUrl: string | null
    imageAlt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    position: number | null
    title: string | null
    summary: string | null
    abv: string | null
    origin: string | null
    imageUrl: string | null
    imageAlt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    slug: number
    position: number
    title: number
    summary: number
    abv: number
    origin: number
    imageUrl: number
    imageAlt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    position?: true
  }

  export type CategorySumAggregateInputType = {
    position?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    slug?: true
    position?: true
    title?: true
    summary?: true
    abv?: true
    origin?: true
    imageUrl?: true
    imageAlt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    position?: true
    title?: true
    summary?: true
    abv?: true
    origin?: true
    imageUrl?: true
    imageAlt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    slug?: true
    position?: true
    title?: true
    summary?: true
    abv?: true
    origin?: true
    imageUrl?: true
    imageAlt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    slug: string
    position: number
    title: string
    summary: string
    abv: string
    origin: string
    imageUrl: string
    imageAlt: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    position?: boolean
    title?: boolean
    summary?: boolean
    abv?: boolean
    origin?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | Category$guideArgs<ExtArgs>
    glossaryLinks?: boolean | Category$glossaryLinksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    position?: boolean
    title?: boolean
    summary?: boolean
    abv?: boolean
    origin?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    position?: boolean
    title?: boolean
    summary?: boolean
    abv?: boolean
    origin?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    slug?: boolean
    position?: boolean
    title?: boolean
    summary?: boolean
    abv?: boolean
    origin?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "position" | "title" | "summary" | "abv" | "origin" | "imageUrl" | "imageAlt" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | Category$guideArgs<ExtArgs>
    glossaryLinks?: boolean | Category$glossaryLinksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      guide: Prisma.$GuidePayload<ExtArgs> | null
      glossaryLinks: Prisma.$GlossaryItemCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      position: number
      title: string
      summary: string
      abv: string
      origin: string
      imageUrl: string
      imageAlt: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guide<T extends Category$guideArgs<ExtArgs> = {}>(args?: Subset<T, Category$guideArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    glossaryLinks<T extends Category$glossaryLinksArgs<ExtArgs> = {}>(args?: Subset<T, Category$glossaryLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly position: FieldRef<"Category", 'Int'>
    readonly title: FieldRef<"Category", 'String'>
    readonly summary: FieldRef<"Category", 'String'>
    readonly abv: FieldRef<"Category", 'String'>
    readonly origin: FieldRef<"Category", 'String'>
    readonly imageUrl: FieldRef<"Category", 'String'>
    readonly imageAlt: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.guide
   */
  export type Category$guideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    where?: GuideWhereInput
  }

  /**
   * Category.glossaryLinks
   */
  export type Category$glossaryLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    where?: GlossaryItemCategoryWhereInput
    orderBy?: GlossaryItemCategoryOrderByWithRelationInput | GlossaryItemCategoryOrderByWithRelationInput[]
    cursor?: GlossaryItemCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlossaryItemCategoryScalarFieldEnum | GlossaryItemCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Guide
   */

  export type AggregateGuide = {
    _count: GuideCountAggregateOutputType | null
    _min: GuideMinAggregateOutputType | null
    _max: GuideMaxAggregateOutputType | null
  }

  export type GuideMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    title: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    title: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideCountAggregateOutputType = {
    id: number
    categoryId: number
    title: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuideMinAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideMaxAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideCountAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guide to aggregate.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guides
    **/
    _count?: true | GuideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuideMaxAggregateInputType
  }

  export type GetGuideAggregateType<T extends GuideAggregateArgs> = {
        [P in keyof T & keyof AggregateGuide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuide[P]>
      : GetScalarType<T[P], AggregateGuide[P]>
  }




  export type GuideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideWhereInput
    orderBy?: GuideOrderByWithAggregationInput | GuideOrderByWithAggregationInput[]
    by: GuideScalarFieldEnum[] | GuideScalarFieldEnum
    having?: GuideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuideCountAggregateInputType | true
    _min?: GuideMinAggregateInputType
    _max?: GuideMaxAggregateInputType
  }

  export type GuideGroupByOutputType = {
    id: string
    categoryId: string
    title: string
    type: string
    createdAt: Date
    updatedAt: Date
    _count: GuideCountAggregateOutputType | null
    _min: GuideMinAggregateOutputType | null
    _max: GuideMaxAggregateOutputType | null
  }

  type GetGuideGroupByPayload<T extends GuideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuideGroupByOutputType[P]>
            : GetScalarType<T[P], GuideGroupByOutputType[P]>
        }
      >
    >


  export type GuideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tabs?: boolean | Guide$tabsArgs<ExtArgs>
    _count?: boolean | GuideCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guide"]>

  export type GuideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guide"]>

  export type GuideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guide"]>

  export type GuideSelectScalar = {
    id?: boolean
    categoryId?: boolean
    title?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "title" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["guide"]>
  export type GuideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tabs?: boolean | Guide$tabsArgs<ExtArgs>
    _count?: boolean | GuideCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type GuideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $GuidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guide"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      tabs: Prisma.$GuideTabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      title: string
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guide"]>
    composites: {}
  }

  type GuideGetPayload<S extends boolean | null | undefined | GuideDefaultArgs> = $Result.GetResult<Prisma.$GuidePayload, S>

  type GuideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuideCountAggregateInputType | true
    }

  export interface GuideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guide'], meta: { name: 'Guide' } }
    /**
     * Find zero or one Guide that matches the filter.
     * @param {GuideFindUniqueArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuideFindUniqueArgs>(args: SelectSubset<T, GuideFindUniqueArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guide that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuideFindUniqueOrThrowArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuideFindUniqueOrThrowArgs>(args: SelectSubset<T, GuideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guide that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideFindFirstArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuideFindFirstArgs>(args?: SelectSubset<T, GuideFindFirstArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guide that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideFindFirstOrThrowArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuideFindFirstOrThrowArgs>(args?: SelectSubset<T, GuideFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guides
     * const guides = await prisma.guide.findMany()
     * 
     * // Get first 10 Guides
     * const guides = await prisma.guide.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guideWithIdOnly = await prisma.guide.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuideFindManyArgs>(args?: SelectSubset<T, GuideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guide.
     * @param {GuideCreateArgs} args - Arguments to create a Guide.
     * @example
     * // Create one Guide
     * const Guide = await prisma.guide.create({
     *   data: {
     *     // ... data to create a Guide
     *   }
     * })
     * 
     */
    create<T extends GuideCreateArgs>(args: SelectSubset<T, GuideCreateArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guides.
     * @param {GuideCreateManyArgs} args - Arguments to create many Guides.
     * @example
     * // Create many Guides
     * const guide = await prisma.guide.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuideCreateManyArgs>(args?: SelectSubset<T, GuideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guides and returns the data saved in the database.
     * @param {GuideCreateManyAndReturnArgs} args - Arguments to create many Guides.
     * @example
     * // Create many Guides
     * const guide = await prisma.guide.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guides and only return the `id`
     * const guideWithIdOnly = await prisma.guide.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuideCreateManyAndReturnArgs>(args?: SelectSubset<T, GuideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guide.
     * @param {GuideDeleteArgs} args - Arguments to delete one Guide.
     * @example
     * // Delete one Guide
     * const Guide = await prisma.guide.delete({
     *   where: {
     *     // ... filter to delete one Guide
     *   }
     * })
     * 
     */
    delete<T extends GuideDeleteArgs>(args: SelectSubset<T, GuideDeleteArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guide.
     * @param {GuideUpdateArgs} args - Arguments to update one Guide.
     * @example
     * // Update one Guide
     * const guide = await prisma.guide.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuideUpdateArgs>(args: SelectSubset<T, GuideUpdateArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guides.
     * @param {GuideDeleteManyArgs} args - Arguments to filter Guides to delete.
     * @example
     * // Delete a few Guides
     * const { count } = await prisma.guide.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuideDeleteManyArgs>(args?: SelectSubset<T, GuideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guides
     * const guide = await prisma.guide.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuideUpdateManyArgs>(args: SelectSubset<T, GuideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guides and returns the data updated in the database.
     * @param {GuideUpdateManyAndReturnArgs} args - Arguments to update many Guides.
     * @example
     * // Update many Guides
     * const guide = await prisma.guide.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guides and only return the `id`
     * const guideWithIdOnly = await prisma.guide.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuideUpdateManyAndReturnArgs>(args: SelectSubset<T, GuideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guide.
     * @param {GuideUpsertArgs} args - Arguments to update or create a Guide.
     * @example
     * // Update or create a Guide
     * const guide = await prisma.guide.upsert({
     *   create: {
     *     // ... data to create a Guide
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guide we want to update
     *   }
     * })
     */
    upsert<T extends GuideUpsertArgs>(args: SelectSubset<T, GuideUpsertArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideCountArgs} args - Arguments to filter Guides to count.
     * @example
     * // Count the number of Guides
     * const count = await prisma.guide.count({
     *   where: {
     *     // ... the filter for the Guides we want to count
     *   }
     * })
    **/
    count<T extends GuideCountArgs>(
      args?: Subset<T, GuideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuideAggregateArgs>(args: Subset<T, GuideAggregateArgs>): Prisma.PrismaPromise<GetGuideAggregateType<T>>

    /**
     * Group by Guide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideGroupByArgs} args - Group by arguments.
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
      T extends GuideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuideGroupByArgs['orderBy'] }
        : { orderBy?: GuideGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guide model
   */
  readonly fields: GuideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guide.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tabs<T extends Guide$tabsArgs<ExtArgs> = {}>(args?: Subset<T, Guide$tabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Guide model
   */
  interface GuideFieldRefs {
    readonly id: FieldRef<"Guide", 'String'>
    readonly categoryId: FieldRef<"Guide", 'String'>
    readonly title: FieldRef<"Guide", 'String'>
    readonly type: FieldRef<"Guide", 'String'>
    readonly createdAt: FieldRef<"Guide", 'DateTime'>
    readonly updatedAt: FieldRef<"Guide", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guide findUnique
   */
  export type GuideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide findUniqueOrThrow
   */
  export type GuideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide findFirst
   */
  export type GuideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guides.
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guides.
     */
    distinct?: GuideScalarFieldEnum | GuideScalarFieldEnum[]
  }

  /**
   * Guide findFirstOrThrow
   */
  export type GuideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guides.
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guides.
     */
    distinct?: GuideScalarFieldEnum | GuideScalarFieldEnum[]
  }

  /**
   * Guide findMany
   */
  export type GuideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guides to fetch.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guides.
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guides.
     */
    distinct?: GuideScalarFieldEnum | GuideScalarFieldEnum[]
  }

  /**
   * Guide create
   */
  export type GuideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * The data needed to create a Guide.
     */
    data: XOR<GuideCreateInput, GuideUncheckedCreateInput>
  }

  /**
   * Guide createMany
   */
  export type GuideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guides.
     */
    data: GuideCreateManyInput | GuideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guide createManyAndReturn
   */
  export type GuideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * The data used to create many Guides.
     */
    data: GuideCreateManyInput | GuideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guide update
   */
  export type GuideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * The data needed to update a Guide.
     */
    data: XOR<GuideUpdateInput, GuideUncheckedUpdateInput>
    /**
     * Choose, which Guide to update.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide updateMany
   */
  export type GuideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guides.
     */
    data: XOR<GuideUpdateManyMutationInput, GuideUncheckedUpdateManyInput>
    /**
     * Filter which Guides to update
     */
    where?: GuideWhereInput
    /**
     * Limit how many Guides to update.
     */
    limit?: number
  }

  /**
   * Guide updateManyAndReturn
   */
  export type GuideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * The data used to update Guides.
     */
    data: XOR<GuideUpdateManyMutationInput, GuideUncheckedUpdateManyInput>
    /**
     * Filter which Guides to update
     */
    where?: GuideWhereInput
    /**
     * Limit how many Guides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guide upsert
   */
  export type GuideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * The filter to search for the Guide to update in case it exists.
     */
    where: GuideWhereUniqueInput
    /**
     * In case the Guide found by the `where` argument doesn't exist, create a new Guide with this data.
     */
    create: XOR<GuideCreateInput, GuideUncheckedCreateInput>
    /**
     * In case the Guide was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuideUpdateInput, GuideUncheckedUpdateInput>
  }

  /**
   * Guide delete
   */
  export type GuideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter which Guide to delete.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide deleteMany
   */
  export type GuideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guides to delete
     */
    where?: GuideWhereInput
    /**
     * Limit how many Guides to delete.
     */
    limit?: number
  }

  /**
   * Guide.tabs
   */
  export type Guide$tabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
    where?: GuideTabWhereInput
    orderBy?: GuideTabOrderByWithRelationInput | GuideTabOrderByWithRelationInput[]
    cursor?: GuideTabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuideTabScalarFieldEnum | GuideTabScalarFieldEnum[]
  }

  /**
   * Guide without action
   */
  export type GuideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
  }


  /**
   * Model GuideTab
   */

  export type AggregateGuideTab = {
    _count: GuideTabCountAggregateOutputType | null
    _avg: GuideTabAvgAggregateOutputType | null
    _sum: GuideTabSumAggregateOutputType | null
    _min: GuideTabMinAggregateOutputType | null
    _max: GuideTabMaxAggregateOutputType | null
  }

  export type GuideTabAvgAggregateOutputType = {
    position: number | null
  }

  export type GuideTabSumAggregateOutputType = {
    position: number | null
  }

  export type GuideTabMinAggregateOutputType = {
    id: string | null
    guideId: string | null
    slug: string | null
    label: string | null
    panelTitle: string | null
    noteTitle: string | null
    noteContent: string | null
    position: number | null
    semanticKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideTabMaxAggregateOutputType = {
    id: string | null
    guideId: string | null
    slug: string | null
    label: string | null
    panelTitle: string | null
    noteTitle: string | null
    noteContent: string | null
    position: number | null
    semanticKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideTabCountAggregateOutputType = {
    id: number
    guideId: number
    slug: number
    label: number
    panelTitle: number
    noteTitle: number
    noteContent: number
    position: number
    semanticKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuideTabAvgAggregateInputType = {
    position?: true
  }

  export type GuideTabSumAggregateInputType = {
    position?: true
  }

  export type GuideTabMinAggregateInputType = {
    id?: true
    guideId?: true
    slug?: true
    label?: true
    panelTitle?: true
    noteTitle?: true
    noteContent?: true
    position?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideTabMaxAggregateInputType = {
    id?: true
    guideId?: true
    slug?: true
    label?: true
    panelTitle?: true
    noteTitle?: true
    noteContent?: true
    position?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideTabCountAggregateInputType = {
    id?: true
    guideId?: true
    slug?: true
    label?: true
    panelTitle?: true
    noteTitle?: true
    noteContent?: true
    position?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuideTabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideTab to aggregate.
     */
    where?: GuideTabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTabs to fetch.
     */
    orderBy?: GuideTabOrderByWithRelationInput | GuideTabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuideTabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuideTabs
    **/
    _count?: true | GuideTabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuideTabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuideTabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuideTabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuideTabMaxAggregateInputType
  }

  export type GetGuideTabAggregateType<T extends GuideTabAggregateArgs> = {
        [P in keyof T & keyof AggregateGuideTab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuideTab[P]>
      : GetScalarType<T[P], AggregateGuideTab[P]>
  }




  export type GuideTabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideTabWhereInput
    orderBy?: GuideTabOrderByWithAggregationInput | GuideTabOrderByWithAggregationInput[]
    by: GuideTabScalarFieldEnum[] | GuideTabScalarFieldEnum
    having?: GuideTabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuideTabCountAggregateInputType | true
    _avg?: GuideTabAvgAggregateInputType
    _sum?: GuideTabSumAggregateInputType
    _min?: GuideTabMinAggregateInputType
    _max?: GuideTabMaxAggregateInputType
  }

  export type GuideTabGroupByOutputType = {
    id: string
    guideId: string
    slug: string
    label: string
    panelTitle: string | null
    noteTitle: string | null
    noteContent: string | null
    position: number
    semanticKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuideTabCountAggregateOutputType | null
    _avg: GuideTabAvgAggregateOutputType | null
    _sum: GuideTabSumAggregateOutputType | null
    _min: GuideTabMinAggregateOutputType | null
    _max: GuideTabMaxAggregateOutputType | null
  }

  type GetGuideTabGroupByPayload<T extends GuideTabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuideTabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuideTabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuideTabGroupByOutputType[P]>
            : GetScalarType<T[P], GuideTabGroupByOutputType[P]>
        }
      >
    >


  export type GuideTabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guideId?: boolean
    slug?: boolean
    label?: boolean
    panelTitle?: boolean
    noteTitle?: boolean
    noteContent?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | GuideDefaultArgs<ExtArgs>
    sections?: boolean | GuideTab$sectionsArgs<ExtArgs>
    tables?: boolean | GuideTab$tablesArgs<ExtArgs>
    classifications?: boolean | GuideTab$classificationsArgs<ExtArgs>
    _count?: boolean | GuideTabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideTab"]>

  export type GuideTabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guideId?: boolean
    slug?: boolean
    label?: boolean
    panelTitle?: boolean
    noteTitle?: boolean
    noteContent?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | GuideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideTab"]>

  export type GuideTabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guideId?: boolean
    slug?: boolean
    label?: boolean
    panelTitle?: boolean
    noteTitle?: boolean
    noteContent?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | GuideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideTab"]>

  export type GuideTabSelectScalar = {
    id?: boolean
    guideId?: boolean
    slug?: boolean
    label?: boolean
    panelTitle?: boolean
    noteTitle?: boolean
    noteContent?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuideTabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guideId" | "slug" | "label" | "panelTitle" | "noteTitle" | "noteContent" | "position" | "semanticKey" | "createdAt" | "updatedAt", ExtArgs["result"]["guideTab"]>
  export type GuideTabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | GuideDefaultArgs<ExtArgs>
    sections?: boolean | GuideTab$sectionsArgs<ExtArgs>
    tables?: boolean | GuideTab$tablesArgs<ExtArgs>
    classifications?: boolean | GuideTab$classificationsArgs<ExtArgs>
    _count?: boolean | GuideTabCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuideTabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | GuideDefaultArgs<ExtArgs>
  }
  export type GuideTabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | GuideDefaultArgs<ExtArgs>
  }

  export type $GuideTabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuideTab"
    objects: {
      guide: Prisma.$GuidePayload<ExtArgs>
      sections: Prisma.$GuideSectionPayload<ExtArgs>[]
      tables: Prisma.$GuideTablePayload<ExtArgs>[]
      classifications: Prisma.$GuideClassificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guideId: string
      slug: string
      label: string
      panelTitle: string | null
      noteTitle: string | null
      noteContent: string | null
      position: number
      /**
       * Vocabulario compartido (intro, origin, drinks, …) para cruzar vino, destilados y licores.
       */
      semanticKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guideTab"]>
    composites: {}
  }

  type GuideTabGetPayload<S extends boolean | null | undefined | GuideTabDefaultArgs> = $Result.GetResult<Prisma.$GuideTabPayload, S>

  type GuideTabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuideTabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuideTabCountAggregateInputType | true
    }

  export interface GuideTabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuideTab'], meta: { name: 'GuideTab' } }
    /**
     * Find zero or one GuideTab that matches the filter.
     * @param {GuideTabFindUniqueArgs} args - Arguments to find a GuideTab
     * @example
     * // Get one GuideTab
     * const guideTab = await prisma.guideTab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuideTabFindUniqueArgs>(args: SelectSubset<T, GuideTabFindUniqueArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuideTab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuideTabFindUniqueOrThrowArgs} args - Arguments to find a GuideTab
     * @example
     * // Get one GuideTab
     * const guideTab = await prisma.guideTab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuideTabFindUniqueOrThrowArgs>(args: SelectSubset<T, GuideTabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideTab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTabFindFirstArgs} args - Arguments to find a GuideTab
     * @example
     * // Get one GuideTab
     * const guideTab = await prisma.guideTab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuideTabFindFirstArgs>(args?: SelectSubset<T, GuideTabFindFirstArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideTab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTabFindFirstOrThrowArgs} args - Arguments to find a GuideTab
     * @example
     * // Get one GuideTab
     * const guideTab = await prisma.guideTab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuideTabFindFirstOrThrowArgs>(args?: SelectSubset<T, GuideTabFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuideTabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuideTabs
     * const guideTabs = await prisma.guideTab.findMany()
     * 
     * // Get first 10 GuideTabs
     * const guideTabs = await prisma.guideTab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guideTabWithIdOnly = await prisma.guideTab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuideTabFindManyArgs>(args?: SelectSubset<T, GuideTabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuideTab.
     * @param {GuideTabCreateArgs} args - Arguments to create a GuideTab.
     * @example
     * // Create one GuideTab
     * const GuideTab = await prisma.guideTab.create({
     *   data: {
     *     // ... data to create a GuideTab
     *   }
     * })
     * 
     */
    create<T extends GuideTabCreateArgs>(args: SelectSubset<T, GuideTabCreateArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuideTabs.
     * @param {GuideTabCreateManyArgs} args - Arguments to create many GuideTabs.
     * @example
     * // Create many GuideTabs
     * const guideTab = await prisma.guideTab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuideTabCreateManyArgs>(args?: SelectSubset<T, GuideTabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuideTabs and returns the data saved in the database.
     * @param {GuideTabCreateManyAndReturnArgs} args - Arguments to create many GuideTabs.
     * @example
     * // Create many GuideTabs
     * const guideTab = await prisma.guideTab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuideTabs and only return the `id`
     * const guideTabWithIdOnly = await prisma.guideTab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuideTabCreateManyAndReturnArgs>(args?: SelectSubset<T, GuideTabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuideTab.
     * @param {GuideTabDeleteArgs} args - Arguments to delete one GuideTab.
     * @example
     * // Delete one GuideTab
     * const GuideTab = await prisma.guideTab.delete({
     *   where: {
     *     // ... filter to delete one GuideTab
     *   }
     * })
     * 
     */
    delete<T extends GuideTabDeleteArgs>(args: SelectSubset<T, GuideTabDeleteArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuideTab.
     * @param {GuideTabUpdateArgs} args - Arguments to update one GuideTab.
     * @example
     * // Update one GuideTab
     * const guideTab = await prisma.guideTab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuideTabUpdateArgs>(args: SelectSubset<T, GuideTabUpdateArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuideTabs.
     * @param {GuideTabDeleteManyArgs} args - Arguments to filter GuideTabs to delete.
     * @example
     * // Delete a few GuideTabs
     * const { count } = await prisma.guideTab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuideTabDeleteManyArgs>(args?: SelectSubset<T, GuideTabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideTabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuideTabs
     * const guideTab = await prisma.guideTab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuideTabUpdateManyArgs>(args: SelectSubset<T, GuideTabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideTabs and returns the data updated in the database.
     * @param {GuideTabUpdateManyAndReturnArgs} args - Arguments to update many GuideTabs.
     * @example
     * // Update many GuideTabs
     * const guideTab = await prisma.guideTab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuideTabs and only return the `id`
     * const guideTabWithIdOnly = await prisma.guideTab.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuideTabUpdateManyAndReturnArgs>(args: SelectSubset<T, GuideTabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuideTab.
     * @param {GuideTabUpsertArgs} args - Arguments to update or create a GuideTab.
     * @example
     * // Update or create a GuideTab
     * const guideTab = await prisma.guideTab.upsert({
     *   create: {
     *     // ... data to create a GuideTab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuideTab we want to update
     *   }
     * })
     */
    upsert<T extends GuideTabUpsertArgs>(args: SelectSubset<T, GuideTabUpsertArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuideTabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTabCountArgs} args - Arguments to filter GuideTabs to count.
     * @example
     * // Count the number of GuideTabs
     * const count = await prisma.guideTab.count({
     *   where: {
     *     // ... the filter for the GuideTabs we want to count
     *   }
     * })
    **/
    count<T extends GuideTabCountArgs>(
      args?: Subset<T, GuideTabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuideTabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuideTab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuideTabAggregateArgs>(args: Subset<T, GuideTabAggregateArgs>): Prisma.PrismaPromise<GetGuideTabAggregateType<T>>

    /**
     * Group by GuideTab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTabGroupByArgs} args - Group by arguments.
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
      T extends GuideTabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuideTabGroupByArgs['orderBy'] }
        : { orderBy?: GuideTabGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuideTabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuideTabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuideTab model
   */
  readonly fields: GuideTabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuideTab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuideTabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guide<T extends GuideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuideDefaultArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sections<T extends GuideTab$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, GuideTab$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tables<T extends GuideTab$tablesArgs<ExtArgs> = {}>(args?: Subset<T, GuideTab$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classifications<T extends GuideTab$classificationsArgs<ExtArgs> = {}>(args?: Subset<T, GuideTab$classificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GuideTab model
   */
  interface GuideTabFieldRefs {
    readonly id: FieldRef<"GuideTab", 'String'>
    readonly guideId: FieldRef<"GuideTab", 'String'>
    readonly slug: FieldRef<"GuideTab", 'String'>
    readonly label: FieldRef<"GuideTab", 'String'>
    readonly panelTitle: FieldRef<"GuideTab", 'String'>
    readonly noteTitle: FieldRef<"GuideTab", 'String'>
    readonly noteContent: FieldRef<"GuideTab", 'String'>
    readonly position: FieldRef<"GuideTab", 'Int'>
    readonly semanticKey: FieldRef<"GuideTab", 'String'>
    readonly createdAt: FieldRef<"GuideTab", 'DateTime'>
    readonly updatedAt: FieldRef<"GuideTab", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuideTab findUnique
   */
  export type GuideTabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
    /**
     * Filter, which GuideTab to fetch.
     */
    where: GuideTabWhereUniqueInput
  }

  /**
   * GuideTab findUniqueOrThrow
   */
  export type GuideTabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
    /**
     * Filter, which GuideTab to fetch.
     */
    where: GuideTabWhereUniqueInput
  }

  /**
   * GuideTab findFirst
   */
  export type GuideTabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
    /**
     * Filter, which GuideTab to fetch.
     */
    where?: GuideTabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTabs to fetch.
     */
    orderBy?: GuideTabOrderByWithRelationInput | GuideTabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideTabs.
     */
    cursor?: GuideTabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideTabs.
     */
    distinct?: GuideTabScalarFieldEnum | GuideTabScalarFieldEnum[]
  }

  /**
   * GuideTab findFirstOrThrow
   */
  export type GuideTabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
    /**
     * Filter, which GuideTab to fetch.
     */
    where?: GuideTabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTabs to fetch.
     */
    orderBy?: GuideTabOrderByWithRelationInput | GuideTabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideTabs.
     */
    cursor?: GuideTabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideTabs.
     */
    distinct?: GuideTabScalarFieldEnum | GuideTabScalarFieldEnum[]
  }

  /**
   * GuideTab findMany
   */
  export type GuideTabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
    /**
     * Filter, which GuideTabs to fetch.
     */
    where?: GuideTabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTabs to fetch.
     */
    orderBy?: GuideTabOrderByWithRelationInput | GuideTabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuideTabs.
     */
    cursor?: GuideTabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideTabs.
     */
    distinct?: GuideTabScalarFieldEnum | GuideTabScalarFieldEnum[]
  }

  /**
   * GuideTab create
   */
  export type GuideTabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
    /**
     * The data needed to create a GuideTab.
     */
    data: XOR<GuideTabCreateInput, GuideTabUncheckedCreateInput>
  }

  /**
   * GuideTab createMany
   */
  export type GuideTabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuideTabs.
     */
    data: GuideTabCreateManyInput | GuideTabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuideTab createManyAndReturn
   */
  export type GuideTabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * The data used to create many GuideTabs.
     */
    data: GuideTabCreateManyInput | GuideTabCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideTab update
   */
  export type GuideTabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
    /**
     * The data needed to update a GuideTab.
     */
    data: XOR<GuideTabUpdateInput, GuideTabUncheckedUpdateInput>
    /**
     * Choose, which GuideTab to update.
     */
    where: GuideTabWhereUniqueInput
  }

  /**
   * GuideTab updateMany
   */
  export type GuideTabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuideTabs.
     */
    data: XOR<GuideTabUpdateManyMutationInput, GuideTabUncheckedUpdateManyInput>
    /**
     * Filter which GuideTabs to update
     */
    where?: GuideTabWhereInput
    /**
     * Limit how many GuideTabs to update.
     */
    limit?: number
  }

  /**
   * GuideTab updateManyAndReturn
   */
  export type GuideTabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * The data used to update GuideTabs.
     */
    data: XOR<GuideTabUpdateManyMutationInput, GuideTabUncheckedUpdateManyInput>
    /**
     * Filter which GuideTabs to update
     */
    where?: GuideTabWhereInput
    /**
     * Limit how many GuideTabs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideTab upsert
   */
  export type GuideTabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
    /**
     * The filter to search for the GuideTab to update in case it exists.
     */
    where: GuideTabWhereUniqueInput
    /**
     * In case the GuideTab found by the `where` argument doesn't exist, create a new GuideTab with this data.
     */
    create: XOR<GuideTabCreateInput, GuideTabUncheckedCreateInput>
    /**
     * In case the GuideTab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuideTabUpdateInput, GuideTabUncheckedUpdateInput>
  }

  /**
   * GuideTab delete
   */
  export type GuideTabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
    /**
     * Filter which GuideTab to delete.
     */
    where: GuideTabWhereUniqueInput
  }

  /**
   * GuideTab deleteMany
   */
  export type GuideTabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideTabs to delete
     */
    where?: GuideTabWhereInput
    /**
     * Limit how many GuideTabs to delete.
     */
    limit?: number
  }

  /**
   * GuideTab.sections
   */
  export type GuideTab$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
    where?: GuideSectionWhereInput
    orderBy?: GuideSectionOrderByWithRelationInput | GuideSectionOrderByWithRelationInput[]
    cursor?: GuideSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuideSectionScalarFieldEnum | GuideSectionScalarFieldEnum[]
  }

  /**
   * GuideTab.tables
   */
  export type GuideTab$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
    where?: GuideTableWhereInput
    orderBy?: GuideTableOrderByWithRelationInput | GuideTableOrderByWithRelationInput[]
    cursor?: GuideTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuideTableScalarFieldEnum | GuideTableScalarFieldEnum[]
  }

  /**
   * GuideTab.classifications
   */
  export type GuideTab$classificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
    where?: GuideClassificationWhereInput
    orderBy?: GuideClassificationOrderByWithRelationInput | GuideClassificationOrderByWithRelationInput[]
    cursor?: GuideClassificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuideClassificationScalarFieldEnum | GuideClassificationScalarFieldEnum[]
  }

  /**
   * GuideTab without action
   */
  export type GuideTabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTab
     */
    select?: GuideTabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTab
     */
    omit?: GuideTabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTabInclude<ExtArgs> | null
  }


  /**
   * Model GuideClassification
   */

  export type AggregateGuideClassification = {
    _count: GuideClassificationCountAggregateOutputType | null
    _avg: GuideClassificationAvgAggregateOutputType | null
    _sum: GuideClassificationSumAggregateOutputType | null
    _min: GuideClassificationMinAggregateOutputType | null
    _max: GuideClassificationMaxAggregateOutputType | null
  }

  export type GuideClassificationAvgAggregateOutputType = {
    position: number | null
  }

  export type GuideClassificationSumAggregateOutputType = {
    position: number | null
  }

  export type GuideClassificationMinAggregateOutputType = {
    id: string | null
    tabId: string | null
    slug: string | null
    subtitle: string | null
    body: string | null
    imageUrl: string | null
    imageAlt: string | null
    position: number | null
    semanticKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideClassificationMaxAggregateOutputType = {
    id: string | null
    tabId: string | null
    slug: string | null
    subtitle: string | null
    body: string | null
    imageUrl: string | null
    imageAlt: string | null
    position: number | null
    semanticKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideClassificationCountAggregateOutputType = {
    id: number
    tabId: number
    slug: number
    subtitle: number
    body: number
    imageUrl: number
    imageAlt: number
    position: number
    semanticKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuideClassificationAvgAggregateInputType = {
    position?: true
  }

  export type GuideClassificationSumAggregateInputType = {
    position?: true
  }

  export type GuideClassificationMinAggregateInputType = {
    id?: true
    tabId?: true
    slug?: true
    subtitle?: true
    body?: true
    imageUrl?: true
    imageAlt?: true
    position?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideClassificationMaxAggregateInputType = {
    id?: true
    tabId?: true
    slug?: true
    subtitle?: true
    body?: true
    imageUrl?: true
    imageAlt?: true
    position?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideClassificationCountAggregateInputType = {
    id?: true
    tabId?: true
    slug?: true
    subtitle?: true
    body?: true
    imageUrl?: true
    imageAlt?: true
    position?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuideClassificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideClassification to aggregate.
     */
    where?: GuideClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideClassifications to fetch.
     */
    orderBy?: GuideClassificationOrderByWithRelationInput | GuideClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuideClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuideClassifications
    **/
    _count?: true | GuideClassificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuideClassificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuideClassificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuideClassificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuideClassificationMaxAggregateInputType
  }

  export type GetGuideClassificationAggregateType<T extends GuideClassificationAggregateArgs> = {
        [P in keyof T & keyof AggregateGuideClassification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuideClassification[P]>
      : GetScalarType<T[P], AggregateGuideClassification[P]>
  }




  export type GuideClassificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideClassificationWhereInput
    orderBy?: GuideClassificationOrderByWithAggregationInput | GuideClassificationOrderByWithAggregationInput[]
    by: GuideClassificationScalarFieldEnum[] | GuideClassificationScalarFieldEnum
    having?: GuideClassificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuideClassificationCountAggregateInputType | true
    _avg?: GuideClassificationAvgAggregateInputType
    _sum?: GuideClassificationSumAggregateInputType
    _min?: GuideClassificationMinAggregateInputType
    _max?: GuideClassificationMaxAggregateInputType
  }

  export type GuideClassificationGroupByOutputType = {
    id: string
    tabId: string
    slug: string
    subtitle: string
    body: string
    imageUrl: string
    imageAlt: string
    position: number
    semanticKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuideClassificationCountAggregateOutputType | null
    _avg: GuideClassificationAvgAggregateOutputType | null
    _sum: GuideClassificationSumAggregateOutputType | null
    _min: GuideClassificationMinAggregateOutputType | null
    _max: GuideClassificationMaxAggregateOutputType | null
  }

  type GetGuideClassificationGroupByPayload<T extends GuideClassificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuideClassificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuideClassificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuideClassificationGroupByOutputType[P]>
            : GetScalarType<T[P], GuideClassificationGroupByOutputType[P]>
        }
      >
    >


  export type GuideClassificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    slug?: boolean
    subtitle?: boolean
    body?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideClassification"]>

  export type GuideClassificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    slug?: boolean
    subtitle?: boolean
    body?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideClassification"]>

  export type GuideClassificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    slug?: boolean
    subtitle?: boolean
    body?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideClassification"]>

  export type GuideClassificationSelectScalar = {
    id?: boolean
    tabId?: boolean
    slug?: boolean
    subtitle?: boolean
    body?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuideClassificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tabId" | "slug" | "subtitle" | "body" | "imageUrl" | "imageAlt" | "position" | "semanticKey" | "createdAt" | "updatedAt", ExtArgs["result"]["guideClassification"]>
  export type GuideClassificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }
  export type GuideClassificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }
  export type GuideClassificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }

  export type $GuideClassificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuideClassification"
    objects: {
      tab: Prisma.$GuideTabPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tabId: string
      slug: string
      subtitle: string
      body: string
      imageUrl: string
      imageAlt: string
      position: number
      semanticKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guideClassification"]>
    composites: {}
  }

  type GuideClassificationGetPayload<S extends boolean | null | undefined | GuideClassificationDefaultArgs> = $Result.GetResult<Prisma.$GuideClassificationPayload, S>

  type GuideClassificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuideClassificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuideClassificationCountAggregateInputType | true
    }

  export interface GuideClassificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuideClassification'], meta: { name: 'GuideClassification' } }
    /**
     * Find zero or one GuideClassification that matches the filter.
     * @param {GuideClassificationFindUniqueArgs} args - Arguments to find a GuideClassification
     * @example
     * // Get one GuideClassification
     * const guideClassification = await prisma.guideClassification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuideClassificationFindUniqueArgs>(args: SelectSubset<T, GuideClassificationFindUniqueArgs<ExtArgs>>): Prisma__GuideClassificationClient<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuideClassification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuideClassificationFindUniqueOrThrowArgs} args - Arguments to find a GuideClassification
     * @example
     * // Get one GuideClassification
     * const guideClassification = await prisma.guideClassification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuideClassificationFindUniqueOrThrowArgs>(args: SelectSubset<T, GuideClassificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuideClassificationClient<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideClassification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideClassificationFindFirstArgs} args - Arguments to find a GuideClassification
     * @example
     * // Get one GuideClassification
     * const guideClassification = await prisma.guideClassification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuideClassificationFindFirstArgs>(args?: SelectSubset<T, GuideClassificationFindFirstArgs<ExtArgs>>): Prisma__GuideClassificationClient<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideClassification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideClassificationFindFirstOrThrowArgs} args - Arguments to find a GuideClassification
     * @example
     * // Get one GuideClassification
     * const guideClassification = await prisma.guideClassification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuideClassificationFindFirstOrThrowArgs>(args?: SelectSubset<T, GuideClassificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuideClassificationClient<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuideClassifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideClassificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuideClassifications
     * const guideClassifications = await prisma.guideClassification.findMany()
     * 
     * // Get first 10 GuideClassifications
     * const guideClassifications = await prisma.guideClassification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guideClassificationWithIdOnly = await prisma.guideClassification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuideClassificationFindManyArgs>(args?: SelectSubset<T, GuideClassificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuideClassification.
     * @param {GuideClassificationCreateArgs} args - Arguments to create a GuideClassification.
     * @example
     * // Create one GuideClassification
     * const GuideClassification = await prisma.guideClassification.create({
     *   data: {
     *     // ... data to create a GuideClassification
     *   }
     * })
     * 
     */
    create<T extends GuideClassificationCreateArgs>(args: SelectSubset<T, GuideClassificationCreateArgs<ExtArgs>>): Prisma__GuideClassificationClient<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuideClassifications.
     * @param {GuideClassificationCreateManyArgs} args - Arguments to create many GuideClassifications.
     * @example
     * // Create many GuideClassifications
     * const guideClassification = await prisma.guideClassification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuideClassificationCreateManyArgs>(args?: SelectSubset<T, GuideClassificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuideClassifications and returns the data saved in the database.
     * @param {GuideClassificationCreateManyAndReturnArgs} args - Arguments to create many GuideClassifications.
     * @example
     * // Create many GuideClassifications
     * const guideClassification = await prisma.guideClassification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuideClassifications and only return the `id`
     * const guideClassificationWithIdOnly = await prisma.guideClassification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuideClassificationCreateManyAndReturnArgs>(args?: SelectSubset<T, GuideClassificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuideClassification.
     * @param {GuideClassificationDeleteArgs} args - Arguments to delete one GuideClassification.
     * @example
     * // Delete one GuideClassification
     * const GuideClassification = await prisma.guideClassification.delete({
     *   where: {
     *     // ... filter to delete one GuideClassification
     *   }
     * })
     * 
     */
    delete<T extends GuideClassificationDeleteArgs>(args: SelectSubset<T, GuideClassificationDeleteArgs<ExtArgs>>): Prisma__GuideClassificationClient<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuideClassification.
     * @param {GuideClassificationUpdateArgs} args - Arguments to update one GuideClassification.
     * @example
     * // Update one GuideClassification
     * const guideClassification = await prisma.guideClassification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuideClassificationUpdateArgs>(args: SelectSubset<T, GuideClassificationUpdateArgs<ExtArgs>>): Prisma__GuideClassificationClient<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuideClassifications.
     * @param {GuideClassificationDeleteManyArgs} args - Arguments to filter GuideClassifications to delete.
     * @example
     * // Delete a few GuideClassifications
     * const { count } = await prisma.guideClassification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuideClassificationDeleteManyArgs>(args?: SelectSubset<T, GuideClassificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideClassifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideClassificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuideClassifications
     * const guideClassification = await prisma.guideClassification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuideClassificationUpdateManyArgs>(args: SelectSubset<T, GuideClassificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideClassifications and returns the data updated in the database.
     * @param {GuideClassificationUpdateManyAndReturnArgs} args - Arguments to update many GuideClassifications.
     * @example
     * // Update many GuideClassifications
     * const guideClassification = await prisma.guideClassification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuideClassifications and only return the `id`
     * const guideClassificationWithIdOnly = await prisma.guideClassification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuideClassificationUpdateManyAndReturnArgs>(args: SelectSubset<T, GuideClassificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuideClassification.
     * @param {GuideClassificationUpsertArgs} args - Arguments to update or create a GuideClassification.
     * @example
     * // Update or create a GuideClassification
     * const guideClassification = await prisma.guideClassification.upsert({
     *   create: {
     *     // ... data to create a GuideClassification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuideClassification we want to update
     *   }
     * })
     */
    upsert<T extends GuideClassificationUpsertArgs>(args: SelectSubset<T, GuideClassificationUpsertArgs<ExtArgs>>): Prisma__GuideClassificationClient<$Result.GetResult<Prisma.$GuideClassificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuideClassifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideClassificationCountArgs} args - Arguments to filter GuideClassifications to count.
     * @example
     * // Count the number of GuideClassifications
     * const count = await prisma.guideClassification.count({
     *   where: {
     *     // ... the filter for the GuideClassifications we want to count
     *   }
     * })
    **/
    count<T extends GuideClassificationCountArgs>(
      args?: Subset<T, GuideClassificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuideClassificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuideClassification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideClassificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuideClassificationAggregateArgs>(args: Subset<T, GuideClassificationAggregateArgs>): Prisma.PrismaPromise<GetGuideClassificationAggregateType<T>>

    /**
     * Group by GuideClassification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideClassificationGroupByArgs} args - Group by arguments.
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
      T extends GuideClassificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuideClassificationGroupByArgs['orderBy'] }
        : { orderBy?: GuideClassificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuideClassificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuideClassificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuideClassification model
   */
  readonly fields: GuideClassificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuideClassification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuideClassificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tab<T extends GuideTabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuideTabDefaultArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GuideClassification model
   */
  interface GuideClassificationFieldRefs {
    readonly id: FieldRef<"GuideClassification", 'String'>
    readonly tabId: FieldRef<"GuideClassification", 'String'>
    readonly slug: FieldRef<"GuideClassification", 'String'>
    readonly subtitle: FieldRef<"GuideClassification", 'String'>
    readonly body: FieldRef<"GuideClassification", 'String'>
    readonly imageUrl: FieldRef<"GuideClassification", 'String'>
    readonly imageAlt: FieldRef<"GuideClassification", 'String'>
    readonly position: FieldRef<"GuideClassification", 'Int'>
    readonly semanticKey: FieldRef<"GuideClassification", 'String'>
    readonly createdAt: FieldRef<"GuideClassification", 'DateTime'>
    readonly updatedAt: FieldRef<"GuideClassification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuideClassification findUnique
   */
  export type GuideClassificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
    /**
     * Filter, which GuideClassification to fetch.
     */
    where: GuideClassificationWhereUniqueInput
  }

  /**
   * GuideClassification findUniqueOrThrow
   */
  export type GuideClassificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
    /**
     * Filter, which GuideClassification to fetch.
     */
    where: GuideClassificationWhereUniqueInput
  }

  /**
   * GuideClassification findFirst
   */
  export type GuideClassificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
    /**
     * Filter, which GuideClassification to fetch.
     */
    where?: GuideClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideClassifications to fetch.
     */
    orderBy?: GuideClassificationOrderByWithRelationInput | GuideClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideClassifications.
     */
    cursor?: GuideClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideClassifications.
     */
    distinct?: GuideClassificationScalarFieldEnum | GuideClassificationScalarFieldEnum[]
  }

  /**
   * GuideClassification findFirstOrThrow
   */
  export type GuideClassificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
    /**
     * Filter, which GuideClassification to fetch.
     */
    where?: GuideClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideClassifications to fetch.
     */
    orderBy?: GuideClassificationOrderByWithRelationInput | GuideClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideClassifications.
     */
    cursor?: GuideClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideClassifications.
     */
    distinct?: GuideClassificationScalarFieldEnum | GuideClassificationScalarFieldEnum[]
  }

  /**
   * GuideClassification findMany
   */
  export type GuideClassificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
    /**
     * Filter, which GuideClassifications to fetch.
     */
    where?: GuideClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideClassifications to fetch.
     */
    orderBy?: GuideClassificationOrderByWithRelationInput | GuideClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuideClassifications.
     */
    cursor?: GuideClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideClassifications.
     */
    distinct?: GuideClassificationScalarFieldEnum | GuideClassificationScalarFieldEnum[]
  }

  /**
   * GuideClassification create
   */
  export type GuideClassificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
    /**
     * The data needed to create a GuideClassification.
     */
    data: XOR<GuideClassificationCreateInput, GuideClassificationUncheckedCreateInput>
  }

  /**
   * GuideClassification createMany
   */
  export type GuideClassificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuideClassifications.
     */
    data: GuideClassificationCreateManyInput | GuideClassificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuideClassification createManyAndReturn
   */
  export type GuideClassificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * The data used to create many GuideClassifications.
     */
    data: GuideClassificationCreateManyInput | GuideClassificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideClassification update
   */
  export type GuideClassificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
    /**
     * The data needed to update a GuideClassification.
     */
    data: XOR<GuideClassificationUpdateInput, GuideClassificationUncheckedUpdateInput>
    /**
     * Choose, which GuideClassification to update.
     */
    where: GuideClassificationWhereUniqueInput
  }

  /**
   * GuideClassification updateMany
   */
  export type GuideClassificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuideClassifications.
     */
    data: XOR<GuideClassificationUpdateManyMutationInput, GuideClassificationUncheckedUpdateManyInput>
    /**
     * Filter which GuideClassifications to update
     */
    where?: GuideClassificationWhereInput
    /**
     * Limit how many GuideClassifications to update.
     */
    limit?: number
  }

  /**
   * GuideClassification updateManyAndReturn
   */
  export type GuideClassificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * The data used to update GuideClassifications.
     */
    data: XOR<GuideClassificationUpdateManyMutationInput, GuideClassificationUncheckedUpdateManyInput>
    /**
     * Filter which GuideClassifications to update
     */
    where?: GuideClassificationWhereInput
    /**
     * Limit how many GuideClassifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideClassification upsert
   */
  export type GuideClassificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
    /**
     * The filter to search for the GuideClassification to update in case it exists.
     */
    where: GuideClassificationWhereUniqueInput
    /**
     * In case the GuideClassification found by the `where` argument doesn't exist, create a new GuideClassification with this data.
     */
    create: XOR<GuideClassificationCreateInput, GuideClassificationUncheckedCreateInput>
    /**
     * In case the GuideClassification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuideClassificationUpdateInput, GuideClassificationUncheckedUpdateInput>
  }

  /**
   * GuideClassification delete
   */
  export type GuideClassificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
    /**
     * Filter which GuideClassification to delete.
     */
    where: GuideClassificationWhereUniqueInput
  }

  /**
   * GuideClassification deleteMany
   */
  export type GuideClassificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideClassifications to delete
     */
    where?: GuideClassificationWhereInput
    /**
     * Limit how many GuideClassifications to delete.
     */
    limit?: number
  }

  /**
   * GuideClassification without action
   */
  export type GuideClassificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideClassification
     */
    select?: GuideClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideClassification
     */
    omit?: GuideClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideClassificationInclude<ExtArgs> | null
  }


  /**
   * Model GuideSection
   */

  export type AggregateGuideSection = {
    _count: GuideSectionCountAggregateOutputType | null
    _avg: GuideSectionAvgAggregateOutputType | null
    _sum: GuideSectionSumAggregateOutputType | null
    _min: GuideSectionMinAggregateOutputType | null
    _max: GuideSectionMaxAggregateOutputType | null
  }

  export type GuideSectionAvgAggregateOutputType = {
    position: number | null
  }

  export type GuideSectionSumAggregateOutputType = {
    position: number | null
  }

  export type GuideSectionMinAggregateOutputType = {
    id: string | null
    tabId: string | null
    slug: string | null
    title: string | null
    subtitle: string | null
    imageUrl: string | null
    imageAlt: string | null
    position: number | null
    semanticKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideSectionMaxAggregateOutputType = {
    id: string | null
    tabId: string | null
    slug: string | null
    title: string | null
    subtitle: string | null
    imageUrl: string | null
    imageAlt: string | null
    position: number | null
    semanticKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideSectionCountAggregateOutputType = {
    id: number
    tabId: number
    slug: number
    title: number
    subtitle: number
    imageUrl: number
    imageAlt: number
    position: number
    semanticKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuideSectionAvgAggregateInputType = {
    position?: true
  }

  export type GuideSectionSumAggregateInputType = {
    position?: true
  }

  export type GuideSectionMinAggregateInputType = {
    id?: true
    tabId?: true
    slug?: true
    title?: true
    subtitle?: true
    imageUrl?: true
    imageAlt?: true
    position?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideSectionMaxAggregateInputType = {
    id?: true
    tabId?: true
    slug?: true
    title?: true
    subtitle?: true
    imageUrl?: true
    imageAlt?: true
    position?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideSectionCountAggregateInputType = {
    id?: true
    tabId?: true
    slug?: true
    title?: true
    subtitle?: true
    imageUrl?: true
    imageAlt?: true
    position?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuideSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideSection to aggregate.
     */
    where?: GuideSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideSections to fetch.
     */
    orderBy?: GuideSectionOrderByWithRelationInput | GuideSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuideSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuideSections
    **/
    _count?: true | GuideSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuideSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuideSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuideSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuideSectionMaxAggregateInputType
  }

  export type GetGuideSectionAggregateType<T extends GuideSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateGuideSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuideSection[P]>
      : GetScalarType<T[P], AggregateGuideSection[P]>
  }




  export type GuideSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideSectionWhereInput
    orderBy?: GuideSectionOrderByWithAggregationInput | GuideSectionOrderByWithAggregationInput[]
    by: GuideSectionScalarFieldEnum[] | GuideSectionScalarFieldEnum
    having?: GuideSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuideSectionCountAggregateInputType | true
    _avg?: GuideSectionAvgAggregateInputType
    _sum?: GuideSectionSumAggregateInputType
    _min?: GuideSectionMinAggregateInputType
    _max?: GuideSectionMaxAggregateInputType
  }

  export type GuideSectionGroupByOutputType = {
    id: string
    tabId: string
    slug: string
    title: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    position: number
    semanticKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuideSectionCountAggregateOutputType | null
    _avg: GuideSectionAvgAggregateOutputType | null
    _sum: GuideSectionSumAggregateOutputType | null
    _min: GuideSectionMinAggregateOutputType | null
    _max: GuideSectionMaxAggregateOutputType | null
  }

  type GetGuideSectionGroupByPayload<T extends GuideSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuideSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuideSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuideSectionGroupByOutputType[P]>
            : GetScalarType<T[P], GuideSectionGroupByOutputType[P]>
        }
      >
    >


  export type GuideSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    slug?: boolean
    title?: boolean
    subtitle?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
    paragraphs?: boolean | GuideSection$paragraphsArgs<ExtArgs>
    _count?: boolean | GuideSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideSection"]>

  export type GuideSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    slug?: boolean
    title?: boolean
    subtitle?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideSection"]>

  export type GuideSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    slug?: boolean
    title?: boolean
    subtitle?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideSection"]>

  export type GuideSectionSelectScalar = {
    id?: boolean
    tabId?: boolean
    slug?: boolean
    title?: boolean
    subtitle?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuideSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tabId" | "slug" | "title" | "subtitle" | "imageUrl" | "imageAlt" | "position" | "semanticKey" | "createdAt" | "updatedAt", ExtArgs["result"]["guideSection"]>
  export type GuideSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
    paragraphs?: boolean | GuideSection$paragraphsArgs<ExtArgs>
    _count?: boolean | GuideSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuideSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }
  export type GuideSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }

  export type $GuideSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuideSection"
    objects: {
      tab: Prisma.$GuideTabPayload<ExtArgs>
      paragraphs: Prisma.$GuideParagraphPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tabId: string
      slug: string
      title: string
      subtitle: string
      imageUrl: string
      imageAlt: string
      position: number
      semanticKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guideSection"]>
    composites: {}
  }

  type GuideSectionGetPayload<S extends boolean | null | undefined | GuideSectionDefaultArgs> = $Result.GetResult<Prisma.$GuideSectionPayload, S>

  type GuideSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuideSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuideSectionCountAggregateInputType | true
    }

  export interface GuideSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuideSection'], meta: { name: 'GuideSection' } }
    /**
     * Find zero or one GuideSection that matches the filter.
     * @param {GuideSectionFindUniqueArgs} args - Arguments to find a GuideSection
     * @example
     * // Get one GuideSection
     * const guideSection = await prisma.guideSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuideSectionFindUniqueArgs>(args: SelectSubset<T, GuideSectionFindUniqueArgs<ExtArgs>>): Prisma__GuideSectionClient<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuideSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuideSectionFindUniqueOrThrowArgs} args - Arguments to find a GuideSection
     * @example
     * // Get one GuideSection
     * const guideSection = await prisma.guideSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuideSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, GuideSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuideSectionClient<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideSectionFindFirstArgs} args - Arguments to find a GuideSection
     * @example
     * // Get one GuideSection
     * const guideSection = await prisma.guideSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuideSectionFindFirstArgs>(args?: SelectSubset<T, GuideSectionFindFirstArgs<ExtArgs>>): Prisma__GuideSectionClient<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideSectionFindFirstOrThrowArgs} args - Arguments to find a GuideSection
     * @example
     * // Get one GuideSection
     * const guideSection = await prisma.guideSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuideSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, GuideSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuideSectionClient<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuideSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuideSections
     * const guideSections = await prisma.guideSection.findMany()
     * 
     * // Get first 10 GuideSections
     * const guideSections = await prisma.guideSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guideSectionWithIdOnly = await prisma.guideSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuideSectionFindManyArgs>(args?: SelectSubset<T, GuideSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuideSection.
     * @param {GuideSectionCreateArgs} args - Arguments to create a GuideSection.
     * @example
     * // Create one GuideSection
     * const GuideSection = await prisma.guideSection.create({
     *   data: {
     *     // ... data to create a GuideSection
     *   }
     * })
     * 
     */
    create<T extends GuideSectionCreateArgs>(args: SelectSubset<T, GuideSectionCreateArgs<ExtArgs>>): Prisma__GuideSectionClient<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuideSections.
     * @param {GuideSectionCreateManyArgs} args - Arguments to create many GuideSections.
     * @example
     * // Create many GuideSections
     * const guideSection = await prisma.guideSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuideSectionCreateManyArgs>(args?: SelectSubset<T, GuideSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuideSections and returns the data saved in the database.
     * @param {GuideSectionCreateManyAndReturnArgs} args - Arguments to create many GuideSections.
     * @example
     * // Create many GuideSections
     * const guideSection = await prisma.guideSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuideSections and only return the `id`
     * const guideSectionWithIdOnly = await prisma.guideSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuideSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, GuideSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuideSection.
     * @param {GuideSectionDeleteArgs} args - Arguments to delete one GuideSection.
     * @example
     * // Delete one GuideSection
     * const GuideSection = await prisma.guideSection.delete({
     *   where: {
     *     // ... filter to delete one GuideSection
     *   }
     * })
     * 
     */
    delete<T extends GuideSectionDeleteArgs>(args: SelectSubset<T, GuideSectionDeleteArgs<ExtArgs>>): Prisma__GuideSectionClient<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuideSection.
     * @param {GuideSectionUpdateArgs} args - Arguments to update one GuideSection.
     * @example
     * // Update one GuideSection
     * const guideSection = await prisma.guideSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuideSectionUpdateArgs>(args: SelectSubset<T, GuideSectionUpdateArgs<ExtArgs>>): Prisma__GuideSectionClient<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuideSections.
     * @param {GuideSectionDeleteManyArgs} args - Arguments to filter GuideSections to delete.
     * @example
     * // Delete a few GuideSections
     * const { count } = await prisma.guideSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuideSectionDeleteManyArgs>(args?: SelectSubset<T, GuideSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuideSections
     * const guideSection = await prisma.guideSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuideSectionUpdateManyArgs>(args: SelectSubset<T, GuideSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideSections and returns the data updated in the database.
     * @param {GuideSectionUpdateManyAndReturnArgs} args - Arguments to update many GuideSections.
     * @example
     * // Update many GuideSections
     * const guideSection = await prisma.guideSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuideSections and only return the `id`
     * const guideSectionWithIdOnly = await prisma.guideSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuideSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, GuideSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuideSection.
     * @param {GuideSectionUpsertArgs} args - Arguments to update or create a GuideSection.
     * @example
     * // Update or create a GuideSection
     * const guideSection = await prisma.guideSection.upsert({
     *   create: {
     *     // ... data to create a GuideSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuideSection we want to update
     *   }
     * })
     */
    upsert<T extends GuideSectionUpsertArgs>(args: SelectSubset<T, GuideSectionUpsertArgs<ExtArgs>>): Prisma__GuideSectionClient<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuideSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideSectionCountArgs} args - Arguments to filter GuideSections to count.
     * @example
     * // Count the number of GuideSections
     * const count = await prisma.guideSection.count({
     *   where: {
     *     // ... the filter for the GuideSections we want to count
     *   }
     * })
    **/
    count<T extends GuideSectionCountArgs>(
      args?: Subset<T, GuideSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuideSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuideSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuideSectionAggregateArgs>(args: Subset<T, GuideSectionAggregateArgs>): Prisma.PrismaPromise<GetGuideSectionAggregateType<T>>

    /**
     * Group by GuideSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideSectionGroupByArgs} args - Group by arguments.
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
      T extends GuideSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuideSectionGroupByArgs['orderBy'] }
        : { orderBy?: GuideSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuideSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuideSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuideSection model
   */
  readonly fields: GuideSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuideSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuideSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tab<T extends GuideTabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuideTabDefaultArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paragraphs<T extends GuideSection$paragraphsArgs<ExtArgs> = {}>(args?: Subset<T, GuideSection$paragraphsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GuideSection model
   */
  interface GuideSectionFieldRefs {
    readonly id: FieldRef<"GuideSection", 'String'>
    readonly tabId: FieldRef<"GuideSection", 'String'>
    readonly slug: FieldRef<"GuideSection", 'String'>
    readonly title: FieldRef<"GuideSection", 'String'>
    readonly subtitle: FieldRef<"GuideSection", 'String'>
    readonly imageUrl: FieldRef<"GuideSection", 'String'>
    readonly imageAlt: FieldRef<"GuideSection", 'String'>
    readonly position: FieldRef<"GuideSection", 'Int'>
    readonly semanticKey: FieldRef<"GuideSection", 'String'>
    readonly createdAt: FieldRef<"GuideSection", 'DateTime'>
    readonly updatedAt: FieldRef<"GuideSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuideSection findUnique
   */
  export type GuideSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
    /**
     * Filter, which GuideSection to fetch.
     */
    where: GuideSectionWhereUniqueInput
  }

  /**
   * GuideSection findUniqueOrThrow
   */
  export type GuideSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
    /**
     * Filter, which GuideSection to fetch.
     */
    where: GuideSectionWhereUniqueInput
  }

  /**
   * GuideSection findFirst
   */
  export type GuideSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
    /**
     * Filter, which GuideSection to fetch.
     */
    where?: GuideSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideSections to fetch.
     */
    orderBy?: GuideSectionOrderByWithRelationInput | GuideSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideSections.
     */
    cursor?: GuideSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideSections.
     */
    distinct?: GuideSectionScalarFieldEnum | GuideSectionScalarFieldEnum[]
  }

  /**
   * GuideSection findFirstOrThrow
   */
  export type GuideSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
    /**
     * Filter, which GuideSection to fetch.
     */
    where?: GuideSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideSections to fetch.
     */
    orderBy?: GuideSectionOrderByWithRelationInput | GuideSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideSections.
     */
    cursor?: GuideSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideSections.
     */
    distinct?: GuideSectionScalarFieldEnum | GuideSectionScalarFieldEnum[]
  }

  /**
   * GuideSection findMany
   */
  export type GuideSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
    /**
     * Filter, which GuideSections to fetch.
     */
    where?: GuideSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideSections to fetch.
     */
    orderBy?: GuideSectionOrderByWithRelationInput | GuideSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuideSections.
     */
    cursor?: GuideSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideSections.
     */
    distinct?: GuideSectionScalarFieldEnum | GuideSectionScalarFieldEnum[]
  }

  /**
   * GuideSection create
   */
  export type GuideSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a GuideSection.
     */
    data: XOR<GuideSectionCreateInput, GuideSectionUncheckedCreateInput>
  }

  /**
   * GuideSection createMany
   */
  export type GuideSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuideSections.
     */
    data: GuideSectionCreateManyInput | GuideSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuideSection createManyAndReturn
   */
  export type GuideSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * The data used to create many GuideSections.
     */
    data: GuideSectionCreateManyInput | GuideSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideSection update
   */
  export type GuideSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a GuideSection.
     */
    data: XOR<GuideSectionUpdateInput, GuideSectionUncheckedUpdateInput>
    /**
     * Choose, which GuideSection to update.
     */
    where: GuideSectionWhereUniqueInput
  }

  /**
   * GuideSection updateMany
   */
  export type GuideSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuideSections.
     */
    data: XOR<GuideSectionUpdateManyMutationInput, GuideSectionUncheckedUpdateManyInput>
    /**
     * Filter which GuideSections to update
     */
    where?: GuideSectionWhereInput
    /**
     * Limit how many GuideSections to update.
     */
    limit?: number
  }

  /**
   * GuideSection updateManyAndReturn
   */
  export type GuideSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * The data used to update GuideSections.
     */
    data: XOR<GuideSectionUpdateManyMutationInput, GuideSectionUncheckedUpdateManyInput>
    /**
     * Filter which GuideSections to update
     */
    where?: GuideSectionWhereInput
    /**
     * Limit how many GuideSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideSection upsert
   */
  export type GuideSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the GuideSection to update in case it exists.
     */
    where: GuideSectionWhereUniqueInput
    /**
     * In case the GuideSection found by the `where` argument doesn't exist, create a new GuideSection with this data.
     */
    create: XOR<GuideSectionCreateInput, GuideSectionUncheckedCreateInput>
    /**
     * In case the GuideSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuideSectionUpdateInput, GuideSectionUncheckedUpdateInput>
  }

  /**
   * GuideSection delete
   */
  export type GuideSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
    /**
     * Filter which GuideSection to delete.
     */
    where: GuideSectionWhereUniqueInput
  }

  /**
   * GuideSection deleteMany
   */
  export type GuideSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideSections to delete
     */
    where?: GuideSectionWhereInput
    /**
     * Limit how many GuideSections to delete.
     */
    limit?: number
  }

  /**
   * GuideSection.paragraphs
   */
  export type GuideSection$paragraphsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
    where?: GuideParagraphWhereInput
    orderBy?: GuideParagraphOrderByWithRelationInput | GuideParagraphOrderByWithRelationInput[]
    cursor?: GuideParagraphWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuideParagraphScalarFieldEnum | GuideParagraphScalarFieldEnum[]
  }

  /**
   * GuideSection without action
   */
  export type GuideSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideSection
     */
    select?: GuideSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideSection
     */
    omit?: GuideSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideSectionInclude<ExtArgs> | null
  }


  /**
   * Model GuideParagraph
   */

  export type AggregateGuideParagraph = {
    _count: GuideParagraphCountAggregateOutputType | null
    _avg: GuideParagraphAvgAggregateOutputType | null
    _sum: GuideParagraphSumAggregateOutputType | null
    _min: GuideParagraphMinAggregateOutputType | null
    _max: GuideParagraphMaxAggregateOutputType | null
  }

  export type GuideParagraphAvgAggregateOutputType = {
    position: number | null
  }

  export type GuideParagraphSumAggregateOutputType = {
    position: number | null
  }

  export type GuideParagraphMinAggregateOutputType = {
    id: string | null
    sectionId: string | null
    content: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideParagraphMaxAggregateOutputType = {
    id: string | null
    sectionId: string | null
    content: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideParagraphCountAggregateOutputType = {
    id: number
    sectionId: number
    content: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuideParagraphAvgAggregateInputType = {
    position?: true
  }

  export type GuideParagraphSumAggregateInputType = {
    position?: true
  }

  export type GuideParagraphMinAggregateInputType = {
    id?: true
    sectionId?: true
    content?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideParagraphMaxAggregateInputType = {
    id?: true
    sectionId?: true
    content?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideParagraphCountAggregateInputType = {
    id?: true
    sectionId?: true
    content?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuideParagraphAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideParagraph to aggregate.
     */
    where?: GuideParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideParagraphs to fetch.
     */
    orderBy?: GuideParagraphOrderByWithRelationInput | GuideParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuideParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideParagraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideParagraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuideParagraphs
    **/
    _count?: true | GuideParagraphCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuideParagraphAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuideParagraphSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuideParagraphMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuideParagraphMaxAggregateInputType
  }

  export type GetGuideParagraphAggregateType<T extends GuideParagraphAggregateArgs> = {
        [P in keyof T & keyof AggregateGuideParagraph]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuideParagraph[P]>
      : GetScalarType<T[P], AggregateGuideParagraph[P]>
  }




  export type GuideParagraphGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideParagraphWhereInput
    orderBy?: GuideParagraphOrderByWithAggregationInput | GuideParagraphOrderByWithAggregationInput[]
    by: GuideParagraphScalarFieldEnum[] | GuideParagraphScalarFieldEnum
    having?: GuideParagraphScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuideParagraphCountAggregateInputType | true
    _avg?: GuideParagraphAvgAggregateInputType
    _sum?: GuideParagraphSumAggregateInputType
    _min?: GuideParagraphMinAggregateInputType
    _max?: GuideParagraphMaxAggregateInputType
  }

  export type GuideParagraphGroupByOutputType = {
    id: string
    sectionId: string
    content: string
    position: number
    createdAt: Date
    updatedAt: Date
    _count: GuideParagraphCountAggregateOutputType | null
    _avg: GuideParagraphAvgAggregateOutputType | null
    _sum: GuideParagraphSumAggregateOutputType | null
    _min: GuideParagraphMinAggregateOutputType | null
    _max: GuideParagraphMaxAggregateOutputType | null
  }

  type GetGuideParagraphGroupByPayload<T extends GuideParagraphGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuideParagraphGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuideParagraphGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuideParagraphGroupByOutputType[P]>
            : GetScalarType<T[P], GuideParagraphGroupByOutputType[P]>
        }
      >
    >


  export type GuideParagraphSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    content?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | GuideSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideParagraph"]>

  export type GuideParagraphSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    content?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | GuideSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideParagraph"]>

  export type GuideParagraphSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    content?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | GuideSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideParagraph"]>

  export type GuideParagraphSelectScalar = {
    id?: boolean
    sectionId?: boolean
    content?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuideParagraphOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionId" | "content" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["guideParagraph"]>
  export type GuideParagraphInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | GuideSectionDefaultArgs<ExtArgs>
  }
  export type GuideParagraphIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | GuideSectionDefaultArgs<ExtArgs>
  }
  export type GuideParagraphIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | GuideSectionDefaultArgs<ExtArgs>
  }

  export type $GuideParagraphPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuideParagraph"
    objects: {
      section: Prisma.$GuideSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionId: string
      content: string
      position: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guideParagraph"]>
    composites: {}
  }

  type GuideParagraphGetPayload<S extends boolean | null | undefined | GuideParagraphDefaultArgs> = $Result.GetResult<Prisma.$GuideParagraphPayload, S>

  type GuideParagraphCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuideParagraphFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuideParagraphCountAggregateInputType | true
    }

  export interface GuideParagraphDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuideParagraph'], meta: { name: 'GuideParagraph' } }
    /**
     * Find zero or one GuideParagraph that matches the filter.
     * @param {GuideParagraphFindUniqueArgs} args - Arguments to find a GuideParagraph
     * @example
     * // Get one GuideParagraph
     * const guideParagraph = await prisma.guideParagraph.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuideParagraphFindUniqueArgs>(args: SelectSubset<T, GuideParagraphFindUniqueArgs<ExtArgs>>): Prisma__GuideParagraphClient<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuideParagraph that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuideParagraphFindUniqueOrThrowArgs} args - Arguments to find a GuideParagraph
     * @example
     * // Get one GuideParagraph
     * const guideParagraph = await prisma.guideParagraph.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuideParagraphFindUniqueOrThrowArgs>(args: SelectSubset<T, GuideParagraphFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuideParagraphClient<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideParagraph that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideParagraphFindFirstArgs} args - Arguments to find a GuideParagraph
     * @example
     * // Get one GuideParagraph
     * const guideParagraph = await prisma.guideParagraph.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuideParagraphFindFirstArgs>(args?: SelectSubset<T, GuideParagraphFindFirstArgs<ExtArgs>>): Prisma__GuideParagraphClient<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideParagraph that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideParagraphFindFirstOrThrowArgs} args - Arguments to find a GuideParagraph
     * @example
     * // Get one GuideParagraph
     * const guideParagraph = await prisma.guideParagraph.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuideParagraphFindFirstOrThrowArgs>(args?: SelectSubset<T, GuideParagraphFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuideParagraphClient<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuideParagraphs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideParagraphFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuideParagraphs
     * const guideParagraphs = await prisma.guideParagraph.findMany()
     * 
     * // Get first 10 GuideParagraphs
     * const guideParagraphs = await prisma.guideParagraph.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guideParagraphWithIdOnly = await prisma.guideParagraph.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuideParagraphFindManyArgs>(args?: SelectSubset<T, GuideParagraphFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuideParagraph.
     * @param {GuideParagraphCreateArgs} args - Arguments to create a GuideParagraph.
     * @example
     * // Create one GuideParagraph
     * const GuideParagraph = await prisma.guideParagraph.create({
     *   data: {
     *     // ... data to create a GuideParagraph
     *   }
     * })
     * 
     */
    create<T extends GuideParagraphCreateArgs>(args: SelectSubset<T, GuideParagraphCreateArgs<ExtArgs>>): Prisma__GuideParagraphClient<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuideParagraphs.
     * @param {GuideParagraphCreateManyArgs} args - Arguments to create many GuideParagraphs.
     * @example
     * // Create many GuideParagraphs
     * const guideParagraph = await prisma.guideParagraph.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuideParagraphCreateManyArgs>(args?: SelectSubset<T, GuideParagraphCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuideParagraphs and returns the data saved in the database.
     * @param {GuideParagraphCreateManyAndReturnArgs} args - Arguments to create many GuideParagraphs.
     * @example
     * // Create many GuideParagraphs
     * const guideParagraph = await prisma.guideParagraph.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuideParagraphs and only return the `id`
     * const guideParagraphWithIdOnly = await prisma.guideParagraph.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuideParagraphCreateManyAndReturnArgs>(args?: SelectSubset<T, GuideParagraphCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuideParagraph.
     * @param {GuideParagraphDeleteArgs} args - Arguments to delete one GuideParagraph.
     * @example
     * // Delete one GuideParagraph
     * const GuideParagraph = await prisma.guideParagraph.delete({
     *   where: {
     *     // ... filter to delete one GuideParagraph
     *   }
     * })
     * 
     */
    delete<T extends GuideParagraphDeleteArgs>(args: SelectSubset<T, GuideParagraphDeleteArgs<ExtArgs>>): Prisma__GuideParagraphClient<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuideParagraph.
     * @param {GuideParagraphUpdateArgs} args - Arguments to update one GuideParagraph.
     * @example
     * // Update one GuideParagraph
     * const guideParagraph = await prisma.guideParagraph.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuideParagraphUpdateArgs>(args: SelectSubset<T, GuideParagraphUpdateArgs<ExtArgs>>): Prisma__GuideParagraphClient<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuideParagraphs.
     * @param {GuideParagraphDeleteManyArgs} args - Arguments to filter GuideParagraphs to delete.
     * @example
     * // Delete a few GuideParagraphs
     * const { count } = await prisma.guideParagraph.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuideParagraphDeleteManyArgs>(args?: SelectSubset<T, GuideParagraphDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideParagraphs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideParagraphUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuideParagraphs
     * const guideParagraph = await prisma.guideParagraph.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuideParagraphUpdateManyArgs>(args: SelectSubset<T, GuideParagraphUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideParagraphs and returns the data updated in the database.
     * @param {GuideParagraphUpdateManyAndReturnArgs} args - Arguments to update many GuideParagraphs.
     * @example
     * // Update many GuideParagraphs
     * const guideParagraph = await prisma.guideParagraph.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuideParagraphs and only return the `id`
     * const guideParagraphWithIdOnly = await prisma.guideParagraph.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuideParagraphUpdateManyAndReturnArgs>(args: SelectSubset<T, GuideParagraphUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuideParagraph.
     * @param {GuideParagraphUpsertArgs} args - Arguments to update or create a GuideParagraph.
     * @example
     * // Update or create a GuideParagraph
     * const guideParagraph = await prisma.guideParagraph.upsert({
     *   create: {
     *     // ... data to create a GuideParagraph
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuideParagraph we want to update
     *   }
     * })
     */
    upsert<T extends GuideParagraphUpsertArgs>(args: SelectSubset<T, GuideParagraphUpsertArgs<ExtArgs>>): Prisma__GuideParagraphClient<$Result.GetResult<Prisma.$GuideParagraphPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuideParagraphs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideParagraphCountArgs} args - Arguments to filter GuideParagraphs to count.
     * @example
     * // Count the number of GuideParagraphs
     * const count = await prisma.guideParagraph.count({
     *   where: {
     *     // ... the filter for the GuideParagraphs we want to count
     *   }
     * })
    **/
    count<T extends GuideParagraphCountArgs>(
      args?: Subset<T, GuideParagraphCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuideParagraphCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuideParagraph.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideParagraphAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuideParagraphAggregateArgs>(args: Subset<T, GuideParagraphAggregateArgs>): Prisma.PrismaPromise<GetGuideParagraphAggregateType<T>>

    /**
     * Group by GuideParagraph.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideParagraphGroupByArgs} args - Group by arguments.
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
      T extends GuideParagraphGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuideParagraphGroupByArgs['orderBy'] }
        : { orderBy?: GuideParagraphGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuideParagraphGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuideParagraphGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuideParagraph model
   */
  readonly fields: GuideParagraphFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuideParagraph.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuideParagraphClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends GuideSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuideSectionDefaultArgs<ExtArgs>>): Prisma__GuideSectionClient<$Result.GetResult<Prisma.$GuideSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GuideParagraph model
   */
  interface GuideParagraphFieldRefs {
    readonly id: FieldRef<"GuideParagraph", 'String'>
    readonly sectionId: FieldRef<"GuideParagraph", 'String'>
    readonly content: FieldRef<"GuideParagraph", 'String'>
    readonly position: FieldRef<"GuideParagraph", 'Int'>
    readonly createdAt: FieldRef<"GuideParagraph", 'DateTime'>
    readonly updatedAt: FieldRef<"GuideParagraph", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuideParagraph findUnique
   */
  export type GuideParagraphFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
    /**
     * Filter, which GuideParagraph to fetch.
     */
    where: GuideParagraphWhereUniqueInput
  }

  /**
   * GuideParagraph findUniqueOrThrow
   */
  export type GuideParagraphFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
    /**
     * Filter, which GuideParagraph to fetch.
     */
    where: GuideParagraphWhereUniqueInput
  }

  /**
   * GuideParagraph findFirst
   */
  export type GuideParagraphFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
    /**
     * Filter, which GuideParagraph to fetch.
     */
    where?: GuideParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideParagraphs to fetch.
     */
    orderBy?: GuideParagraphOrderByWithRelationInput | GuideParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideParagraphs.
     */
    cursor?: GuideParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideParagraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideParagraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideParagraphs.
     */
    distinct?: GuideParagraphScalarFieldEnum | GuideParagraphScalarFieldEnum[]
  }

  /**
   * GuideParagraph findFirstOrThrow
   */
  export type GuideParagraphFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
    /**
     * Filter, which GuideParagraph to fetch.
     */
    where?: GuideParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideParagraphs to fetch.
     */
    orderBy?: GuideParagraphOrderByWithRelationInput | GuideParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideParagraphs.
     */
    cursor?: GuideParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideParagraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideParagraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideParagraphs.
     */
    distinct?: GuideParagraphScalarFieldEnum | GuideParagraphScalarFieldEnum[]
  }

  /**
   * GuideParagraph findMany
   */
  export type GuideParagraphFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
    /**
     * Filter, which GuideParagraphs to fetch.
     */
    where?: GuideParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideParagraphs to fetch.
     */
    orderBy?: GuideParagraphOrderByWithRelationInput | GuideParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuideParagraphs.
     */
    cursor?: GuideParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideParagraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideParagraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideParagraphs.
     */
    distinct?: GuideParagraphScalarFieldEnum | GuideParagraphScalarFieldEnum[]
  }

  /**
   * GuideParagraph create
   */
  export type GuideParagraphCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
    /**
     * The data needed to create a GuideParagraph.
     */
    data: XOR<GuideParagraphCreateInput, GuideParagraphUncheckedCreateInput>
  }

  /**
   * GuideParagraph createMany
   */
  export type GuideParagraphCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuideParagraphs.
     */
    data: GuideParagraphCreateManyInput | GuideParagraphCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuideParagraph createManyAndReturn
   */
  export type GuideParagraphCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * The data used to create many GuideParagraphs.
     */
    data: GuideParagraphCreateManyInput | GuideParagraphCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideParagraph update
   */
  export type GuideParagraphUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
    /**
     * The data needed to update a GuideParagraph.
     */
    data: XOR<GuideParagraphUpdateInput, GuideParagraphUncheckedUpdateInput>
    /**
     * Choose, which GuideParagraph to update.
     */
    where: GuideParagraphWhereUniqueInput
  }

  /**
   * GuideParagraph updateMany
   */
  export type GuideParagraphUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuideParagraphs.
     */
    data: XOR<GuideParagraphUpdateManyMutationInput, GuideParagraphUncheckedUpdateManyInput>
    /**
     * Filter which GuideParagraphs to update
     */
    where?: GuideParagraphWhereInput
    /**
     * Limit how many GuideParagraphs to update.
     */
    limit?: number
  }

  /**
   * GuideParagraph updateManyAndReturn
   */
  export type GuideParagraphUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * The data used to update GuideParagraphs.
     */
    data: XOR<GuideParagraphUpdateManyMutationInput, GuideParagraphUncheckedUpdateManyInput>
    /**
     * Filter which GuideParagraphs to update
     */
    where?: GuideParagraphWhereInput
    /**
     * Limit how many GuideParagraphs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideParagraph upsert
   */
  export type GuideParagraphUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
    /**
     * The filter to search for the GuideParagraph to update in case it exists.
     */
    where: GuideParagraphWhereUniqueInput
    /**
     * In case the GuideParagraph found by the `where` argument doesn't exist, create a new GuideParagraph with this data.
     */
    create: XOR<GuideParagraphCreateInput, GuideParagraphUncheckedCreateInput>
    /**
     * In case the GuideParagraph was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuideParagraphUpdateInput, GuideParagraphUncheckedUpdateInput>
  }

  /**
   * GuideParagraph delete
   */
  export type GuideParagraphDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
    /**
     * Filter which GuideParagraph to delete.
     */
    where: GuideParagraphWhereUniqueInput
  }

  /**
   * GuideParagraph deleteMany
   */
  export type GuideParagraphDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideParagraphs to delete
     */
    where?: GuideParagraphWhereInput
    /**
     * Limit how many GuideParagraphs to delete.
     */
    limit?: number
  }

  /**
   * GuideParagraph without action
   */
  export type GuideParagraphDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideParagraph
     */
    select?: GuideParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideParagraph
     */
    omit?: GuideParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideParagraphInclude<ExtArgs> | null
  }


  /**
   * Model GuideTable
   */

  export type AggregateGuideTable = {
    _count: GuideTableCountAggregateOutputType | null
    _avg: GuideTableAvgAggregateOutputType | null
    _sum: GuideTableSumAggregateOutputType | null
    _min: GuideTableMinAggregateOutputType | null
    _max: GuideTableMaxAggregateOutputType | null
  }

  export type GuideTableAvgAggregateOutputType = {
    position: number | null
  }

  export type GuideTableSumAggregateOutputType = {
    position: number | null
  }

  export type GuideTableMinAggregateOutputType = {
    id: string | null
    tabId: string | null
    slug: string | null
    title: string | null
    position: number | null
    sectionSlug: string | null
    semanticKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideTableMaxAggregateOutputType = {
    id: string | null
    tabId: string | null
    slug: string | null
    title: string | null
    position: number | null
    sectionSlug: string | null
    semanticKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideTableCountAggregateOutputType = {
    id: number
    tabId: number
    slug: number
    title: number
    columns: number
    position: number
    sectionSlug: number
    semanticKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuideTableAvgAggregateInputType = {
    position?: true
  }

  export type GuideTableSumAggregateInputType = {
    position?: true
  }

  export type GuideTableMinAggregateInputType = {
    id?: true
    tabId?: true
    slug?: true
    title?: true
    position?: true
    sectionSlug?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideTableMaxAggregateInputType = {
    id?: true
    tabId?: true
    slug?: true
    title?: true
    position?: true
    sectionSlug?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideTableCountAggregateInputType = {
    id?: true
    tabId?: true
    slug?: true
    title?: true
    columns?: true
    position?: true
    sectionSlug?: true
    semanticKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuideTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideTable to aggregate.
     */
    where?: GuideTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTables to fetch.
     */
    orderBy?: GuideTableOrderByWithRelationInput | GuideTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuideTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuideTables
    **/
    _count?: true | GuideTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuideTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuideTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuideTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuideTableMaxAggregateInputType
  }

  export type GetGuideTableAggregateType<T extends GuideTableAggregateArgs> = {
        [P in keyof T & keyof AggregateGuideTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuideTable[P]>
      : GetScalarType<T[P], AggregateGuideTable[P]>
  }




  export type GuideTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideTableWhereInput
    orderBy?: GuideTableOrderByWithAggregationInput | GuideTableOrderByWithAggregationInput[]
    by: GuideTableScalarFieldEnum[] | GuideTableScalarFieldEnum
    having?: GuideTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuideTableCountAggregateInputType | true
    _avg?: GuideTableAvgAggregateInputType
    _sum?: GuideTableSumAggregateInputType
    _min?: GuideTableMinAggregateInputType
    _max?: GuideTableMaxAggregateInputType
  }

  export type GuideTableGroupByOutputType = {
    id: string
    tabId: string
    slug: string
    title: string
    columns: JsonValue
    position: number
    sectionSlug: string | null
    semanticKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuideTableCountAggregateOutputType | null
    _avg: GuideTableAvgAggregateOutputType | null
    _sum: GuideTableSumAggregateOutputType | null
    _min: GuideTableMinAggregateOutputType | null
    _max: GuideTableMaxAggregateOutputType | null
  }

  type GetGuideTableGroupByPayload<T extends GuideTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuideTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuideTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuideTableGroupByOutputType[P]>
            : GetScalarType<T[P], GuideTableGroupByOutputType[P]>
        }
      >
    >


  export type GuideTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    slug?: boolean
    title?: boolean
    columns?: boolean
    position?: boolean
    sectionSlug?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
    rows?: boolean | GuideTable$rowsArgs<ExtArgs>
    _count?: boolean | GuideTableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideTable"]>

  export type GuideTableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    slug?: boolean
    title?: boolean
    columns?: boolean
    position?: boolean
    sectionSlug?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideTable"]>

  export type GuideTableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabId?: boolean
    slug?: boolean
    title?: boolean
    columns?: boolean
    position?: boolean
    sectionSlug?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideTable"]>

  export type GuideTableSelectScalar = {
    id?: boolean
    tabId?: boolean
    slug?: boolean
    title?: boolean
    columns?: boolean
    position?: boolean
    sectionSlug?: boolean
    semanticKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuideTableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tabId" | "slug" | "title" | "columns" | "position" | "sectionSlug" | "semanticKey" | "createdAt" | "updatedAt", ExtArgs["result"]["guideTable"]>
  export type GuideTableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
    rows?: boolean | GuideTable$rowsArgs<ExtArgs>
    _count?: boolean | GuideTableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuideTableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }
  export type GuideTableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | GuideTabDefaultArgs<ExtArgs>
  }

  export type $GuideTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuideTable"
    objects: {
      tab: Prisma.$GuideTabPayload<ExtArgs>
      rows: Prisma.$GuideTableRowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tabId: string
      slug: string
      title: string
      columns: Prisma.JsonValue
      position: number
      /**
       * Si se informa, en fichas de destilado con varias secciones la tabla se muestra en la pestaña de esa sección (slug de GuideSection en la misma pestaña).
       */
      sectionSlug: string | null
      semanticKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guideTable"]>
    composites: {}
  }

  type GuideTableGetPayload<S extends boolean | null | undefined | GuideTableDefaultArgs> = $Result.GetResult<Prisma.$GuideTablePayload, S>

  type GuideTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuideTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuideTableCountAggregateInputType | true
    }

  export interface GuideTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuideTable'], meta: { name: 'GuideTable' } }
    /**
     * Find zero or one GuideTable that matches the filter.
     * @param {GuideTableFindUniqueArgs} args - Arguments to find a GuideTable
     * @example
     * // Get one GuideTable
     * const guideTable = await prisma.guideTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuideTableFindUniqueArgs>(args: SelectSubset<T, GuideTableFindUniqueArgs<ExtArgs>>): Prisma__GuideTableClient<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuideTable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuideTableFindUniqueOrThrowArgs} args - Arguments to find a GuideTable
     * @example
     * // Get one GuideTable
     * const guideTable = await prisma.guideTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuideTableFindUniqueOrThrowArgs>(args: SelectSubset<T, GuideTableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuideTableClient<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableFindFirstArgs} args - Arguments to find a GuideTable
     * @example
     * // Get one GuideTable
     * const guideTable = await prisma.guideTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuideTableFindFirstArgs>(args?: SelectSubset<T, GuideTableFindFirstArgs<ExtArgs>>): Prisma__GuideTableClient<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableFindFirstOrThrowArgs} args - Arguments to find a GuideTable
     * @example
     * // Get one GuideTable
     * const guideTable = await prisma.guideTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuideTableFindFirstOrThrowArgs>(args?: SelectSubset<T, GuideTableFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuideTableClient<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuideTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuideTables
     * const guideTables = await prisma.guideTable.findMany()
     * 
     * // Get first 10 GuideTables
     * const guideTables = await prisma.guideTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guideTableWithIdOnly = await prisma.guideTable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuideTableFindManyArgs>(args?: SelectSubset<T, GuideTableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuideTable.
     * @param {GuideTableCreateArgs} args - Arguments to create a GuideTable.
     * @example
     * // Create one GuideTable
     * const GuideTable = await prisma.guideTable.create({
     *   data: {
     *     // ... data to create a GuideTable
     *   }
     * })
     * 
     */
    create<T extends GuideTableCreateArgs>(args: SelectSubset<T, GuideTableCreateArgs<ExtArgs>>): Prisma__GuideTableClient<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuideTables.
     * @param {GuideTableCreateManyArgs} args - Arguments to create many GuideTables.
     * @example
     * // Create many GuideTables
     * const guideTable = await prisma.guideTable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuideTableCreateManyArgs>(args?: SelectSubset<T, GuideTableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuideTables and returns the data saved in the database.
     * @param {GuideTableCreateManyAndReturnArgs} args - Arguments to create many GuideTables.
     * @example
     * // Create many GuideTables
     * const guideTable = await prisma.guideTable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuideTables and only return the `id`
     * const guideTableWithIdOnly = await prisma.guideTable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuideTableCreateManyAndReturnArgs>(args?: SelectSubset<T, GuideTableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuideTable.
     * @param {GuideTableDeleteArgs} args - Arguments to delete one GuideTable.
     * @example
     * // Delete one GuideTable
     * const GuideTable = await prisma.guideTable.delete({
     *   where: {
     *     // ... filter to delete one GuideTable
     *   }
     * })
     * 
     */
    delete<T extends GuideTableDeleteArgs>(args: SelectSubset<T, GuideTableDeleteArgs<ExtArgs>>): Prisma__GuideTableClient<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuideTable.
     * @param {GuideTableUpdateArgs} args - Arguments to update one GuideTable.
     * @example
     * // Update one GuideTable
     * const guideTable = await prisma.guideTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuideTableUpdateArgs>(args: SelectSubset<T, GuideTableUpdateArgs<ExtArgs>>): Prisma__GuideTableClient<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuideTables.
     * @param {GuideTableDeleteManyArgs} args - Arguments to filter GuideTables to delete.
     * @example
     * // Delete a few GuideTables
     * const { count } = await prisma.guideTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuideTableDeleteManyArgs>(args?: SelectSubset<T, GuideTableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuideTables
     * const guideTable = await prisma.guideTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuideTableUpdateManyArgs>(args: SelectSubset<T, GuideTableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideTables and returns the data updated in the database.
     * @param {GuideTableUpdateManyAndReturnArgs} args - Arguments to update many GuideTables.
     * @example
     * // Update many GuideTables
     * const guideTable = await prisma.guideTable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuideTables and only return the `id`
     * const guideTableWithIdOnly = await prisma.guideTable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuideTableUpdateManyAndReturnArgs>(args: SelectSubset<T, GuideTableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuideTable.
     * @param {GuideTableUpsertArgs} args - Arguments to update or create a GuideTable.
     * @example
     * // Update or create a GuideTable
     * const guideTable = await prisma.guideTable.upsert({
     *   create: {
     *     // ... data to create a GuideTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuideTable we want to update
     *   }
     * })
     */
    upsert<T extends GuideTableUpsertArgs>(args: SelectSubset<T, GuideTableUpsertArgs<ExtArgs>>): Prisma__GuideTableClient<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuideTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableCountArgs} args - Arguments to filter GuideTables to count.
     * @example
     * // Count the number of GuideTables
     * const count = await prisma.guideTable.count({
     *   where: {
     *     // ... the filter for the GuideTables we want to count
     *   }
     * })
    **/
    count<T extends GuideTableCountArgs>(
      args?: Subset<T, GuideTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuideTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuideTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuideTableAggregateArgs>(args: Subset<T, GuideTableAggregateArgs>): Prisma.PrismaPromise<GetGuideTableAggregateType<T>>

    /**
     * Group by GuideTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableGroupByArgs} args - Group by arguments.
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
      T extends GuideTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuideTableGroupByArgs['orderBy'] }
        : { orderBy?: GuideTableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuideTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuideTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuideTable model
   */
  readonly fields: GuideTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuideTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuideTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tab<T extends GuideTabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuideTabDefaultArgs<ExtArgs>>): Prisma__GuideTabClient<$Result.GetResult<Prisma.$GuideTabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rows<T extends GuideTable$rowsArgs<ExtArgs> = {}>(args?: Subset<T, GuideTable$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GuideTable model
   */
  interface GuideTableFieldRefs {
    readonly id: FieldRef<"GuideTable", 'String'>
    readonly tabId: FieldRef<"GuideTable", 'String'>
    readonly slug: FieldRef<"GuideTable", 'String'>
    readonly title: FieldRef<"GuideTable", 'String'>
    readonly columns: FieldRef<"GuideTable", 'Json'>
    readonly position: FieldRef<"GuideTable", 'Int'>
    readonly sectionSlug: FieldRef<"GuideTable", 'String'>
    readonly semanticKey: FieldRef<"GuideTable", 'String'>
    readonly createdAt: FieldRef<"GuideTable", 'DateTime'>
    readonly updatedAt: FieldRef<"GuideTable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuideTable findUnique
   */
  export type GuideTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
    /**
     * Filter, which GuideTable to fetch.
     */
    where: GuideTableWhereUniqueInput
  }

  /**
   * GuideTable findUniqueOrThrow
   */
  export type GuideTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
    /**
     * Filter, which GuideTable to fetch.
     */
    where: GuideTableWhereUniqueInput
  }

  /**
   * GuideTable findFirst
   */
  export type GuideTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
    /**
     * Filter, which GuideTable to fetch.
     */
    where?: GuideTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTables to fetch.
     */
    orderBy?: GuideTableOrderByWithRelationInput | GuideTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideTables.
     */
    cursor?: GuideTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideTables.
     */
    distinct?: GuideTableScalarFieldEnum | GuideTableScalarFieldEnum[]
  }

  /**
   * GuideTable findFirstOrThrow
   */
  export type GuideTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
    /**
     * Filter, which GuideTable to fetch.
     */
    where?: GuideTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTables to fetch.
     */
    orderBy?: GuideTableOrderByWithRelationInput | GuideTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideTables.
     */
    cursor?: GuideTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideTables.
     */
    distinct?: GuideTableScalarFieldEnum | GuideTableScalarFieldEnum[]
  }

  /**
   * GuideTable findMany
   */
  export type GuideTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
    /**
     * Filter, which GuideTables to fetch.
     */
    where?: GuideTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTables to fetch.
     */
    orderBy?: GuideTableOrderByWithRelationInput | GuideTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuideTables.
     */
    cursor?: GuideTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideTables.
     */
    distinct?: GuideTableScalarFieldEnum | GuideTableScalarFieldEnum[]
  }

  /**
   * GuideTable create
   */
  export type GuideTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
    /**
     * The data needed to create a GuideTable.
     */
    data: XOR<GuideTableCreateInput, GuideTableUncheckedCreateInput>
  }

  /**
   * GuideTable createMany
   */
  export type GuideTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuideTables.
     */
    data: GuideTableCreateManyInput | GuideTableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuideTable createManyAndReturn
   */
  export type GuideTableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * The data used to create many GuideTables.
     */
    data: GuideTableCreateManyInput | GuideTableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideTable update
   */
  export type GuideTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
    /**
     * The data needed to update a GuideTable.
     */
    data: XOR<GuideTableUpdateInput, GuideTableUncheckedUpdateInput>
    /**
     * Choose, which GuideTable to update.
     */
    where: GuideTableWhereUniqueInput
  }

  /**
   * GuideTable updateMany
   */
  export type GuideTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuideTables.
     */
    data: XOR<GuideTableUpdateManyMutationInput, GuideTableUncheckedUpdateManyInput>
    /**
     * Filter which GuideTables to update
     */
    where?: GuideTableWhereInput
    /**
     * Limit how many GuideTables to update.
     */
    limit?: number
  }

  /**
   * GuideTable updateManyAndReturn
   */
  export type GuideTableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * The data used to update GuideTables.
     */
    data: XOR<GuideTableUpdateManyMutationInput, GuideTableUncheckedUpdateManyInput>
    /**
     * Filter which GuideTables to update
     */
    where?: GuideTableWhereInput
    /**
     * Limit how many GuideTables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideTable upsert
   */
  export type GuideTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
    /**
     * The filter to search for the GuideTable to update in case it exists.
     */
    where: GuideTableWhereUniqueInput
    /**
     * In case the GuideTable found by the `where` argument doesn't exist, create a new GuideTable with this data.
     */
    create: XOR<GuideTableCreateInput, GuideTableUncheckedCreateInput>
    /**
     * In case the GuideTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuideTableUpdateInput, GuideTableUncheckedUpdateInput>
  }

  /**
   * GuideTable delete
   */
  export type GuideTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
    /**
     * Filter which GuideTable to delete.
     */
    where: GuideTableWhereUniqueInput
  }

  /**
   * GuideTable deleteMany
   */
  export type GuideTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideTables to delete
     */
    where?: GuideTableWhereInput
    /**
     * Limit how many GuideTables to delete.
     */
    limit?: number
  }

  /**
   * GuideTable.rows
   */
  export type GuideTable$rowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
    where?: GuideTableRowWhereInput
    orderBy?: GuideTableRowOrderByWithRelationInput | GuideTableRowOrderByWithRelationInput[]
    cursor?: GuideTableRowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuideTableRowScalarFieldEnum | GuideTableRowScalarFieldEnum[]
  }

  /**
   * GuideTable without action
   */
  export type GuideTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTable
     */
    select?: GuideTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTable
     */
    omit?: GuideTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableInclude<ExtArgs> | null
  }


  /**
   * Model GuideTableRow
   */

  export type AggregateGuideTableRow = {
    _count: GuideTableRowCountAggregateOutputType | null
    _avg: GuideTableRowAvgAggregateOutputType | null
    _sum: GuideTableRowSumAggregateOutputType | null
    _min: GuideTableRowMinAggregateOutputType | null
    _max: GuideTableRowMaxAggregateOutputType | null
  }

  export type GuideTableRowAvgAggregateOutputType = {
    position: number | null
  }

  export type GuideTableRowSumAggregateOutputType = {
    position: number | null
  }

  export type GuideTableRowMinAggregateOutputType = {
    id: string | null
    tableId: string | null
    term: string | null
    composition: string | null
    objective: string | null
    description: string | null
    reference: string | null
    abv: string | null
    imageUrl: string | null
    imageAlt: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideTableRowMaxAggregateOutputType = {
    id: string | null
    tableId: string | null
    term: string | null
    composition: string | null
    objective: string | null
    description: string | null
    reference: string | null
    abv: string | null
    imageUrl: string | null
    imageAlt: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideTableRowCountAggregateOutputType = {
    id: number
    tableId: number
    term: number
    composition: number
    objective: number
    description: number
    reference: number
    abv: number
    imageUrl: number
    imageAlt: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuideTableRowAvgAggregateInputType = {
    position?: true
  }

  export type GuideTableRowSumAggregateInputType = {
    position?: true
  }

  export type GuideTableRowMinAggregateInputType = {
    id?: true
    tableId?: true
    term?: true
    composition?: true
    objective?: true
    description?: true
    reference?: true
    abv?: true
    imageUrl?: true
    imageAlt?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideTableRowMaxAggregateInputType = {
    id?: true
    tableId?: true
    term?: true
    composition?: true
    objective?: true
    description?: true
    reference?: true
    abv?: true
    imageUrl?: true
    imageAlt?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideTableRowCountAggregateInputType = {
    id?: true
    tableId?: true
    term?: true
    composition?: true
    objective?: true
    description?: true
    reference?: true
    abv?: true
    imageUrl?: true
    imageAlt?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuideTableRowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideTableRow to aggregate.
     */
    where?: GuideTableRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTableRows to fetch.
     */
    orderBy?: GuideTableRowOrderByWithRelationInput | GuideTableRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuideTableRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTableRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTableRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuideTableRows
    **/
    _count?: true | GuideTableRowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuideTableRowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuideTableRowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuideTableRowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuideTableRowMaxAggregateInputType
  }

  export type GetGuideTableRowAggregateType<T extends GuideTableRowAggregateArgs> = {
        [P in keyof T & keyof AggregateGuideTableRow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuideTableRow[P]>
      : GetScalarType<T[P], AggregateGuideTableRow[P]>
  }




  export type GuideTableRowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideTableRowWhereInput
    orderBy?: GuideTableRowOrderByWithAggregationInput | GuideTableRowOrderByWithAggregationInput[]
    by: GuideTableRowScalarFieldEnum[] | GuideTableRowScalarFieldEnum
    having?: GuideTableRowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuideTableRowCountAggregateInputType | true
    _avg?: GuideTableRowAvgAggregateInputType
    _sum?: GuideTableRowSumAggregateInputType
    _min?: GuideTableRowMinAggregateInputType
    _max?: GuideTableRowMaxAggregateInputType
  }

  export type GuideTableRowGroupByOutputType = {
    id: string
    tableId: string
    term: string
    composition: string | null
    objective: string | null
    description: string | null
    reference: string | null
    abv: string | null
    imageUrl: string | null
    imageAlt: string | null
    position: number
    createdAt: Date
    updatedAt: Date
    _count: GuideTableRowCountAggregateOutputType | null
    _avg: GuideTableRowAvgAggregateOutputType | null
    _sum: GuideTableRowSumAggregateOutputType | null
    _min: GuideTableRowMinAggregateOutputType | null
    _max: GuideTableRowMaxAggregateOutputType | null
  }

  type GetGuideTableRowGroupByPayload<T extends GuideTableRowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuideTableRowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuideTableRowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuideTableRowGroupByOutputType[P]>
            : GetScalarType<T[P], GuideTableRowGroupByOutputType[P]>
        }
      >
    >


  export type GuideTableRowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    term?: boolean
    composition?: boolean
    objective?: boolean
    description?: boolean
    reference?: boolean
    abv?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | GuideTableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideTableRow"]>

  export type GuideTableRowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    term?: boolean
    composition?: boolean
    objective?: boolean
    description?: boolean
    reference?: boolean
    abv?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | GuideTableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideTableRow"]>

  export type GuideTableRowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    term?: boolean
    composition?: boolean
    objective?: boolean
    description?: boolean
    reference?: boolean
    abv?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | GuideTableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guideTableRow"]>

  export type GuideTableRowSelectScalar = {
    id?: boolean
    tableId?: boolean
    term?: boolean
    composition?: boolean
    objective?: boolean
    description?: boolean
    reference?: boolean
    abv?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuideTableRowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableId" | "term" | "composition" | "objective" | "description" | "reference" | "abv" | "imageUrl" | "imageAlt" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["guideTableRow"]>
  export type GuideTableRowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | GuideTableDefaultArgs<ExtArgs>
  }
  export type GuideTableRowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | GuideTableDefaultArgs<ExtArgs>
  }
  export type GuideTableRowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | GuideTableDefaultArgs<ExtArgs>
  }

  export type $GuideTableRowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuideTableRow"
    objects: {
      table: Prisma.$GuideTablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableId: string
      term: string
      composition: string | null
      objective: string | null
      description: string | null
      reference: string | null
      abv: string | null
      imageUrl: string | null
      imageAlt: string | null
      position: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guideTableRow"]>
    composites: {}
  }

  type GuideTableRowGetPayload<S extends boolean | null | undefined | GuideTableRowDefaultArgs> = $Result.GetResult<Prisma.$GuideTableRowPayload, S>

  type GuideTableRowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuideTableRowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuideTableRowCountAggregateInputType | true
    }

  export interface GuideTableRowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuideTableRow'], meta: { name: 'GuideTableRow' } }
    /**
     * Find zero or one GuideTableRow that matches the filter.
     * @param {GuideTableRowFindUniqueArgs} args - Arguments to find a GuideTableRow
     * @example
     * // Get one GuideTableRow
     * const guideTableRow = await prisma.guideTableRow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuideTableRowFindUniqueArgs>(args: SelectSubset<T, GuideTableRowFindUniqueArgs<ExtArgs>>): Prisma__GuideTableRowClient<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuideTableRow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuideTableRowFindUniqueOrThrowArgs} args - Arguments to find a GuideTableRow
     * @example
     * // Get one GuideTableRow
     * const guideTableRow = await prisma.guideTableRow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuideTableRowFindUniqueOrThrowArgs>(args: SelectSubset<T, GuideTableRowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuideTableRowClient<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideTableRow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableRowFindFirstArgs} args - Arguments to find a GuideTableRow
     * @example
     * // Get one GuideTableRow
     * const guideTableRow = await prisma.guideTableRow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuideTableRowFindFirstArgs>(args?: SelectSubset<T, GuideTableRowFindFirstArgs<ExtArgs>>): Prisma__GuideTableRowClient<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuideTableRow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableRowFindFirstOrThrowArgs} args - Arguments to find a GuideTableRow
     * @example
     * // Get one GuideTableRow
     * const guideTableRow = await prisma.guideTableRow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuideTableRowFindFirstOrThrowArgs>(args?: SelectSubset<T, GuideTableRowFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuideTableRowClient<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuideTableRows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableRowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuideTableRows
     * const guideTableRows = await prisma.guideTableRow.findMany()
     * 
     * // Get first 10 GuideTableRows
     * const guideTableRows = await prisma.guideTableRow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guideTableRowWithIdOnly = await prisma.guideTableRow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuideTableRowFindManyArgs>(args?: SelectSubset<T, GuideTableRowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuideTableRow.
     * @param {GuideTableRowCreateArgs} args - Arguments to create a GuideTableRow.
     * @example
     * // Create one GuideTableRow
     * const GuideTableRow = await prisma.guideTableRow.create({
     *   data: {
     *     // ... data to create a GuideTableRow
     *   }
     * })
     * 
     */
    create<T extends GuideTableRowCreateArgs>(args: SelectSubset<T, GuideTableRowCreateArgs<ExtArgs>>): Prisma__GuideTableRowClient<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuideTableRows.
     * @param {GuideTableRowCreateManyArgs} args - Arguments to create many GuideTableRows.
     * @example
     * // Create many GuideTableRows
     * const guideTableRow = await prisma.guideTableRow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuideTableRowCreateManyArgs>(args?: SelectSubset<T, GuideTableRowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuideTableRows and returns the data saved in the database.
     * @param {GuideTableRowCreateManyAndReturnArgs} args - Arguments to create many GuideTableRows.
     * @example
     * // Create many GuideTableRows
     * const guideTableRow = await prisma.guideTableRow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuideTableRows and only return the `id`
     * const guideTableRowWithIdOnly = await prisma.guideTableRow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuideTableRowCreateManyAndReturnArgs>(args?: SelectSubset<T, GuideTableRowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuideTableRow.
     * @param {GuideTableRowDeleteArgs} args - Arguments to delete one GuideTableRow.
     * @example
     * // Delete one GuideTableRow
     * const GuideTableRow = await prisma.guideTableRow.delete({
     *   where: {
     *     // ... filter to delete one GuideTableRow
     *   }
     * })
     * 
     */
    delete<T extends GuideTableRowDeleteArgs>(args: SelectSubset<T, GuideTableRowDeleteArgs<ExtArgs>>): Prisma__GuideTableRowClient<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuideTableRow.
     * @param {GuideTableRowUpdateArgs} args - Arguments to update one GuideTableRow.
     * @example
     * // Update one GuideTableRow
     * const guideTableRow = await prisma.guideTableRow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuideTableRowUpdateArgs>(args: SelectSubset<T, GuideTableRowUpdateArgs<ExtArgs>>): Prisma__GuideTableRowClient<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuideTableRows.
     * @param {GuideTableRowDeleteManyArgs} args - Arguments to filter GuideTableRows to delete.
     * @example
     * // Delete a few GuideTableRows
     * const { count } = await prisma.guideTableRow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuideTableRowDeleteManyArgs>(args?: SelectSubset<T, GuideTableRowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideTableRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableRowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuideTableRows
     * const guideTableRow = await prisma.guideTableRow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuideTableRowUpdateManyArgs>(args: SelectSubset<T, GuideTableRowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuideTableRows and returns the data updated in the database.
     * @param {GuideTableRowUpdateManyAndReturnArgs} args - Arguments to update many GuideTableRows.
     * @example
     * // Update many GuideTableRows
     * const guideTableRow = await prisma.guideTableRow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuideTableRows and only return the `id`
     * const guideTableRowWithIdOnly = await prisma.guideTableRow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuideTableRowUpdateManyAndReturnArgs>(args: SelectSubset<T, GuideTableRowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuideTableRow.
     * @param {GuideTableRowUpsertArgs} args - Arguments to update or create a GuideTableRow.
     * @example
     * // Update or create a GuideTableRow
     * const guideTableRow = await prisma.guideTableRow.upsert({
     *   create: {
     *     // ... data to create a GuideTableRow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuideTableRow we want to update
     *   }
     * })
     */
    upsert<T extends GuideTableRowUpsertArgs>(args: SelectSubset<T, GuideTableRowUpsertArgs<ExtArgs>>): Prisma__GuideTableRowClient<$Result.GetResult<Prisma.$GuideTableRowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuideTableRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableRowCountArgs} args - Arguments to filter GuideTableRows to count.
     * @example
     * // Count the number of GuideTableRows
     * const count = await prisma.guideTableRow.count({
     *   where: {
     *     // ... the filter for the GuideTableRows we want to count
     *   }
     * })
    **/
    count<T extends GuideTableRowCountArgs>(
      args?: Subset<T, GuideTableRowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuideTableRowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuideTableRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableRowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuideTableRowAggregateArgs>(args: Subset<T, GuideTableRowAggregateArgs>): Prisma.PrismaPromise<GetGuideTableRowAggregateType<T>>

    /**
     * Group by GuideTableRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideTableRowGroupByArgs} args - Group by arguments.
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
      T extends GuideTableRowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuideTableRowGroupByArgs['orderBy'] }
        : { orderBy?: GuideTableRowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuideTableRowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuideTableRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuideTableRow model
   */
  readonly fields: GuideTableRowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuideTableRow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuideTableRowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends GuideTableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuideTableDefaultArgs<ExtArgs>>): Prisma__GuideTableClient<$Result.GetResult<Prisma.$GuideTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GuideTableRow model
   */
  interface GuideTableRowFieldRefs {
    readonly id: FieldRef<"GuideTableRow", 'String'>
    readonly tableId: FieldRef<"GuideTableRow", 'String'>
    readonly term: FieldRef<"GuideTableRow", 'String'>
    readonly composition: FieldRef<"GuideTableRow", 'String'>
    readonly objective: FieldRef<"GuideTableRow", 'String'>
    readonly description: FieldRef<"GuideTableRow", 'String'>
    readonly reference: FieldRef<"GuideTableRow", 'String'>
    readonly abv: FieldRef<"GuideTableRow", 'String'>
    readonly imageUrl: FieldRef<"GuideTableRow", 'String'>
    readonly imageAlt: FieldRef<"GuideTableRow", 'String'>
    readonly position: FieldRef<"GuideTableRow", 'Int'>
    readonly createdAt: FieldRef<"GuideTableRow", 'DateTime'>
    readonly updatedAt: FieldRef<"GuideTableRow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuideTableRow findUnique
   */
  export type GuideTableRowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
    /**
     * Filter, which GuideTableRow to fetch.
     */
    where: GuideTableRowWhereUniqueInput
  }

  /**
   * GuideTableRow findUniqueOrThrow
   */
  export type GuideTableRowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
    /**
     * Filter, which GuideTableRow to fetch.
     */
    where: GuideTableRowWhereUniqueInput
  }

  /**
   * GuideTableRow findFirst
   */
  export type GuideTableRowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
    /**
     * Filter, which GuideTableRow to fetch.
     */
    where?: GuideTableRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTableRows to fetch.
     */
    orderBy?: GuideTableRowOrderByWithRelationInput | GuideTableRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideTableRows.
     */
    cursor?: GuideTableRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTableRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTableRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideTableRows.
     */
    distinct?: GuideTableRowScalarFieldEnum | GuideTableRowScalarFieldEnum[]
  }

  /**
   * GuideTableRow findFirstOrThrow
   */
  export type GuideTableRowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
    /**
     * Filter, which GuideTableRow to fetch.
     */
    where?: GuideTableRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTableRows to fetch.
     */
    orderBy?: GuideTableRowOrderByWithRelationInput | GuideTableRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuideTableRows.
     */
    cursor?: GuideTableRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTableRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTableRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideTableRows.
     */
    distinct?: GuideTableRowScalarFieldEnum | GuideTableRowScalarFieldEnum[]
  }

  /**
   * GuideTableRow findMany
   */
  export type GuideTableRowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
    /**
     * Filter, which GuideTableRows to fetch.
     */
    where?: GuideTableRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuideTableRows to fetch.
     */
    orderBy?: GuideTableRowOrderByWithRelationInput | GuideTableRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuideTableRows.
     */
    cursor?: GuideTableRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuideTableRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuideTableRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuideTableRows.
     */
    distinct?: GuideTableRowScalarFieldEnum | GuideTableRowScalarFieldEnum[]
  }

  /**
   * GuideTableRow create
   */
  export type GuideTableRowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
    /**
     * The data needed to create a GuideTableRow.
     */
    data: XOR<GuideTableRowCreateInput, GuideTableRowUncheckedCreateInput>
  }

  /**
   * GuideTableRow createMany
   */
  export type GuideTableRowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuideTableRows.
     */
    data: GuideTableRowCreateManyInput | GuideTableRowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuideTableRow createManyAndReturn
   */
  export type GuideTableRowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * The data used to create many GuideTableRows.
     */
    data: GuideTableRowCreateManyInput | GuideTableRowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideTableRow update
   */
  export type GuideTableRowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
    /**
     * The data needed to update a GuideTableRow.
     */
    data: XOR<GuideTableRowUpdateInput, GuideTableRowUncheckedUpdateInput>
    /**
     * Choose, which GuideTableRow to update.
     */
    where: GuideTableRowWhereUniqueInput
  }

  /**
   * GuideTableRow updateMany
   */
  export type GuideTableRowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuideTableRows.
     */
    data: XOR<GuideTableRowUpdateManyMutationInput, GuideTableRowUncheckedUpdateManyInput>
    /**
     * Filter which GuideTableRows to update
     */
    where?: GuideTableRowWhereInput
    /**
     * Limit how many GuideTableRows to update.
     */
    limit?: number
  }

  /**
   * GuideTableRow updateManyAndReturn
   */
  export type GuideTableRowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * The data used to update GuideTableRows.
     */
    data: XOR<GuideTableRowUpdateManyMutationInput, GuideTableRowUncheckedUpdateManyInput>
    /**
     * Filter which GuideTableRows to update
     */
    where?: GuideTableRowWhereInput
    /**
     * Limit how many GuideTableRows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuideTableRow upsert
   */
  export type GuideTableRowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
    /**
     * The filter to search for the GuideTableRow to update in case it exists.
     */
    where: GuideTableRowWhereUniqueInput
    /**
     * In case the GuideTableRow found by the `where` argument doesn't exist, create a new GuideTableRow with this data.
     */
    create: XOR<GuideTableRowCreateInput, GuideTableRowUncheckedCreateInput>
    /**
     * In case the GuideTableRow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuideTableRowUpdateInput, GuideTableRowUncheckedUpdateInput>
  }

  /**
   * GuideTableRow delete
   */
  export type GuideTableRowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
    /**
     * Filter which GuideTableRow to delete.
     */
    where: GuideTableRowWhereUniqueInput
  }

  /**
   * GuideTableRow deleteMany
   */
  export type GuideTableRowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuideTableRows to delete
     */
    where?: GuideTableRowWhereInput
    /**
     * Limit how many GuideTableRows to delete.
     */
    limit?: number
  }

  /**
   * GuideTableRow without action
   */
  export type GuideTableRowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideTableRow
     */
    select?: GuideTableRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuideTableRow
     */
    omit?: GuideTableRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideTableRowInclude<ExtArgs> | null
  }


  /**
   * Model GlossaryItem
   */

  export type AggregateGlossaryItem = {
    _count: GlossaryItemCountAggregateOutputType | null
    _min: GlossaryItemMinAggregateOutputType | null
    _max: GlossaryItemMaxAggregateOutputType | null
  }

  export type GlossaryItemMinAggregateOutputType = {
    id: string | null
    slug: string | null
    term: string | null
    shortDefinition: string | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlossaryItemMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    term: string | null
    shortDefinition: string | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlossaryItemCountAggregateOutputType = {
    id: number
    slug: number
    term: number
    shortDefinition: number
    featured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GlossaryItemMinAggregateInputType = {
    id?: true
    slug?: true
    term?: true
    shortDefinition?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlossaryItemMaxAggregateInputType = {
    id?: true
    slug?: true
    term?: true
    shortDefinition?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlossaryItemCountAggregateInputType = {
    id?: true
    slug?: true
    term?: true
    shortDefinition?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GlossaryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlossaryItem to aggregate.
     */
    where?: GlossaryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryItems to fetch.
     */
    orderBy?: GlossaryItemOrderByWithRelationInput | GlossaryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlossaryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlossaryItems
    **/
    _count?: true | GlossaryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlossaryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlossaryItemMaxAggregateInputType
  }

  export type GetGlossaryItemAggregateType<T extends GlossaryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGlossaryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlossaryItem[P]>
      : GetScalarType<T[P], AggregateGlossaryItem[P]>
  }




  export type GlossaryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryItemWhereInput
    orderBy?: GlossaryItemOrderByWithAggregationInput | GlossaryItemOrderByWithAggregationInput[]
    by: GlossaryItemScalarFieldEnum[] | GlossaryItemScalarFieldEnum
    having?: GlossaryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlossaryItemCountAggregateInputType | true
    _min?: GlossaryItemMinAggregateInputType
    _max?: GlossaryItemMaxAggregateInputType
  }

  export type GlossaryItemGroupByOutputType = {
    id: string
    slug: string
    term: string
    shortDefinition: string
    featured: boolean
    createdAt: Date
    updatedAt: Date
    _count: GlossaryItemCountAggregateOutputType | null
    _min: GlossaryItemMinAggregateOutputType | null
    _max: GlossaryItemMaxAggregateOutputType | null
  }

  type GetGlossaryItemGroupByPayload<T extends GlossaryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlossaryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlossaryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlossaryItemGroupByOutputType[P]>
            : GetScalarType<T[P], GlossaryItemGroupByOutputType[P]>
        }
      >
    >


  export type GlossaryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    term?: boolean
    shortDefinition?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    details?: boolean | GlossaryItem$detailsArgs<ExtArgs>
    relatedCategories?: boolean | GlossaryItem$relatedCategoriesArgs<ExtArgs>
    _count?: boolean | GlossaryItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryItem"]>

  export type GlossaryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    term?: boolean
    shortDefinition?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["glossaryItem"]>

  export type GlossaryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    term?: boolean
    shortDefinition?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["glossaryItem"]>

  export type GlossaryItemSelectScalar = {
    id?: boolean
    slug?: boolean
    term?: boolean
    shortDefinition?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GlossaryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "term" | "shortDefinition" | "featured" | "createdAt" | "updatedAt", ExtArgs["result"]["glossaryItem"]>
  export type GlossaryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | GlossaryItem$detailsArgs<ExtArgs>
    relatedCategories?: boolean | GlossaryItem$relatedCategoriesArgs<ExtArgs>
    _count?: boolean | GlossaryItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GlossaryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GlossaryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GlossaryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlossaryItem"
    objects: {
      details: Prisma.$GlossaryDetailPayload<ExtArgs>[]
      relatedCategories: Prisma.$GlossaryItemCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      term: string
      shortDefinition: string
      featured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["glossaryItem"]>
    composites: {}
  }

  type GlossaryItemGetPayload<S extends boolean | null | undefined | GlossaryItemDefaultArgs> = $Result.GetResult<Prisma.$GlossaryItemPayload, S>

  type GlossaryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlossaryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlossaryItemCountAggregateInputType | true
    }

  export interface GlossaryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlossaryItem'], meta: { name: 'GlossaryItem' } }
    /**
     * Find zero or one GlossaryItem that matches the filter.
     * @param {GlossaryItemFindUniqueArgs} args - Arguments to find a GlossaryItem
     * @example
     * // Get one GlossaryItem
     * const glossaryItem = await prisma.glossaryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlossaryItemFindUniqueArgs>(args: SelectSubset<T, GlossaryItemFindUniqueArgs<ExtArgs>>): Prisma__GlossaryItemClient<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlossaryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlossaryItemFindUniqueOrThrowArgs} args - Arguments to find a GlossaryItem
     * @example
     * // Get one GlossaryItem
     * const glossaryItem = await prisma.glossaryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlossaryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GlossaryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlossaryItemClient<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlossaryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemFindFirstArgs} args - Arguments to find a GlossaryItem
     * @example
     * // Get one GlossaryItem
     * const glossaryItem = await prisma.glossaryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlossaryItemFindFirstArgs>(args?: SelectSubset<T, GlossaryItemFindFirstArgs<ExtArgs>>): Prisma__GlossaryItemClient<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlossaryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemFindFirstOrThrowArgs} args - Arguments to find a GlossaryItem
     * @example
     * // Get one GlossaryItem
     * const glossaryItem = await prisma.glossaryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlossaryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GlossaryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlossaryItemClient<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlossaryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlossaryItems
     * const glossaryItems = await prisma.glossaryItem.findMany()
     * 
     * // Get first 10 GlossaryItems
     * const glossaryItems = await prisma.glossaryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const glossaryItemWithIdOnly = await prisma.glossaryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlossaryItemFindManyArgs>(args?: SelectSubset<T, GlossaryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlossaryItem.
     * @param {GlossaryItemCreateArgs} args - Arguments to create a GlossaryItem.
     * @example
     * // Create one GlossaryItem
     * const GlossaryItem = await prisma.glossaryItem.create({
     *   data: {
     *     // ... data to create a GlossaryItem
     *   }
     * })
     * 
     */
    create<T extends GlossaryItemCreateArgs>(args: SelectSubset<T, GlossaryItemCreateArgs<ExtArgs>>): Prisma__GlossaryItemClient<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlossaryItems.
     * @param {GlossaryItemCreateManyArgs} args - Arguments to create many GlossaryItems.
     * @example
     * // Create many GlossaryItems
     * const glossaryItem = await prisma.glossaryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlossaryItemCreateManyArgs>(args?: SelectSubset<T, GlossaryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlossaryItems and returns the data saved in the database.
     * @param {GlossaryItemCreateManyAndReturnArgs} args - Arguments to create many GlossaryItems.
     * @example
     * // Create many GlossaryItems
     * const glossaryItem = await prisma.glossaryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlossaryItems and only return the `id`
     * const glossaryItemWithIdOnly = await prisma.glossaryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlossaryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GlossaryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlossaryItem.
     * @param {GlossaryItemDeleteArgs} args - Arguments to delete one GlossaryItem.
     * @example
     * // Delete one GlossaryItem
     * const GlossaryItem = await prisma.glossaryItem.delete({
     *   where: {
     *     // ... filter to delete one GlossaryItem
     *   }
     * })
     * 
     */
    delete<T extends GlossaryItemDeleteArgs>(args: SelectSubset<T, GlossaryItemDeleteArgs<ExtArgs>>): Prisma__GlossaryItemClient<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlossaryItem.
     * @param {GlossaryItemUpdateArgs} args - Arguments to update one GlossaryItem.
     * @example
     * // Update one GlossaryItem
     * const glossaryItem = await prisma.glossaryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlossaryItemUpdateArgs>(args: SelectSubset<T, GlossaryItemUpdateArgs<ExtArgs>>): Prisma__GlossaryItemClient<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlossaryItems.
     * @param {GlossaryItemDeleteManyArgs} args - Arguments to filter GlossaryItems to delete.
     * @example
     * // Delete a few GlossaryItems
     * const { count } = await prisma.glossaryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlossaryItemDeleteManyArgs>(args?: SelectSubset<T, GlossaryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlossaryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlossaryItems
     * const glossaryItem = await prisma.glossaryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlossaryItemUpdateManyArgs>(args: SelectSubset<T, GlossaryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlossaryItems and returns the data updated in the database.
     * @param {GlossaryItemUpdateManyAndReturnArgs} args - Arguments to update many GlossaryItems.
     * @example
     * // Update many GlossaryItems
     * const glossaryItem = await prisma.glossaryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlossaryItems and only return the `id`
     * const glossaryItemWithIdOnly = await prisma.glossaryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlossaryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GlossaryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlossaryItem.
     * @param {GlossaryItemUpsertArgs} args - Arguments to update or create a GlossaryItem.
     * @example
     * // Update or create a GlossaryItem
     * const glossaryItem = await prisma.glossaryItem.upsert({
     *   create: {
     *     // ... data to create a GlossaryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlossaryItem we want to update
     *   }
     * })
     */
    upsert<T extends GlossaryItemUpsertArgs>(args: SelectSubset<T, GlossaryItemUpsertArgs<ExtArgs>>): Prisma__GlossaryItemClient<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlossaryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemCountArgs} args - Arguments to filter GlossaryItems to count.
     * @example
     * // Count the number of GlossaryItems
     * const count = await prisma.glossaryItem.count({
     *   where: {
     *     // ... the filter for the GlossaryItems we want to count
     *   }
     * })
    **/
    count<T extends GlossaryItemCountArgs>(
      args?: Subset<T, GlossaryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlossaryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlossaryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlossaryItemAggregateArgs>(args: Subset<T, GlossaryItemAggregateArgs>): Prisma.PrismaPromise<GetGlossaryItemAggregateType<T>>

    /**
     * Group by GlossaryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemGroupByArgs} args - Group by arguments.
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
      T extends GlossaryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlossaryItemGroupByArgs['orderBy'] }
        : { orderBy?: GlossaryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlossaryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlossaryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlossaryItem model
   */
  readonly fields: GlossaryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlossaryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlossaryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    details<T extends GlossaryItem$detailsArgs<ExtArgs> = {}>(args?: Subset<T, GlossaryItem$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedCategories<T extends GlossaryItem$relatedCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, GlossaryItem$relatedCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GlossaryItem model
   */
  interface GlossaryItemFieldRefs {
    readonly id: FieldRef<"GlossaryItem", 'String'>
    readonly slug: FieldRef<"GlossaryItem", 'String'>
    readonly term: FieldRef<"GlossaryItem", 'String'>
    readonly shortDefinition: FieldRef<"GlossaryItem", 'String'>
    readonly featured: FieldRef<"GlossaryItem", 'Boolean'>
    readonly createdAt: FieldRef<"GlossaryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"GlossaryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlossaryItem findUnique
   */
  export type GlossaryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryItem to fetch.
     */
    where: GlossaryItemWhereUniqueInput
  }

  /**
   * GlossaryItem findUniqueOrThrow
   */
  export type GlossaryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryItem to fetch.
     */
    where: GlossaryItemWhereUniqueInput
  }

  /**
   * GlossaryItem findFirst
   */
  export type GlossaryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryItem to fetch.
     */
    where?: GlossaryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryItems to fetch.
     */
    orderBy?: GlossaryItemOrderByWithRelationInput | GlossaryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlossaryItems.
     */
    cursor?: GlossaryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryItems.
     */
    distinct?: GlossaryItemScalarFieldEnum | GlossaryItemScalarFieldEnum[]
  }

  /**
   * GlossaryItem findFirstOrThrow
   */
  export type GlossaryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryItem to fetch.
     */
    where?: GlossaryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryItems to fetch.
     */
    orderBy?: GlossaryItemOrderByWithRelationInput | GlossaryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlossaryItems.
     */
    cursor?: GlossaryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryItems.
     */
    distinct?: GlossaryItemScalarFieldEnum | GlossaryItemScalarFieldEnum[]
  }

  /**
   * GlossaryItem findMany
   */
  export type GlossaryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryItems to fetch.
     */
    where?: GlossaryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryItems to fetch.
     */
    orderBy?: GlossaryItemOrderByWithRelationInput | GlossaryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlossaryItems.
     */
    cursor?: GlossaryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryItems.
     */
    distinct?: GlossaryItemScalarFieldEnum | GlossaryItemScalarFieldEnum[]
  }

  /**
   * GlossaryItem create
   */
  export type GlossaryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a GlossaryItem.
     */
    data: XOR<GlossaryItemCreateInput, GlossaryItemUncheckedCreateInput>
  }

  /**
   * GlossaryItem createMany
   */
  export type GlossaryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlossaryItems.
     */
    data: GlossaryItemCreateManyInput | GlossaryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlossaryItem createManyAndReturn
   */
  export type GlossaryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * The data used to create many GlossaryItems.
     */
    data: GlossaryItemCreateManyInput | GlossaryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlossaryItem update
   */
  export type GlossaryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a GlossaryItem.
     */
    data: XOR<GlossaryItemUpdateInput, GlossaryItemUncheckedUpdateInput>
    /**
     * Choose, which GlossaryItem to update.
     */
    where: GlossaryItemWhereUniqueInput
  }

  /**
   * GlossaryItem updateMany
   */
  export type GlossaryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlossaryItems.
     */
    data: XOR<GlossaryItemUpdateManyMutationInput, GlossaryItemUncheckedUpdateManyInput>
    /**
     * Filter which GlossaryItems to update
     */
    where?: GlossaryItemWhereInput
    /**
     * Limit how many GlossaryItems to update.
     */
    limit?: number
  }

  /**
   * GlossaryItem updateManyAndReturn
   */
  export type GlossaryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * The data used to update GlossaryItems.
     */
    data: XOR<GlossaryItemUpdateManyMutationInput, GlossaryItemUncheckedUpdateManyInput>
    /**
     * Filter which GlossaryItems to update
     */
    where?: GlossaryItemWhereInput
    /**
     * Limit how many GlossaryItems to update.
     */
    limit?: number
  }

  /**
   * GlossaryItem upsert
   */
  export type GlossaryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the GlossaryItem to update in case it exists.
     */
    where: GlossaryItemWhereUniqueInput
    /**
     * In case the GlossaryItem found by the `where` argument doesn't exist, create a new GlossaryItem with this data.
     */
    create: XOR<GlossaryItemCreateInput, GlossaryItemUncheckedCreateInput>
    /**
     * In case the GlossaryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlossaryItemUpdateInput, GlossaryItemUncheckedUpdateInput>
  }

  /**
   * GlossaryItem delete
   */
  export type GlossaryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemInclude<ExtArgs> | null
    /**
     * Filter which GlossaryItem to delete.
     */
    where: GlossaryItemWhereUniqueInput
  }

  /**
   * GlossaryItem deleteMany
   */
  export type GlossaryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlossaryItems to delete
     */
    where?: GlossaryItemWhereInput
    /**
     * Limit how many GlossaryItems to delete.
     */
    limit?: number
  }

  /**
   * GlossaryItem.details
   */
  export type GlossaryItem$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
    where?: GlossaryDetailWhereInput
    orderBy?: GlossaryDetailOrderByWithRelationInput | GlossaryDetailOrderByWithRelationInput[]
    cursor?: GlossaryDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlossaryDetailScalarFieldEnum | GlossaryDetailScalarFieldEnum[]
  }

  /**
   * GlossaryItem.relatedCategories
   */
  export type GlossaryItem$relatedCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    where?: GlossaryItemCategoryWhereInput
    orderBy?: GlossaryItemCategoryOrderByWithRelationInput | GlossaryItemCategoryOrderByWithRelationInput[]
    cursor?: GlossaryItemCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlossaryItemCategoryScalarFieldEnum | GlossaryItemCategoryScalarFieldEnum[]
  }

  /**
   * GlossaryItem without action
   */
  export type GlossaryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItem
     */
    select?: GlossaryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItem
     */
    omit?: GlossaryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemInclude<ExtArgs> | null
  }


  /**
   * Model GlossaryDetail
   */

  export type AggregateGlossaryDetail = {
    _count: GlossaryDetailCountAggregateOutputType | null
    _avg: GlossaryDetailAvgAggregateOutputType | null
    _sum: GlossaryDetailSumAggregateOutputType | null
    _min: GlossaryDetailMinAggregateOutputType | null
    _max: GlossaryDetailMaxAggregateOutputType | null
  }

  export type GlossaryDetailAvgAggregateOutputType = {
    position: number | null
  }

  export type GlossaryDetailSumAggregateOutputType = {
    position: number | null
  }

  export type GlossaryDetailMinAggregateOutputType = {
    id: string | null
    glossaryItemId: string | null
    content: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlossaryDetailMaxAggregateOutputType = {
    id: string | null
    glossaryItemId: string | null
    content: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlossaryDetailCountAggregateOutputType = {
    id: number
    glossaryItemId: number
    content: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GlossaryDetailAvgAggregateInputType = {
    position?: true
  }

  export type GlossaryDetailSumAggregateInputType = {
    position?: true
  }

  export type GlossaryDetailMinAggregateInputType = {
    id?: true
    glossaryItemId?: true
    content?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlossaryDetailMaxAggregateInputType = {
    id?: true
    glossaryItemId?: true
    content?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlossaryDetailCountAggregateInputType = {
    id?: true
    glossaryItemId?: true
    content?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GlossaryDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlossaryDetail to aggregate.
     */
    where?: GlossaryDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryDetails to fetch.
     */
    orderBy?: GlossaryDetailOrderByWithRelationInput | GlossaryDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlossaryDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlossaryDetails
    **/
    _count?: true | GlossaryDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlossaryDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlossaryDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlossaryDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlossaryDetailMaxAggregateInputType
  }

  export type GetGlossaryDetailAggregateType<T extends GlossaryDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateGlossaryDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlossaryDetail[P]>
      : GetScalarType<T[P], AggregateGlossaryDetail[P]>
  }




  export type GlossaryDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryDetailWhereInput
    orderBy?: GlossaryDetailOrderByWithAggregationInput | GlossaryDetailOrderByWithAggregationInput[]
    by: GlossaryDetailScalarFieldEnum[] | GlossaryDetailScalarFieldEnum
    having?: GlossaryDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlossaryDetailCountAggregateInputType | true
    _avg?: GlossaryDetailAvgAggregateInputType
    _sum?: GlossaryDetailSumAggregateInputType
    _min?: GlossaryDetailMinAggregateInputType
    _max?: GlossaryDetailMaxAggregateInputType
  }

  export type GlossaryDetailGroupByOutputType = {
    id: string
    glossaryItemId: string
    content: string
    position: number
    createdAt: Date
    updatedAt: Date
    _count: GlossaryDetailCountAggregateOutputType | null
    _avg: GlossaryDetailAvgAggregateOutputType | null
    _sum: GlossaryDetailSumAggregateOutputType | null
    _min: GlossaryDetailMinAggregateOutputType | null
    _max: GlossaryDetailMaxAggregateOutputType | null
  }

  type GetGlossaryDetailGroupByPayload<T extends GlossaryDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlossaryDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlossaryDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlossaryDetailGroupByOutputType[P]>
            : GetScalarType<T[P], GlossaryDetailGroupByOutputType[P]>
        }
      >
    >


  export type GlossaryDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    glossaryItemId?: boolean
    content?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryDetail"]>

  export type GlossaryDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    glossaryItemId?: boolean
    content?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryDetail"]>

  export type GlossaryDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    glossaryItemId?: boolean
    content?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryDetail"]>

  export type GlossaryDetailSelectScalar = {
    id?: boolean
    glossaryItemId?: boolean
    content?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GlossaryDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "glossaryItemId" | "content" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["glossaryDetail"]>
  export type GlossaryDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
  }
  export type GlossaryDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
  }
  export type GlossaryDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
  }

  export type $GlossaryDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlossaryDetail"
    objects: {
      glossaryItem: Prisma.$GlossaryItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      glossaryItemId: string
      content: string
      position: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["glossaryDetail"]>
    composites: {}
  }

  type GlossaryDetailGetPayload<S extends boolean | null | undefined | GlossaryDetailDefaultArgs> = $Result.GetResult<Prisma.$GlossaryDetailPayload, S>

  type GlossaryDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlossaryDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlossaryDetailCountAggregateInputType | true
    }

  export interface GlossaryDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlossaryDetail'], meta: { name: 'GlossaryDetail' } }
    /**
     * Find zero or one GlossaryDetail that matches the filter.
     * @param {GlossaryDetailFindUniqueArgs} args - Arguments to find a GlossaryDetail
     * @example
     * // Get one GlossaryDetail
     * const glossaryDetail = await prisma.glossaryDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlossaryDetailFindUniqueArgs>(args: SelectSubset<T, GlossaryDetailFindUniqueArgs<ExtArgs>>): Prisma__GlossaryDetailClient<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlossaryDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlossaryDetailFindUniqueOrThrowArgs} args - Arguments to find a GlossaryDetail
     * @example
     * // Get one GlossaryDetail
     * const glossaryDetail = await prisma.glossaryDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlossaryDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, GlossaryDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlossaryDetailClient<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlossaryDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryDetailFindFirstArgs} args - Arguments to find a GlossaryDetail
     * @example
     * // Get one GlossaryDetail
     * const glossaryDetail = await prisma.glossaryDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlossaryDetailFindFirstArgs>(args?: SelectSubset<T, GlossaryDetailFindFirstArgs<ExtArgs>>): Prisma__GlossaryDetailClient<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlossaryDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryDetailFindFirstOrThrowArgs} args - Arguments to find a GlossaryDetail
     * @example
     * // Get one GlossaryDetail
     * const glossaryDetail = await prisma.glossaryDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlossaryDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, GlossaryDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlossaryDetailClient<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlossaryDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlossaryDetails
     * const glossaryDetails = await prisma.glossaryDetail.findMany()
     * 
     * // Get first 10 GlossaryDetails
     * const glossaryDetails = await prisma.glossaryDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const glossaryDetailWithIdOnly = await prisma.glossaryDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlossaryDetailFindManyArgs>(args?: SelectSubset<T, GlossaryDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlossaryDetail.
     * @param {GlossaryDetailCreateArgs} args - Arguments to create a GlossaryDetail.
     * @example
     * // Create one GlossaryDetail
     * const GlossaryDetail = await prisma.glossaryDetail.create({
     *   data: {
     *     // ... data to create a GlossaryDetail
     *   }
     * })
     * 
     */
    create<T extends GlossaryDetailCreateArgs>(args: SelectSubset<T, GlossaryDetailCreateArgs<ExtArgs>>): Prisma__GlossaryDetailClient<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlossaryDetails.
     * @param {GlossaryDetailCreateManyArgs} args - Arguments to create many GlossaryDetails.
     * @example
     * // Create many GlossaryDetails
     * const glossaryDetail = await prisma.glossaryDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlossaryDetailCreateManyArgs>(args?: SelectSubset<T, GlossaryDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlossaryDetails and returns the data saved in the database.
     * @param {GlossaryDetailCreateManyAndReturnArgs} args - Arguments to create many GlossaryDetails.
     * @example
     * // Create many GlossaryDetails
     * const glossaryDetail = await prisma.glossaryDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlossaryDetails and only return the `id`
     * const glossaryDetailWithIdOnly = await prisma.glossaryDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlossaryDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, GlossaryDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlossaryDetail.
     * @param {GlossaryDetailDeleteArgs} args - Arguments to delete one GlossaryDetail.
     * @example
     * // Delete one GlossaryDetail
     * const GlossaryDetail = await prisma.glossaryDetail.delete({
     *   where: {
     *     // ... filter to delete one GlossaryDetail
     *   }
     * })
     * 
     */
    delete<T extends GlossaryDetailDeleteArgs>(args: SelectSubset<T, GlossaryDetailDeleteArgs<ExtArgs>>): Prisma__GlossaryDetailClient<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlossaryDetail.
     * @param {GlossaryDetailUpdateArgs} args - Arguments to update one GlossaryDetail.
     * @example
     * // Update one GlossaryDetail
     * const glossaryDetail = await prisma.glossaryDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlossaryDetailUpdateArgs>(args: SelectSubset<T, GlossaryDetailUpdateArgs<ExtArgs>>): Prisma__GlossaryDetailClient<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlossaryDetails.
     * @param {GlossaryDetailDeleteManyArgs} args - Arguments to filter GlossaryDetails to delete.
     * @example
     * // Delete a few GlossaryDetails
     * const { count } = await prisma.glossaryDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlossaryDetailDeleteManyArgs>(args?: SelectSubset<T, GlossaryDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlossaryDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlossaryDetails
     * const glossaryDetail = await prisma.glossaryDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlossaryDetailUpdateManyArgs>(args: SelectSubset<T, GlossaryDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlossaryDetails and returns the data updated in the database.
     * @param {GlossaryDetailUpdateManyAndReturnArgs} args - Arguments to update many GlossaryDetails.
     * @example
     * // Update many GlossaryDetails
     * const glossaryDetail = await prisma.glossaryDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlossaryDetails and only return the `id`
     * const glossaryDetailWithIdOnly = await prisma.glossaryDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlossaryDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, GlossaryDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlossaryDetail.
     * @param {GlossaryDetailUpsertArgs} args - Arguments to update or create a GlossaryDetail.
     * @example
     * // Update or create a GlossaryDetail
     * const glossaryDetail = await prisma.glossaryDetail.upsert({
     *   create: {
     *     // ... data to create a GlossaryDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlossaryDetail we want to update
     *   }
     * })
     */
    upsert<T extends GlossaryDetailUpsertArgs>(args: SelectSubset<T, GlossaryDetailUpsertArgs<ExtArgs>>): Prisma__GlossaryDetailClient<$Result.GetResult<Prisma.$GlossaryDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlossaryDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryDetailCountArgs} args - Arguments to filter GlossaryDetails to count.
     * @example
     * // Count the number of GlossaryDetails
     * const count = await prisma.glossaryDetail.count({
     *   where: {
     *     // ... the filter for the GlossaryDetails we want to count
     *   }
     * })
    **/
    count<T extends GlossaryDetailCountArgs>(
      args?: Subset<T, GlossaryDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlossaryDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlossaryDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlossaryDetailAggregateArgs>(args: Subset<T, GlossaryDetailAggregateArgs>): Prisma.PrismaPromise<GetGlossaryDetailAggregateType<T>>

    /**
     * Group by GlossaryDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryDetailGroupByArgs} args - Group by arguments.
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
      T extends GlossaryDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlossaryDetailGroupByArgs['orderBy'] }
        : { orderBy?: GlossaryDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlossaryDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlossaryDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlossaryDetail model
   */
  readonly fields: GlossaryDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlossaryDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlossaryDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    glossaryItem<T extends GlossaryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GlossaryItemDefaultArgs<ExtArgs>>): Prisma__GlossaryItemClient<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GlossaryDetail model
   */
  interface GlossaryDetailFieldRefs {
    readonly id: FieldRef<"GlossaryDetail", 'String'>
    readonly glossaryItemId: FieldRef<"GlossaryDetail", 'String'>
    readonly content: FieldRef<"GlossaryDetail", 'String'>
    readonly position: FieldRef<"GlossaryDetail", 'Int'>
    readonly createdAt: FieldRef<"GlossaryDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"GlossaryDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlossaryDetail findUnique
   */
  export type GlossaryDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryDetail to fetch.
     */
    where: GlossaryDetailWhereUniqueInput
  }

  /**
   * GlossaryDetail findUniqueOrThrow
   */
  export type GlossaryDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryDetail to fetch.
     */
    where: GlossaryDetailWhereUniqueInput
  }

  /**
   * GlossaryDetail findFirst
   */
  export type GlossaryDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryDetail to fetch.
     */
    where?: GlossaryDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryDetails to fetch.
     */
    orderBy?: GlossaryDetailOrderByWithRelationInput | GlossaryDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlossaryDetails.
     */
    cursor?: GlossaryDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryDetails.
     */
    distinct?: GlossaryDetailScalarFieldEnum | GlossaryDetailScalarFieldEnum[]
  }

  /**
   * GlossaryDetail findFirstOrThrow
   */
  export type GlossaryDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryDetail to fetch.
     */
    where?: GlossaryDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryDetails to fetch.
     */
    orderBy?: GlossaryDetailOrderByWithRelationInput | GlossaryDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlossaryDetails.
     */
    cursor?: GlossaryDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryDetails.
     */
    distinct?: GlossaryDetailScalarFieldEnum | GlossaryDetailScalarFieldEnum[]
  }

  /**
   * GlossaryDetail findMany
   */
  export type GlossaryDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryDetails to fetch.
     */
    where?: GlossaryDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryDetails to fetch.
     */
    orderBy?: GlossaryDetailOrderByWithRelationInput | GlossaryDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlossaryDetails.
     */
    cursor?: GlossaryDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryDetails.
     */
    distinct?: GlossaryDetailScalarFieldEnum | GlossaryDetailScalarFieldEnum[]
  }

  /**
   * GlossaryDetail create
   */
  export type GlossaryDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a GlossaryDetail.
     */
    data: XOR<GlossaryDetailCreateInput, GlossaryDetailUncheckedCreateInput>
  }

  /**
   * GlossaryDetail createMany
   */
  export type GlossaryDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlossaryDetails.
     */
    data: GlossaryDetailCreateManyInput | GlossaryDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlossaryDetail createManyAndReturn
   */
  export type GlossaryDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * The data used to create many GlossaryDetails.
     */
    data: GlossaryDetailCreateManyInput | GlossaryDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlossaryDetail update
   */
  export type GlossaryDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a GlossaryDetail.
     */
    data: XOR<GlossaryDetailUpdateInput, GlossaryDetailUncheckedUpdateInput>
    /**
     * Choose, which GlossaryDetail to update.
     */
    where: GlossaryDetailWhereUniqueInput
  }

  /**
   * GlossaryDetail updateMany
   */
  export type GlossaryDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlossaryDetails.
     */
    data: XOR<GlossaryDetailUpdateManyMutationInput, GlossaryDetailUncheckedUpdateManyInput>
    /**
     * Filter which GlossaryDetails to update
     */
    where?: GlossaryDetailWhereInput
    /**
     * Limit how many GlossaryDetails to update.
     */
    limit?: number
  }

  /**
   * GlossaryDetail updateManyAndReturn
   */
  export type GlossaryDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * The data used to update GlossaryDetails.
     */
    data: XOR<GlossaryDetailUpdateManyMutationInput, GlossaryDetailUncheckedUpdateManyInput>
    /**
     * Filter which GlossaryDetails to update
     */
    where?: GlossaryDetailWhereInput
    /**
     * Limit how many GlossaryDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlossaryDetail upsert
   */
  export type GlossaryDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the GlossaryDetail to update in case it exists.
     */
    where: GlossaryDetailWhereUniqueInput
    /**
     * In case the GlossaryDetail found by the `where` argument doesn't exist, create a new GlossaryDetail with this data.
     */
    create: XOR<GlossaryDetailCreateInput, GlossaryDetailUncheckedCreateInput>
    /**
     * In case the GlossaryDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlossaryDetailUpdateInput, GlossaryDetailUncheckedUpdateInput>
  }

  /**
   * GlossaryDetail delete
   */
  export type GlossaryDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
    /**
     * Filter which GlossaryDetail to delete.
     */
    where: GlossaryDetailWhereUniqueInput
  }

  /**
   * GlossaryDetail deleteMany
   */
  export type GlossaryDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlossaryDetails to delete
     */
    where?: GlossaryDetailWhereInput
    /**
     * Limit how many GlossaryDetails to delete.
     */
    limit?: number
  }

  /**
   * GlossaryDetail without action
   */
  export type GlossaryDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryDetail
     */
    select?: GlossaryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryDetail
     */
    omit?: GlossaryDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryDetailInclude<ExtArgs> | null
  }


  /**
   * Model GlossaryItemCategory
   */

  export type AggregateGlossaryItemCategory = {
    _count: GlossaryItemCategoryCountAggregateOutputType | null
    _avg: GlossaryItemCategoryAvgAggregateOutputType | null
    _sum: GlossaryItemCategorySumAggregateOutputType | null
    _min: GlossaryItemCategoryMinAggregateOutputType | null
    _max: GlossaryItemCategoryMaxAggregateOutputType | null
  }

  export type GlossaryItemCategoryAvgAggregateOutputType = {
    position: number | null
  }

  export type GlossaryItemCategorySumAggregateOutputType = {
    position: number | null
  }

  export type GlossaryItemCategoryMinAggregateOutputType = {
    glossaryItemId: string | null
    categoryId: string | null
    position: number | null
    createdAt: Date | null
  }

  export type GlossaryItemCategoryMaxAggregateOutputType = {
    glossaryItemId: string | null
    categoryId: string | null
    position: number | null
    createdAt: Date | null
  }

  export type GlossaryItemCategoryCountAggregateOutputType = {
    glossaryItemId: number
    categoryId: number
    position: number
    createdAt: number
    _all: number
  }


  export type GlossaryItemCategoryAvgAggregateInputType = {
    position?: true
  }

  export type GlossaryItemCategorySumAggregateInputType = {
    position?: true
  }

  export type GlossaryItemCategoryMinAggregateInputType = {
    glossaryItemId?: true
    categoryId?: true
    position?: true
    createdAt?: true
  }

  export type GlossaryItemCategoryMaxAggregateInputType = {
    glossaryItemId?: true
    categoryId?: true
    position?: true
    createdAt?: true
  }

  export type GlossaryItemCategoryCountAggregateInputType = {
    glossaryItemId?: true
    categoryId?: true
    position?: true
    createdAt?: true
    _all?: true
  }

  export type GlossaryItemCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlossaryItemCategory to aggregate.
     */
    where?: GlossaryItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryItemCategories to fetch.
     */
    orderBy?: GlossaryItemCategoryOrderByWithRelationInput | GlossaryItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlossaryItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlossaryItemCategories
    **/
    _count?: true | GlossaryItemCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlossaryItemCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlossaryItemCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlossaryItemCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlossaryItemCategoryMaxAggregateInputType
  }

  export type GetGlossaryItemCategoryAggregateType<T extends GlossaryItemCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateGlossaryItemCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlossaryItemCategory[P]>
      : GetScalarType<T[P], AggregateGlossaryItemCategory[P]>
  }




  export type GlossaryItemCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlossaryItemCategoryWhereInput
    orderBy?: GlossaryItemCategoryOrderByWithAggregationInput | GlossaryItemCategoryOrderByWithAggregationInput[]
    by: GlossaryItemCategoryScalarFieldEnum[] | GlossaryItemCategoryScalarFieldEnum
    having?: GlossaryItemCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlossaryItemCategoryCountAggregateInputType | true
    _avg?: GlossaryItemCategoryAvgAggregateInputType
    _sum?: GlossaryItemCategorySumAggregateInputType
    _min?: GlossaryItemCategoryMinAggregateInputType
    _max?: GlossaryItemCategoryMaxAggregateInputType
  }

  export type GlossaryItemCategoryGroupByOutputType = {
    glossaryItemId: string
    categoryId: string
    position: number
    createdAt: Date
    _count: GlossaryItemCategoryCountAggregateOutputType | null
    _avg: GlossaryItemCategoryAvgAggregateOutputType | null
    _sum: GlossaryItemCategorySumAggregateOutputType | null
    _min: GlossaryItemCategoryMinAggregateOutputType | null
    _max: GlossaryItemCategoryMaxAggregateOutputType | null
  }

  type GetGlossaryItemCategoryGroupByPayload<T extends GlossaryItemCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlossaryItemCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlossaryItemCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlossaryItemCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], GlossaryItemCategoryGroupByOutputType[P]>
        }
      >
    >


  export type GlossaryItemCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    glossaryItemId?: boolean
    categoryId?: boolean
    position?: boolean
    createdAt?: boolean
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryItemCategory"]>

  export type GlossaryItemCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    glossaryItemId?: boolean
    categoryId?: boolean
    position?: boolean
    createdAt?: boolean
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryItemCategory"]>

  export type GlossaryItemCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    glossaryItemId?: boolean
    categoryId?: boolean
    position?: boolean
    createdAt?: boolean
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["glossaryItemCategory"]>

  export type GlossaryItemCategorySelectScalar = {
    glossaryItemId?: boolean
    categoryId?: boolean
    position?: boolean
    createdAt?: boolean
  }

  export type GlossaryItemCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"glossaryItemId" | "categoryId" | "position" | "createdAt", ExtArgs["result"]["glossaryItemCategory"]>
  export type GlossaryItemCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type GlossaryItemCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type GlossaryItemCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    glossaryItem?: boolean | GlossaryItemDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $GlossaryItemCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlossaryItemCategory"
    objects: {
      glossaryItem: Prisma.$GlossaryItemPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      glossaryItemId: string
      categoryId: string
      position: number
      createdAt: Date
    }, ExtArgs["result"]["glossaryItemCategory"]>
    composites: {}
  }

  type GlossaryItemCategoryGetPayload<S extends boolean | null | undefined | GlossaryItemCategoryDefaultArgs> = $Result.GetResult<Prisma.$GlossaryItemCategoryPayload, S>

  type GlossaryItemCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlossaryItemCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlossaryItemCategoryCountAggregateInputType | true
    }

  export interface GlossaryItemCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlossaryItemCategory'], meta: { name: 'GlossaryItemCategory' } }
    /**
     * Find zero or one GlossaryItemCategory that matches the filter.
     * @param {GlossaryItemCategoryFindUniqueArgs} args - Arguments to find a GlossaryItemCategory
     * @example
     * // Get one GlossaryItemCategory
     * const glossaryItemCategory = await prisma.glossaryItemCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlossaryItemCategoryFindUniqueArgs>(args: SelectSubset<T, GlossaryItemCategoryFindUniqueArgs<ExtArgs>>): Prisma__GlossaryItemCategoryClient<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlossaryItemCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlossaryItemCategoryFindUniqueOrThrowArgs} args - Arguments to find a GlossaryItemCategory
     * @example
     * // Get one GlossaryItemCategory
     * const glossaryItemCategory = await prisma.glossaryItemCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlossaryItemCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, GlossaryItemCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlossaryItemCategoryClient<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlossaryItemCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemCategoryFindFirstArgs} args - Arguments to find a GlossaryItemCategory
     * @example
     * // Get one GlossaryItemCategory
     * const glossaryItemCategory = await prisma.glossaryItemCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlossaryItemCategoryFindFirstArgs>(args?: SelectSubset<T, GlossaryItemCategoryFindFirstArgs<ExtArgs>>): Prisma__GlossaryItemCategoryClient<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlossaryItemCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemCategoryFindFirstOrThrowArgs} args - Arguments to find a GlossaryItemCategory
     * @example
     * // Get one GlossaryItemCategory
     * const glossaryItemCategory = await prisma.glossaryItemCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlossaryItemCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, GlossaryItemCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlossaryItemCategoryClient<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlossaryItemCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlossaryItemCategories
     * const glossaryItemCategories = await prisma.glossaryItemCategory.findMany()
     * 
     * // Get first 10 GlossaryItemCategories
     * const glossaryItemCategories = await prisma.glossaryItemCategory.findMany({ take: 10 })
     * 
     * // Only select the `glossaryItemId`
     * const glossaryItemCategoryWithGlossaryItemIdOnly = await prisma.glossaryItemCategory.findMany({ select: { glossaryItemId: true } })
     * 
     */
    findMany<T extends GlossaryItemCategoryFindManyArgs>(args?: SelectSubset<T, GlossaryItemCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlossaryItemCategory.
     * @param {GlossaryItemCategoryCreateArgs} args - Arguments to create a GlossaryItemCategory.
     * @example
     * // Create one GlossaryItemCategory
     * const GlossaryItemCategory = await prisma.glossaryItemCategory.create({
     *   data: {
     *     // ... data to create a GlossaryItemCategory
     *   }
     * })
     * 
     */
    create<T extends GlossaryItemCategoryCreateArgs>(args: SelectSubset<T, GlossaryItemCategoryCreateArgs<ExtArgs>>): Prisma__GlossaryItemCategoryClient<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlossaryItemCategories.
     * @param {GlossaryItemCategoryCreateManyArgs} args - Arguments to create many GlossaryItemCategories.
     * @example
     * // Create many GlossaryItemCategories
     * const glossaryItemCategory = await prisma.glossaryItemCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlossaryItemCategoryCreateManyArgs>(args?: SelectSubset<T, GlossaryItemCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlossaryItemCategories and returns the data saved in the database.
     * @param {GlossaryItemCategoryCreateManyAndReturnArgs} args - Arguments to create many GlossaryItemCategories.
     * @example
     * // Create many GlossaryItemCategories
     * const glossaryItemCategory = await prisma.glossaryItemCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlossaryItemCategories and only return the `glossaryItemId`
     * const glossaryItemCategoryWithGlossaryItemIdOnly = await prisma.glossaryItemCategory.createManyAndReturn({
     *   select: { glossaryItemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlossaryItemCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, GlossaryItemCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlossaryItemCategory.
     * @param {GlossaryItemCategoryDeleteArgs} args - Arguments to delete one GlossaryItemCategory.
     * @example
     * // Delete one GlossaryItemCategory
     * const GlossaryItemCategory = await prisma.glossaryItemCategory.delete({
     *   where: {
     *     // ... filter to delete one GlossaryItemCategory
     *   }
     * })
     * 
     */
    delete<T extends GlossaryItemCategoryDeleteArgs>(args: SelectSubset<T, GlossaryItemCategoryDeleteArgs<ExtArgs>>): Prisma__GlossaryItemCategoryClient<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlossaryItemCategory.
     * @param {GlossaryItemCategoryUpdateArgs} args - Arguments to update one GlossaryItemCategory.
     * @example
     * // Update one GlossaryItemCategory
     * const glossaryItemCategory = await prisma.glossaryItemCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlossaryItemCategoryUpdateArgs>(args: SelectSubset<T, GlossaryItemCategoryUpdateArgs<ExtArgs>>): Prisma__GlossaryItemCategoryClient<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlossaryItemCategories.
     * @param {GlossaryItemCategoryDeleteManyArgs} args - Arguments to filter GlossaryItemCategories to delete.
     * @example
     * // Delete a few GlossaryItemCategories
     * const { count } = await prisma.glossaryItemCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlossaryItemCategoryDeleteManyArgs>(args?: SelectSubset<T, GlossaryItemCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlossaryItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlossaryItemCategories
     * const glossaryItemCategory = await prisma.glossaryItemCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlossaryItemCategoryUpdateManyArgs>(args: SelectSubset<T, GlossaryItemCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlossaryItemCategories and returns the data updated in the database.
     * @param {GlossaryItemCategoryUpdateManyAndReturnArgs} args - Arguments to update many GlossaryItemCategories.
     * @example
     * // Update many GlossaryItemCategories
     * const glossaryItemCategory = await prisma.glossaryItemCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlossaryItemCategories and only return the `glossaryItemId`
     * const glossaryItemCategoryWithGlossaryItemIdOnly = await prisma.glossaryItemCategory.updateManyAndReturn({
     *   select: { glossaryItemId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlossaryItemCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, GlossaryItemCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlossaryItemCategory.
     * @param {GlossaryItemCategoryUpsertArgs} args - Arguments to update or create a GlossaryItemCategory.
     * @example
     * // Update or create a GlossaryItemCategory
     * const glossaryItemCategory = await prisma.glossaryItemCategory.upsert({
     *   create: {
     *     // ... data to create a GlossaryItemCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlossaryItemCategory we want to update
     *   }
     * })
     */
    upsert<T extends GlossaryItemCategoryUpsertArgs>(args: SelectSubset<T, GlossaryItemCategoryUpsertArgs<ExtArgs>>): Prisma__GlossaryItemCategoryClient<$Result.GetResult<Prisma.$GlossaryItemCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlossaryItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemCategoryCountArgs} args - Arguments to filter GlossaryItemCategories to count.
     * @example
     * // Count the number of GlossaryItemCategories
     * const count = await prisma.glossaryItemCategory.count({
     *   where: {
     *     // ... the filter for the GlossaryItemCategories we want to count
     *   }
     * })
    **/
    count<T extends GlossaryItemCategoryCountArgs>(
      args?: Subset<T, GlossaryItemCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlossaryItemCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlossaryItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlossaryItemCategoryAggregateArgs>(args: Subset<T, GlossaryItemCategoryAggregateArgs>): Prisma.PrismaPromise<GetGlossaryItemCategoryAggregateType<T>>

    /**
     * Group by GlossaryItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlossaryItemCategoryGroupByArgs} args - Group by arguments.
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
      T extends GlossaryItemCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlossaryItemCategoryGroupByArgs['orderBy'] }
        : { orderBy?: GlossaryItemCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlossaryItemCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlossaryItemCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlossaryItemCategory model
   */
  readonly fields: GlossaryItemCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlossaryItemCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlossaryItemCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    glossaryItem<T extends GlossaryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GlossaryItemDefaultArgs<ExtArgs>>): Prisma__GlossaryItemClient<$Result.GetResult<Prisma.$GlossaryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GlossaryItemCategory model
   */
  interface GlossaryItemCategoryFieldRefs {
    readonly glossaryItemId: FieldRef<"GlossaryItemCategory", 'String'>
    readonly categoryId: FieldRef<"GlossaryItemCategory", 'String'>
    readonly position: FieldRef<"GlossaryItemCategory", 'Int'>
    readonly createdAt: FieldRef<"GlossaryItemCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlossaryItemCategory findUnique
   */
  export type GlossaryItemCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryItemCategory to fetch.
     */
    where: GlossaryItemCategoryWhereUniqueInput
  }

  /**
   * GlossaryItemCategory findUniqueOrThrow
   */
  export type GlossaryItemCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryItemCategory to fetch.
     */
    where: GlossaryItemCategoryWhereUniqueInput
  }

  /**
   * GlossaryItemCategory findFirst
   */
  export type GlossaryItemCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryItemCategory to fetch.
     */
    where?: GlossaryItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryItemCategories to fetch.
     */
    orderBy?: GlossaryItemCategoryOrderByWithRelationInput | GlossaryItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlossaryItemCategories.
     */
    cursor?: GlossaryItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryItemCategories.
     */
    distinct?: GlossaryItemCategoryScalarFieldEnum | GlossaryItemCategoryScalarFieldEnum[]
  }

  /**
   * GlossaryItemCategory findFirstOrThrow
   */
  export type GlossaryItemCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryItemCategory to fetch.
     */
    where?: GlossaryItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryItemCategories to fetch.
     */
    orderBy?: GlossaryItemCategoryOrderByWithRelationInput | GlossaryItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlossaryItemCategories.
     */
    cursor?: GlossaryItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryItemCategories.
     */
    distinct?: GlossaryItemCategoryScalarFieldEnum | GlossaryItemCategoryScalarFieldEnum[]
  }

  /**
   * GlossaryItemCategory findMany
   */
  export type GlossaryItemCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GlossaryItemCategories to fetch.
     */
    where?: GlossaryItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlossaryItemCategories to fetch.
     */
    orderBy?: GlossaryItemCategoryOrderByWithRelationInput | GlossaryItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlossaryItemCategories.
     */
    cursor?: GlossaryItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlossaryItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlossaryItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlossaryItemCategories.
     */
    distinct?: GlossaryItemCategoryScalarFieldEnum | GlossaryItemCategoryScalarFieldEnum[]
  }

  /**
   * GlossaryItemCategory create
   */
  export type GlossaryItemCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a GlossaryItemCategory.
     */
    data: XOR<GlossaryItemCategoryCreateInput, GlossaryItemCategoryUncheckedCreateInput>
  }

  /**
   * GlossaryItemCategory createMany
   */
  export type GlossaryItemCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlossaryItemCategories.
     */
    data: GlossaryItemCategoryCreateManyInput | GlossaryItemCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlossaryItemCategory createManyAndReturn
   */
  export type GlossaryItemCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many GlossaryItemCategories.
     */
    data: GlossaryItemCategoryCreateManyInput | GlossaryItemCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlossaryItemCategory update
   */
  export type GlossaryItemCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a GlossaryItemCategory.
     */
    data: XOR<GlossaryItemCategoryUpdateInput, GlossaryItemCategoryUncheckedUpdateInput>
    /**
     * Choose, which GlossaryItemCategory to update.
     */
    where: GlossaryItemCategoryWhereUniqueInput
  }

  /**
   * GlossaryItemCategory updateMany
   */
  export type GlossaryItemCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlossaryItemCategories.
     */
    data: XOR<GlossaryItemCategoryUpdateManyMutationInput, GlossaryItemCategoryUncheckedUpdateManyInput>
    /**
     * Filter which GlossaryItemCategories to update
     */
    where?: GlossaryItemCategoryWhereInput
    /**
     * Limit how many GlossaryItemCategories to update.
     */
    limit?: number
  }

  /**
   * GlossaryItemCategory updateManyAndReturn
   */
  export type GlossaryItemCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * The data used to update GlossaryItemCategories.
     */
    data: XOR<GlossaryItemCategoryUpdateManyMutationInput, GlossaryItemCategoryUncheckedUpdateManyInput>
    /**
     * Filter which GlossaryItemCategories to update
     */
    where?: GlossaryItemCategoryWhereInput
    /**
     * Limit how many GlossaryItemCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlossaryItemCategory upsert
   */
  export type GlossaryItemCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the GlossaryItemCategory to update in case it exists.
     */
    where: GlossaryItemCategoryWhereUniqueInput
    /**
     * In case the GlossaryItemCategory found by the `where` argument doesn't exist, create a new GlossaryItemCategory with this data.
     */
    create: XOR<GlossaryItemCategoryCreateInput, GlossaryItemCategoryUncheckedCreateInput>
    /**
     * In case the GlossaryItemCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlossaryItemCategoryUpdateInput, GlossaryItemCategoryUncheckedUpdateInput>
  }

  /**
   * GlossaryItemCategory delete
   */
  export type GlossaryItemCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
    /**
     * Filter which GlossaryItemCategory to delete.
     */
    where: GlossaryItemCategoryWhereUniqueInput
  }

  /**
   * GlossaryItemCategory deleteMany
   */
  export type GlossaryItemCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlossaryItemCategories to delete
     */
    where?: GlossaryItemCategoryWhereInput
    /**
     * Limit how many GlossaryItemCategories to delete.
     */
    limit?: number
  }

  /**
   * GlossaryItemCategory without action
   */
  export type GlossaryItemCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlossaryItemCategory
     */
    select?: GlossaryItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlossaryItemCategory
     */
    omit?: GlossaryItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlossaryItemCategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    position: 'position',
    title: 'title',
    summary: 'summary',
    abv: 'abv',
    origin: 'origin',
    imageUrl: 'imageUrl',
    imageAlt: 'imageAlt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const GuideScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    title: 'title',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuideScalarFieldEnum = (typeof GuideScalarFieldEnum)[keyof typeof GuideScalarFieldEnum]


  export const GuideTabScalarFieldEnum: {
    id: 'id',
    guideId: 'guideId',
    slug: 'slug',
    label: 'label',
    panelTitle: 'panelTitle',
    noteTitle: 'noteTitle',
    noteContent: 'noteContent',
    position: 'position',
    semanticKey: 'semanticKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuideTabScalarFieldEnum = (typeof GuideTabScalarFieldEnum)[keyof typeof GuideTabScalarFieldEnum]


  export const GuideClassificationScalarFieldEnum: {
    id: 'id',
    tabId: 'tabId',
    slug: 'slug',
    subtitle: 'subtitle',
    body: 'body',
    imageUrl: 'imageUrl',
    imageAlt: 'imageAlt',
    position: 'position',
    semanticKey: 'semanticKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuideClassificationScalarFieldEnum = (typeof GuideClassificationScalarFieldEnum)[keyof typeof GuideClassificationScalarFieldEnum]


  export const GuideSectionScalarFieldEnum: {
    id: 'id',
    tabId: 'tabId',
    slug: 'slug',
    title: 'title',
    subtitle: 'subtitle',
    imageUrl: 'imageUrl',
    imageAlt: 'imageAlt',
    position: 'position',
    semanticKey: 'semanticKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuideSectionScalarFieldEnum = (typeof GuideSectionScalarFieldEnum)[keyof typeof GuideSectionScalarFieldEnum]


  export const GuideParagraphScalarFieldEnum: {
    id: 'id',
    sectionId: 'sectionId',
    content: 'content',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuideParagraphScalarFieldEnum = (typeof GuideParagraphScalarFieldEnum)[keyof typeof GuideParagraphScalarFieldEnum]


  export const GuideTableScalarFieldEnum: {
    id: 'id',
    tabId: 'tabId',
    slug: 'slug',
    title: 'title',
    columns: 'columns',
    position: 'position',
    sectionSlug: 'sectionSlug',
    semanticKey: 'semanticKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuideTableScalarFieldEnum = (typeof GuideTableScalarFieldEnum)[keyof typeof GuideTableScalarFieldEnum]


  export const GuideTableRowScalarFieldEnum: {
    id: 'id',
    tableId: 'tableId',
    term: 'term',
    composition: 'composition',
    objective: 'objective',
    description: 'description',
    reference: 'reference',
    abv: 'abv',
    imageUrl: 'imageUrl',
    imageAlt: 'imageAlt',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuideTableRowScalarFieldEnum = (typeof GuideTableRowScalarFieldEnum)[keyof typeof GuideTableRowScalarFieldEnum]


  export const GlossaryItemScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    term: 'term',
    shortDefinition: 'shortDefinition',
    featured: 'featured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GlossaryItemScalarFieldEnum = (typeof GlossaryItemScalarFieldEnum)[keyof typeof GlossaryItemScalarFieldEnum]


  export const GlossaryDetailScalarFieldEnum: {
    id: 'id',
    glossaryItemId: 'glossaryItemId',
    content: 'content',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GlossaryDetailScalarFieldEnum = (typeof GlossaryDetailScalarFieldEnum)[keyof typeof GlossaryDetailScalarFieldEnum]


  export const GlossaryItemCategoryScalarFieldEnum: {
    glossaryItemId: 'glossaryItemId',
    categoryId: 'categoryId',
    position: 'position',
    createdAt: 'createdAt'
  };

  export type GlossaryItemCategoryScalarFieldEnum = (typeof GlossaryItemCategoryScalarFieldEnum)[keyof typeof GlossaryItemCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    position?: IntFilter<"Category"> | number
    title?: StringFilter<"Category"> | string
    summary?: StringFilter<"Category"> | string
    abv?: StringFilter<"Category"> | string
    origin?: StringFilter<"Category"> | string
    imageUrl?: StringFilter<"Category"> | string
    imageAlt?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    guide?: XOR<GuideNullableScalarRelationFilter, GuideWhereInput> | null
    glossaryLinks?: GlossaryItemCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    abv?: SortOrder
    origin?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guide?: GuideOrderByWithRelationInput
    glossaryLinks?: GlossaryItemCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    position?: IntFilter<"Category"> | number
    title?: StringFilter<"Category"> | string
    summary?: StringFilter<"Category"> | string
    abv?: StringFilter<"Category"> | string
    origin?: StringFilter<"Category"> | string
    imageUrl?: StringFilter<"Category"> | string
    imageAlt?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    guide?: XOR<GuideNullableScalarRelationFilter, GuideWhereInput> | null
    glossaryLinks?: GlossaryItemCategoryListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    abv?: SortOrder
    origin?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    position?: IntWithAggregatesFilter<"Category"> | number
    title?: StringWithAggregatesFilter<"Category"> | string
    summary?: StringWithAggregatesFilter<"Category"> | string
    abv?: StringWithAggregatesFilter<"Category"> | string
    origin?: StringWithAggregatesFilter<"Category"> | string
    imageUrl?: StringWithAggregatesFilter<"Category"> | string
    imageAlt?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type GuideWhereInput = {
    AND?: GuideWhereInput | GuideWhereInput[]
    OR?: GuideWhereInput[]
    NOT?: GuideWhereInput | GuideWhereInput[]
    id?: StringFilter<"Guide"> | string
    categoryId?: StringFilter<"Guide"> | string
    title?: StringFilter<"Guide"> | string
    type?: StringFilter<"Guide"> | string
    createdAt?: DateTimeFilter<"Guide"> | Date | string
    updatedAt?: DateTimeFilter<"Guide"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tabs?: GuideTabListRelationFilter
  }

  export type GuideOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    tabs?: GuideTabOrderByRelationAggregateInput
  }

  export type GuideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryId?: string
    AND?: GuideWhereInput | GuideWhereInput[]
    OR?: GuideWhereInput[]
    NOT?: GuideWhereInput | GuideWhereInput[]
    title?: StringFilter<"Guide"> | string
    type?: StringFilter<"Guide"> | string
    createdAt?: DateTimeFilter<"Guide"> | Date | string
    updatedAt?: DateTimeFilter<"Guide"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tabs?: GuideTabListRelationFilter
  }, "id" | "categoryId">

  export type GuideOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuideCountOrderByAggregateInput
    _max?: GuideMaxOrderByAggregateInput
    _min?: GuideMinOrderByAggregateInput
  }

  export type GuideScalarWhereWithAggregatesInput = {
    AND?: GuideScalarWhereWithAggregatesInput | GuideScalarWhereWithAggregatesInput[]
    OR?: GuideScalarWhereWithAggregatesInput[]
    NOT?: GuideScalarWhereWithAggregatesInput | GuideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guide"> | string
    categoryId?: StringWithAggregatesFilter<"Guide"> | string
    title?: StringWithAggregatesFilter<"Guide"> | string
    type?: StringWithAggregatesFilter<"Guide"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Guide"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guide"> | Date | string
  }

  export type GuideTabWhereInput = {
    AND?: GuideTabWhereInput | GuideTabWhereInput[]
    OR?: GuideTabWhereInput[]
    NOT?: GuideTabWhereInput | GuideTabWhereInput[]
    id?: StringFilter<"GuideTab"> | string
    guideId?: StringFilter<"GuideTab"> | string
    slug?: StringFilter<"GuideTab"> | string
    label?: StringFilter<"GuideTab"> | string
    panelTitle?: StringNullableFilter<"GuideTab"> | string | null
    noteTitle?: StringNullableFilter<"GuideTab"> | string | null
    noteContent?: StringNullableFilter<"GuideTab"> | string | null
    position?: IntFilter<"GuideTab"> | number
    semanticKey?: StringNullableFilter<"GuideTab"> | string | null
    createdAt?: DateTimeFilter<"GuideTab"> | Date | string
    updatedAt?: DateTimeFilter<"GuideTab"> | Date | string
    guide?: XOR<GuideScalarRelationFilter, GuideWhereInput>
    sections?: GuideSectionListRelationFilter
    tables?: GuideTableListRelationFilter
    classifications?: GuideClassificationListRelationFilter
  }

  export type GuideTabOrderByWithRelationInput = {
    id?: SortOrder
    guideId?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    panelTitle?: SortOrderInput | SortOrder
    noteTitle?: SortOrderInput | SortOrder
    noteContent?: SortOrderInput | SortOrder
    position?: SortOrder
    semanticKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guide?: GuideOrderByWithRelationInput
    sections?: GuideSectionOrderByRelationAggregateInput
    tables?: GuideTableOrderByRelationAggregateInput
    classifications?: GuideClassificationOrderByRelationAggregateInput
  }

  export type GuideTabWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guideId_slug?: GuideTabGuideIdSlugCompoundUniqueInput
    AND?: GuideTabWhereInput | GuideTabWhereInput[]
    OR?: GuideTabWhereInput[]
    NOT?: GuideTabWhereInput | GuideTabWhereInput[]
    guideId?: StringFilter<"GuideTab"> | string
    slug?: StringFilter<"GuideTab"> | string
    label?: StringFilter<"GuideTab"> | string
    panelTitle?: StringNullableFilter<"GuideTab"> | string | null
    noteTitle?: StringNullableFilter<"GuideTab"> | string | null
    noteContent?: StringNullableFilter<"GuideTab"> | string | null
    position?: IntFilter<"GuideTab"> | number
    semanticKey?: StringNullableFilter<"GuideTab"> | string | null
    createdAt?: DateTimeFilter<"GuideTab"> | Date | string
    updatedAt?: DateTimeFilter<"GuideTab"> | Date | string
    guide?: XOR<GuideScalarRelationFilter, GuideWhereInput>
    sections?: GuideSectionListRelationFilter
    tables?: GuideTableListRelationFilter
    classifications?: GuideClassificationListRelationFilter
  }, "id" | "guideId_slug">

  export type GuideTabOrderByWithAggregationInput = {
    id?: SortOrder
    guideId?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    panelTitle?: SortOrderInput | SortOrder
    noteTitle?: SortOrderInput | SortOrder
    noteContent?: SortOrderInput | SortOrder
    position?: SortOrder
    semanticKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuideTabCountOrderByAggregateInput
    _avg?: GuideTabAvgOrderByAggregateInput
    _max?: GuideTabMaxOrderByAggregateInput
    _min?: GuideTabMinOrderByAggregateInput
    _sum?: GuideTabSumOrderByAggregateInput
  }

  export type GuideTabScalarWhereWithAggregatesInput = {
    AND?: GuideTabScalarWhereWithAggregatesInput | GuideTabScalarWhereWithAggregatesInput[]
    OR?: GuideTabScalarWhereWithAggregatesInput[]
    NOT?: GuideTabScalarWhereWithAggregatesInput | GuideTabScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuideTab"> | string
    guideId?: StringWithAggregatesFilter<"GuideTab"> | string
    slug?: StringWithAggregatesFilter<"GuideTab"> | string
    label?: StringWithAggregatesFilter<"GuideTab"> | string
    panelTitle?: StringNullableWithAggregatesFilter<"GuideTab"> | string | null
    noteTitle?: StringNullableWithAggregatesFilter<"GuideTab"> | string | null
    noteContent?: StringNullableWithAggregatesFilter<"GuideTab"> | string | null
    position?: IntWithAggregatesFilter<"GuideTab"> | number
    semanticKey?: StringNullableWithAggregatesFilter<"GuideTab"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GuideTab"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuideTab"> | Date | string
  }

  export type GuideClassificationWhereInput = {
    AND?: GuideClassificationWhereInput | GuideClassificationWhereInput[]
    OR?: GuideClassificationWhereInput[]
    NOT?: GuideClassificationWhereInput | GuideClassificationWhereInput[]
    id?: StringFilter<"GuideClassification"> | string
    tabId?: StringFilter<"GuideClassification"> | string
    slug?: StringFilter<"GuideClassification"> | string
    subtitle?: StringFilter<"GuideClassification"> | string
    body?: StringFilter<"GuideClassification"> | string
    imageUrl?: StringFilter<"GuideClassification"> | string
    imageAlt?: StringFilter<"GuideClassification"> | string
    position?: IntFilter<"GuideClassification"> | number
    semanticKey?: StringNullableFilter<"GuideClassification"> | string | null
    createdAt?: DateTimeFilter<"GuideClassification"> | Date | string
    updatedAt?: DateTimeFilter<"GuideClassification"> | Date | string
    tab?: XOR<GuideTabScalarRelationFilter, GuideTabWhereInput>
  }

  export type GuideClassificationOrderByWithRelationInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    subtitle?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tab?: GuideTabOrderByWithRelationInput
  }

  export type GuideClassificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tabId_slug?: GuideClassificationTabIdSlugCompoundUniqueInput
    AND?: GuideClassificationWhereInput | GuideClassificationWhereInput[]
    OR?: GuideClassificationWhereInput[]
    NOT?: GuideClassificationWhereInput | GuideClassificationWhereInput[]
    tabId?: StringFilter<"GuideClassification"> | string
    slug?: StringFilter<"GuideClassification"> | string
    subtitle?: StringFilter<"GuideClassification"> | string
    body?: StringFilter<"GuideClassification"> | string
    imageUrl?: StringFilter<"GuideClassification"> | string
    imageAlt?: StringFilter<"GuideClassification"> | string
    position?: IntFilter<"GuideClassification"> | number
    semanticKey?: StringNullableFilter<"GuideClassification"> | string | null
    createdAt?: DateTimeFilter<"GuideClassification"> | Date | string
    updatedAt?: DateTimeFilter<"GuideClassification"> | Date | string
    tab?: XOR<GuideTabScalarRelationFilter, GuideTabWhereInput>
  }, "id" | "tabId_slug">

  export type GuideClassificationOrderByWithAggregationInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    subtitle?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuideClassificationCountOrderByAggregateInput
    _avg?: GuideClassificationAvgOrderByAggregateInput
    _max?: GuideClassificationMaxOrderByAggregateInput
    _min?: GuideClassificationMinOrderByAggregateInput
    _sum?: GuideClassificationSumOrderByAggregateInput
  }

  export type GuideClassificationScalarWhereWithAggregatesInput = {
    AND?: GuideClassificationScalarWhereWithAggregatesInput | GuideClassificationScalarWhereWithAggregatesInput[]
    OR?: GuideClassificationScalarWhereWithAggregatesInput[]
    NOT?: GuideClassificationScalarWhereWithAggregatesInput | GuideClassificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuideClassification"> | string
    tabId?: StringWithAggregatesFilter<"GuideClassification"> | string
    slug?: StringWithAggregatesFilter<"GuideClassification"> | string
    subtitle?: StringWithAggregatesFilter<"GuideClassification"> | string
    body?: StringWithAggregatesFilter<"GuideClassification"> | string
    imageUrl?: StringWithAggregatesFilter<"GuideClassification"> | string
    imageAlt?: StringWithAggregatesFilter<"GuideClassification"> | string
    position?: IntWithAggregatesFilter<"GuideClassification"> | number
    semanticKey?: StringNullableWithAggregatesFilter<"GuideClassification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GuideClassification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuideClassification"> | Date | string
  }

  export type GuideSectionWhereInput = {
    AND?: GuideSectionWhereInput | GuideSectionWhereInput[]
    OR?: GuideSectionWhereInput[]
    NOT?: GuideSectionWhereInput | GuideSectionWhereInput[]
    id?: StringFilter<"GuideSection"> | string
    tabId?: StringFilter<"GuideSection"> | string
    slug?: StringFilter<"GuideSection"> | string
    title?: StringFilter<"GuideSection"> | string
    subtitle?: StringFilter<"GuideSection"> | string
    imageUrl?: StringFilter<"GuideSection"> | string
    imageAlt?: StringFilter<"GuideSection"> | string
    position?: IntFilter<"GuideSection"> | number
    semanticKey?: StringNullableFilter<"GuideSection"> | string | null
    createdAt?: DateTimeFilter<"GuideSection"> | Date | string
    updatedAt?: DateTimeFilter<"GuideSection"> | Date | string
    tab?: XOR<GuideTabScalarRelationFilter, GuideTabWhereInput>
    paragraphs?: GuideParagraphListRelationFilter
  }

  export type GuideSectionOrderByWithRelationInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tab?: GuideTabOrderByWithRelationInput
    paragraphs?: GuideParagraphOrderByRelationAggregateInput
  }

  export type GuideSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tabId_slug?: GuideSectionTabIdSlugCompoundUniqueInput
    AND?: GuideSectionWhereInput | GuideSectionWhereInput[]
    OR?: GuideSectionWhereInput[]
    NOT?: GuideSectionWhereInput | GuideSectionWhereInput[]
    tabId?: StringFilter<"GuideSection"> | string
    slug?: StringFilter<"GuideSection"> | string
    title?: StringFilter<"GuideSection"> | string
    subtitle?: StringFilter<"GuideSection"> | string
    imageUrl?: StringFilter<"GuideSection"> | string
    imageAlt?: StringFilter<"GuideSection"> | string
    position?: IntFilter<"GuideSection"> | number
    semanticKey?: StringNullableFilter<"GuideSection"> | string | null
    createdAt?: DateTimeFilter<"GuideSection"> | Date | string
    updatedAt?: DateTimeFilter<"GuideSection"> | Date | string
    tab?: XOR<GuideTabScalarRelationFilter, GuideTabWhereInput>
    paragraphs?: GuideParagraphListRelationFilter
  }, "id" | "tabId_slug">

  export type GuideSectionOrderByWithAggregationInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuideSectionCountOrderByAggregateInput
    _avg?: GuideSectionAvgOrderByAggregateInput
    _max?: GuideSectionMaxOrderByAggregateInput
    _min?: GuideSectionMinOrderByAggregateInput
    _sum?: GuideSectionSumOrderByAggregateInput
  }

  export type GuideSectionScalarWhereWithAggregatesInput = {
    AND?: GuideSectionScalarWhereWithAggregatesInput | GuideSectionScalarWhereWithAggregatesInput[]
    OR?: GuideSectionScalarWhereWithAggregatesInput[]
    NOT?: GuideSectionScalarWhereWithAggregatesInput | GuideSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuideSection"> | string
    tabId?: StringWithAggregatesFilter<"GuideSection"> | string
    slug?: StringWithAggregatesFilter<"GuideSection"> | string
    title?: StringWithAggregatesFilter<"GuideSection"> | string
    subtitle?: StringWithAggregatesFilter<"GuideSection"> | string
    imageUrl?: StringWithAggregatesFilter<"GuideSection"> | string
    imageAlt?: StringWithAggregatesFilter<"GuideSection"> | string
    position?: IntWithAggregatesFilter<"GuideSection"> | number
    semanticKey?: StringNullableWithAggregatesFilter<"GuideSection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GuideSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuideSection"> | Date | string
  }

  export type GuideParagraphWhereInput = {
    AND?: GuideParagraphWhereInput | GuideParagraphWhereInput[]
    OR?: GuideParagraphWhereInput[]
    NOT?: GuideParagraphWhereInput | GuideParagraphWhereInput[]
    id?: StringFilter<"GuideParagraph"> | string
    sectionId?: StringFilter<"GuideParagraph"> | string
    content?: StringFilter<"GuideParagraph"> | string
    position?: IntFilter<"GuideParagraph"> | number
    createdAt?: DateTimeFilter<"GuideParagraph"> | Date | string
    updatedAt?: DateTimeFilter<"GuideParagraph"> | Date | string
    section?: XOR<GuideSectionScalarRelationFilter, GuideSectionWhereInput>
  }

  export type GuideParagraphOrderByWithRelationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    content?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    section?: GuideSectionOrderByWithRelationInput
  }

  export type GuideParagraphWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuideParagraphWhereInput | GuideParagraphWhereInput[]
    OR?: GuideParagraphWhereInput[]
    NOT?: GuideParagraphWhereInput | GuideParagraphWhereInput[]
    sectionId?: StringFilter<"GuideParagraph"> | string
    content?: StringFilter<"GuideParagraph"> | string
    position?: IntFilter<"GuideParagraph"> | number
    createdAt?: DateTimeFilter<"GuideParagraph"> | Date | string
    updatedAt?: DateTimeFilter<"GuideParagraph"> | Date | string
    section?: XOR<GuideSectionScalarRelationFilter, GuideSectionWhereInput>
  }, "id">

  export type GuideParagraphOrderByWithAggregationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    content?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuideParagraphCountOrderByAggregateInput
    _avg?: GuideParagraphAvgOrderByAggregateInput
    _max?: GuideParagraphMaxOrderByAggregateInput
    _min?: GuideParagraphMinOrderByAggregateInput
    _sum?: GuideParagraphSumOrderByAggregateInput
  }

  export type GuideParagraphScalarWhereWithAggregatesInput = {
    AND?: GuideParagraphScalarWhereWithAggregatesInput | GuideParagraphScalarWhereWithAggregatesInput[]
    OR?: GuideParagraphScalarWhereWithAggregatesInput[]
    NOT?: GuideParagraphScalarWhereWithAggregatesInput | GuideParagraphScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuideParagraph"> | string
    sectionId?: StringWithAggregatesFilter<"GuideParagraph"> | string
    content?: StringWithAggregatesFilter<"GuideParagraph"> | string
    position?: IntWithAggregatesFilter<"GuideParagraph"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GuideParagraph"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuideParagraph"> | Date | string
  }

  export type GuideTableWhereInput = {
    AND?: GuideTableWhereInput | GuideTableWhereInput[]
    OR?: GuideTableWhereInput[]
    NOT?: GuideTableWhereInput | GuideTableWhereInput[]
    id?: StringFilter<"GuideTable"> | string
    tabId?: StringFilter<"GuideTable"> | string
    slug?: StringFilter<"GuideTable"> | string
    title?: StringFilter<"GuideTable"> | string
    columns?: JsonFilter<"GuideTable">
    position?: IntFilter<"GuideTable"> | number
    sectionSlug?: StringNullableFilter<"GuideTable"> | string | null
    semanticKey?: StringNullableFilter<"GuideTable"> | string | null
    createdAt?: DateTimeFilter<"GuideTable"> | Date | string
    updatedAt?: DateTimeFilter<"GuideTable"> | Date | string
    tab?: XOR<GuideTabScalarRelationFilter, GuideTabWhereInput>
    rows?: GuideTableRowListRelationFilter
  }

  export type GuideTableOrderByWithRelationInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    columns?: SortOrder
    position?: SortOrder
    sectionSlug?: SortOrderInput | SortOrder
    semanticKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tab?: GuideTabOrderByWithRelationInput
    rows?: GuideTableRowOrderByRelationAggregateInput
  }

  export type GuideTableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tabId_slug?: GuideTableTabIdSlugCompoundUniqueInput
    AND?: GuideTableWhereInput | GuideTableWhereInput[]
    OR?: GuideTableWhereInput[]
    NOT?: GuideTableWhereInput | GuideTableWhereInput[]
    tabId?: StringFilter<"GuideTable"> | string
    slug?: StringFilter<"GuideTable"> | string
    title?: StringFilter<"GuideTable"> | string
    columns?: JsonFilter<"GuideTable">
    position?: IntFilter<"GuideTable"> | number
    sectionSlug?: StringNullableFilter<"GuideTable"> | string | null
    semanticKey?: StringNullableFilter<"GuideTable"> | string | null
    createdAt?: DateTimeFilter<"GuideTable"> | Date | string
    updatedAt?: DateTimeFilter<"GuideTable"> | Date | string
    tab?: XOR<GuideTabScalarRelationFilter, GuideTabWhereInput>
    rows?: GuideTableRowListRelationFilter
  }, "id" | "tabId_slug">

  export type GuideTableOrderByWithAggregationInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    columns?: SortOrder
    position?: SortOrder
    sectionSlug?: SortOrderInput | SortOrder
    semanticKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuideTableCountOrderByAggregateInput
    _avg?: GuideTableAvgOrderByAggregateInput
    _max?: GuideTableMaxOrderByAggregateInput
    _min?: GuideTableMinOrderByAggregateInput
    _sum?: GuideTableSumOrderByAggregateInput
  }

  export type GuideTableScalarWhereWithAggregatesInput = {
    AND?: GuideTableScalarWhereWithAggregatesInput | GuideTableScalarWhereWithAggregatesInput[]
    OR?: GuideTableScalarWhereWithAggregatesInput[]
    NOT?: GuideTableScalarWhereWithAggregatesInput | GuideTableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuideTable"> | string
    tabId?: StringWithAggregatesFilter<"GuideTable"> | string
    slug?: StringWithAggregatesFilter<"GuideTable"> | string
    title?: StringWithAggregatesFilter<"GuideTable"> | string
    columns?: JsonWithAggregatesFilter<"GuideTable">
    position?: IntWithAggregatesFilter<"GuideTable"> | number
    sectionSlug?: StringNullableWithAggregatesFilter<"GuideTable"> | string | null
    semanticKey?: StringNullableWithAggregatesFilter<"GuideTable"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GuideTable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuideTable"> | Date | string
  }

  export type GuideTableRowWhereInput = {
    AND?: GuideTableRowWhereInput | GuideTableRowWhereInput[]
    OR?: GuideTableRowWhereInput[]
    NOT?: GuideTableRowWhereInput | GuideTableRowWhereInput[]
    id?: StringFilter<"GuideTableRow"> | string
    tableId?: StringFilter<"GuideTableRow"> | string
    term?: StringFilter<"GuideTableRow"> | string
    composition?: StringNullableFilter<"GuideTableRow"> | string | null
    objective?: StringNullableFilter<"GuideTableRow"> | string | null
    description?: StringNullableFilter<"GuideTableRow"> | string | null
    reference?: StringNullableFilter<"GuideTableRow"> | string | null
    abv?: StringNullableFilter<"GuideTableRow"> | string | null
    imageUrl?: StringNullableFilter<"GuideTableRow"> | string | null
    imageAlt?: StringNullableFilter<"GuideTableRow"> | string | null
    position?: IntFilter<"GuideTableRow"> | number
    createdAt?: DateTimeFilter<"GuideTableRow"> | Date | string
    updatedAt?: DateTimeFilter<"GuideTableRow"> | Date | string
    table?: XOR<GuideTableScalarRelationFilter, GuideTableWhereInput>
  }

  export type GuideTableRowOrderByWithRelationInput = {
    id?: SortOrder
    tableId?: SortOrder
    term?: SortOrder
    composition?: SortOrderInput | SortOrder
    objective?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    abv?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageAlt?: SortOrderInput | SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    table?: GuideTableOrderByWithRelationInput
  }

  export type GuideTableRowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuideTableRowWhereInput | GuideTableRowWhereInput[]
    OR?: GuideTableRowWhereInput[]
    NOT?: GuideTableRowWhereInput | GuideTableRowWhereInput[]
    tableId?: StringFilter<"GuideTableRow"> | string
    term?: StringFilter<"GuideTableRow"> | string
    composition?: StringNullableFilter<"GuideTableRow"> | string | null
    objective?: StringNullableFilter<"GuideTableRow"> | string | null
    description?: StringNullableFilter<"GuideTableRow"> | string | null
    reference?: StringNullableFilter<"GuideTableRow"> | string | null
    abv?: StringNullableFilter<"GuideTableRow"> | string | null
    imageUrl?: StringNullableFilter<"GuideTableRow"> | string | null
    imageAlt?: StringNullableFilter<"GuideTableRow"> | string | null
    position?: IntFilter<"GuideTableRow"> | number
    createdAt?: DateTimeFilter<"GuideTableRow"> | Date | string
    updatedAt?: DateTimeFilter<"GuideTableRow"> | Date | string
    table?: XOR<GuideTableScalarRelationFilter, GuideTableWhereInput>
  }, "id">

  export type GuideTableRowOrderByWithAggregationInput = {
    id?: SortOrder
    tableId?: SortOrder
    term?: SortOrder
    composition?: SortOrderInput | SortOrder
    objective?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    abv?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageAlt?: SortOrderInput | SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuideTableRowCountOrderByAggregateInput
    _avg?: GuideTableRowAvgOrderByAggregateInput
    _max?: GuideTableRowMaxOrderByAggregateInput
    _min?: GuideTableRowMinOrderByAggregateInput
    _sum?: GuideTableRowSumOrderByAggregateInput
  }

  export type GuideTableRowScalarWhereWithAggregatesInput = {
    AND?: GuideTableRowScalarWhereWithAggregatesInput | GuideTableRowScalarWhereWithAggregatesInput[]
    OR?: GuideTableRowScalarWhereWithAggregatesInput[]
    NOT?: GuideTableRowScalarWhereWithAggregatesInput | GuideTableRowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuideTableRow"> | string
    tableId?: StringWithAggregatesFilter<"GuideTableRow"> | string
    term?: StringWithAggregatesFilter<"GuideTableRow"> | string
    composition?: StringNullableWithAggregatesFilter<"GuideTableRow"> | string | null
    objective?: StringNullableWithAggregatesFilter<"GuideTableRow"> | string | null
    description?: StringNullableWithAggregatesFilter<"GuideTableRow"> | string | null
    reference?: StringNullableWithAggregatesFilter<"GuideTableRow"> | string | null
    abv?: StringNullableWithAggregatesFilter<"GuideTableRow"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"GuideTableRow"> | string | null
    imageAlt?: StringNullableWithAggregatesFilter<"GuideTableRow"> | string | null
    position?: IntWithAggregatesFilter<"GuideTableRow"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GuideTableRow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuideTableRow"> | Date | string
  }

  export type GlossaryItemWhereInput = {
    AND?: GlossaryItemWhereInput | GlossaryItemWhereInput[]
    OR?: GlossaryItemWhereInput[]
    NOT?: GlossaryItemWhereInput | GlossaryItemWhereInput[]
    id?: StringFilter<"GlossaryItem"> | string
    slug?: StringFilter<"GlossaryItem"> | string
    term?: StringFilter<"GlossaryItem"> | string
    shortDefinition?: StringFilter<"GlossaryItem"> | string
    featured?: BoolFilter<"GlossaryItem"> | boolean
    createdAt?: DateTimeFilter<"GlossaryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GlossaryItem"> | Date | string
    details?: GlossaryDetailListRelationFilter
    relatedCategories?: GlossaryItemCategoryListRelationFilter
  }

  export type GlossaryItemOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    term?: SortOrder
    shortDefinition?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    details?: GlossaryDetailOrderByRelationAggregateInput
    relatedCategories?: GlossaryItemCategoryOrderByRelationAggregateInput
  }

  export type GlossaryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: GlossaryItemWhereInput | GlossaryItemWhereInput[]
    OR?: GlossaryItemWhereInput[]
    NOT?: GlossaryItemWhereInput | GlossaryItemWhereInput[]
    term?: StringFilter<"GlossaryItem"> | string
    shortDefinition?: StringFilter<"GlossaryItem"> | string
    featured?: BoolFilter<"GlossaryItem"> | boolean
    createdAt?: DateTimeFilter<"GlossaryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GlossaryItem"> | Date | string
    details?: GlossaryDetailListRelationFilter
    relatedCategories?: GlossaryItemCategoryListRelationFilter
  }, "id" | "slug">

  export type GlossaryItemOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    term?: SortOrder
    shortDefinition?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GlossaryItemCountOrderByAggregateInput
    _max?: GlossaryItemMaxOrderByAggregateInput
    _min?: GlossaryItemMinOrderByAggregateInput
  }

  export type GlossaryItemScalarWhereWithAggregatesInput = {
    AND?: GlossaryItemScalarWhereWithAggregatesInput | GlossaryItemScalarWhereWithAggregatesInput[]
    OR?: GlossaryItemScalarWhereWithAggregatesInput[]
    NOT?: GlossaryItemScalarWhereWithAggregatesInput | GlossaryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlossaryItem"> | string
    slug?: StringWithAggregatesFilter<"GlossaryItem"> | string
    term?: StringWithAggregatesFilter<"GlossaryItem"> | string
    shortDefinition?: StringWithAggregatesFilter<"GlossaryItem"> | string
    featured?: BoolWithAggregatesFilter<"GlossaryItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GlossaryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlossaryItem"> | Date | string
  }

  export type GlossaryDetailWhereInput = {
    AND?: GlossaryDetailWhereInput | GlossaryDetailWhereInput[]
    OR?: GlossaryDetailWhereInput[]
    NOT?: GlossaryDetailWhereInput | GlossaryDetailWhereInput[]
    id?: StringFilter<"GlossaryDetail"> | string
    glossaryItemId?: StringFilter<"GlossaryDetail"> | string
    content?: StringFilter<"GlossaryDetail"> | string
    position?: IntFilter<"GlossaryDetail"> | number
    createdAt?: DateTimeFilter<"GlossaryDetail"> | Date | string
    updatedAt?: DateTimeFilter<"GlossaryDetail"> | Date | string
    glossaryItem?: XOR<GlossaryItemScalarRelationFilter, GlossaryItemWhereInput>
  }

  export type GlossaryDetailOrderByWithRelationInput = {
    id?: SortOrder
    glossaryItemId?: SortOrder
    content?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    glossaryItem?: GlossaryItemOrderByWithRelationInput
  }

  export type GlossaryDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlossaryDetailWhereInput | GlossaryDetailWhereInput[]
    OR?: GlossaryDetailWhereInput[]
    NOT?: GlossaryDetailWhereInput | GlossaryDetailWhereInput[]
    glossaryItemId?: StringFilter<"GlossaryDetail"> | string
    content?: StringFilter<"GlossaryDetail"> | string
    position?: IntFilter<"GlossaryDetail"> | number
    createdAt?: DateTimeFilter<"GlossaryDetail"> | Date | string
    updatedAt?: DateTimeFilter<"GlossaryDetail"> | Date | string
    glossaryItem?: XOR<GlossaryItemScalarRelationFilter, GlossaryItemWhereInput>
  }, "id">

  export type GlossaryDetailOrderByWithAggregationInput = {
    id?: SortOrder
    glossaryItemId?: SortOrder
    content?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GlossaryDetailCountOrderByAggregateInput
    _avg?: GlossaryDetailAvgOrderByAggregateInput
    _max?: GlossaryDetailMaxOrderByAggregateInput
    _min?: GlossaryDetailMinOrderByAggregateInput
    _sum?: GlossaryDetailSumOrderByAggregateInput
  }

  export type GlossaryDetailScalarWhereWithAggregatesInput = {
    AND?: GlossaryDetailScalarWhereWithAggregatesInput | GlossaryDetailScalarWhereWithAggregatesInput[]
    OR?: GlossaryDetailScalarWhereWithAggregatesInput[]
    NOT?: GlossaryDetailScalarWhereWithAggregatesInput | GlossaryDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlossaryDetail"> | string
    glossaryItemId?: StringWithAggregatesFilter<"GlossaryDetail"> | string
    content?: StringWithAggregatesFilter<"GlossaryDetail"> | string
    position?: IntWithAggregatesFilter<"GlossaryDetail"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GlossaryDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlossaryDetail"> | Date | string
  }

  export type GlossaryItemCategoryWhereInput = {
    AND?: GlossaryItemCategoryWhereInput | GlossaryItemCategoryWhereInput[]
    OR?: GlossaryItemCategoryWhereInput[]
    NOT?: GlossaryItemCategoryWhereInput | GlossaryItemCategoryWhereInput[]
    glossaryItemId?: StringFilter<"GlossaryItemCategory"> | string
    categoryId?: StringFilter<"GlossaryItemCategory"> | string
    position?: IntFilter<"GlossaryItemCategory"> | number
    createdAt?: DateTimeFilter<"GlossaryItemCategory"> | Date | string
    glossaryItem?: XOR<GlossaryItemScalarRelationFilter, GlossaryItemWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type GlossaryItemCategoryOrderByWithRelationInput = {
    glossaryItemId?: SortOrder
    categoryId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    glossaryItem?: GlossaryItemOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type GlossaryItemCategoryWhereUniqueInput = Prisma.AtLeast<{
    glossaryItemId_categoryId?: GlossaryItemCategoryGlossaryItemIdCategoryIdCompoundUniqueInput
    AND?: GlossaryItemCategoryWhereInput | GlossaryItemCategoryWhereInput[]
    OR?: GlossaryItemCategoryWhereInput[]
    NOT?: GlossaryItemCategoryWhereInput | GlossaryItemCategoryWhereInput[]
    glossaryItemId?: StringFilter<"GlossaryItemCategory"> | string
    categoryId?: StringFilter<"GlossaryItemCategory"> | string
    position?: IntFilter<"GlossaryItemCategory"> | number
    createdAt?: DateTimeFilter<"GlossaryItemCategory"> | Date | string
    glossaryItem?: XOR<GlossaryItemScalarRelationFilter, GlossaryItemWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "glossaryItemId_categoryId">

  export type GlossaryItemCategoryOrderByWithAggregationInput = {
    glossaryItemId?: SortOrder
    categoryId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    _count?: GlossaryItemCategoryCountOrderByAggregateInput
    _avg?: GlossaryItemCategoryAvgOrderByAggregateInput
    _max?: GlossaryItemCategoryMaxOrderByAggregateInput
    _min?: GlossaryItemCategoryMinOrderByAggregateInput
    _sum?: GlossaryItemCategorySumOrderByAggregateInput
  }

  export type GlossaryItemCategoryScalarWhereWithAggregatesInput = {
    AND?: GlossaryItemCategoryScalarWhereWithAggregatesInput | GlossaryItemCategoryScalarWhereWithAggregatesInput[]
    OR?: GlossaryItemCategoryScalarWhereWithAggregatesInput[]
    NOT?: GlossaryItemCategoryScalarWhereWithAggregatesInput | GlossaryItemCategoryScalarWhereWithAggregatesInput[]
    glossaryItemId?: StringWithAggregatesFilter<"GlossaryItemCategory"> | string
    categoryId?: StringWithAggregatesFilter<"GlossaryItemCategory"> | string
    position?: IntWithAggregatesFilter<"GlossaryItemCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GlossaryItemCategory"> | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    slug: string
    position: number
    title: string
    summary: string
    abv: string
    origin: string
    imageUrl: string
    imageAlt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideCreateNestedOneWithoutCategoryInput
    glossaryLinks?: GlossaryItemCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    slug: string
    position: number
    title: string
    summary: string
    abv: string
    origin: string
    imageUrl: string
    imageAlt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideUncheckedCreateNestedOneWithoutCategoryInput
    glossaryLinks?: GlossaryItemCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    abv?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneWithoutCategoryNestedInput
    glossaryLinks?: GlossaryItemCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    abv?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUncheckedUpdateOneWithoutCategoryNestedInput
    glossaryLinks?: GlossaryItemCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    slug: string
    position: number
    title: string
    summary: string
    abv: string
    origin: string
    imageUrl: string
    imageAlt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    abv?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    abv?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideCreateInput = {
    id?: string
    title: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutGuideInput
    tabs?: GuideTabCreateNestedManyWithoutGuideInput
  }

  export type GuideUncheckedCreateInput = {
    id?: string
    categoryId: string
    title: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tabs?: GuideTabUncheckedCreateNestedManyWithoutGuideInput
  }

  export type GuideUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutGuideNestedInput
    tabs?: GuideTabUpdateManyWithoutGuideNestedInput
  }

  export type GuideUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tabs?: GuideTabUncheckedUpdateManyWithoutGuideNestedInput
  }

  export type GuideCreateManyInput = {
    id?: string
    categoryId: string
    title: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTabCreateInput = {
    id?: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutTabsInput
    sections?: GuideSectionCreateNestedManyWithoutTabInput
    tables?: GuideTableCreateNestedManyWithoutTabInput
    classifications?: GuideClassificationCreateNestedManyWithoutTabInput
  }

  export type GuideTabUncheckedCreateInput = {
    id?: string
    guideId: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: GuideSectionUncheckedCreateNestedManyWithoutTabInput
    tables?: GuideTableUncheckedCreateNestedManyWithoutTabInput
    classifications?: GuideClassificationUncheckedCreateNestedManyWithoutTabInput
  }

  export type GuideTabUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutTabsNestedInput
    sections?: GuideSectionUpdateManyWithoutTabNestedInput
    tables?: GuideTableUpdateManyWithoutTabNestedInput
    classifications?: GuideClassificationUpdateManyWithoutTabNestedInput
  }

  export type GuideTabUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guideId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: GuideSectionUncheckedUpdateManyWithoutTabNestedInput
    tables?: GuideTableUncheckedUpdateManyWithoutTabNestedInput
    classifications?: GuideClassificationUncheckedUpdateManyWithoutTabNestedInput
  }

  export type GuideTabCreateManyInput = {
    id?: string
    guideId: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideTabUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTabUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guideId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideClassificationCreateInput = {
    id?: string
    slug: string
    subtitle?: string
    body: string
    imageUrl?: string
    imageAlt?: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tab: GuideTabCreateNestedOneWithoutClassificationsInput
  }

  export type GuideClassificationUncheckedCreateInput = {
    id?: string
    tabId: string
    slug: string
    subtitle?: string
    body: string
    imageUrl?: string
    imageAlt?: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideClassificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tab?: GuideTabUpdateOneRequiredWithoutClassificationsNestedInput
  }

  export type GuideClassificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideClassificationCreateManyInput = {
    id?: string
    tabId: string
    slug: string
    subtitle?: string
    body: string
    imageUrl?: string
    imageAlt?: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideClassificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideClassificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideSectionCreateInput = {
    id?: string
    slug: string
    title: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tab: GuideTabCreateNestedOneWithoutSectionsInput
    paragraphs?: GuideParagraphCreateNestedManyWithoutSectionInput
  }

  export type GuideSectionUncheckedCreateInput = {
    id?: string
    tabId: string
    slug: string
    title: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paragraphs?: GuideParagraphUncheckedCreateNestedManyWithoutSectionInput
  }

  export type GuideSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tab?: GuideTabUpdateOneRequiredWithoutSectionsNestedInput
    paragraphs?: GuideParagraphUpdateManyWithoutSectionNestedInput
  }

  export type GuideSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paragraphs?: GuideParagraphUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type GuideSectionCreateManyInput = {
    id?: string
    tabId: string
    slug: string
    title: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideParagraphCreateInput = {
    id?: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    section: GuideSectionCreateNestedOneWithoutParagraphsInput
  }

  export type GuideParagraphUncheckedCreateInput = {
    id?: string
    sectionId: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideParagraphUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: GuideSectionUpdateOneRequiredWithoutParagraphsNestedInput
  }

  export type GuideParagraphUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideParagraphCreateManyInput = {
    id?: string
    sectionId: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideParagraphUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideParagraphUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTableCreateInput = {
    id?: string
    slug: string
    title: string
    columns: JsonNullValueInput | InputJsonValue
    position: number
    sectionSlug?: string | null
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tab: GuideTabCreateNestedOneWithoutTablesInput
    rows?: GuideTableRowCreateNestedManyWithoutTableInput
  }

  export type GuideTableUncheckedCreateInput = {
    id?: string
    tabId: string
    slug: string
    title: string
    columns: JsonNullValueInput | InputJsonValue
    position: number
    sectionSlug?: string | null
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rows?: GuideTableRowUncheckedCreateNestedManyWithoutTableInput
  }

  export type GuideTableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columns?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    sectionSlug?: NullableStringFieldUpdateOperationsInput | string | null
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tab?: GuideTabUpdateOneRequiredWithoutTablesNestedInput
    rows?: GuideTableRowUpdateManyWithoutTableNestedInput
  }

  export type GuideTableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columns?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    sectionSlug?: NullableStringFieldUpdateOperationsInput | string | null
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: GuideTableRowUncheckedUpdateManyWithoutTableNestedInput
  }

  export type GuideTableCreateManyInput = {
    id?: string
    tabId: string
    slug: string
    title: string
    columns: JsonNullValueInput | InputJsonValue
    position: number
    sectionSlug?: string | null
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideTableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columns?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    sectionSlug?: NullableStringFieldUpdateOperationsInput | string | null
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columns?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    sectionSlug?: NullableStringFieldUpdateOperationsInput | string | null
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTableRowCreateInput = {
    id?: string
    term: string
    composition?: string | null
    objective?: string | null
    description?: string | null
    reference?: string | null
    abv?: string | null
    imageUrl?: string | null
    imageAlt?: string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: GuideTableCreateNestedOneWithoutRowsInput
  }

  export type GuideTableRowUncheckedCreateInput = {
    id?: string
    tableId: string
    term: string
    composition?: string | null
    objective?: string | null
    description?: string | null
    reference?: string | null
    abv?: string | null
    imageUrl?: string | null
    imageAlt?: string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideTableRowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    composition?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    abv?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: GuideTableUpdateOneRequiredWithoutRowsNestedInput
  }

  export type GuideTableRowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    composition?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    abv?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTableRowCreateManyInput = {
    id?: string
    tableId: string
    term: string
    composition?: string | null
    objective?: string | null
    description?: string | null
    reference?: string | null
    abv?: string | null
    imageUrl?: string | null
    imageAlt?: string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideTableRowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    composition?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    abv?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTableRowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    composition?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    abv?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryItemCreateInput = {
    id?: string
    slug: string
    term: string
    shortDefinition: string
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: GlossaryDetailCreateNestedManyWithoutGlossaryItemInput
    relatedCategories?: GlossaryItemCategoryCreateNestedManyWithoutGlossaryItemInput
  }

  export type GlossaryItemUncheckedCreateInput = {
    id?: string
    slug: string
    term: string
    shortDefinition: string
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: GlossaryDetailUncheckedCreateNestedManyWithoutGlossaryItemInput
    relatedCategories?: GlossaryItemCategoryUncheckedCreateNestedManyWithoutGlossaryItemInput
  }

  export type GlossaryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    shortDefinition?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: GlossaryDetailUpdateManyWithoutGlossaryItemNestedInput
    relatedCategories?: GlossaryItemCategoryUpdateManyWithoutGlossaryItemNestedInput
  }

  export type GlossaryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    shortDefinition?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: GlossaryDetailUncheckedUpdateManyWithoutGlossaryItemNestedInput
    relatedCategories?: GlossaryItemCategoryUncheckedUpdateManyWithoutGlossaryItemNestedInput
  }

  export type GlossaryItemCreateManyInput = {
    id?: string
    slug: string
    term: string
    shortDefinition: string
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlossaryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    shortDefinition?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    shortDefinition?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryDetailCreateInput = {
    id?: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    glossaryItem: GlossaryItemCreateNestedOneWithoutDetailsInput
  }

  export type GlossaryDetailUncheckedCreateInput = {
    id?: string
    glossaryItemId: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlossaryDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glossaryItem?: GlossaryItemUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type GlossaryDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    glossaryItemId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryDetailCreateManyInput = {
    id?: string
    glossaryItemId: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlossaryDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    glossaryItemId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryItemCategoryCreateInput = {
    position: number
    createdAt?: Date | string
    glossaryItem: GlossaryItemCreateNestedOneWithoutRelatedCategoriesInput
    category: CategoryCreateNestedOneWithoutGlossaryLinksInput
  }

  export type GlossaryItemCategoryUncheckedCreateInput = {
    glossaryItemId: string
    categoryId: string
    position: number
    createdAt?: Date | string
  }

  export type GlossaryItemCategoryUpdateInput = {
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glossaryItem?: GlossaryItemUpdateOneRequiredWithoutRelatedCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutGlossaryLinksNestedInput
  }

  export type GlossaryItemCategoryUncheckedUpdateInput = {
    glossaryItemId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryItemCategoryCreateManyInput = {
    glossaryItemId: string
    categoryId: string
    position: number
    createdAt?: Date | string
  }

  export type GlossaryItemCategoryUpdateManyMutationInput = {
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryItemCategoryUncheckedUpdateManyInput = {
    glossaryItemId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GuideNullableScalarRelationFilter = {
    is?: GuideWhereInput | null
    isNot?: GuideWhereInput | null
  }

  export type GlossaryItemCategoryListRelationFilter = {
    every?: GlossaryItemCategoryWhereInput
    some?: GlossaryItemCategoryWhereInput
    none?: GlossaryItemCategoryWhereInput
  }

  export type GlossaryItemCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    abv?: SortOrder
    origin?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    abv?: SortOrder
    origin?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    abv?: SortOrder
    origin?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type GuideTabListRelationFilter = {
    every?: GuideTabWhereInput
    some?: GuideTabWhereInput
    none?: GuideTabWhereInput
  }

  export type GuideTabOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuideCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GuideScalarRelationFilter = {
    is?: GuideWhereInput
    isNot?: GuideWhereInput
  }

  export type GuideSectionListRelationFilter = {
    every?: GuideSectionWhereInput
    some?: GuideSectionWhereInput
    none?: GuideSectionWhereInput
  }

  export type GuideTableListRelationFilter = {
    every?: GuideTableWhereInput
    some?: GuideTableWhereInput
    none?: GuideTableWhereInput
  }

  export type GuideClassificationListRelationFilter = {
    every?: GuideClassificationWhereInput
    some?: GuideClassificationWhereInput
    none?: GuideClassificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GuideSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuideTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuideClassificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuideTabGuideIdSlugCompoundUniqueInput = {
    guideId: string
    slug: string
  }

  export type GuideTabCountOrderByAggregateInput = {
    id?: SortOrder
    guideId?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    panelTitle?: SortOrder
    noteTitle?: SortOrder
    noteContent?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideTabAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GuideTabMaxOrderByAggregateInput = {
    id?: SortOrder
    guideId?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    panelTitle?: SortOrder
    noteTitle?: SortOrder
    noteContent?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideTabMinOrderByAggregateInput = {
    id?: SortOrder
    guideId?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    panelTitle?: SortOrder
    noteTitle?: SortOrder
    noteContent?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideTabSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type GuideTabScalarRelationFilter = {
    is?: GuideTabWhereInput
    isNot?: GuideTabWhereInput
  }

  export type GuideClassificationTabIdSlugCompoundUniqueInput = {
    tabId: string
    slug: string
  }

  export type GuideClassificationCountOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    subtitle?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideClassificationAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GuideClassificationMaxOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    subtitle?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideClassificationMinOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    subtitle?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideClassificationSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GuideParagraphListRelationFilter = {
    every?: GuideParagraphWhereInput
    some?: GuideParagraphWhereInput
    none?: GuideParagraphWhereInput
  }

  export type GuideParagraphOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuideSectionTabIdSlugCompoundUniqueInput = {
    tabId: string
    slug: string
  }

  export type GuideSectionCountOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideSectionAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GuideSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideSectionMinOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideSectionSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GuideSectionScalarRelationFilter = {
    is?: GuideSectionWhereInput
    isNot?: GuideSectionWhereInput
  }

  export type GuideParagraphCountOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    content?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideParagraphAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GuideParagraphMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    content?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideParagraphMinOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    content?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideParagraphSumOrderByAggregateInput = {
    position?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GuideTableRowListRelationFilter = {
    every?: GuideTableRowWhereInput
    some?: GuideTableRowWhereInput
    none?: GuideTableRowWhereInput
  }

  export type GuideTableRowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuideTableTabIdSlugCompoundUniqueInput = {
    tabId: string
    slug: string
  }

  export type GuideTableCountOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    columns?: SortOrder
    position?: SortOrder
    sectionSlug?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideTableAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GuideTableMaxOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    position?: SortOrder
    sectionSlug?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideTableMinOrderByAggregateInput = {
    id?: SortOrder
    tabId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    position?: SortOrder
    sectionSlug?: SortOrder
    semanticKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideTableSumOrderByAggregateInput = {
    position?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type GuideTableScalarRelationFilter = {
    is?: GuideTableWhereInput
    isNot?: GuideTableWhereInput
  }

  export type GuideTableRowCountOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    term?: SortOrder
    composition?: SortOrder
    objective?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    abv?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideTableRowAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GuideTableRowMaxOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    term?: SortOrder
    composition?: SortOrder
    objective?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    abv?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideTableRowMinOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    term?: SortOrder
    composition?: SortOrder
    objective?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    abv?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideTableRowSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GlossaryDetailListRelationFilter = {
    every?: GlossaryDetailWhereInput
    some?: GlossaryDetailWhereInput
    none?: GlossaryDetailWhereInput
  }

  export type GlossaryDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GlossaryItemCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    term?: SortOrder
    shortDefinition?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlossaryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    term?: SortOrder
    shortDefinition?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlossaryItemMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    term?: SortOrder
    shortDefinition?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GlossaryItemScalarRelationFilter = {
    is?: GlossaryItemWhereInput
    isNot?: GlossaryItemWhereInput
  }

  export type GlossaryDetailCountOrderByAggregateInput = {
    id?: SortOrder
    glossaryItemId?: SortOrder
    content?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlossaryDetailAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GlossaryDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    glossaryItemId?: SortOrder
    content?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlossaryDetailMinOrderByAggregateInput = {
    id?: SortOrder
    glossaryItemId?: SortOrder
    content?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlossaryDetailSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GlossaryItemCategoryGlossaryItemIdCategoryIdCompoundUniqueInput = {
    glossaryItemId: string
    categoryId: string
  }

  export type GlossaryItemCategoryCountOrderByAggregateInput = {
    glossaryItemId?: SortOrder
    categoryId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type GlossaryItemCategoryAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GlossaryItemCategoryMaxOrderByAggregateInput = {
    glossaryItemId?: SortOrder
    categoryId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type GlossaryItemCategoryMinOrderByAggregateInput = {
    glossaryItemId?: SortOrder
    categoryId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type GlossaryItemCategorySumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GuideCreateNestedOneWithoutCategoryInput = {
    create?: XOR<GuideCreateWithoutCategoryInput, GuideUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: GuideCreateOrConnectWithoutCategoryInput
    connect?: GuideWhereUniqueInput
  }

  export type GlossaryItemCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<GlossaryItemCategoryCreateWithoutCategoryInput, GlossaryItemCategoryUncheckedCreateWithoutCategoryInput> | GlossaryItemCategoryCreateWithoutCategoryInput[] | GlossaryItemCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GlossaryItemCategoryCreateOrConnectWithoutCategoryInput | GlossaryItemCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: GlossaryItemCategoryCreateManyCategoryInputEnvelope
    connect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
  }

  export type GuideUncheckedCreateNestedOneWithoutCategoryInput = {
    create?: XOR<GuideCreateWithoutCategoryInput, GuideUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: GuideCreateOrConnectWithoutCategoryInput
    connect?: GuideWhereUniqueInput
  }

  export type GlossaryItemCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<GlossaryItemCategoryCreateWithoutCategoryInput, GlossaryItemCategoryUncheckedCreateWithoutCategoryInput> | GlossaryItemCategoryCreateWithoutCategoryInput[] | GlossaryItemCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GlossaryItemCategoryCreateOrConnectWithoutCategoryInput | GlossaryItemCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: GlossaryItemCategoryCreateManyCategoryInputEnvelope
    connect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GuideUpdateOneWithoutCategoryNestedInput = {
    create?: XOR<GuideCreateWithoutCategoryInput, GuideUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: GuideCreateOrConnectWithoutCategoryInput
    upsert?: GuideUpsertWithoutCategoryInput
    disconnect?: GuideWhereInput | boolean
    delete?: GuideWhereInput | boolean
    connect?: GuideWhereUniqueInput
    update?: XOR<XOR<GuideUpdateToOneWithWhereWithoutCategoryInput, GuideUpdateWithoutCategoryInput>, GuideUncheckedUpdateWithoutCategoryInput>
  }

  export type GlossaryItemCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<GlossaryItemCategoryCreateWithoutCategoryInput, GlossaryItemCategoryUncheckedCreateWithoutCategoryInput> | GlossaryItemCategoryCreateWithoutCategoryInput[] | GlossaryItemCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GlossaryItemCategoryCreateOrConnectWithoutCategoryInput | GlossaryItemCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: GlossaryItemCategoryUpsertWithWhereUniqueWithoutCategoryInput | GlossaryItemCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: GlossaryItemCategoryCreateManyCategoryInputEnvelope
    set?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    disconnect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    delete?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    connect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    update?: GlossaryItemCategoryUpdateWithWhereUniqueWithoutCategoryInput | GlossaryItemCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: GlossaryItemCategoryUpdateManyWithWhereWithoutCategoryInput | GlossaryItemCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: GlossaryItemCategoryScalarWhereInput | GlossaryItemCategoryScalarWhereInput[]
  }

  export type GuideUncheckedUpdateOneWithoutCategoryNestedInput = {
    create?: XOR<GuideCreateWithoutCategoryInput, GuideUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: GuideCreateOrConnectWithoutCategoryInput
    upsert?: GuideUpsertWithoutCategoryInput
    disconnect?: GuideWhereInput | boolean
    delete?: GuideWhereInput | boolean
    connect?: GuideWhereUniqueInput
    update?: XOR<XOR<GuideUpdateToOneWithWhereWithoutCategoryInput, GuideUpdateWithoutCategoryInput>, GuideUncheckedUpdateWithoutCategoryInput>
  }

  export type GlossaryItemCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<GlossaryItemCategoryCreateWithoutCategoryInput, GlossaryItemCategoryUncheckedCreateWithoutCategoryInput> | GlossaryItemCategoryCreateWithoutCategoryInput[] | GlossaryItemCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GlossaryItemCategoryCreateOrConnectWithoutCategoryInput | GlossaryItemCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: GlossaryItemCategoryUpsertWithWhereUniqueWithoutCategoryInput | GlossaryItemCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: GlossaryItemCategoryCreateManyCategoryInputEnvelope
    set?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    disconnect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    delete?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    connect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    update?: GlossaryItemCategoryUpdateWithWhereUniqueWithoutCategoryInput | GlossaryItemCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: GlossaryItemCategoryUpdateManyWithWhereWithoutCategoryInput | GlossaryItemCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: GlossaryItemCategoryScalarWhereInput | GlossaryItemCategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutGuideInput = {
    create?: XOR<CategoryCreateWithoutGuideInput, CategoryUncheckedCreateWithoutGuideInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutGuideInput
    connect?: CategoryWhereUniqueInput
  }

  export type GuideTabCreateNestedManyWithoutGuideInput = {
    create?: XOR<GuideTabCreateWithoutGuideInput, GuideTabUncheckedCreateWithoutGuideInput> | GuideTabCreateWithoutGuideInput[] | GuideTabUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: GuideTabCreateOrConnectWithoutGuideInput | GuideTabCreateOrConnectWithoutGuideInput[]
    createMany?: GuideTabCreateManyGuideInputEnvelope
    connect?: GuideTabWhereUniqueInput | GuideTabWhereUniqueInput[]
  }

  export type GuideTabUncheckedCreateNestedManyWithoutGuideInput = {
    create?: XOR<GuideTabCreateWithoutGuideInput, GuideTabUncheckedCreateWithoutGuideInput> | GuideTabCreateWithoutGuideInput[] | GuideTabUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: GuideTabCreateOrConnectWithoutGuideInput | GuideTabCreateOrConnectWithoutGuideInput[]
    createMany?: GuideTabCreateManyGuideInputEnvelope
    connect?: GuideTabWhereUniqueInput | GuideTabWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutGuideNestedInput = {
    create?: XOR<CategoryCreateWithoutGuideInput, CategoryUncheckedCreateWithoutGuideInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutGuideInput
    upsert?: CategoryUpsertWithoutGuideInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutGuideInput, CategoryUpdateWithoutGuideInput>, CategoryUncheckedUpdateWithoutGuideInput>
  }

  export type GuideTabUpdateManyWithoutGuideNestedInput = {
    create?: XOR<GuideTabCreateWithoutGuideInput, GuideTabUncheckedCreateWithoutGuideInput> | GuideTabCreateWithoutGuideInput[] | GuideTabUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: GuideTabCreateOrConnectWithoutGuideInput | GuideTabCreateOrConnectWithoutGuideInput[]
    upsert?: GuideTabUpsertWithWhereUniqueWithoutGuideInput | GuideTabUpsertWithWhereUniqueWithoutGuideInput[]
    createMany?: GuideTabCreateManyGuideInputEnvelope
    set?: GuideTabWhereUniqueInput | GuideTabWhereUniqueInput[]
    disconnect?: GuideTabWhereUniqueInput | GuideTabWhereUniqueInput[]
    delete?: GuideTabWhereUniqueInput | GuideTabWhereUniqueInput[]
    connect?: GuideTabWhereUniqueInput | GuideTabWhereUniqueInput[]
    update?: GuideTabUpdateWithWhereUniqueWithoutGuideInput | GuideTabUpdateWithWhereUniqueWithoutGuideInput[]
    updateMany?: GuideTabUpdateManyWithWhereWithoutGuideInput | GuideTabUpdateManyWithWhereWithoutGuideInput[]
    deleteMany?: GuideTabScalarWhereInput | GuideTabScalarWhereInput[]
  }

  export type GuideTabUncheckedUpdateManyWithoutGuideNestedInput = {
    create?: XOR<GuideTabCreateWithoutGuideInput, GuideTabUncheckedCreateWithoutGuideInput> | GuideTabCreateWithoutGuideInput[] | GuideTabUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: GuideTabCreateOrConnectWithoutGuideInput | GuideTabCreateOrConnectWithoutGuideInput[]
    upsert?: GuideTabUpsertWithWhereUniqueWithoutGuideInput | GuideTabUpsertWithWhereUniqueWithoutGuideInput[]
    createMany?: GuideTabCreateManyGuideInputEnvelope
    set?: GuideTabWhereUniqueInput | GuideTabWhereUniqueInput[]
    disconnect?: GuideTabWhereUniqueInput | GuideTabWhereUniqueInput[]
    delete?: GuideTabWhereUniqueInput | GuideTabWhereUniqueInput[]
    connect?: GuideTabWhereUniqueInput | GuideTabWhereUniqueInput[]
    update?: GuideTabUpdateWithWhereUniqueWithoutGuideInput | GuideTabUpdateWithWhereUniqueWithoutGuideInput[]
    updateMany?: GuideTabUpdateManyWithWhereWithoutGuideInput | GuideTabUpdateManyWithWhereWithoutGuideInput[]
    deleteMany?: GuideTabScalarWhereInput | GuideTabScalarWhereInput[]
  }

  export type GuideCreateNestedOneWithoutTabsInput = {
    create?: XOR<GuideCreateWithoutTabsInput, GuideUncheckedCreateWithoutTabsInput>
    connectOrCreate?: GuideCreateOrConnectWithoutTabsInput
    connect?: GuideWhereUniqueInput
  }

  export type GuideSectionCreateNestedManyWithoutTabInput = {
    create?: XOR<GuideSectionCreateWithoutTabInput, GuideSectionUncheckedCreateWithoutTabInput> | GuideSectionCreateWithoutTabInput[] | GuideSectionUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideSectionCreateOrConnectWithoutTabInput | GuideSectionCreateOrConnectWithoutTabInput[]
    createMany?: GuideSectionCreateManyTabInputEnvelope
    connect?: GuideSectionWhereUniqueInput | GuideSectionWhereUniqueInput[]
  }

  export type GuideTableCreateNestedManyWithoutTabInput = {
    create?: XOR<GuideTableCreateWithoutTabInput, GuideTableUncheckedCreateWithoutTabInput> | GuideTableCreateWithoutTabInput[] | GuideTableUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideTableCreateOrConnectWithoutTabInput | GuideTableCreateOrConnectWithoutTabInput[]
    createMany?: GuideTableCreateManyTabInputEnvelope
    connect?: GuideTableWhereUniqueInput | GuideTableWhereUniqueInput[]
  }

  export type GuideClassificationCreateNestedManyWithoutTabInput = {
    create?: XOR<GuideClassificationCreateWithoutTabInput, GuideClassificationUncheckedCreateWithoutTabInput> | GuideClassificationCreateWithoutTabInput[] | GuideClassificationUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideClassificationCreateOrConnectWithoutTabInput | GuideClassificationCreateOrConnectWithoutTabInput[]
    createMany?: GuideClassificationCreateManyTabInputEnvelope
    connect?: GuideClassificationWhereUniqueInput | GuideClassificationWhereUniqueInput[]
  }

  export type GuideSectionUncheckedCreateNestedManyWithoutTabInput = {
    create?: XOR<GuideSectionCreateWithoutTabInput, GuideSectionUncheckedCreateWithoutTabInput> | GuideSectionCreateWithoutTabInput[] | GuideSectionUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideSectionCreateOrConnectWithoutTabInput | GuideSectionCreateOrConnectWithoutTabInput[]
    createMany?: GuideSectionCreateManyTabInputEnvelope
    connect?: GuideSectionWhereUniqueInput | GuideSectionWhereUniqueInput[]
  }

  export type GuideTableUncheckedCreateNestedManyWithoutTabInput = {
    create?: XOR<GuideTableCreateWithoutTabInput, GuideTableUncheckedCreateWithoutTabInput> | GuideTableCreateWithoutTabInput[] | GuideTableUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideTableCreateOrConnectWithoutTabInput | GuideTableCreateOrConnectWithoutTabInput[]
    createMany?: GuideTableCreateManyTabInputEnvelope
    connect?: GuideTableWhereUniqueInput | GuideTableWhereUniqueInput[]
  }

  export type GuideClassificationUncheckedCreateNestedManyWithoutTabInput = {
    create?: XOR<GuideClassificationCreateWithoutTabInput, GuideClassificationUncheckedCreateWithoutTabInput> | GuideClassificationCreateWithoutTabInput[] | GuideClassificationUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideClassificationCreateOrConnectWithoutTabInput | GuideClassificationCreateOrConnectWithoutTabInput[]
    createMany?: GuideClassificationCreateManyTabInputEnvelope
    connect?: GuideClassificationWhereUniqueInput | GuideClassificationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GuideUpdateOneRequiredWithoutTabsNestedInput = {
    create?: XOR<GuideCreateWithoutTabsInput, GuideUncheckedCreateWithoutTabsInput>
    connectOrCreate?: GuideCreateOrConnectWithoutTabsInput
    upsert?: GuideUpsertWithoutTabsInput
    connect?: GuideWhereUniqueInput
    update?: XOR<XOR<GuideUpdateToOneWithWhereWithoutTabsInput, GuideUpdateWithoutTabsInput>, GuideUncheckedUpdateWithoutTabsInput>
  }

  export type GuideSectionUpdateManyWithoutTabNestedInput = {
    create?: XOR<GuideSectionCreateWithoutTabInput, GuideSectionUncheckedCreateWithoutTabInput> | GuideSectionCreateWithoutTabInput[] | GuideSectionUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideSectionCreateOrConnectWithoutTabInput | GuideSectionCreateOrConnectWithoutTabInput[]
    upsert?: GuideSectionUpsertWithWhereUniqueWithoutTabInput | GuideSectionUpsertWithWhereUniqueWithoutTabInput[]
    createMany?: GuideSectionCreateManyTabInputEnvelope
    set?: GuideSectionWhereUniqueInput | GuideSectionWhereUniqueInput[]
    disconnect?: GuideSectionWhereUniqueInput | GuideSectionWhereUniqueInput[]
    delete?: GuideSectionWhereUniqueInput | GuideSectionWhereUniqueInput[]
    connect?: GuideSectionWhereUniqueInput | GuideSectionWhereUniqueInput[]
    update?: GuideSectionUpdateWithWhereUniqueWithoutTabInput | GuideSectionUpdateWithWhereUniqueWithoutTabInput[]
    updateMany?: GuideSectionUpdateManyWithWhereWithoutTabInput | GuideSectionUpdateManyWithWhereWithoutTabInput[]
    deleteMany?: GuideSectionScalarWhereInput | GuideSectionScalarWhereInput[]
  }

  export type GuideTableUpdateManyWithoutTabNestedInput = {
    create?: XOR<GuideTableCreateWithoutTabInput, GuideTableUncheckedCreateWithoutTabInput> | GuideTableCreateWithoutTabInput[] | GuideTableUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideTableCreateOrConnectWithoutTabInput | GuideTableCreateOrConnectWithoutTabInput[]
    upsert?: GuideTableUpsertWithWhereUniqueWithoutTabInput | GuideTableUpsertWithWhereUniqueWithoutTabInput[]
    createMany?: GuideTableCreateManyTabInputEnvelope
    set?: GuideTableWhereUniqueInput | GuideTableWhereUniqueInput[]
    disconnect?: GuideTableWhereUniqueInput | GuideTableWhereUniqueInput[]
    delete?: GuideTableWhereUniqueInput | GuideTableWhereUniqueInput[]
    connect?: GuideTableWhereUniqueInput | GuideTableWhereUniqueInput[]
    update?: GuideTableUpdateWithWhereUniqueWithoutTabInput | GuideTableUpdateWithWhereUniqueWithoutTabInput[]
    updateMany?: GuideTableUpdateManyWithWhereWithoutTabInput | GuideTableUpdateManyWithWhereWithoutTabInput[]
    deleteMany?: GuideTableScalarWhereInput | GuideTableScalarWhereInput[]
  }

  export type GuideClassificationUpdateManyWithoutTabNestedInput = {
    create?: XOR<GuideClassificationCreateWithoutTabInput, GuideClassificationUncheckedCreateWithoutTabInput> | GuideClassificationCreateWithoutTabInput[] | GuideClassificationUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideClassificationCreateOrConnectWithoutTabInput | GuideClassificationCreateOrConnectWithoutTabInput[]
    upsert?: GuideClassificationUpsertWithWhereUniqueWithoutTabInput | GuideClassificationUpsertWithWhereUniqueWithoutTabInput[]
    createMany?: GuideClassificationCreateManyTabInputEnvelope
    set?: GuideClassificationWhereUniqueInput | GuideClassificationWhereUniqueInput[]
    disconnect?: GuideClassificationWhereUniqueInput | GuideClassificationWhereUniqueInput[]
    delete?: GuideClassificationWhereUniqueInput | GuideClassificationWhereUniqueInput[]
    connect?: GuideClassificationWhereUniqueInput | GuideClassificationWhereUniqueInput[]
    update?: GuideClassificationUpdateWithWhereUniqueWithoutTabInput | GuideClassificationUpdateWithWhereUniqueWithoutTabInput[]
    updateMany?: GuideClassificationUpdateManyWithWhereWithoutTabInput | GuideClassificationUpdateManyWithWhereWithoutTabInput[]
    deleteMany?: GuideClassificationScalarWhereInput | GuideClassificationScalarWhereInput[]
  }

  export type GuideSectionUncheckedUpdateManyWithoutTabNestedInput = {
    create?: XOR<GuideSectionCreateWithoutTabInput, GuideSectionUncheckedCreateWithoutTabInput> | GuideSectionCreateWithoutTabInput[] | GuideSectionUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideSectionCreateOrConnectWithoutTabInput | GuideSectionCreateOrConnectWithoutTabInput[]
    upsert?: GuideSectionUpsertWithWhereUniqueWithoutTabInput | GuideSectionUpsertWithWhereUniqueWithoutTabInput[]
    createMany?: GuideSectionCreateManyTabInputEnvelope
    set?: GuideSectionWhereUniqueInput | GuideSectionWhereUniqueInput[]
    disconnect?: GuideSectionWhereUniqueInput | GuideSectionWhereUniqueInput[]
    delete?: GuideSectionWhereUniqueInput | GuideSectionWhereUniqueInput[]
    connect?: GuideSectionWhereUniqueInput | GuideSectionWhereUniqueInput[]
    update?: GuideSectionUpdateWithWhereUniqueWithoutTabInput | GuideSectionUpdateWithWhereUniqueWithoutTabInput[]
    updateMany?: GuideSectionUpdateManyWithWhereWithoutTabInput | GuideSectionUpdateManyWithWhereWithoutTabInput[]
    deleteMany?: GuideSectionScalarWhereInput | GuideSectionScalarWhereInput[]
  }

  export type GuideTableUncheckedUpdateManyWithoutTabNestedInput = {
    create?: XOR<GuideTableCreateWithoutTabInput, GuideTableUncheckedCreateWithoutTabInput> | GuideTableCreateWithoutTabInput[] | GuideTableUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideTableCreateOrConnectWithoutTabInput | GuideTableCreateOrConnectWithoutTabInput[]
    upsert?: GuideTableUpsertWithWhereUniqueWithoutTabInput | GuideTableUpsertWithWhereUniqueWithoutTabInput[]
    createMany?: GuideTableCreateManyTabInputEnvelope
    set?: GuideTableWhereUniqueInput | GuideTableWhereUniqueInput[]
    disconnect?: GuideTableWhereUniqueInput | GuideTableWhereUniqueInput[]
    delete?: GuideTableWhereUniqueInput | GuideTableWhereUniqueInput[]
    connect?: GuideTableWhereUniqueInput | GuideTableWhereUniqueInput[]
    update?: GuideTableUpdateWithWhereUniqueWithoutTabInput | GuideTableUpdateWithWhereUniqueWithoutTabInput[]
    updateMany?: GuideTableUpdateManyWithWhereWithoutTabInput | GuideTableUpdateManyWithWhereWithoutTabInput[]
    deleteMany?: GuideTableScalarWhereInput | GuideTableScalarWhereInput[]
  }

  export type GuideClassificationUncheckedUpdateManyWithoutTabNestedInput = {
    create?: XOR<GuideClassificationCreateWithoutTabInput, GuideClassificationUncheckedCreateWithoutTabInput> | GuideClassificationCreateWithoutTabInput[] | GuideClassificationUncheckedCreateWithoutTabInput[]
    connectOrCreate?: GuideClassificationCreateOrConnectWithoutTabInput | GuideClassificationCreateOrConnectWithoutTabInput[]
    upsert?: GuideClassificationUpsertWithWhereUniqueWithoutTabInput | GuideClassificationUpsertWithWhereUniqueWithoutTabInput[]
    createMany?: GuideClassificationCreateManyTabInputEnvelope
    set?: GuideClassificationWhereUniqueInput | GuideClassificationWhereUniqueInput[]
    disconnect?: GuideClassificationWhereUniqueInput | GuideClassificationWhereUniqueInput[]
    delete?: GuideClassificationWhereUniqueInput | GuideClassificationWhereUniqueInput[]
    connect?: GuideClassificationWhereUniqueInput | GuideClassificationWhereUniqueInput[]
    update?: GuideClassificationUpdateWithWhereUniqueWithoutTabInput | GuideClassificationUpdateWithWhereUniqueWithoutTabInput[]
    updateMany?: GuideClassificationUpdateManyWithWhereWithoutTabInput | GuideClassificationUpdateManyWithWhereWithoutTabInput[]
    deleteMany?: GuideClassificationScalarWhereInput | GuideClassificationScalarWhereInput[]
  }

  export type GuideTabCreateNestedOneWithoutClassificationsInput = {
    create?: XOR<GuideTabCreateWithoutClassificationsInput, GuideTabUncheckedCreateWithoutClassificationsInput>
    connectOrCreate?: GuideTabCreateOrConnectWithoutClassificationsInput
    connect?: GuideTabWhereUniqueInput
  }

  export type GuideTabUpdateOneRequiredWithoutClassificationsNestedInput = {
    create?: XOR<GuideTabCreateWithoutClassificationsInput, GuideTabUncheckedCreateWithoutClassificationsInput>
    connectOrCreate?: GuideTabCreateOrConnectWithoutClassificationsInput
    upsert?: GuideTabUpsertWithoutClassificationsInput
    connect?: GuideTabWhereUniqueInput
    update?: XOR<XOR<GuideTabUpdateToOneWithWhereWithoutClassificationsInput, GuideTabUpdateWithoutClassificationsInput>, GuideTabUncheckedUpdateWithoutClassificationsInput>
  }

  export type GuideTabCreateNestedOneWithoutSectionsInput = {
    create?: XOR<GuideTabCreateWithoutSectionsInput, GuideTabUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: GuideTabCreateOrConnectWithoutSectionsInput
    connect?: GuideTabWhereUniqueInput
  }

  export type GuideParagraphCreateNestedManyWithoutSectionInput = {
    create?: XOR<GuideParagraphCreateWithoutSectionInput, GuideParagraphUncheckedCreateWithoutSectionInput> | GuideParagraphCreateWithoutSectionInput[] | GuideParagraphUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GuideParagraphCreateOrConnectWithoutSectionInput | GuideParagraphCreateOrConnectWithoutSectionInput[]
    createMany?: GuideParagraphCreateManySectionInputEnvelope
    connect?: GuideParagraphWhereUniqueInput | GuideParagraphWhereUniqueInput[]
  }

  export type GuideParagraphUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<GuideParagraphCreateWithoutSectionInput, GuideParagraphUncheckedCreateWithoutSectionInput> | GuideParagraphCreateWithoutSectionInput[] | GuideParagraphUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GuideParagraphCreateOrConnectWithoutSectionInput | GuideParagraphCreateOrConnectWithoutSectionInput[]
    createMany?: GuideParagraphCreateManySectionInputEnvelope
    connect?: GuideParagraphWhereUniqueInput | GuideParagraphWhereUniqueInput[]
  }

  export type GuideTabUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<GuideTabCreateWithoutSectionsInput, GuideTabUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: GuideTabCreateOrConnectWithoutSectionsInput
    upsert?: GuideTabUpsertWithoutSectionsInput
    connect?: GuideTabWhereUniqueInput
    update?: XOR<XOR<GuideTabUpdateToOneWithWhereWithoutSectionsInput, GuideTabUpdateWithoutSectionsInput>, GuideTabUncheckedUpdateWithoutSectionsInput>
  }

  export type GuideParagraphUpdateManyWithoutSectionNestedInput = {
    create?: XOR<GuideParagraphCreateWithoutSectionInput, GuideParagraphUncheckedCreateWithoutSectionInput> | GuideParagraphCreateWithoutSectionInput[] | GuideParagraphUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GuideParagraphCreateOrConnectWithoutSectionInput | GuideParagraphCreateOrConnectWithoutSectionInput[]
    upsert?: GuideParagraphUpsertWithWhereUniqueWithoutSectionInput | GuideParagraphUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: GuideParagraphCreateManySectionInputEnvelope
    set?: GuideParagraphWhereUniqueInput | GuideParagraphWhereUniqueInput[]
    disconnect?: GuideParagraphWhereUniqueInput | GuideParagraphWhereUniqueInput[]
    delete?: GuideParagraphWhereUniqueInput | GuideParagraphWhereUniqueInput[]
    connect?: GuideParagraphWhereUniqueInput | GuideParagraphWhereUniqueInput[]
    update?: GuideParagraphUpdateWithWhereUniqueWithoutSectionInput | GuideParagraphUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: GuideParagraphUpdateManyWithWhereWithoutSectionInput | GuideParagraphUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: GuideParagraphScalarWhereInput | GuideParagraphScalarWhereInput[]
  }

  export type GuideParagraphUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<GuideParagraphCreateWithoutSectionInput, GuideParagraphUncheckedCreateWithoutSectionInput> | GuideParagraphCreateWithoutSectionInput[] | GuideParagraphUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GuideParagraphCreateOrConnectWithoutSectionInput | GuideParagraphCreateOrConnectWithoutSectionInput[]
    upsert?: GuideParagraphUpsertWithWhereUniqueWithoutSectionInput | GuideParagraphUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: GuideParagraphCreateManySectionInputEnvelope
    set?: GuideParagraphWhereUniqueInput | GuideParagraphWhereUniqueInput[]
    disconnect?: GuideParagraphWhereUniqueInput | GuideParagraphWhereUniqueInput[]
    delete?: GuideParagraphWhereUniqueInput | GuideParagraphWhereUniqueInput[]
    connect?: GuideParagraphWhereUniqueInput | GuideParagraphWhereUniqueInput[]
    update?: GuideParagraphUpdateWithWhereUniqueWithoutSectionInput | GuideParagraphUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: GuideParagraphUpdateManyWithWhereWithoutSectionInput | GuideParagraphUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: GuideParagraphScalarWhereInput | GuideParagraphScalarWhereInput[]
  }

  export type GuideSectionCreateNestedOneWithoutParagraphsInput = {
    create?: XOR<GuideSectionCreateWithoutParagraphsInput, GuideSectionUncheckedCreateWithoutParagraphsInput>
    connectOrCreate?: GuideSectionCreateOrConnectWithoutParagraphsInput
    connect?: GuideSectionWhereUniqueInput
  }

  export type GuideSectionUpdateOneRequiredWithoutParagraphsNestedInput = {
    create?: XOR<GuideSectionCreateWithoutParagraphsInput, GuideSectionUncheckedCreateWithoutParagraphsInput>
    connectOrCreate?: GuideSectionCreateOrConnectWithoutParagraphsInput
    upsert?: GuideSectionUpsertWithoutParagraphsInput
    connect?: GuideSectionWhereUniqueInput
    update?: XOR<XOR<GuideSectionUpdateToOneWithWhereWithoutParagraphsInput, GuideSectionUpdateWithoutParagraphsInput>, GuideSectionUncheckedUpdateWithoutParagraphsInput>
  }

  export type GuideTabCreateNestedOneWithoutTablesInput = {
    create?: XOR<GuideTabCreateWithoutTablesInput, GuideTabUncheckedCreateWithoutTablesInput>
    connectOrCreate?: GuideTabCreateOrConnectWithoutTablesInput
    connect?: GuideTabWhereUniqueInput
  }

  export type GuideTableRowCreateNestedManyWithoutTableInput = {
    create?: XOR<GuideTableRowCreateWithoutTableInput, GuideTableRowUncheckedCreateWithoutTableInput> | GuideTableRowCreateWithoutTableInput[] | GuideTableRowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: GuideTableRowCreateOrConnectWithoutTableInput | GuideTableRowCreateOrConnectWithoutTableInput[]
    createMany?: GuideTableRowCreateManyTableInputEnvelope
    connect?: GuideTableRowWhereUniqueInput | GuideTableRowWhereUniqueInput[]
  }

  export type GuideTableRowUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<GuideTableRowCreateWithoutTableInput, GuideTableRowUncheckedCreateWithoutTableInput> | GuideTableRowCreateWithoutTableInput[] | GuideTableRowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: GuideTableRowCreateOrConnectWithoutTableInput | GuideTableRowCreateOrConnectWithoutTableInput[]
    createMany?: GuideTableRowCreateManyTableInputEnvelope
    connect?: GuideTableRowWhereUniqueInput | GuideTableRowWhereUniqueInput[]
  }

  export type GuideTabUpdateOneRequiredWithoutTablesNestedInput = {
    create?: XOR<GuideTabCreateWithoutTablesInput, GuideTabUncheckedCreateWithoutTablesInput>
    connectOrCreate?: GuideTabCreateOrConnectWithoutTablesInput
    upsert?: GuideTabUpsertWithoutTablesInput
    connect?: GuideTabWhereUniqueInput
    update?: XOR<XOR<GuideTabUpdateToOneWithWhereWithoutTablesInput, GuideTabUpdateWithoutTablesInput>, GuideTabUncheckedUpdateWithoutTablesInput>
  }

  export type GuideTableRowUpdateManyWithoutTableNestedInput = {
    create?: XOR<GuideTableRowCreateWithoutTableInput, GuideTableRowUncheckedCreateWithoutTableInput> | GuideTableRowCreateWithoutTableInput[] | GuideTableRowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: GuideTableRowCreateOrConnectWithoutTableInput | GuideTableRowCreateOrConnectWithoutTableInput[]
    upsert?: GuideTableRowUpsertWithWhereUniqueWithoutTableInput | GuideTableRowUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: GuideTableRowCreateManyTableInputEnvelope
    set?: GuideTableRowWhereUniqueInput | GuideTableRowWhereUniqueInput[]
    disconnect?: GuideTableRowWhereUniqueInput | GuideTableRowWhereUniqueInput[]
    delete?: GuideTableRowWhereUniqueInput | GuideTableRowWhereUniqueInput[]
    connect?: GuideTableRowWhereUniqueInput | GuideTableRowWhereUniqueInput[]
    update?: GuideTableRowUpdateWithWhereUniqueWithoutTableInput | GuideTableRowUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: GuideTableRowUpdateManyWithWhereWithoutTableInput | GuideTableRowUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: GuideTableRowScalarWhereInput | GuideTableRowScalarWhereInput[]
  }

  export type GuideTableRowUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<GuideTableRowCreateWithoutTableInput, GuideTableRowUncheckedCreateWithoutTableInput> | GuideTableRowCreateWithoutTableInput[] | GuideTableRowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: GuideTableRowCreateOrConnectWithoutTableInput | GuideTableRowCreateOrConnectWithoutTableInput[]
    upsert?: GuideTableRowUpsertWithWhereUniqueWithoutTableInput | GuideTableRowUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: GuideTableRowCreateManyTableInputEnvelope
    set?: GuideTableRowWhereUniqueInput | GuideTableRowWhereUniqueInput[]
    disconnect?: GuideTableRowWhereUniqueInput | GuideTableRowWhereUniqueInput[]
    delete?: GuideTableRowWhereUniqueInput | GuideTableRowWhereUniqueInput[]
    connect?: GuideTableRowWhereUniqueInput | GuideTableRowWhereUniqueInput[]
    update?: GuideTableRowUpdateWithWhereUniqueWithoutTableInput | GuideTableRowUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: GuideTableRowUpdateManyWithWhereWithoutTableInput | GuideTableRowUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: GuideTableRowScalarWhereInput | GuideTableRowScalarWhereInput[]
  }

  export type GuideTableCreateNestedOneWithoutRowsInput = {
    create?: XOR<GuideTableCreateWithoutRowsInput, GuideTableUncheckedCreateWithoutRowsInput>
    connectOrCreate?: GuideTableCreateOrConnectWithoutRowsInput
    connect?: GuideTableWhereUniqueInput
  }

  export type GuideTableUpdateOneRequiredWithoutRowsNestedInput = {
    create?: XOR<GuideTableCreateWithoutRowsInput, GuideTableUncheckedCreateWithoutRowsInput>
    connectOrCreate?: GuideTableCreateOrConnectWithoutRowsInput
    upsert?: GuideTableUpsertWithoutRowsInput
    connect?: GuideTableWhereUniqueInput
    update?: XOR<XOR<GuideTableUpdateToOneWithWhereWithoutRowsInput, GuideTableUpdateWithoutRowsInput>, GuideTableUncheckedUpdateWithoutRowsInput>
  }

  export type GlossaryDetailCreateNestedManyWithoutGlossaryItemInput = {
    create?: XOR<GlossaryDetailCreateWithoutGlossaryItemInput, GlossaryDetailUncheckedCreateWithoutGlossaryItemInput> | GlossaryDetailCreateWithoutGlossaryItemInput[] | GlossaryDetailUncheckedCreateWithoutGlossaryItemInput[]
    connectOrCreate?: GlossaryDetailCreateOrConnectWithoutGlossaryItemInput | GlossaryDetailCreateOrConnectWithoutGlossaryItemInput[]
    createMany?: GlossaryDetailCreateManyGlossaryItemInputEnvelope
    connect?: GlossaryDetailWhereUniqueInput | GlossaryDetailWhereUniqueInput[]
  }

  export type GlossaryItemCategoryCreateNestedManyWithoutGlossaryItemInput = {
    create?: XOR<GlossaryItemCategoryCreateWithoutGlossaryItemInput, GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput> | GlossaryItemCategoryCreateWithoutGlossaryItemInput[] | GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput[]
    connectOrCreate?: GlossaryItemCategoryCreateOrConnectWithoutGlossaryItemInput | GlossaryItemCategoryCreateOrConnectWithoutGlossaryItemInput[]
    createMany?: GlossaryItemCategoryCreateManyGlossaryItemInputEnvelope
    connect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
  }

  export type GlossaryDetailUncheckedCreateNestedManyWithoutGlossaryItemInput = {
    create?: XOR<GlossaryDetailCreateWithoutGlossaryItemInput, GlossaryDetailUncheckedCreateWithoutGlossaryItemInput> | GlossaryDetailCreateWithoutGlossaryItemInput[] | GlossaryDetailUncheckedCreateWithoutGlossaryItemInput[]
    connectOrCreate?: GlossaryDetailCreateOrConnectWithoutGlossaryItemInput | GlossaryDetailCreateOrConnectWithoutGlossaryItemInput[]
    createMany?: GlossaryDetailCreateManyGlossaryItemInputEnvelope
    connect?: GlossaryDetailWhereUniqueInput | GlossaryDetailWhereUniqueInput[]
  }

  export type GlossaryItemCategoryUncheckedCreateNestedManyWithoutGlossaryItemInput = {
    create?: XOR<GlossaryItemCategoryCreateWithoutGlossaryItemInput, GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput> | GlossaryItemCategoryCreateWithoutGlossaryItemInput[] | GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput[]
    connectOrCreate?: GlossaryItemCategoryCreateOrConnectWithoutGlossaryItemInput | GlossaryItemCategoryCreateOrConnectWithoutGlossaryItemInput[]
    createMany?: GlossaryItemCategoryCreateManyGlossaryItemInputEnvelope
    connect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GlossaryDetailUpdateManyWithoutGlossaryItemNestedInput = {
    create?: XOR<GlossaryDetailCreateWithoutGlossaryItemInput, GlossaryDetailUncheckedCreateWithoutGlossaryItemInput> | GlossaryDetailCreateWithoutGlossaryItemInput[] | GlossaryDetailUncheckedCreateWithoutGlossaryItemInput[]
    connectOrCreate?: GlossaryDetailCreateOrConnectWithoutGlossaryItemInput | GlossaryDetailCreateOrConnectWithoutGlossaryItemInput[]
    upsert?: GlossaryDetailUpsertWithWhereUniqueWithoutGlossaryItemInput | GlossaryDetailUpsertWithWhereUniqueWithoutGlossaryItemInput[]
    createMany?: GlossaryDetailCreateManyGlossaryItemInputEnvelope
    set?: GlossaryDetailWhereUniqueInput | GlossaryDetailWhereUniqueInput[]
    disconnect?: GlossaryDetailWhereUniqueInput | GlossaryDetailWhereUniqueInput[]
    delete?: GlossaryDetailWhereUniqueInput | GlossaryDetailWhereUniqueInput[]
    connect?: GlossaryDetailWhereUniqueInput | GlossaryDetailWhereUniqueInput[]
    update?: GlossaryDetailUpdateWithWhereUniqueWithoutGlossaryItemInput | GlossaryDetailUpdateWithWhereUniqueWithoutGlossaryItemInput[]
    updateMany?: GlossaryDetailUpdateManyWithWhereWithoutGlossaryItemInput | GlossaryDetailUpdateManyWithWhereWithoutGlossaryItemInput[]
    deleteMany?: GlossaryDetailScalarWhereInput | GlossaryDetailScalarWhereInput[]
  }

  export type GlossaryItemCategoryUpdateManyWithoutGlossaryItemNestedInput = {
    create?: XOR<GlossaryItemCategoryCreateWithoutGlossaryItemInput, GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput> | GlossaryItemCategoryCreateWithoutGlossaryItemInput[] | GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput[]
    connectOrCreate?: GlossaryItemCategoryCreateOrConnectWithoutGlossaryItemInput | GlossaryItemCategoryCreateOrConnectWithoutGlossaryItemInput[]
    upsert?: GlossaryItemCategoryUpsertWithWhereUniqueWithoutGlossaryItemInput | GlossaryItemCategoryUpsertWithWhereUniqueWithoutGlossaryItemInput[]
    createMany?: GlossaryItemCategoryCreateManyGlossaryItemInputEnvelope
    set?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    disconnect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    delete?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    connect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    update?: GlossaryItemCategoryUpdateWithWhereUniqueWithoutGlossaryItemInput | GlossaryItemCategoryUpdateWithWhereUniqueWithoutGlossaryItemInput[]
    updateMany?: GlossaryItemCategoryUpdateManyWithWhereWithoutGlossaryItemInput | GlossaryItemCategoryUpdateManyWithWhereWithoutGlossaryItemInput[]
    deleteMany?: GlossaryItemCategoryScalarWhereInput | GlossaryItemCategoryScalarWhereInput[]
  }

  export type GlossaryDetailUncheckedUpdateManyWithoutGlossaryItemNestedInput = {
    create?: XOR<GlossaryDetailCreateWithoutGlossaryItemInput, GlossaryDetailUncheckedCreateWithoutGlossaryItemInput> | GlossaryDetailCreateWithoutGlossaryItemInput[] | GlossaryDetailUncheckedCreateWithoutGlossaryItemInput[]
    connectOrCreate?: GlossaryDetailCreateOrConnectWithoutGlossaryItemInput | GlossaryDetailCreateOrConnectWithoutGlossaryItemInput[]
    upsert?: GlossaryDetailUpsertWithWhereUniqueWithoutGlossaryItemInput | GlossaryDetailUpsertWithWhereUniqueWithoutGlossaryItemInput[]
    createMany?: GlossaryDetailCreateManyGlossaryItemInputEnvelope
    set?: GlossaryDetailWhereUniqueInput | GlossaryDetailWhereUniqueInput[]
    disconnect?: GlossaryDetailWhereUniqueInput | GlossaryDetailWhereUniqueInput[]
    delete?: GlossaryDetailWhereUniqueInput | GlossaryDetailWhereUniqueInput[]
    connect?: GlossaryDetailWhereUniqueInput | GlossaryDetailWhereUniqueInput[]
    update?: GlossaryDetailUpdateWithWhereUniqueWithoutGlossaryItemInput | GlossaryDetailUpdateWithWhereUniqueWithoutGlossaryItemInput[]
    updateMany?: GlossaryDetailUpdateManyWithWhereWithoutGlossaryItemInput | GlossaryDetailUpdateManyWithWhereWithoutGlossaryItemInput[]
    deleteMany?: GlossaryDetailScalarWhereInput | GlossaryDetailScalarWhereInput[]
  }

  export type GlossaryItemCategoryUncheckedUpdateManyWithoutGlossaryItemNestedInput = {
    create?: XOR<GlossaryItemCategoryCreateWithoutGlossaryItemInput, GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput> | GlossaryItemCategoryCreateWithoutGlossaryItemInput[] | GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput[]
    connectOrCreate?: GlossaryItemCategoryCreateOrConnectWithoutGlossaryItemInput | GlossaryItemCategoryCreateOrConnectWithoutGlossaryItemInput[]
    upsert?: GlossaryItemCategoryUpsertWithWhereUniqueWithoutGlossaryItemInput | GlossaryItemCategoryUpsertWithWhereUniqueWithoutGlossaryItemInput[]
    createMany?: GlossaryItemCategoryCreateManyGlossaryItemInputEnvelope
    set?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    disconnect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    delete?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    connect?: GlossaryItemCategoryWhereUniqueInput | GlossaryItemCategoryWhereUniqueInput[]
    update?: GlossaryItemCategoryUpdateWithWhereUniqueWithoutGlossaryItemInput | GlossaryItemCategoryUpdateWithWhereUniqueWithoutGlossaryItemInput[]
    updateMany?: GlossaryItemCategoryUpdateManyWithWhereWithoutGlossaryItemInput | GlossaryItemCategoryUpdateManyWithWhereWithoutGlossaryItemInput[]
    deleteMany?: GlossaryItemCategoryScalarWhereInput | GlossaryItemCategoryScalarWhereInput[]
  }

  export type GlossaryItemCreateNestedOneWithoutDetailsInput = {
    create?: XOR<GlossaryItemCreateWithoutDetailsInput, GlossaryItemUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: GlossaryItemCreateOrConnectWithoutDetailsInput
    connect?: GlossaryItemWhereUniqueInput
  }

  export type GlossaryItemUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<GlossaryItemCreateWithoutDetailsInput, GlossaryItemUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: GlossaryItemCreateOrConnectWithoutDetailsInput
    upsert?: GlossaryItemUpsertWithoutDetailsInput
    connect?: GlossaryItemWhereUniqueInput
    update?: XOR<XOR<GlossaryItemUpdateToOneWithWhereWithoutDetailsInput, GlossaryItemUpdateWithoutDetailsInput>, GlossaryItemUncheckedUpdateWithoutDetailsInput>
  }

  export type GlossaryItemCreateNestedOneWithoutRelatedCategoriesInput = {
    create?: XOR<GlossaryItemCreateWithoutRelatedCategoriesInput, GlossaryItemUncheckedCreateWithoutRelatedCategoriesInput>
    connectOrCreate?: GlossaryItemCreateOrConnectWithoutRelatedCategoriesInput
    connect?: GlossaryItemWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutGlossaryLinksInput = {
    create?: XOR<CategoryCreateWithoutGlossaryLinksInput, CategoryUncheckedCreateWithoutGlossaryLinksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutGlossaryLinksInput
    connect?: CategoryWhereUniqueInput
  }

  export type GlossaryItemUpdateOneRequiredWithoutRelatedCategoriesNestedInput = {
    create?: XOR<GlossaryItemCreateWithoutRelatedCategoriesInput, GlossaryItemUncheckedCreateWithoutRelatedCategoriesInput>
    connectOrCreate?: GlossaryItemCreateOrConnectWithoutRelatedCategoriesInput
    upsert?: GlossaryItemUpsertWithoutRelatedCategoriesInput
    connect?: GlossaryItemWhereUniqueInput
    update?: XOR<XOR<GlossaryItemUpdateToOneWithWhereWithoutRelatedCategoriesInput, GlossaryItemUpdateWithoutRelatedCategoriesInput>, GlossaryItemUncheckedUpdateWithoutRelatedCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutGlossaryLinksNestedInput = {
    create?: XOR<CategoryCreateWithoutGlossaryLinksInput, CategoryUncheckedCreateWithoutGlossaryLinksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutGlossaryLinksInput
    upsert?: CategoryUpsertWithoutGlossaryLinksInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutGlossaryLinksInput, CategoryUpdateWithoutGlossaryLinksInput>, CategoryUncheckedUpdateWithoutGlossaryLinksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GuideCreateWithoutCategoryInput = {
    id?: string
    title: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tabs?: GuideTabCreateNestedManyWithoutGuideInput
  }

  export type GuideUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tabs?: GuideTabUncheckedCreateNestedManyWithoutGuideInput
  }

  export type GuideCreateOrConnectWithoutCategoryInput = {
    where: GuideWhereUniqueInput
    create: XOR<GuideCreateWithoutCategoryInput, GuideUncheckedCreateWithoutCategoryInput>
  }

  export type GlossaryItemCategoryCreateWithoutCategoryInput = {
    position: number
    createdAt?: Date | string
    glossaryItem: GlossaryItemCreateNestedOneWithoutRelatedCategoriesInput
  }

  export type GlossaryItemCategoryUncheckedCreateWithoutCategoryInput = {
    glossaryItemId: string
    position: number
    createdAt?: Date | string
  }

  export type GlossaryItemCategoryCreateOrConnectWithoutCategoryInput = {
    where: GlossaryItemCategoryWhereUniqueInput
    create: XOR<GlossaryItemCategoryCreateWithoutCategoryInput, GlossaryItemCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type GlossaryItemCategoryCreateManyCategoryInputEnvelope = {
    data: GlossaryItemCategoryCreateManyCategoryInput | GlossaryItemCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type GuideUpsertWithoutCategoryInput = {
    update: XOR<GuideUpdateWithoutCategoryInput, GuideUncheckedUpdateWithoutCategoryInput>
    create: XOR<GuideCreateWithoutCategoryInput, GuideUncheckedCreateWithoutCategoryInput>
    where?: GuideWhereInput
  }

  export type GuideUpdateToOneWithWhereWithoutCategoryInput = {
    where?: GuideWhereInput
    data: XOR<GuideUpdateWithoutCategoryInput, GuideUncheckedUpdateWithoutCategoryInput>
  }

  export type GuideUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tabs?: GuideTabUpdateManyWithoutGuideNestedInput
  }

  export type GuideUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tabs?: GuideTabUncheckedUpdateManyWithoutGuideNestedInput
  }

  export type GlossaryItemCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: GlossaryItemCategoryWhereUniqueInput
    update: XOR<GlossaryItemCategoryUpdateWithoutCategoryInput, GlossaryItemCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<GlossaryItemCategoryCreateWithoutCategoryInput, GlossaryItemCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type GlossaryItemCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: GlossaryItemCategoryWhereUniqueInput
    data: XOR<GlossaryItemCategoryUpdateWithoutCategoryInput, GlossaryItemCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type GlossaryItemCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: GlossaryItemCategoryScalarWhereInput
    data: XOR<GlossaryItemCategoryUpdateManyMutationInput, GlossaryItemCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type GlossaryItemCategoryScalarWhereInput = {
    AND?: GlossaryItemCategoryScalarWhereInput | GlossaryItemCategoryScalarWhereInput[]
    OR?: GlossaryItemCategoryScalarWhereInput[]
    NOT?: GlossaryItemCategoryScalarWhereInput | GlossaryItemCategoryScalarWhereInput[]
    glossaryItemId?: StringFilter<"GlossaryItemCategory"> | string
    categoryId?: StringFilter<"GlossaryItemCategory"> | string
    position?: IntFilter<"GlossaryItemCategory"> | number
    createdAt?: DateTimeFilter<"GlossaryItemCategory"> | Date | string
  }

  export type CategoryCreateWithoutGuideInput = {
    id?: string
    slug: string
    position: number
    title: string
    summary: string
    abv: string
    origin: string
    imageUrl: string
    imageAlt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    glossaryLinks?: GlossaryItemCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutGuideInput = {
    id?: string
    slug: string
    position: number
    title: string
    summary: string
    abv: string
    origin: string
    imageUrl: string
    imageAlt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    glossaryLinks?: GlossaryItemCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutGuideInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutGuideInput, CategoryUncheckedCreateWithoutGuideInput>
  }

  export type GuideTabCreateWithoutGuideInput = {
    id?: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: GuideSectionCreateNestedManyWithoutTabInput
    tables?: GuideTableCreateNestedManyWithoutTabInput
    classifications?: GuideClassificationCreateNestedManyWithoutTabInput
  }

  export type GuideTabUncheckedCreateWithoutGuideInput = {
    id?: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: GuideSectionUncheckedCreateNestedManyWithoutTabInput
    tables?: GuideTableUncheckedCreateNestedManyWithoutTabInput
    classifications?: GuideClassificationUncheckedCreateNestedManyWithoutTabInput
  }

  export type GuideTabCreateOrConnectWithoutGuideInput = {
    where: GuideTabWhereUniqueInput
    create: XOR<GuideTabCreateWithoutGuideInput, GuideTabUncheckedCreateWithoutGuideInput>
  }

  export type GuideTabCreateManyGuideInputEnvelope = {
    data: GuideTabCreateManyGuideInput | GuideTabCreateManyGuideInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutGuideInput = {
    update: XOR<CategoryUpdateWithoutGuideInput, CategoryUncheckedUpdateWithoutGuideInput>
    create: XOR<CategoryCreateWithoutGuideInput, CategoryUncheckedCreateWithoutGuideInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutGuideInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutGuideInput, CategoryUncheckedUpdateWithoutGuideInput>
  }

  export type CategoryUpdateWithoutGuideInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    abv?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glossaryLinks?: GlossaryItemCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutGuideInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    abv?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glossaryLinks?: GlossaryItemCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type GuideTabUpsertWithWhereUniqueWithoutGuideInput = {
    where: GuideTabWhereUniqueInput
    update: XOR<GuideTabUpdateWithoutGuideInput, GuideTabUncheckedUpdateWithoutGuideInput>
    create: XOR<GuideTabCreateWithoutGuideInput, GuideTabUncheckedCreateWithoutGuideInput>
  }

  export type GuideTabUpdateWithWhereUniqueWithoutGuideInput = {
    where: GuideTabWhereUniqueInput
    data: XOR<GuideTabUpdateWithoutGuideInput, GuideTabUncheckedUpdateWithoutGuideInput>
  }

  export type GuideTabUpdateManyWithWhereWithoutGuideInput = {
    where: GuideTabScalarWhereInput
    data: XOR<GuideTabUpdateManyMutationInput, GuideTabUncheckedUpdateManyWithoutGuideInput>
  }

  export type GuideTabScalarWhereInput = {
    AND?: GuideTabScalarWhereInput | GuideTabScalarWhereInput[]
    OR?: GuideTabScalarWhereInput[]
    NOT?: GuideTabScalarWhereInput | GuideTabScalarWhereInput[]
    id?: StringFilter<"GuideTab"> | string
    guideId?: StringFilter<"GuideTab"> | string
    slug?: StringFilter<"GuideTab"> | string
    label?: StringFilter<"GuideTab"> | string
    panelTitle?: StringNullableFilter<"GuideTab"> | string | null
    noteTitle?: StringNullableFilter<"GuideTab"> | string | null
    noteContent?: StringNullableFilter<"GuideTab"> | string | null
    position?: IntFilter<"GuideTab"> | number
    semanticKey?: StringNullableFilter<"GuideTab"> | string | null
    createdAt?: DateTimeFilter<"GuideTab"> | Date | string
    updatedAt?: DateTimeFilter<"GuideTab"> | Date | string
  }

  export type GuideCreateWithoutTabsInput = {
    id?: string
    title: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutGuideInput
  }

  export type GuideUncheckedCreateWithoutTabsInput = {
    id?: string
    categoryId: string
    title: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideCreateOrConnectWithoutTabsInput = {
    where: GuideWhereUniqueInput
    create: XOR<GuideCreateWithoutTabsInput, GuideUncheckedCreateWithoutTabsInput>
  }

  export type GuideSectionCreateWithoutTabInput = {
    id?: string
    slug: string
    title: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paragraphs?: GuideParagraphCreateNestedManyWithoutSectionInput
  }

  export type GuideSectionUncheckedCreateWithoutTabInput = {
    id?: string
    slug: string
    title: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paragraphs?: GuideParagraphUncheckedCreateNestedManyWithoutSectionInput
  }

  export type GuideSectionCreateOrConnectWithoutTabInput = {
    where: GuideSectionWhereUniqueInput
    create: XOR<GuideSectionCreateWithoutTabInput, GuideSectionUncheckedCreateWithoutTabInput>
  }

  export type GuideSectionCreateManyTabInputEnvelope = {
    data: GuideSectionCreateManyTabInput | GuideSectionCreateManyTabInput[]
    skipDuplicates?: boolean
  }

  export type GuideTableCreateWithoutTabInput = {
    id?: string
    slug: string
    title: string
    columns: JsonNullValueInput | InputJsonValue
    position: number
    sectionSlug?: string | null
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rows?: GuideTableRowCreateNestedManyWithoutTableInput
  }

  export type GuideTableUncheckedCreateWithoutTabInput = {
    id?: string
    slug: string
    title: string
    columns: JsonNullValueInput | InputJsonValue
    position: number
    sectionSlug?: string | null
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rows?: GuideTableRowUncheckedCreateNestedManyWithoutTableInput
  }

  export type GuideTableCreateOrConnectWithoutTabInput = {
    where: GuideTableWhereUniqueInput
    create: XOR<GuideTableCreateWithoutTabInput, GuideTableUncheckedCreateWithoutTabInput>
  }

  export type GuideTableCreateManyTabInputEnvelope = {
    data: GuideTableCreateManyTabInput | GuideTableCreateManyTabInput[]
    skipDuplicates?: boolean
  }

  export type GuideClassificationCreateWithoutTabInput = {
    id?: string
    slug: string
    subtitle?: string
    body: string
    imageUrl?: string
    imageAlt?: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideClassificationUncheckedCreateWithoutTabInput = {
    id?: string
    slug: string
    subtitle?: string
    body: string
    imageUrl?: string
    imageAlt?: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideClassificationCreateOrConnectWithoutTabInput = {
    where: GuideClassificationWhereUniqueInput
    create: XOR<GuideClassificationCreateWithoutTabInput, GuideClassificationUncheckedCreateWithoutTabInput>
  }

  export type GuideClassificationCreateManyTabInputEnvelope = {
    data: GuideClassificationCreateManyTabInput | GuideClassificationCreateManyTabInput[]
    skipDuplicates?: boolean
  }

  export type GuideUpsertWithoutTabsInput = {
    update: XOR<GuideUpdateWithoutTabsInput, GuideUncheckedUpdateWithoutTabsInput>
    create: XOR<GuideCreateWithoutTabsInput, GuideUncheckedCreateWithoutTabsInput>
    where?: GuideWhereInput
  }

  export type GuideUpdateToOneWithWhereWithoutTabsInput = {
    where?: GuideWhereInput
    data: XOR<GuideUpdateWithoutTabsInput, GuideUncheckedUpdateWithoutTabsInput>
  }

  export type GuideUpdateWithoutTabsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutGuideNestedInput
  }

  export type GuideUncheckedUpdateWithoutTabsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideSectionUpsertWithWhereUniqueWithoutTabInput = {
    where: GuideSectionWhereUniqueInput
    update: XOR<GuideSectionUpdateWithoutTabInput, GuideSectionUncheckedUpdateWithoutTabInput>
    create: XOR<GuideSectionCreateWithoutTabInput, GuideSectionUncheckedCreateWithoutTabInput>
  }

  export type GuideSectionUpdateWithWhereUniqueWithoutTabInput = {
    where: GuideSectionWhereUniqueInput
    data: XOR<GuideSectionUpdateWithoutTabInput, GuideSectionUncheckedUpdateWithoutTabInput>
  }

  export type GuideSectionUpdateManyWithWhereWithoutTabInput = {
    where: GuideSectionScalarWhereInput
    data: XOR<GuideSectionUpdateManyMutationInput, GuideSectionUncheckedUpdateManyWithoutTabInput>
  }

  export type GuideSectionScalarWhereInput = {
    AND?: GuideSectionScalarWhereInput | GuideSectionScalarWhereInput[]
    OR?: GuideSectionScalarWhereInput[]
    NOT?: GuideSectionScalarWhereInput | GuideSectionScalarWhereInput[]
    id?: StringFilter<"GuideSection"> | string
    tabId?: StringFilter<"GuideSection"> | string
    slug?: StringFilter<"GuideSection"> | string
    title?: StringFilter<"GuideSection"> | string
    subtitle?: StringFilter<"GuideSection"> | string
    imageUrl?: StringFilter<"GuideSection"> | string
    imageAlt?: StringFilter<"GuideSection"> | string
    position?: IntFilter<"GuideSection"> | number
    semanticKey?: StringNullableFilter<"GuideSection"> | string | null
    createdAt?: DateTimeFilter<"GuideSection"> | Date | string
    updatedAt?: DateTimeFilter<"GuideSection"> | Date | string
  }

  export type GuideTableUpsertWithWhereUniqueWithoutTabInput = {
    where: GuideTableWhereUniqueInput
    update: XOR<GuideTableUpdateWithoutTabInput, GuideTableUncheckedUpdateWithoutTabInput>
    create: XOR<GuideTableCreateWithoutTabInput, GuideTableUncheckedCreateWithoutTabInput>
  }

  export type GuideTableUpdateWithWhereUniqueWithoutTabInput = {
    where: GuideTableWhereUniqueInput
    data: XOR<GuideTableUpdateWithoutTabInput, GuideTableUncheckedUpdateWithoutTabInput>
  }

  export type GuideTableUpdateManyWithWhereWithoutTabInput = {
    where: GuideTableScalarWhereInput
    data: XOR<GuideTableUpdateManyMutationInput, GuideTableUncheckedUpdateManyWithoutTabInput>
  }

  export type GuideTableScalarWhereInput = {
    AND?: GuideTableScalarWhereInput | GuideTableScalarWhereInput[]
    OR?: GuideTableScalarWhereInput[]
    NOT?: GuideTableScalarWhereInput | GuideTableScalarWhereInput[]
    id?: StringFilter<"GuideTable"> | string
    tabId?: StringFilter<"GuideTable"> | string
    slug?: StringFilter<"GuideTable"> | string
    title?: StringFilter<"GuideTable"> | string
    columns?: JsonFilter<"GuideTable">
    position?: IntFilter<"GuideTable"> | number
    sectionSlug?: StringNullableFilter<"GuideTable"> | string | null
    semanticKey?: StringNullableFilter<"GuideTable"> | string | null
    createdAt?: DateTimeFilter<"GuideTable"> | Date | string
    updatedAt?: DateTimeFilter<"GuideTable"> | Date | string
  }

  export type GuideClassificationUpsertWithWhereUniqueWithoutTabInput = {
    where: GuideClassificationWhereUniqueInput
    update: XOR<GuideClassificationUpdateWithoutTabInput, GuideClassificationUncheckedUpdateWithoutTabInput>
    create: XOR<GuideClassificationCreateWithoutTabInput, GuideClassificationUncheckedCreateWithoutTabInput>
  }

  export type GuideClassificationUpdateWithWhereUniqueWithoutTabInput = {
    where: GuideClassificationWhereUniqueInput
    data: XOR<GuideClassificationUpdateWithoutTabInput, GuideClassificationUncheckedUpdateWithoutTabInput>
  }

  export type GuideClassificationUpdateManyWithWhereWithoutTabInput = {
    where: GuideClassificationScalarWhereInput
    data: XOR<GuideClassificationUpdateManyMutationInput, GuideClassificationUncheckedUpdateManyWithoutTabInput>
  }

  export type GuideClassificationScalarWhereInput = {
    AND?: GuideClassificationScalarWhereInput | GuideClassificationScalarWhereInput[]
    OR?: GuideClassificationScalarWhereInput[]
    NOT?: GuideClassificationScalarWhereInput | GuideClassificationScalarWhereInput[]
    id?: StringFilter<"GuideClassification"> | string
    tabId?: StringFilter<"GuideClassification"> | string
    slug?: StringFilter<"GuideClassification"> | string
    subtitle?: StringFilter<"GuideClassification"> | string
    body?: StringFilter<"GuideClassification"> | string
    imageUrl?: StringFilter<"GuideClassification"> | string
    imageAlt?: StringFilter<"GuideClassification"> | string
    position?: IntFilter<"GuideClassification"> | number
    semanticKey?: StringNullableFilter<"GuideClassification"> | string | null
    createdAt?: DateTimeFilter<"GuideClassification"> | Date | string
    updatedAt?: DateTimeFilter<"GuideClassification"> | Date | string
  }

  export type GuideTabCreateWithoutClassificationsInput = {
    id?: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutTabsInput
    sections?: GuideSectionCreateNestedManyWithoutTabInput
    tables?: GuideTableCreateNestedManyWithoutTabInput
  }

  export type GuideTabUncheckedCreateWithoutClassificationsInput = {
    id?: string
    guideId: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: GuideSectionUncheckedCreateNestedManyWithoutTabInput
    tables?: GuideTableUncheckedCreateNestedManyWithoutTabInput
  }

  export type GuideTabCreateOrConnectWithoutClassificationsInput = {
    where: GuideTabWhereUniqueInput
    create: XOR<GuideTabCreateWithoutClassificationsInput, GuideTabUncheckedCreateWithoutClassificationsInput>
  }

  export type GuideTabUpsertWithoutClassificationsInput = {
    update: XOR<GuideTabUpdateWithoutClassificationsInput, GuideTabUncheckedUpdateWithoutClassificationsInput>
    create: XOR<GuideTabCreateWithoutClassificationsInput, GuideTabUncheckedCreateWithoutClassificationsInput>
    where?: GuideTabWhereInput
  }

  export type GuideTabUpdateToOneWithWhereWithoutClassificationsInput = {
    where?: GuideTabWhereInput
    data: XOR<GuideTabUpdateWithoutClassificationsInput, GuideTabUncheckedUpdateWithoutClassificationsInput>
  }

  export type GuideTabUpdateWithoutClassificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutTabsNestedInput
    sections?: GuideSectionUpdateManyWithoutTabNestedInput
    tables?: GuideTableUpdateManyWithoutTabNestedInput
  }

  export type GuideTabUncheckedUpdateWithoutClassificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guideId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: GuideSectionUncheckedUpdateManyWithoutTabNestedInput
    tables?: GuideTableUncheckedUpdateManyWithoutTabNestedInput
  }

  export type GuideTabCreateWithoutSectionsInput = {
    id?: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutTabsInput
    tables?: GuideTableCreateNestedManyWithoutTabInput
    classifications?: GuideClassificationCreateNestedManyWithoutTabInput
  }

  export type GuideTabUncheckedCreateWithoutSectionsInput = {
    id?: string
    guideId: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: GuideTableUncheckedCreateNestedManyWithoutTabInput
    classifications?: GuideClassificationUncheckedCreateNestedManyWithoutTabInput
  }

  export type GuideTabCreateOrConnectWithoutSectionsInput = {
    where: GuideTabWhereUniqueInput
    create: XOR<GuideTabCreateWithoutSectionsInput, GuideTabUncheckedCreateWithoutSectionsInput>
  }

  export type GuideParagraphCreateWithoutSectionInput = {
    id?: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideParagraphUncheckedCreateWithoutSectionInput = {
    id?: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideParagraphCreateOrConnectWithoutSectionInput = {
    where: GuideParagraphWhereUniqueInput
    create: XOR<GuideParagraphCreateWithoutSectionInput, GuideParagraphUncheckedCreateWithoutSectionInput>
  }

  export type GuideParagraphCreateManySectionInputEnvelope = {
    data: GuideParagraphCreateManySectionInput | GuideParagraphCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type GuideTabUpsertWithoutSectionsInput = {
    update: XOR<GuideTabUpdateWithoutSectionsInput, GuideTabUncheckedUpdateWithoutSectionsInput>
    create: XOR<GuideTabCreateWithoutSectionsInput, GuideTabUncheckedCreateWithoutSectionsInput>
    where?: GuideTabWhereInput
  }

  export type GuideTabUpdateToOneWithWhereWithoutSectionsInput = {
    where?: GuideTabWhereInput
    data: XOR<GuideTabUpdateWithoutSectionsInput, GuideTabUncheckedUpdateWithoutSectionsInput>
  }

  export type GuideTabUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutTabsNestedInput
    tables?: GuideTableUpdateManyWithoutTabNestedInput
    classifications?: GuideClassificationUpdateManyWithoutTabNestedInput
  }

  export type GuideTabUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guideId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: GuideTableUncheckedUpdateManyWithoutTabNestedInput
    classifications?: GuideClassificationUncheckedUpdateManyWithoutTabNestedInput
  }

  export type GuideParagraphUpsertWithWhereUniqueWithoutSectionInput = {
    where: GuideParagraphWhereUniqueInput
    update: XOR<GuideParagraphUpdateWithoutSectionInput, GuideParagraphUncheckedUpdateWithoutSectionInput>
    create: XOR<GuideParagraphCreateWithoutSectionInput, GuideParagraphUncheckedCreateWithoutSectionInput>
  }

  export type GuideParagraphUpdateWithWhereUniqueWithoutSectionInput = {
    where: GuideParagraphWhereUniqueInput
    data: XOR<GuideParagraphUpdateWithoutSectionInput, GuideParagraphUncheckedUpdateWithoutSectionInput>
  }

  export type GuideParagraphUpdateManyWithWhereWithoutSectionInput = {
    where: GuideParagraphScalarWhereInput
    data: XOR<GuideParagraphUpdateManyMutationInput, GuideParagraphUncheckedUpdateManyWithoutSectionInput>
  }

  export type GuideParagraphScalarWhereInput = {
    AND?: GuideParagraphScalarWhereInput | GuideParagraphScalarWhereInput[]
    OR?: GuideParagraphScalarWhereInput[]
    NOT?: GuideParagraphScalarWhereInput | GuideParagraphScalarWhereInput[]
    id?: StringFilter<"GuideParagraph"> | string
    sectionId?: StringFilter<"GuideParagraph"> | string
    content?: StringFilter<"GuideParagraph"> | string
    position?: IntFilter<"GuideParagraph"> | number
    createdAt?: DateTimeFilter<"GuideParagraph"> | Date | string
    updatedAt?: DateTimeFilter<"GuideParagraph"> | Date | string
  }

  export type GuideSectionCreateWithoutParagraphsInput = {
    id?: string
    slug: string
    title: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tab: GuideTabCreateNestedOneWithoutSectionsInput
  }

  export type GuideSectionUncheckedCreateWithoutParagraphsInput = {
    id?: string
    tabId: string
    slug: string
    title: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideSectionCreateOrConnectWithoutParagraphsInput = {
    where: GuideSectionWhereUniqueInput
    create: XOR<GuideSectionCreateWithoutParagraphsInput, GuideSectionUncheckedCreateWithoutParagraphsInput>
  }

  export type GuideSectionUpsertWithoutParagraphsInput = {
    update: XOR<GuideSectionUpdateWithoutParagraphsInput, GuideSectionUncheckedUpdateWithoutParagraphsInput>
    create: XOR<GuideSectionCreateWithoutParagraphsInput, GuideSectionUncheckedCreateWithoutParagraphsInput>
    where?: GuideSectionWhereInput
  }

  export type GuideSectionUpdateToOneWithWhereWithoutParagraphsInput = {
    where?: GuideSectionWhereInput
    data: XOR<GuideSectionUpdateWithoutParagraphsInput, GuideSectionUncheckedUpdateWithoutParagraphsInput>
  }

  export type GuideSectionUpdateWithoutParagraphsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tab?: GuideTabUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type GuideSectionUncheckedUpdateWithoutParagraphsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTabCreateWithoutTablesInput = {
    id?: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutTabsInput
    sections?: GuideSectionCreateNestedManyWithoutTabInput
    classifications?: GuideClassificationCreateNestedManyWithoutTabInput
  }

  export type GuideTabUncheckedCreateWithoutTablesInput = {
    id?: string
    guideId: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: GuideSectionUncheckedCreateNestedManyWithoutTabInput
    classifications?: GuideClassificationUncheckedCreateNestedManyWithoutTabInput
  }

  export type GuideTabCreateOrConnectWithoutTablesInput = {
    where: GuideTabWhereUniqueInput
    create: XOR<GuideTabCreateWithoutTablesInput, GuideTabUncheckedCreateWithoutTablesInput>
  }

  export type GuideTableRowCreateWithoutTableInput = {
    id?: string
    term: string
    composition?: string | null
    objective?: string | null
    description?: string | null
    reference?: string | null
    abv?: string | null
    imageUrl?: string | null
    imageAlt?: string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideTableRowUncheckedCreateWithoutTableInput = {
    id?: string
    term: string
    composition?: string | null
    objective?: string | null
    description?: string | null
    reference?: string | null
    abv?: string | null
    imageUrl?: string | null
    imageAlt?: string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideTableRowCreateOrConnectWithoutTableInput = {
    where: GuideTableRowWhereUniqueInput
    create: XOR<GuideTableRowCreateWithoutTableInput, GuideTableRowUncheckedCreateWithoutTableInput>
  }

  export type GuideTableRowCreateManyTableInputEnvelope = {
    data: GuideTableRowCreateManyTableInput | GuideTableRowCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type GuideTabUpsertWithoutTablesInput = {
    update: XOR<GuideTabUpdateWithoutTablesInput, GuideTabUncheckedUpdateWithoutTablesInput>
    create: XOR<GuideTabCreateWithoutTablesInput, GuideTabUncheckedCreateWithoutTablesInput>
    where?: GuideTabWhereInput
  }

  export type GuideTabUpdateToOneWithWhereWithoutTablesInput = {
    where?: GuideTabWhereInput
    data: XOR<GuideTabUpdateWithoutTablesInput, GuideTabUncheckedUpdateWithoutTablesInput>
  }

  export type GuideTabUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutTabsNestedInput
    sections?: GuideSectionUpdateManyWithoutTabNestedInput
    classifications?: GuideClassificationUpdateManyWithoutTabNestedInput
  }

  export type GuideTabUncheckedUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    guideId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: GuideSectionUncheckedUpdateManyWithoutTabNestedInput
    classifications?: GuideClassificationUncheckedUpdateManyWithoutTabNestedInput
  }

  export type GuideTableRowUpsertWithWhereUniqueWithoutTableInput = {
    where: GuideTableRowWhereUniqueInput
    update: XOR<GuideTableRowUpdateWithoutTableInput, GuideTableRowUncheckedUpdateWithoutTableInput>
    create: XOR<GuideTableRowCreateWithoutTableInput, GuideTableRowUncheckedCreateWithoutTableInput>
  }

  export type GuideTableRowUpdateWithWhereUniqueWithoutTableInput = {
    where: GuideTableRowWhereUniqueInput
    data: XOR<GuideTableRowUpdateWithoutTableInput, GuideTableRowUncheckedUpdateWithoutTableInput>
  }

  export type GuideTableRowUpdateManyWithWhereWithoutTableInput = {
    where: GuideTableRowScalarWhereInput
    data: XOR<GuideTableRowUpdateManyMutationInput, GuideTableRowUncheckedUpdateManyWithoutTableInput>
  }

  export type GuideTableRowScalarWhereInput = {
    AND?: GuideTableRowScalarWhereInput | GuideTableRowScalarWhereInput[]
    OR?: GuideTableRowScalarWhereInput[]
    NOT?: GuideTableRowScalarWhereInput | GuideTableRowScalarWhereInput[]
    id?: StringFilter<"GuideTableRow"> | string
    tableId?: StringFilter<"GuideTableRow"> | string
    term?: StringFilter<"GuideTableRow"> | string
    composition?: StringNullableFilter<"GuideTableRow"> | string | null
    objective?: StringNullableFilter<"GuideTableRow"> | string | null
    description?: StringNullableFilter<"GuideTableRow"> | string | null
    reference?: StringNullableFilter<"GuideTableRow"> | string | null
    abv?: StringNullableFilter<"GuideTableRow"> | string | null
    imageUrl?: StringNullableFilter<"GuideTableRow"> | string | null
    imageAlt?: StringNullableFilter<"GuideTableRow"> | string | null
    position?: IntFilter<"GuideTableRow"> | number
    createdAt?: DateTimeFilter<"GuideTableRow"> | Date | string
    updatedAt?: DateTimeFilter<"GuideTableRow"> | Date | string
  }

  export type GuideTableCreateWithoutRowsInput = {
    id?: string
    slug: string
    title: string
    columns: JsonNullValueInput | InputJsonValue
    position: number
    sectionSlug?: string | null
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tab: GuideTabCreateNestedOneWithoutTablesInput
  }

  export type GuideTableUncheckedCreateWithoutRowsInput = {
    id?: string
    tabId: string
    slug: string
    title: string
    columns: JsonNullValueInput | InputJsonValue
    position: number
    sectionSlug?: string | null
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideTableCreateOrConnectWithoutRowsInput = {
    where: GuideTableWhereUniqueInput
    create: XOR<GuideTableCreateWithoutRowsInput, GuideTableUncheckedCreateWithoutRowsInput>
  }

  export type GuideTableUpsertWithoutRowsInput = {
    update: XOR<GuideTableUpdateWithoutRowsInput, GuideTableUncheckedUpdateWithoutRowsInput>
    create: XOR<GuideTableCreateWithoutRowsInput, GuideTableUncheckedCreateWithoutRowsInput>
    where?: GuideTableWhereInput
  }

  export type GuideTableUpdateToOneWithWhereWithoutRowsInput = {
    where?: GuideTableWhereInput
    data: XOR<GuideTableUpdateWithoutRowsInput, GuideTableUncheckedUpdateWithoutRowsInput>
  }

  export type GuideTableUpdateWithoutRowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columns?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    sectionSlug?: NullableStringFieldUpdateOperationsInput | string | null
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tab?: GuideTabUpdateOneRequiredWithoutTablesNestedInput
  }

  export type GuideTableUncheckedUpdateWithoutRowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columns?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    sectionSlug?: NullableStringFieldUpdateOperationsInput | string | null
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryDetailCreateWithoutGlossaryItemInput = {
    id?: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlossaryDetailUncheckedCreateWithoutGlossaryItemInput = {
    id?: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlossaryDetailCreateOrConnectWithoutGlossaryItemInput = {
    where: GlossaryDetailWhereUniqueInput
    create: XOR<GlossaryDetailCreateWithoutGlossaryItemInput, GlossaryDetailUncheckedCreateWithoutGlossaryItemInput>
  }

  export type GlossaryDetailCreateManyGlossaryItemInputEnvelope = {
    data: GlossaryDetailCreateManyGlossaryItemInput | GlossaryDetailCreateManyGlossaryItemInput[]
    skipDuplicates?: boolean
  }

  export type GlossaryItemCategoryCreateWithoutGlossaryItemInput = {
    position: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutGlossaryLinksInput
  }

  export type GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput = {
    categoryId: string
    position: number
    createdAt?: Date | string
  }

  export type GlossaryItemCategoryCreateOrConnectWithoutGlossaryItemInput = {
    where: GlossaryItemCategoryWhereUniqueInput
    create: XOR<GlossaryItemCategoryCreateWithoutGlossaryItemInput, GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput>
  }

  export type GlossaryItemCategoryCreateManyGlossaryItemInputEnvelope = {
    data: GlossaryItemCategoryCreateManyGlossaryItemInput | GlossaryItemCategoryCreateManyGlossaryItemInput[]
    skipDuplicates?: boolean
  }

  export type GlossaryDetailUpsertWithWhereUniqueWithoutGlossaryItemInput = {
    where: GlossaryDetailWhereUniqueInput
    update: XOR<GlossaryDetailUpdateWithoutGlossaryItemInput, GlossaryDetailUncheckedUpdateWithoutGlossaryItemInput>
    create: XOR<GlossaryDetailCreateWithoutGlossaryItemInput, GlossaryDetailUncheckedCreateWithoutGlossaryItemInput>
  }

  export type GlossaryDetailUpdateWithWhereUniqueWithoutGlossaryItemInput = {
    where: GlossaryDetailWhereUniqueInput
    data: XOR<GlossaryDetailUpdateWithoutGlossaryItemInput, GlossaryDetailUncheckedUpdateWithoutGlossaryItemInput>
  }

  export type GlossaryDetailUpdateManyWithWhereWithoutGlossaryItemInput = {
    where: GlossaryDetailScalarWhereInput
    data: XOR<GlossaryDetailUpdateManyMutationInput, GlossaryDetailUncheckedUpdateManyWithoutGlossaryItemInput>
  }

  export type GlossaryDetailScalarWhereInput = {
    AND?: GlossaryDetailScalarWhereInput | GlossaryDetailScalarWhereInput[]
    OR?: GlossaryDetailScalarWhereInput[]
    NOT?: GlossaryDetailScalarWhereInput | GlossaryDetailScalarWhereInput[]
    id?: StringFilter<"GlossaryDetail"> | string
    glossaryItemId?: StringFilter<"GlossaryDetail"> | string
    content?: StringFilter<"GlossaryDetail"> | string
    position?: IntFilter<"GlossaryDetail"> | number
    createdAt?: DateTimeFilter<"GlossaryDetail"> | Date | string
    updatedAt?: DateTimeFilter<"GlossaryDetail"> | Date | string
  }

  export type GlossaryItemCategoryUpsertWithWhereUniqueWithoutGlossaryItemInput = {
    where: GlossaryItemCategoryWhereUniqueInput
    update: XOR<GlossaryItemCategoryUpdateWithoutGlossaryItemInput, GlossaryItemCategoryUncheckedUpdateWithoutGlossaryItemInput>
    create: XOR<GlossaryItemCategoryCreateWithoutGlossaryItemInput, GlossaryItemCategoryUncheckedCreateWithoutGlossaryItemInput>
  }

  export type GlossaryItemCategoryUpdateWithWhereUniqueWithoutGlossaryItemInput = {
    where: GlossaryItemCategoryWhereUniqueInput
    data: XOR<GlossaryItemCategoryUpdateWithoutGlossaryItemInput, GlossaryItemCategoryUncheckedUpdateWithoutGlossaryItemInput>
  }

  export type GlossaryItemCategoryUpdateManyWithWhereWithoutGlossaryItemInput = {
    where: GlossaryItemCategoryScalarWhereInput
    data: XOR<GlossaryItemCategoryUpdateManyMutationInput, GlossaryItemCategoryUncheckedUpdateManyWithoutGlossaryItemInput>
  }

  export type GlossaryItemCreateWithoutDetailsInput = {
    id?: string
    slug: string
    term: string
    shortDefinition: string
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedCategories?: GlossaryItemCategoryCreateNestedManyWithoutGlossaryItemInput
  }

  export type GlossaryItemUncheckedCreateWithoutDetailsInput = {
    id?: string
    slug: string
    term: string
    shortDefinition: string
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedCategories?: GlossaryItemCategoryUncheckedCreateNestedManyWithoutGlossaryItemInput
  }

  export type GlossaryItemCreateOrConnectWithoutDetailsInput = {
    where: GlossaryItemWhereUniqueInput
    create: XOR<GlossaryItemCreateWithoutDetailsInput, GlossaryItemUncheckedCreateWithoutDetailsInput>
  }

  export type GlossaryItemUpsertWithoutDetailsInput = {
    update: XOR<GlossaryItemUpdateWithoutDetailsInput, GlossaryItemUncheckedUpdateWithoutDetailsInput>
    create: XOR<GlossaryItemCreateWithoutDetailsInput, GlossaryItemUncheckedCreateWithoutDetailsInput>
    where?: GlossaryItemWhereInput
  }

  export type GlossaryItemUpdateToOneWithWhereWithoutDetailsInput = {
    where?: GlossaryItemWhereInput
    data: XOR<GlossaryItemUpdateWithoutDetailsInput, GlossaryItemUncheckedUpdateWithoutDetailsInput>
  }

  export type GlossaryItemUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    shortDefinition?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedCategories?: GlossaryItemCategoryUpdateManyWithoutGlossaryItemNestedInput
  }

  export type GlossaryItemUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    shortDefinition?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedCategories?: GlossaryItemCategoryUncheckedUpdateManyWithoutGlossaryItemNestedInput
  }

  export type GlossaryItemCreateWithoutRelatedCategoriesInput = {
    id?: string
    slug: string
    term: string
    shortDefinition: string
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: GlossaryDetailCreateNestedManyWithoutGlossaryItemInput
  }

  export type GlossaryItemUncheckedCreateWithoutRelatedCategoriesInput = {
    id?: string
    slug: string
    term: string
    shortDefinition: string
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: GlossaryDetailUncheckedCreateNestedManyWithoutGlossaryItemInput
  }

  export type GlossaryItemCreateOrConnectWithoutRelatedCategoriesInput = {
    where: GlossaryItemWhereUniqueInput
    create: XOR<GlossaryItemCreateWithoutRelatedCategoriesInput, GlossaryItemUncheckedCreateWithoutRelatedCategoriesInput>
  }

  export type CategoryCreateWithoutGlossaryLinksInput = {
    id?: string
    slug: string
    position: number
    title: string
    summary: string
    abv: string
    origin: string
    imageUrl: string
    imageAlt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideCreateNestedOneWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutGlossaryLinksInput = {
    id?: string
    slug: string
    position: number
    title: string
    summary: string
    abv: string
    origin: string
    imageUrl: string
    imageAlt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideUncheckedCreateNestedOneWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutGlossaryLinksInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutGlossaryLinksInput, CategoryUncheckedCreateWithoutGlossaryLinksInput>
  }

  export type GlossaryItemUpsertWithoutRelatedCategoriesInput = {
    update: XOR<GlossaryItemUpdateWithoutRelatedCategoriesInput, GlossaryItemUncheckedUpdateWithoutRelatedCategoriesInput>
    create: XOR<GlossaryItemCreateWithoutRelatedCategoriesInput, GlossaryItemUncheckedCreateWithoutRelatedCategoriesInput>
    where?: GlossaryItemWhereInput
  }

  export type GlossaryItemUpdateToOneWithWhereWithoutRelatedCategoriesInput = {
    where?: GlossaryItemWhereInput
    data: XOR<GlossaryItemUpdateWithoutRelatedCategoriesInput, GlossaryItemUncheckedUpdateWithoutRelatedCategoriesInput>
  }

  export type GlossaryItemUpdateWithoutRelatedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    shortDefinition?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: GlossaryDetailUpdateManyWithoutGlossaryItemNestedInput
  }

  export type GlossaryItemUncheckedUpdateWithoutRelatedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    shortDefinition?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: GlossaryDetailUncheckedUpdateManyWithoutGlossaryItemNestedInput
  }

  export type CategoryUpsertWithoutGlossaryLinksInput = {
    update: XOR<CategoryUpdateWithoutGlossaryLinksInput, CategoryUncheckedUpdateWithoutGlossaryLinksInput>
    create: XOR<CategoryCreateWithoutGlossaryLinksInput, CategoryUncheckedCreateWithoutGlossaryLinksInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutGlossaryLinksInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutGlossaryLinksInput, CategoryUncheckedUpdateWithoutGlossaryLinksInput>
  }

  export type CategoryUpdateWithoutGlossaryLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    abv?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutGlossaryLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    abv?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUncheckedUpdateOneWithoutCategoryNestedInput
  }

  export type GlossaryItemCategoryCreateManyCategoryInput = {
    glossaryItemId: string
    position: number
    createdAt?: Date | string
  }

  export type GlossaryItemCategoryUpdateWithoutCategoryInput = {
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    glossaryItem?: GlossaryItemUpdateOneRequiredWithoutRelatedCategoriesNestedInput
  }

  export type GlossaryItemCategoryUncheckedUpdateWithoutCategoryInput = {
    glossaryItemId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryItemCategoryUncheckedUpdateManyWithoutCategoryInput = {
    glossaryItemId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTabCreateManyGuideInput = {
    id?: string
    slug: string
    label: string
    panelTitle?: string | null
    noteTitle?: string | null
    noteContent?: string | null
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideTabUpdateWithoutGuideInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: GuideSectionUpdateManyWithoutTabNestedInput
    tables?: GuideTableUpdateManyWithoutTabNestedInput
    classifications?: GuideClassificationUpdateManyWithoutTabNestedInput
  }

  export type GuideTabUncheckedUpdateWithoutGuideInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: GuideSectionUncheckedUpdateManyWithoutTabNestedInput
    tables?: GuideTableUncheckedUpdateManyWithoutTabNestedInput
    classifications?: GuideClassificationUncheckedUpdateManyWithoutTabNestedInput
  }

  export type GuideTabUncheckedUpdateManyWithoutGuideInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    panelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    noteContent?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideSectionCreateManyTabInput = {
    id?: string
    slug: string
    title: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideTableCreateManyTabInput = {
    id?: string
    slug: string
    title: string
    columns: JsonNullValueInput | InputJsonValue
    position: number
    sectionSlug?: string | null
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideClassificationCreateManyTabInput = {
    id?: string
    slug: string
    subtitle?: string
    body: string
    imageUrl?: string
    imageAlt?: string
    position: number
    semanticKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideSectionUpdateWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paragraphs?: GuideParagraphUpdateManyWithoutSectionNestedInput
  }

  export type GuideSectionUncheckedUpdateWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paragraphs?: GuideParagraphUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type GuideSectionUncheckedUpdateManyWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTableUpdateWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columns?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    sectionSlug?: NullableStringFieldUpdateOperationsInput | string | null
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: GuideTableRowUpdateManyWithoutTableNestedInput
  }

  export type GuideTableUncheckedUpdateWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columns?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    sectionSlug?: NullableStringFieldUpdateOperationsInput | string | null
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: GuideTableRowUncheckedUpdateManyWithoutTableNestedInput
  }

  export type GuideTableUncheckedUpdateManyWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    columns?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    sectionSlug?: NullableStringFieldUpdateOperationsInput | string | null
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideClassificationUpdateWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideClassificationUncheckedUpdateWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideClassificationUncheckedUpdateManyWithoutTabInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    semanticKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideParagraphCreateManySectionInput = {
    id?: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideParagraphUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideParagraphUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideParagraphUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTableRowCreateManyTableInput = {
    id?: string
    term: string
    composition?: string | null
    objective?: string | null
    description?: string | null
    reference?: string | null
    abv?: string | null
    imageUrl?: string | null
    imageAlt?: string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideTableRowUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    composition?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    abv?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTableRowUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    composition?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    abv?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideTableRowUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    composition?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    abv?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryDetailCreateManyGlossaryItemInput = {
    id?: string
    content: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlossaryItemCategoryCreateManyGlossaryItemInput = {
    categoryId: string
    position: number
    createdAt?: Date | string
  }

  export type GlossaryDetailUpdateWithoutGlossaryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryDetailUncheckedUpdateWithoutGlossaryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryDetailUncheckedUpdateManyWithoutGlossaryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryItemCategoryUpdateWithoutGlossaryItemInput = {
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutGlossaryLinksNestedInput
  }

  export type GlossaryItemCategoryUncheckedUpdateWithoutGlossaryItemInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlossaryItemCategoryUncheckedUpdateManyWithoutGlossaryItemInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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