import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppsResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
