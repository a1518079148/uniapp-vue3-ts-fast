type UnionToFunc<T> = T extends unknown ? (arg: T) => void : never
type UnionToIntersection<U> = UnionToFunc<U> extends (arg: infer Arg) => void ? Arg : never
type LastInUnion<U> = UnionToIntersection<UnionToFunc<U>> extends (x: infer L) => void ? L : never
declare type UnionToTuple<T, L = LastInUnion<T>> = [L] extends [never] ? [] : [...UnionToTuple<Exclude<T, L>>, L]

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false
declare type IndexOf<T extends unknown[], U extends unknown, Count extends 1[] = []> =
    T extends [infer First, ...infer Rest] ? (
        Equal<First, U> extends true ? Count['length'] : IndexOf<Rest, U, [...Count, 1]>
    ) : -1