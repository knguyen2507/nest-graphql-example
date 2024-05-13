import { Args, Query, Resolver } from '@nestjs/graphql';
import { Cat } from './models/cat.model';

@Resolver((of) => Cat)
export class CatResolver {
  @Query((returns) => Cat)
  async cat(@Args('id') id: number): Promise<Cat> {
    return {
      id: id,
      name: `cat ${id}`,
    };
  }
}
