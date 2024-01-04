import { ExecutionContext, createParamDecorator } from '@nestjs/common';

import { UserDocument } from '@app/shared/entities/user.entity';

const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_, context: ExecutionContext) => getCurrentUserByContext(context),
);
