import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ShortUrl {
  @Field({ nullable: false })
  shortUrlId: string = '';

  @Field({ nullable: false })
  code: string = '';

  @Field({ nullable: false })
  originalUrl: string = '';

  @Field({ nullable: false })
  url: string = '';

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
