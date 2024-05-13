import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'cat' })
export class Cat {
  @Field()
  id: number;

  @Field()
  name: string;
}
