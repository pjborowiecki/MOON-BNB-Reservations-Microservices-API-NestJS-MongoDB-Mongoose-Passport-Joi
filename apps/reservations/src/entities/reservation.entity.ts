import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

import { AbstractDocument } from '@app/shared/database/abstract.schema';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  userId: string;

  @Prop()
  invoiceId: string;

  @Prop()
  createdAt: Date;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
