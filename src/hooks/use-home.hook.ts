import { HomeModel } from '@/models/home.model';
import { HomeService } from '@/services/home.service';
import { useQuery } from '@tanstack/react-query';

export function useHome() {
  const { data, isLoading } = useQuery<HomeModel[]>({
    queryKey: ['get-home'],
    queryFn: () => {
      return HomeService.getData();
    },
  });

  return { data, isLoading };
}
