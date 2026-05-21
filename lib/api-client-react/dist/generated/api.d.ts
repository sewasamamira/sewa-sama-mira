import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { Equipment, EquipmentInput, EquipmentUpdate, HealthStatus, Rental, RentalInput, RentalStats, RentalUpdate } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListRentalsUrl: () => string;
/**
 * @summary List all rentals
 */
export declare const listRentals: (options?: RequestInit) => Promise<Rental[]>;
export declare const getListRentalsQueryKey: () => readonly ["/api/rentals"];
export declare const getListRentalsQueryOptions: <TData = Awaited<ReturnType<typeof listRentals>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRentals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listRentals>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListRentalsQueryResult = NonNullable<Awaited<ReturnType<typeof listRentals>>>;
export type ListRentalsQueryError = ErrorType<unknown>;
/**
 * @summary List all rentals
 */
export declare function useListRentals<TData = Awaited<ReturnType<typeof listRentals>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRentals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateRentalUrl: () => string;
/**
 * @summary Create a new rental
 */
export declare const createRental: (rentalInput: RentalInput, options?: RequestInit) => Promise<Rental>;
export declare const getCreateRentalMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createRental>>, TError, {
        data: BodyType<RentalInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createRental>>, TError, {
    data: BodyType<RentalInput>;
}, TContext>;
export type CreateRentalMutationResult = NonNullable<Awaited<ReturnType<typeof createRental>>>;
export type CreateRentalMutationBody = BodyType<RentalInput>;
export type CreateRentalMutationError = ErrorType<void>;
/**
* @summary Create a new rental
*/
export declare const useCreateRental: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createRental>>, TError, {
        data: BodyType<RentalInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createRental>>, TError, {
    data: BodyType<RentalInput>;
}, TContext>;
export declare const getGetRentalUrl: (id: number) => string;
/**
 * @summary Get a rental by ID
 */
export declare const getRental: (id: number, options?: RequestInit) => Promise<Rental>;
export declare const getGetRentalQueryKey: (id: number) => readonly [`/api/rentals/${number}`];
export declare const getGetRentalQueryOptions: <TData = Awaited<ReturnType<typeof getRental>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRental>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRental>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRentalQueryResult = NonNullable<Awaited<ReturnType<typeof getRental>>>;
export type GetRentalQueryError = ErrorType<void>;
/**
 * @summary Get a rental by ID
 */
export declare function useGetRental<TData = Awaited<ReturnType<typeof getRental>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRental>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateRentalUrl: (id: number) => string;
/**
 * @summary Update a rental
 */
export declare const updateRental: (id: number, rentalUpdate: RentalUpdate, options?: RequestInit) => Promise<Rental>;
export declare const getUpdateRentalMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateRental>>, TError, {
        id: number;
        data: BodyType<RentalUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateRental>>, TError, {
    id: number;
    data: BodyType<RentalUpdate>;
}, TContext>;
export type UpdateRentalMutationResult = NonNullable<Awaited<ReturnType<typeof updateRental>>>;
export type UpdateRentalMutationBody = BodyType<RentalUpdate>;
export type UpdateRentalMutationError = ErrorType<void>;
/**
* @summary Update a rental
*/
export declare const useUpdateRental: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateRental>>, TError, {
        id: number;
        data: BodyType<RentalUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateRental>>, TError, {
    id: number;
    data: BodyType<RentalUpdate>;
}, TContext>;
export declare const getDeleteRentalUrl: (id: number) => string;
/**
 * @summary Delete a rental
 */
export declare const deleteRental: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteRentalMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteRental>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteRental>>, TError, {
    id: number;
}, TContext>;
export type DeleteRentalMutationResult = NonNullable<Awaited<ReturnType<typeof deleteRental>>>;
export type DeleteRentalMutationError = ErrorType<void>;
/**
* @summary Delete a rental
*/
export declare const useDeleteRental: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteRental>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteRental>>, TError, {
    id: number;
}, TContext>;
export declare const getGetRentalStatsUrl: () => string;
/**
 * @summary Get rental statistics summary
 */
export declare const getRentalStats: (options?: RequestInit) => Promise<RentalStats>;
export declare const getGetRentalStatsQueryKey: () => readonly ["/api/rentals/stats/summary"];
export declare const getGetRentalStatsQueryOptions: <TData = Awaited<ReturnType<typeof getRentalStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRentalStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRentalStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRentalStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getRentalStats>>>;
export type GetRentalStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get rental statistics summary
 */
export declare function useGetRentalStats<TData = Awaited<ReturnType<typeof getRentalStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRentalStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListEquipmentUrl: () => string;
/**
 * @summary List all equipment
 */
export declare const listEquipment: (options?: RequestInit) => Promise<Equipment[]>;
export declare const getListEquipmentQueryKey: () => readonly ["/api/equipment"];
export declare const getListEquipmentQueryOptions: <TData = Awaited<ReturnType<typeof listEquipment>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEquipment>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listEquipment>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListEquipmentQueryResult = NonNullable<Awaited<ReturnType<typeof listEquipment>>>;
export type ListEquipmentQueryError = ErrorType<unknown>;
/**
 * @summary List all equipment
 */
export declare function useListEquipment<TData = Awaited<ReturnType<typeof listEquipment>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEquipment>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateEquipmentUrl: () => string;
/**
 * @summary Create equipment
 */
export declare const createEquipment: (equipmentInput: EquipmentInput, options?: RequestInit) => Promise<Equipment>;
export declare const getCreateEquipmentMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createEquipment>>, TError, {
        data: BodyType<EquipmentInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createEquipment>>, TError, {
    data: BodyType<EquipmentInput>;
}, TContext>;
export type CreateEquipmentMutationResult = NonNullable<Awaited<ReturnType<typeof createEquipment>>>;
export type CreateEquipmentMutationBody = BodyType<EquipmentInput>;
export type CreateEquipmentMutationError = ErrorType<unknown>;
/**
* @summary Create equipment
*/
export declare const useCreateEquipment: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createEquipment>>, TError, {
        data: BodyType<EquipmentInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createEquipment>>, TError, {
    data: BodyType<EquipmentInput>;
}, TContext>;
export declare const getGetEquipmentRentalsUrl: (id: number) => string;
/**
 * @summary Get rental history for a specific equipment
 */
export declare const getEquipmentRentals: (id: number, options?: RequestInit) => Promise<Rental[]>;
export declare const getGetEquipmentRentalsQueryKey: (id: number) => readonly [`/api/equipment/${number}/rentals`];
export declare const getGetEquipmentRentalsQueryOptions: <TData = Awaited<ReturnType<typeof getEquipmentRentals>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEquipmentRentals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getEquipmentRentals>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetEquipmentRentalsQueryResult = NonNullable<Awaited<ReturnType<typeof getEquipmentRentals>>>;
export type GetEquipmentRentalsQueryError = ErrorType<void>;
/**
 * @summary Get rental history for a specific equipment
 */
export declare function useGetEquipmentRentals<TData = Awaited<ReturnType<typeof getEquipmentRentals>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEquipmentRentals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateEquipmentUrl: (id: number) => string;
/**
 * @summary Update equipment
 */
export declare const updateEquipment: (id: number, equipmentUpdate: EquipmentUpdate, options?: RequestInit) => Promise<Equipment>;
export declare const getUpdateEquipmentMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateEquipment>>, TError, {
        id: number;
        data: BodyType<EquipmentUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateEquipment>>, TError, {
    id: number;
    data: BodyType<EquipmentUpdate>;
}, TContext>;
export type UpdateEquipmentMutationResult = NonNullable<Awaited<ReturnType<typeof updateEquipment>>>;
export type UpdateEquipmentMutationBody = BodyType<EquipmentUpdate>;
export type UpdateEquipmentMutationError = ErrorType<void>;
/**
* @summary Update equipment
*/
export declare const useUpdateEquipment: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateEquipment>>, TError, {
        id: number;
        data: BodyType<EquipmentUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateEquipment>>, TError, {
    id: number;
    data: BodyType<EquipmentUpdate>;
}, TContext>;
export declare const getDeleteEquipmentUrl: (id: number) => string;
/**
 * @summary Delete equipment
 */
export declare const deleteEquipment: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteEquipmentMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteEquipment>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteEquipment>>, TError, {
    id: number;
}, TContext>;
export type DeleteEquipmentMutationResult = NonNullable<Awaited<ReturnType<typeof deleteEquipment>>>;
export type DeleteEquipmentMutationError = ErrorType<void>;
/**
* @summary Delete equipment
*/
export declare const useDeleteEquipment: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteEquipment>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteEquipment>>, TError, {
    id: number;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map