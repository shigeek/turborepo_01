import { Field, Int, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class Task {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  @Field(() => Int)
  id: number;

  @Field({})
  name: string;
}
