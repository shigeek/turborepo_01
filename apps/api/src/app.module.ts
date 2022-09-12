import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true, // prodではoffにする
      debug: true, // prodではoffにする
      autoSchemaFile: join(process.cwd(), '../graphql/schema.gql'), // MEMO: productionではschema自動生成はしない
      typePaths: undefined, // MEMO: productionでは生成済みのschemaを使う
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
