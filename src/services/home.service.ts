import { HomeModel } from '@/models/home.model';

export class HomeService {
  static async getData(): Promise<HomeModel[]> {
    return [
      {
        name: 'First Home Item',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.',
      },
      {
        name: 'Second Home Item',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.',
      },
    ];
  }
}
