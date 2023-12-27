import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

import { AbstractDocument } from '@app/shared/database/abstract.schema';

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
