import { useQuery } from '@tanstack/react-query'

import { FilterData } from '../api/types/FilterData/FilterData'

export const useGetFilterData = () => {
	const { isPending, error, data } = useQuery<FilterData>({
		queryKey: ['filterData'],
		queryFn: () => fetch('/filterData.json').then(res => res.json())
	})

	return { isPending, error, data }
}
