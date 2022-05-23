import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ShortUrlClick {
  @Field({ nullable: false })
  shortUrlClickId: string = '';

  @Field({ nullable: false })
  shortUrlId: string = '';

  @Field({ nullable: false })
  code: string = '';

  @Field({ nullable: false })
  originalUrl: string = '';

  @Field({ nullable: true })
  createdAt?: Date;
}
